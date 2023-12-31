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
    instance = new CoKoMoJavascriptClient.EdgeType();
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

  describe('EdgeType', function() {
    it('should create an instance of EdgeType', function() {
      // uncomment below and update the code to test EdgeType
      //var instance = new CoKoMoJavascriptClient.EdgeType();
      //expect(instance).to.be.a(CoKoMoJavascriptClient.EdgeType);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instance = new CoKoMoJavascriptClient.EdgeType();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instance = new CoKoMoJavascriptClient.EdgeType();
      //expect(instance).to.be();
    });

    it('should have the property abbreviation (base name: "abbreviation")', function() {
      // uncomment below and update the code to test the property abbreviation
      //var instance = new CoKoMoJavascriptClient.EdgeType();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instance = new CoKoMoJavascriptClient.EdgeType();
      //expect(instance).to.be();
    });

  });

}));
