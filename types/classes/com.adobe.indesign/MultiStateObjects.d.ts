/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class MultiStateObjects extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new MultiStateObject
			 * @param {Layer} layerParam The layer on which to create the 
			 * MultiStateObject. (Optional)
			 * @param {LocationOptions} atParam The location at which to 
			 * insert the MultiStateObject relative to the reference object 
			 * or within the container object. (Optional)
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the at parameter is before or after. Can 
			 * accept: Document, Spread, MasterSpread, Page, Layer or 
			 * PageItem. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new MultiStateObject (Optional)
			 * @returns {Adobe.Indesign.MultiStateObject}
			 */
			public add(layerParam: Layer, atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Indesign.MultiStateObject;
			/**
			 * Returns any MultiStateObject in the collection.
			 * @returns {Adobe.Indesign.MultiStateObject}
			 */
			public anyItem(): Adobe.Indesign.MultiStateObject;
			/**
			 * Displays the number of elements in the MultiStateObject.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every MultiStateObject in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first MultiStateObject in the collection.
			 * @returns {Adobe.Indesign.MultiStateObject}
			 */
			public firstItem(): Adobe.Indesign.MultiStateObject;
			/**
			 * Returns the MultiStateObject with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.MultiStateObject}
			 */
			public item(indexParam: any): Adobe.Indesign.MultiStateObject;
			/**
			 * Returns the MultiStateObject with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.MultiStateObject}
			 */
			public itemByID(idParam: number): Adobe.Indesign.MultiStateObject;
			/**
			 * Returns the MultiStateObject with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.MultiStateObject}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.MultiStateObject;
			/**
			 * Returns the MultiStateObjects within the specified range.
			 * @param {any} fromParam The MultiStateObject, index, or name 
			 * at the beginning of the range. Can accept: MultiStateObject, 
			 * Long Integer or String.
			 * @param {any} toParam The MultiStateObject, index, or name at 
			 * the end of the range. Can accept: MultiStateObject, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last MultiStateObject in the collection.
			 * @returns {Adobe.Indesign.MultiStateObject}
			 */
			public lastItem(): Adobe.Indesign.MultiStateObject;
			/**
			 * Returns the middle MultiStateObject in the collection.
			 * @returns {Adobe.Indesign.MultiStateObject}
			 */
			public middleItem(): Adobe.Indesign.MultiStateObject;
			/**
			 * Returns the MultiStateObject whose index follows the 
			 * specified MultiStateObject in the collection.
			 * @param {MultiStateObject} objParam The MultiStateObject 
			 * whose index comes before the desired MultiStateObject. 
			 * @returns {Adobe.Indesign.MultiStateObject}
			 */
			public nextItem(objParam: MultiStateObject): Adobe.Indesign.MultiStateObject;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx
			 * @returns {number}
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index
			 * @returns {any}
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the MultiStateObject with the index previous to the 
			 * specified index.
			 * @param {MultiStateObject} objParam The index of the 
			 * MultiStateObject that follows the desired MultiStateObject.
			 * @returns {Adobe.Indesign.MultiStateObject}
			 */
			public previousItem(objParam: MultiStateObject): Adobe.Indesign.MultiStateObject;
		}
	}
}