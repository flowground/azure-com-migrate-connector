/**
 * Auto-generated action file for "Azure Migrate" API.
 *
 * Generated at: 2019-05-07T14:38:23.955Z
 * Mass generator version: 1.1.0
 *
 * flowground :- Telekom iPaaS / azure-com-migrate-connector
 * Copyright © 2019, Deutsche Telekom AG
 * contact: flowground@telekom.de
 *
 * All files of this connector are licensed under the Apache 2.0 License. For details
 * see the file LICENSE on the toplevel directory.
 *
 *
 * Operation: 'Assessments_Create'
 * Endpoint Path: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups/{groupName}/assessments/{assessmentName}'
 * Method: 'put'
 *
 */

const Swagger = require('swagger-client');
const processWrapper = require('../services/process-wrapper');
const spec = require('../spec.json');

// this wrapers offers a simplified emitData(data) function
module.exports.process = processWrapper(processAction);

// parameter names for this call
const PARAMETERS = [
    "subscriptionId",
    "resourceGroupName",
    "projectName",
    "groupName",
    "assessmentName",
    "Accept-Language",
    "api-version"
];

// mappings from connector field names to API field names
const FIELD_MAP = {
    "subscriptionId": "subscriptionId",
    "resourceGroupName": "resourceGroupName",
    "projectName": "projectName",
    "groupName": "groupName",
    "assessmentName": "assessmentName",
    "Accept_Language": "Accept-Language",
    "api_version": "api-version",
    "eTag": "eTag",
    "id": "id",
    "name": "name",
    "azureHybridUseBenefit": "azureHybridUseBenefit",
    "azureLocation": "azureLocation",
    "azureOfferCode": "azureOfferCode",
    "azurePricingTier": "azurePricingTier",
    "azureStorageRedundancy": "azureStorageRedundancy",
    "confidenceRatingInPercentage": "confidenceRatingInPercentage",
    "createdTimestamp": "createdTimestamp",
    "currency": "currency",
    "discountPercentage": "discountPercentage",
    "monthlyBandwidthCost": "monthlyBandwidthCost",
    "monthlyComputeCost": "monthlyComputeCost",
    "monthlyStorageCost": "monthlyStorageCost",
    "numberOfMachines": "numberOfMachines",
    "percentile": "percentile",
    "pricesTimestamp": "pricesTimestamp",
    "scalingFactor": "scalingFactor",
    "sizingCriterion": "sizingCriterion",
    "stage": "stage",
    "status": "status",
    "timeRange": "timeRange",
    "updatedTimestamp": "updatedTimestamp",
    "properties": "properties",
    "type": "type",
    "requestBody": "requestBody"
};

function processAction(msg, cfg) {
    var isVerbose = process.env.debug || cfg.verbose;

    if (isVerbose) {
        console.log(`---MSG: ${JSON.stringify(msg)}`);
        console.log(`---CFG: ${JSON.stringify(cfg)}`);
        console.log(`---ENV: ${JSON.stringify(process.env)}`);
    }

    const contentType = 'application/json';

    const body = msg.body;
    mapFieldNames(body);

    let parameters = {};
    for(let param of PARAMETERS) {
        parameters[param] = body[param];
    }

    // credentials for this operation
    let securities = {};
    securities['azure_auth'] = {token: cfg['azure_auth']};

    let callParams = {
        spec: spec,
        operationId: 'Assessments_Create',
        pathName: '/subscriptions/{subscriptionId}/resourceGroups/{resourceGroupName}/providers/Microsoft.Migrate/projects/{projectName}/groups/{groupName}/assessments/{assessmentName}',
        method: 'put',
        parameters: parameters,
        requestContentType: contentType,
        requestBody: body.requestBody,
        securities: {authorized: securities},
        server: spec.servers[cfg.server] || cfg.otherServer,
    };

    if (isVerbose) {
        let out = Object.assign({}, callParams);
        out.spec = '[omitted]';
        console.log(`--SWAGGER CALL: ${JSON.stringify(out)}`);
    }

    // Call operation via Swagger client
    return Swagger.execute(callParams).then(data => {
        // emit a single message with data
        this.emitData(data);

        // if the response contains an array of entities, you can emit them one by one:

        // data.obj.someItems.forEach((item) => {
        //     this.emitData(item);
        // }
    });
}

function mapFieldNames(obj) {
    if(Array.isArray(obj)) {
        obj.forEach(mapFieldNames);
    }
    else if(typeof obj === 'object' && obj) {
        Object.keys(obj).forEach(key => {
            mapFieldNames(obj[key]);

            let goodKey = FIELD_MAP[key];
            if(goodKey && goodKey !== key) {
                obj[goodKey] = obj[key];
                delete obj[key];
            }
        });
    }
}