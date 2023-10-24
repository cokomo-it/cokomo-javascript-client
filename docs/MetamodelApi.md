# CoKoMoApi.MetamodelApi

All URIs are relative to *https://cokomo.code4you.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**metamodelGet**](MetamodelApi.md#metamodelGet) | **GET** /Metamodel | 



## metamodelGet

> Metamodel metamodelGet()



### Example

```javascript
import CoKoMoApi from 'CoKoMoApi';

let apiInstance = new CoKoMoApi.MetamodelApi();
apiInstance.metamodelGet((error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

This endpoint does not need any parameter.

### Return type

[**Metamodel**](Metamodel.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

