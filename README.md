# Civic Data Assignment
_An assessment code-assignment._

## The Assignment:

> For this exercise please create a program that utilizes the Google's Civic Information API and Maplight's data api to output a data structure containing aggregations of campaign contributions(min, max, average, total) for each political party.

> Please provide test coverage and an example CICD file (e.g. Bash, Jenkins). You may use your preferred language.

> (note: please provide instructions on how to test your program.)

### Allowed API Resource Tools:

_Google Civic Api:_ https://developers.google.com/civic-information/

_MapLight:_ https://maplight.org/data/


### Discussion

So, I'm writing this after doing some initial work, prototyping and just trying to quickly implement the core functionality.  Now, the way this turned out, the APIs were not functioning as necessary for the completion of the task.  So, then the question became what to do about this situation.  This is an assignment/assessment.  Complaint and giving-up is an option, just to go back to them and say "look, it can't be done with the tools provided."

In real life work these things happen. A task may be assigned which is logically feasible, but some obstacle comes up in the implementation process which may be out of the range of our control. It's good to be timely in feedback, iterating over new tactics may yield quick way around the obstacle -- perhaps there is another API and/or data resource to leverage.

Conversely, decision makers may decide to abandon the project, perhaps temporarily.  In such a case, it may be valuable to fully document the procedures and results associated with what was essentially a prototype and experiment, and to provide mechanisms for reproducing these results (upto changes in API behavior).  This knowledge could be leveraged later on.

As such, I'm going to be doing a kind of laboratory-report here, along with the program to reproduce the relevant results.  At the same time I will go back to my colleagues and give them the option of iterating tactics / modifying the assignment and/or available tools.   

______________________________________________________________________


# 'Lab Report'

## Setup

The goal of the experiment is to implement the program as described above in the assignment description.

For starters lets limit ourselves to the goal of finding aggregate contributions to the biggest four political parties in America in 2020, or whatever recent timeline avails itself -- we'll see more on that in the Results section.

The tools:  We are using NodeJS in the Coffeescript dialect.  We are provided the two public APIs listed above.  Links to the documentation/reference below:

[Google Civic Information API Reference](https://developers.google.com/civic-information/docs/v2)

[MapLight Contribution Search API Documentation](https://maplight.org/data_guide/maplight-contribution-search-api/)


## Method / Procedure, Results
_(In this case, it is convenient to list the results alongside each corresponding step in the procedures.)_

We started by investigating the tools the APIs give us.

#### 1.  
Google's CI API has no information on contributions, only MapLight's API provides that.  We'll discuss CI more in a bit.

#### 2.  
According to the MapLight API spec, we should be able to get **all** contributions in the 2020 election cycle by hitting the `/fec/contributions` endpoint with a single query parameter `election_cycle=2020`.  However, this only returns 50 rows of data, woefully incomplete for our needs.  There is nothing in the API spec saying how to get complete results for this endpoint, nothing indicating there would be a limit to the response data, nothing indicating how we might chunk buffer or stream all of the relevant data step-wise.  These results can be reproduced (upto API behavior changes) by running the `main_maplight` function, and the downloaded data are written into files in the `diagnostic_data` directory for verification.

#### 3.
Since we are not allowed to simply pull all contribution data for a given election cycle, another tactic occurs to us:  If we can compile a list of all e.g. Democratic-Party candidates using (Google's) CI API, we should be able to use MapLight to get all the contributions for each candidate, and thereby aggregate a total intake of contributions to that party, and use the same technique for all the relevant parties.  CI provides endpoints for `Representatives`, `Elections`, and `Divisions` entities.  `Representatives` will not help because it only will list those currently in office, whereas we need all candidates receiving contributions, incumbents and challengers both.  `Divisions` only gives us primitive data for a geo-political unit, therefore it is not relevant.  With `Elections`, we should be able to get a list of candidates that we can transport to the MapLight endpoint hits for contribution queries by individual candidate, to be aggregated after going through all of them.  Our prospective method is to go through every relevant election and extract all candidates.  This may not give us truly accurate results for the total take of a party because some candidates receiving contributions may have already dropped out of a given race -- will they still be included in the API's query results?  Likely not, but what else are we given to work with here...
So anyway, we tried both of the `Elections` endpoints, and we got poor results:

```coffeescript
election_opts =
    uri: endpoints.google_api.elections.electionQuery
    qs:
        key: config.google_api_key

request election_opts, (err, res, body) ->
    c res.body
```

Produced:

```

{
 "kind": "civicinfo#electionsQueryResponse",
 "elections": [
  {
   "id": "2000",
   "name": "VIP Test Election",
   "electionDay": "2021-06-06",
   "ocdDivisionId": "ocd-division/country:us"
  },
  {
   "id": "4964",
   "name": "DC Presidential and State Primary Election",
   "electionDay": "2020-06-02",
   "ocdDivisionId": "ocd-division/country:us/district:dc"
  }
 ]
}

```

So, this endpoint on the `elections` entity is called `electionQuery`, and it takes no parameters whatsoever. It is supposed to produce a "list of available elections", but according to the API spec, there are no parameters, so shouldn't it logically be giving us a list of all elections globally, at every level?  Because the CI API is international in scope, so this is logically implicated.  Although CI spec mentions no query parameters, I tested it with the `address` parameter, it gives the same response as above.  

Okay so that's not helpful at all.

#### 4.  
So now, we are looking at defeat, but we can try some more approaches.  There is another endpoint on the `elections` entity called `voterInfoQuery` which requires an `address` parameter.  The response as indicated in the specification contains information about `contests` -- that is, elections -- and each of those `contest` objects contains a list of the candidates.  Our new prospective tactic is to then to compile a list of all candidates active in this election season, for all 3000+ counties in America, and then we transport this list into the MapLight requests to get our list of contributions, which we can organize as indicated.  We tried it for multiple different addresses to see what results we can get:

```coffeescript

voter_info_opts =
    uri: endpoints.google_api.elections.voterInfoQuery
    qs:
        key: config.google_api_key
        address: address2
        # electionId: 4964

request voter_info_opts, (err, res, body) ->
    c err
    c res.statusCode
    c body
```

Produces:

```
{
 "error": {
  "errors": [
   {
    "domain": "global",
    "reason": "invalid",
    "message": "Election unknown"
   }
  ],
  "code": 400,
  "message": "Election unknown"
 }
}
```

This is odd, because the API spec says that the only required parameter is `address`.  If we put in the WhiteHouse address we get the response seen in experimental-data/test-data1.txt.  In summary, the results are insufficient for our needs.  We do get a nominal list of contests, but these are woefully incomplete, candidates are listed as e.g. "CANDIDATE #1", and it appears the list of contests is not comprehensive at all, in fact, we're just getting some of the primaries.


#### 5.
Now even though that failed, we had hoped that with a comprehensive list of elections via the `electionQuery` endpoint, we would be able to query each election individually using the `voterInfoQuery` endpoint along with the `electionId` parameter, but the `electionQuery` endpoint does not give us a useful list of elections.  As seen above, we got only two contests, one primary and one apparent stub, a non-existing contest.  I repeat, the `electionQuery` endpoint (at least according to the documented specification) allows for no parameters, none.  


## Conclusion, Discussion

At this point, it would appear that our options are exhausted.  It would appear that these APIs are poorly constructed, poorly implemented, poorly documented.  They are incomplete.  This task as defined is not possible with the tools specified.

We could speculate on some redefinition of the goals which might be attainable with these APIs.  For example, we could memoize one address in each of the 3000+ counties in the USA, and compile a list of Representatives from each, eliminate duplicates, and then run those individually through the MapLight API to see their contributions, and aggregate those.  Some of those may not be running in this election cycle.  This would not give a clear picture of the total intake coming to the major parties in this election cycle.  It is germane to acknowledge the reality of politics in this country to the extent that it affects this project.  The reality is that transparency is a slogan, but obfuscation is the rule that protects vested interests, gravy-trains, etc.  Acknowledging this reality could help us to achieve our goal in the sense that we might recognize as potentially futile the project of using public and open sources to compile this information.  We could then turn to proprietary, paid, private data streams, or some other creative data-acquisition method to accomplish our goals.  Or, perhaps time would take care of the problems with these public APIs; Google CI and MapLight could choose to ramp up development on their respective APIs and associated documentation, or another provider could implement a better equivalent API.  As it stands, I am not impressed with these APIs, especially given how much resources Google/Alphabet has at their disposal.  If they truly wanted to provide a useful API in this realm, it would not require much effort on their part.  Apparently this is not a priority.  That's too bad, and although complaining about it is out of the scope of this assignment, it is remarkable, so I remark.  I would speculate that the completion of the task defined might require some good old-fashioned manual research/journalism, along with a programmatic element.  I would further speculate that transparency in politics is a slogan but not generally a priority.  This is speculative and opinion, out of the scope of the technical aspect, but remarkable.


## Reproducibility, Data

I'm providing a test script, which will go through the endpoints mentioned in this report.  
I'm saving the API documentation as it exists today in case of future changes, fixes etc.
There are data files containing raw `body` responses as described in the report.


## Containerization and CICD:

Although CICD was listed as an assignment requirement, given the results of the project/experiment/prototype, such that it is not gonig into delivery/deployment, in my opinion a CICD package would be innapropriate for the program code as given, which is simply some endpoint test suite providing reproducibility for the data that we've described.  Containerization likewise would provide no benefits here.  The NodeJS environment as used here is ubiquitous and reliable cross-platform.  The program provided would mature into a deployable microservice if the whole thing worked, and then CICD and containerization would be appropriate.  As it is, the program is simply a script running some routines which demonstrate the unsuitability of the APIs for the task as defined.


## Setup, Run, Test:

- Clone the repo
- Acquire a Google API key and put it in a `config.yaml` in the parent folder to project root.  There is a `config.yaml` in project root for illustration, but the real one should be in the parent folder for security reasons.
- `npm i`, `npm i -g coffeescript`, and if you want to live code `npm i -g nodemon`
- From root, `coffee service/main.coffee` or `nodemon service/main.coffee`

This will hit the endpoints on these APIs as described in the above report, and will write raw data to the `diagnostic_data` folder.
