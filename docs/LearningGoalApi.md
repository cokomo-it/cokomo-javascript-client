# CoKoMoApi.LearningGoalApi

All URIs are relative to *https://cokomo.code4you.com*

Method | HTTP request | Description
------------- | ------------- | -------------
[**learningGoalIdDetailsGet**](LearningGoalApi.md#learningGoalIdDetailsGet) | **GET** /LearningGoal/{id}/details | 
[**learningGoalIdGet**](LearningGoalApi.md#learningGoalIdGet) | **GET** /LearningGoal/{id} | 



## learningGoalIdDetailsGet

> LearningGoal learningGoalIdDetailsGet(id)



### Example

```javascript
import CoKoMoApi from 'CoKoMoApi';

let apiInstance = new CoKoMoApi.LearningGoalApi();
let id = "id_example"; // String | 
apiInstance.learningGoalIdDetailsGet(id, (error, data, response) => {
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

[**LearningGoal**](LearningGoal.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json


## learningGoalIdGet

> LearningGoal learningGoalIdGet(id)



### Example

```javascript
import CoKoMoApi from 'CoKoMoApi';

let apiInstance = new CoKoMoApi.LearningGoalApi();
let id = "id_example"; // String | 
apiInstance.learningGoalIdGet(id, (error, data, response) => {
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

[**LearningGoal**](LearningGoal.md)

### Authorization

No authorization required

### HTTP request headers

- **Content-Type**: Not defined
- **Accept**: text/plain, application/json, text/json

