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
import CompetenceBase from './CompetenceBase';
import CompetenceLevel from './CompetenceLevel';

/**
 * The LearningGoal model module.
 * @module model/LearningGoal
 * @version 1.0.0
 */
class LearningGoal {
    /**
     * Constructs a new <code>LearningGoal</code>.
     * @alias module:model/LearningGoal
     */
    constructor() { 
        
        LearningGoal.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>LearningGoal</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/LearningGoal} obj Optional instance to populate.
     * @return {module:model/LearningGoal} The populated <code>LearningGoal</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new LearningGoal();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('underlyingCompetenceBase')) {
                obj['underlyingCompetenceBase'] = CompetenceBase.constructFromObject(data['underlyingCompetenceBase']);
            }
            if (data.hasOwnProperty('associatedCompetenceLevel')) {
                obj['associatedCompetenceLevel'] = CompetenceLevel.constructFromObject(data['associatedCompetenceLevel']);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>LearningGoal</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>LearningGoal</code>.
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
        // validate the optional field `underlyingCompetenceBase`
        if (data['underlyingCompetenceBase']) { // data not null
          CompetenceBase.validateJSON(data['underlyingCompetenceBase']);
        }
        // validate the optional field `associatedCompetenceLevel`
        if (data['associatedCompetenceLevel']) { // data not null
          CompetenceLevel.validateJSON(data['associatedCompetenceLevel']);
        }

        return true;
    }


}



/**
 * @member {String} id
 */
LearningGoal.prototype['id'] = undefined;

/**
 * @member {String} type
 */
LearningGoal.prototype['type'] = undefined;

/**
 * @member {module:model/CompetenceBase} underlyingCompetenceBase
 */
LearningGoal.prototype['underlyingCompetenceBase'] = undefined;

/**
 * @member {module:model/CompetenceLevel} associatedCompetenceLevel
 */
LearningGoal.prototype['associatedCompetenceLevel'] = undefined;






export default LearningGoal;
