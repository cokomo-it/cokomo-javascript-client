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
import NeighbourEdge from './NeighbourEdge';

/**
 * The Neighbour model module.
 * @module model/Neighbour
 * @version 1.0.0
 */
class Neighbour {
    /**
     * Constructs a new <code>Neighbour</code>.
     * @alias module:model/Neighbour
     */
    constructor() { 
        
        Neighbour.initialize(this);
    }

    /**
     * Initializes the fields of this object.
     * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
     * Only for internal use.
     */
    static initialize(obj) { 
    }

    /**
     * Constructs a <code>Neighbour</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/Neighbour} obj Optional instance to populate.
     * @return {module:model/Neighbour} The populated <code>Neighbour</code> instance.
     */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Neighbour();

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('shortDescription')) {
                obj['shortDescription'] = ApiClient.convertToType(data['shortDescription'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('relation')) {
                obj['relation'] = NeighbourEdge.constructFromObject(data['relation']);
            }
            if (data.hasOwnProperty('neighbours')) {
                obj['neighbours'] = ApiClient.convertToType(data['neighbours'], [Neighbour]);
            }
        }
        return obj;
    }

    /**
     * Validates the JSON data with respect to <code>Neighbour</code>.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @return {boolean} to indicate whether the JSON data is valid with respect to <code>Neighbour</code>.
     */
    static validateJSON(data) {
        // ensure the json data is a string
        if (data['id'] && !(typeof data['id'] === 'string' || data['id'] instanceof String)) {
            throw new Error("Expected the field `id` to be a primitive type in the JSON string but got " + data['id']);
        }
        // ensure the json data is a string
        if (data['title'] && !(typeof data['title'] === 'string' || data['title'] instanceof String)) {
            throw new Error("Expected the field `title` to be a primitive type in the JSON string but got " + data['title']);
        }
        // ensure the json data is a string
        if (data['shortDescription'] && !(typeof data['shortDescription'] === 'string' || data['shortDescription'] instanceof String)) {
            throw new Error("Expected the field `shortDescription` to be a primitive type in the JSON string but got " + data['shortDescription']);
        }
        // ensure the json data is a string
        if (data['type'] && !(typeof data['type'] === 'string' || data['type'] instanceof String)) {
            throw new Error("Expected the field `type` to be a primitive type in the JSON string but got " + data['type']);
        }
        // validate the optional field `relation`
        if (data['relation']) { // data not null
          NeighbourEdge.validateJSON(data['relation']);
        }
        if (data['neighbours']) { // data not null
            // ensure the json data is an array
            if (!Array.isArray(data['neighbours'])) {
                throw new Error("Expected the field `neighbours` to be an array in the JSON data but got " + data['neighbours']);
            }
            // validate the optional field `neighbours` (array)
            for (const item of data['neighbours']) {
                Neighbour.validateJSON(item);
            };
        }

        return true;
    }


}



/**
 * @member {String} id
 */
Neighbour.prototype['id'] = undefined;

/**
 * @member {String} title
 */
Neighbour.prototype['title'] = undefined;

/**
 * @member {String} shortDescription
 */
Neighbour.prototype['shortDescription'] = undefined;

/**
 * @member {String} type
 */
Neighbour.prototype['type'] = undefined;

/**
 * @member {module:model/NeighbourEdge} relation
 */
Neighbour.prototype['relation'] = undefined;

/**
 * @member {Array.<module:model/Neighbour>} neighbours
 */
Neighbour.prototype['neighbours'] = undefined;






export default Neighbour;

