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

import ApiClient from '../ApiClient';

/**
 * The CompetenceLevel model module.
 * @module model/CompetenceLevel
 * @version 1.0.0
 */
class CompetenceLevel {
    /**
     * Constructs a new <code>CompetenceLevel</code>.
     * @alias module:model/CompetenceLevel
     */
    constructor() { 
        
        CompetenceLevel.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>CompetenceLevel</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/CompetenceLevel} obj Optional instance to populate.
     * @return {module:model/CompetenceLevel} The populated <code>CompetenceLevel</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CompetenceLevel();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'Number');
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>CompetenceLevel</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>CompetenceLevel</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
CompetenceLevel.prototype['id'] = undefined;

/**
 * @member {String} type
 */
CompetenceLevel.prototype['type'] = undefined;

/**
 * @member {String} title
 */
CompetenceLevel.prototype['title'] = undefined;

/**
 * @member {Number} level
 */
CompetenceLevel.prototype['level'] = undefined;






export default CompetenceLevel;

