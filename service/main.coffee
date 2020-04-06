


c = console.log.bind console

request = require 'request'
yaml = require 'js-yaml'
fs = require 'fs'


endpoints =
    google_api:
        divisions:
            search: 'https://www.googleapis.com/civicinfo/v2/divisions'
        representatives_by_division: 'https://www.googleapis.com/civicinfo/v2/representatives'
        elections:
            electionQuery: 'https://www.googleapis.com/civicinfo/v2/elections'
            voterInfoQuery: 'https://www.googleapis.com/civicinfo/v2/voterinfo'
    maplight:
        contributions: 'https://api.maplight.org/maplight-api/fec/contributions'
        election_cycles: 'https://api.maplight.org/maplight-api/fec/election_cycles'


address1 = '1600 Pennsylvania Ave NW, Washington, DC 20500'
address2 = '259 Co Rd 5, Leadville, CO 80461'
address3 = '5000 W Park Blvd Suite 102, Plano, TX 75093'



common_hit_endpoint = (opts, cb) ->
    request opts, (err, res, body) ->
        cb err, res, body


main_google = ->
    new Promise (resolve0) ->
        try
            config = yaml.safeLoad(fs.readFileSync('../config.yaml', 'utf8'))

            election_opts_one =
                uri: endpoints.google_api.elections.electionQuery
                qs:
                    key: config.google_api_key

            election_opts_two =
                uri: endpoints.google_api.elections.electionQuery
                qs:
                    key: config.google_api_key
                    address: address3
            voter_info_opts =
                uri: endpoints.google_api.elections.voterInfoQuery
                qs:
                    key: config.google_api_key
                    address: address1
                    # electionId: 4964
        catch e
            c e

        e1 = ->
            new Promise (resolve1) ->
                common_hit_endpoint election_opts_one, (err, res, body) ->
                    c err
                    c res.statusCode
                    c body
                    fs.writeFileSync('./diagnostic_data/google_ci_electionQuery_raw_data.txt', body, 'utf8')
                    resolve1()
        e2 = ->
            new Promise (resolve2) ->
                common_hit_endpoint election_opts_two, (err, res, body) ->
                    c err
                    c res.statusCode
                    c body
                    fs.writeFileSync('./diagnostic_data/google_ci_electionQuery_raw_data_with_address_param.txt', body, 'utf8')
                    resolve2()

        await e1()
        await e2()
        c "Finished CivicInformation routines."
        resolve0()



main_maplight = ->
    new Promise (resolve0) ->
        election_cycles_opts =
            uri: endpoints.maplight.election_cycle

        contributions_2020_opts =
            uri: endpoints.maplight.contributions
            qs:
                election_cycle: 2020

        contributions_2016_opts =
            uri: endpoints.maplight.contributions
            qs:
                election_cycle: 2016

        e1 = ->
            new Promise (resolve) ->
                common_hit_endpoint contributions_2020_opts, (err, res, body) ->
                    fs.writeFileSync('./diagnostic_data/maplight_contributions_2020_raw_data.txt', body, 'utf8')
                    arq = JSON.parse(body)
                    c "\n"
                    c "Attributes on parsed body:", Object.keys(arq)
                    c "Attributes on 'data' property:", Object.keys(arq.data)
                    c "Aggregate totals:", arq.data.aggregate_totals
                    c "Number of contribution records returned: ", arq.data.rows.length
                    resolve()

        await e1()

        e2 = ->
            new Promise (resolve) ->
                common_hit_endpoint contributions_2016_opts, (err, res, body) ->
                    fs.writeFileSync('./diagnostic_data/maplight_contributions_2016_raw_data.txt', body, 'utf8')
                    arq = JSON.parse(body)
                    c "\n"
                    c "Attributes on parsed body:", Object.keys(arq)
                    c "Attributes on 'data' property:", Object.keys(arq.data)
                    c "Aggregate totals:", arq.data.aggregate_totals
                    c "Number of contribution records returned: ", arq.data.rows.length
                    resolve()

        await e2()
        c "Finished MapLight routines."
        resolve0()

main = ->
    await main_google()
    await main_maplight()
    c "Finished all routines."

main()
