# CoKoMoApi.CompetenceBaseApi

All URIs are relative to *https://cokomo.code4you.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**competenceBaseIdDetailsGet**](CompetenceBaseApi.md#competenceBaseIdDetailsGet) | **GET** /CompetenceBase/{id}/details | 
[**competenceBaseIdGet**](CompetenceBaseApi.md#competenceBaseIdGet) | **GET** /CompetenceBase/{id} | 
[**competenceBaseIdNeighboursGet**](CompetenceBaseApi.md#competenceBaseIdNeighboursGet) | **GET** /CompetenceBase/{id}/neighbours | 



## competenceBaseIdDetailsGet

> CompetenceBase competenceBaseIdDetailsGet(id)



### Example

```javascript
import CoKoMoApi from 'CoKoMoApi';

let apiInstance = new CoKoMoApi.CompetenceBaseApi();
let id = "id_example"; // String | 
apiInstance.competenceBaseIdDetailsGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**CompetenceBase**](CompetenceBase.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## competenceBaseIdGet

> CompetenceBase competenceBaseIdGet(id)



### Example

```javascript
import CoKoMoApi from 'CoKoMoApi';

let apiInstance = new CoKoMoApi.CompetenceBaseApi();
let id = "id_example"; // String | 
apiInstance.competenceBaseIdGet(id, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 

### Return type

[**CompetenceBase**](CompetenceBase.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## competenceBaseIdNeighboursGet

> Neighbour competenceBaseIdNeighboursGet(id, opts)



### Example

```javascript
import CoKoMoApi from 'CoKoMoApi';

let apiInstance = new CoKoMoApi.CompetenceBaseApi();
let id = "id_example"; // String | 
let opts = {
  'depth': 10 // Number | 
};
apiInstance.competenceBaseIdNeighboursGet(id, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **depth** | **Number**|  | [optional] [default to 10]

### Return type

[**Neighbour**](Neighbour.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

