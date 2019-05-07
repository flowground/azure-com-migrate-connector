# ![LOGO](logo.png) Azure Migrate **flow**ground Connector

## Description

A generated **flow**ground connector for the Azure Migrate API (version 2018-02-02).

Generated from: https://api.apis.guru/v2/specs/azure.com/migrate/2018-02-02/swagger.json<br/>
Generated at: 2019-05-07T17:38:23+03:00

## API Description

Move your workloads to Azure.

## Authorization

Supported authorization schemes:
- OAuth2

For OAuth 2.0 you need to specify OAuth Client credentials as environment variables in the connector repository:
* `OAUTH_CLIENT_ID` - your OAuth client id
* `OAUTH_CLIENT_SECRET` - your OAuth client secret

## Actions

### Get list of operations supported in the API.

> Get a list of REST API supported by Microsoft.Migrate provider.

### Get the assessment options.

> Get the available options for the properties of an assessment.

#### Input Parameters
* `subscriptionId` - _required_ - Azure Subscription Id in which project was created.
* `locationName` - _required_ - Azure region in which the project is created.
* `api-version` - _required_ - Standard request header. Used by service to identify API version used by client.
    Possible values: 2018-02-02.
* `Accept-Language` - _optional_ - Standard request header. Used by service to respond to client in appropriate language.

### Checks whether the project name is available in the specified region.

#### Input Parameters
* `locationName` - _required_ - The desired region for the name check.
* `api-version` - _required_ - Standard request header. Used by service to identify API version used by client.
    Possible values: 2018-02-02.
* `subscriptionId` - _required_ - Azure Subscription Id in which project was created.

### Get all projects.

> Get all the projects in the subscription.

#### Input Parameters
* `subscriptionId` - _required_ - Azure Subscription Id in which project was created.
* `api-version` - _required_ - Standard request header. Used by service to identify API version used by client.
    Possible values: 2018-02-02.
* `Accept-Language` - _optional_ - Standard request header. Used by service to respond to client in appropriate language.

### Get all assessments created in the project.

> Get all assessments created in the project.<br/>
> <br/>
> Returns a json array of objects of type 'assessment' as specified in Models section.

#### Input Parameters
* `subscriptionId` - _required_ - Azure Subscription Id in which project was created.
* `resourceGroupName` - _required_ - Name of the Azure Resource Group that project is part of.
* `projectName` - _required_ - Name of the Azure Migrate project.
* `Accept-Language` - _optional_ - Standard request header. Used by service to respond to client in appropriate language.
* `api-version` - _required_ - Standard request header. Used by service to identify API version used by client.
    Possible values: 2018-02-02.

### Get all groups

> Get all groups created in the project. Returns a json array of objects of type 'group' as specified in the Models section.

#### Input Parameters
* `subscriptionId` - _required_ - Azure Subscription Id in which project was created.
* `resourceGroupName` - _required_ - Name of the Azure Resource Group that project is part of.
* `projectName` - _required_ - Name of the Azure Migrate project.
* `Accept-Language` - _optional_ - Standard request header. Used by service to respond to client in appropriate language.
* `api-version` - _required_ - Standard request header. Used by service to identify API version used by client.
    Possible values: 2018-02-02.

### Delete the group

> Delete the group from the project. The machines remain in the project. Deleting a non-existent group results in a no-operation.<br/>
> <br/>
> A group is an aggregation mechanism for machines in a project. Therefore, deleting group does not delete machines in it.

#### Input Parameters
* `subscriptionId` - _required_ - Azure Subscription Id in which project was created.
* `resourceGroupName` - _required_ - Name of the Azure Resource Group that project is part of.
* `projectName` - _required_ - Name of the Azure Migrate project.
* `groupName` - _required_ - Unique name of a group within a project.
* `Accept-Language` - _optional_ - Standard request header. Used by service to respond to client in appropriate language.
* `api-version` - _required_ - Standard request header. Used by service to identify API version used by client.
    Possible values: 2018-02-02.

### Get a specific group.

> Get information related to a specific group in the project. Returns a json object of type 'group' as specified in the models section.

#### Input Parameters
* `subscriptionId` - _required_ - Azure Subscription Id in which project was created.
* `resourceGroupName` - _required_ - Name of the Azure Resource Group that project is part of.
* `projectName` - _required_ - Name of the Azure Migrate project.
* `groupName` - _required_ - Unique name of a group within a project.
* `Accept-Language` - _optional_ - Standard request header. Used by service to respond to client in appropriate language.
* `api-version` - _required_ - Standard request header. Used by service to identify API version used by client.
    Possible values: 2018-02-02.

### Create a new group with specified settings. If group with the name provided already exists, then the existing group is updated.

> Create a new group by sending a json object of type 'group' as given in Models section as part of the Request Body. The group name in a project is unique. Labels can be applied on a group as part of creation.<br/>
> <br/>
> If a group with the groupName specified in the URL already exists, then this call acts as an update.<br/>
> <br/>
> This operation is Idempotent.

#### Input Parameters
* `subscriptionId` - _required_ - Azure Subscription Id in which project was created.
* `resourceGroupName` - _required_ - Name of the Azure Resource Group that project is part of.
* `projectName` - _required_ - Name of the Azure Migrate project.
* `groupName` - _required_ - Unique name of a group within a project.
* `Accept-Language` - _optional_ - Standard request header. Used by service to respond to client in appropriate language.
* `api-version` - _required_ - Standard request header. Used by service to identify API version used by client.
    Possible values: 2018-02-02.

### Get all assessments created for the specified group.

> Get all assessments created for the specified group.<br/>
> <br/>
> Returns a json array of objects of type 'assessment' as specified in Models section.

#### Input Parameters
* `subscriptionId` - _required_ - Azure Subscription Id in which project was created.
* `resourceGroupName` - _required_ - Name of the Azure Resource Group that project is part of.
* `projectName` - _required_ - Name of the Azure Migrate project.
* `groupName` - _required_ - Unique name of a group within a project.
* `Accept-Language` - _optional_ - Standard request header. Used by service to respond to client in appropriate language.
* `api-version` - _required_ - Standard request header. Used by service to identify API version used by client.
    Possible values: 2018-02-02.

### Deletes an assessment from the project.

> Delete an assessment from the project. The machines remain in the assessment. Deleting a non-existent assessment results in a no-operation.<br/>
> <br/>
> When an assessment is under computation, as indicated by the 'computationState' field, it cannot be deleted. Any such attempt will return a 400 - Bad Request.

#### Input Parameters
* `subscriptionId` - _required_ - Azure Subscription Id in which project was created.
* `resourceGroupName` - _required_ - Name of the Azure Resource Group that project is part of.
* `projectName` - _required_ - Name of the Azure Migrate project.
* `groupName` - _required_ - Unique name of a group within a project.
* `assessmentName` - _required_ - Unique name of an assessment within a project.
* `Accept-Language` - _optional_ - Standard request header. Used by service to respond to client in appropriate language.
* `api-version` - _required_ - Standard request header. Used by service to identify API version used by client.
    Possible values: 2018-02-02.

### Get an assessment.

> Get an existing assessment with the specified name. Returns a json object of type 'assessment' as specified in Models section.

#### Input Parameters
* `subscriptionId` - _required_ - Azure Subscription Id in which project was created.
* `resourceGroupName` - _required_ - Name of the Azure Resource Group that project is part of.
* `projectName` - _required_ - Name of the Azure Migrate project.
* `groupName` - _required_ - Unique name of a group within a project.
* `assessmentName` - _required_ - Unique name of an assessment within a project.
* `Accept-Language` - _optional_ - Standard request header. Used by service to respond to client in appropriate language.
* `api-version` - _required_ - Standard request header. Used by service to identify API version used by client.
    Possible values: 2018-02-02.

### Create or Update assessment.

> Create a new assessment with the given name and the specified settings. Since name of an assessment in a project is a unique identifier, if an assessment with the name provided already exists, then the existing assessment is updated.<br/>
> <br/>
> Any PUT operation, resulting in either create or update on an assessment, will cause the assessment to go in a "InProgress" state. This will be indicated by the field 'computationState' on the Assessment object. During this time no other PUT operation will be allowed on that assessment object, nor will a Delete operation. Once the computation for the assessment is complete, the field 'computationState' will be updated to 'Ready', and then other PUT or DELETE operations can happen on the assessment.<br/>
> <br/>
> When assessment is under computation, any PUT will lead to a 400 - Bad Request error.

#### Input Parameters
* `subscriptionId` - _required_ - Azure Subscription Id in which project was created.
* `resourceGroupName` - _required_ - Name of the Azure Resource Group that project is part of.
* `projectName` - _required_ - Name of the Azure Migrate project.
* `groupName` - _required_ - Unique name of a group within a project.
* `assessmentName` - _required_ - Unique name of an assessment within a project.
* `Accept-Language` - _optional_ - Standard request header. Used by service to respond to client in appropriate language.
* `api-version` - _required_ - Standard request header. Used by service to identify API version used by client.
    Possible values: 2018-02-02.

### Get assessed machines for assessment.

> Get list of machines that assessed as part of the specified assessment. Returns a json array of objects of type 'assessedMachine' as specified in the Models section.<br/>
> <br/>
> Whenever an assessment is created or updated, it goes under computation. During this phase, the 'status' field of Assessment object reports 'Computing'.<br/>
> During the period when the assessment is under computation, the list of assessed machines is empty and no assessed machines are returned by this call.

#### Input Parameters
* `subscriptionId` - _required_ - Azure Subscription Id in which project was created.
* `resourceGroupName` - _required_ - Name of the Azure Resource Group that project is part of.
* `projectName` - _required_ - Name of the Azure Migrate project.
* `groupName` - _required_ - Unique name of a group within a project.
* `assessmentName` - _required_ - Unique name of an assessment within a project.
* `Accept-Language` - _optional_ - Standard request header. Used by service to respond to client in appropriate language.
* `api-version` - _required_ - Standard request header. Used by service to identify API version used by client.
    Possible values: 2018-02-02.

### Get an assessed machine.

> Get an assessed machine with its size & cost estimate that was evaluated in the specified assessment.

#### Input Parameters
* `subscriptionId` - _required_ - Azure Subscription Id in which project was created.
* `resourceGroupName` - _required_ - Name of the Azure Resource Group that project is part of.
* `projectName` - _required_ - Name of the Azure Migrate project.
* `groupName` - _required_ - Unique name of a group within a project.
* `assessmentName` - _required_ - Unique name of an assessment within a project.
* `assessedMachineName` - _required_ - Unique name of an assessed machine evaluated as part of an assessment.
* `Accept-Language` - _optional_ - Standard request header. Used by service to respond to client in appropriate language.
* `api-version` - _required_ - Standard request header. Used by service to identify API version used by client.
    Possible values: 2018-02-02.

### Get download URL for the assessment report.

> Get the URL for downloading the assessment in a report format.

#### Input Parameters
* `subscriptionId` - _required_ - Azure Subscription Id in which project was created.
* `resourceGroupName` - _required_ - Name of the Azure Resource Group that project is part of.
* `projectName` - _required_ - Name of the Azure Migrate project.
* `groupName` - _required_ - Unique name of a group within a project.
* `assessmentName` - _required_ - Unique name of an assessment within a project.
* `api-version` - _required_ - Standard request header. Used by service to identify API version used by client.
    Possible values: 2018-02-02.
* `Accept-Language` - _optional_ - Standard request header. Used by service to respond to client in appropriate language.

### Get all machines in the project

> Get data of all the machines available in the project. Returns a json array of objects of type 'machine' defined in Models section.

#### Input Parameters
* `subscriptionId` - _required_ - Azure Subscription Id in which project was created.
* `resourceGroupName` - _required_ - Name of the Azure Resource Group that project is part of.
* `projectName` - _required_ - Name of the Azure Migrate project.
* `Accept-Language` - _optional_ - Standard request header. Used by service to respond to client in appropriate language.
* `api-version` - _required_ - Standard request header. Used by service to identify API version used by client.
    Possible values: 2018-02-02.

### Get a specific machine.

> Get the machine with the specified name. Returns a json object of type 'machine' defined in Models section.

#### Input Parameters
* `subscriptionId` - _required_ - Azure Subscription Id in which project was created.
* `resourceGroupName` - _required_ - Name of the Azure Resource Group that project is part of.
* `projectName` - _required_ - Name of the Azure Migrate project.
* `machineName` - _required_ - Unique name of a machine in private datacenter.
* `Accept-Language` - _optional_ - Standard request header. Used by service to respond to client in appropriate language.
* `api-version` - _required_ - Standard request header. Used by service to identify API version used by client.
    Possible values: 2018-02-02.

### Get all projects.

> Get all the projects in the resource group.

#### Input Parameters
* `subscriptionId` - _required_ - Azure Subscription Id in which project was created.
* `resourceGroupName` - _required_ - Name of the Azure Resource Group that project is part of.
* `api-version` - _required_ - Standard request header. Used by service to identify API version used by client.
    Possible values: 2018-02-02.
* `Accept-Language` - _optional_ - Standard request header. Used by service to respond to client in appropriate language.

### Delete the project

> Delete the project. Deleting non-existent project is a no-operation.

#### Input Parameters
* `subscriptionId` - _required_ - Azure Subscription Id in which project was created.
* `resourceGroupName` - _required_ - Name of the Azure Resource Group that project is part of.
* `projectName` - _required_ - Name of the Azure Migrate project.
* `api-version` - _required_ - Standard request header. Used by service to identify API version used by client.
    Possible values: 2018-02-02.
* `Accept-Language` - _optional_ - Standard request header. Used by service to respond to client in appropriate language.

### Get the specified project.

> Get the project with the specified name.

#### Input Parameters
* `subscriptionId` - _required_ - Azure Subscription Id in which project was created.
* `resourceGroupName` - _required_ - Name of the Azure Resource Group that project is part of.
* `projectName` - _required_ - Name of the Azure Migrate project.
* `api-version` - _required_ - Standard request header. Used by service to identify API version used by client.
    Possible values: 2018-02-02.
* `Accept-Language` - _optional_ - Standard request header. Used by service to respond to client in appropriate language.

### Update project.

> Update a project with specified name. Supports partial updates, for example only tags can be provided.

#### Input Parameters
* `subscriptionId` - _required_ - Azure Subscription Id in which project was created.
* `resourceGroupName` - _required_ - Name of the Azure Resource Group that project is part of.
* `projectName` - _required_ - Name of the Azure Migrate project.
* `api-version` - _required_ - Standard request header. Used by service to identify API version used by client.
    Possible values: 2018-02-02.
* `Accept-Language` - _optional_ - Standard request header. Used by service to respond to client in appropriate language.

### Create or update project.

> Create a project with specified name. If a project already exists, update it.

#### Input Parameters
* `subscriptionId` - _required_ - Azure Subscription Id in which project was created.
* `resourceGroupName` - _required_ - Name of the Azure Resource Group that project is part of.
* `projectName` - _required_ - Name of the Azure Migrate project.
* `api-version` - _required_ - Standard request header. Used by service to identify API version used by client.
    Possible values: 2018-02-02.
* `Accept-Language` - _optional_ - Standard request header. Used by service to respond to client in appropriate language.

### Get shared keys for the project.

> Gets the Log Analytics Workspace ID and Primary Key for the specified project.

#### Input Parameters
* `subscriptionId` - _required_ - Azure Subscription Id in which project was created.
* `resourceGroupName` - _required_ - Name of the Azure Resource Group that project is part of.
* `projectName` - _required_ - Name of the Azure Migrate project.
* `api-version` - _required_ - Standard request header. Used by service to identify API version used by client.
    Possible values: 2018-02-02.
* `Accept-Language` - _optional_ - Standard request header. Used by service to respond to client in appropriate language.

## License

**flow**ground :- Telekom iPaaS / azure-com-migrate-connector<br/>
Copyright © 2019, [Deutsche Telekom AG](https://www.telekom.de)<br/>
contact: flowground@telekom.de

All files of this connector are licensed under the Apache 2.0 License. For details
see the file LICENSE on the toplevel directory.
