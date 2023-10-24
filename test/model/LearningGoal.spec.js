/**
 * Cokomo Public Api
 * ## 👉 [Please see the CoKoMo documentation for more information.](https://cokomo-it.de/docs/start/api/documentation/)
 *
 * The version of the OpenAPI document: v1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', process.cwd()+'/src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require(process.cwd()+'/src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CoKoMoJavascriptClient);
  }
}(this, function(expect, CoKoMoJavascriptClient) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CoKoMoJavascriptClient.LearningGoal();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('LearningGoal', function() {
    it('should create an instance of LearningGoal', function() {
      // uncomment below and update the code to test LearningGoal
      //var instance = new CoKoMoJavascriptClient.LearningGoal();
      //expect(instance).to.be.a(CoKoMoJavascriptClient.LearningGoal);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CoKoMoJavascriptClient.LearningGoal();
      //expect(instance).to.be();
    });

    it('should have the property type (base name: "type")', function() {
      // uncomment below and update the code to test the property type
      //var instance = new CoKoMoJavascriptClient.LearningGoal();
      //expect(instance).to.be();
    });

    it('should have the property underlyingCompetenceBase (base name: "underlyingCompetenceBase")', function() {
      // uncomment below and update the code to test the property underlyingCompetenceBase
      //var instance = new CoKoMoJavascriptClient.LearningGoal();
      //expect(instance).to.be();
    });

    it('should have the property associatedCompetenceLevel (base name: "associatedCompetenceLevel")', function() {
      // uncomment below and update the code to test the property associatedCompetenceLevel
      //var instance = new CoKoMoJavascriptClient.LearningGoal();
      //expect(instance).to.be();
    });

  });

}));
