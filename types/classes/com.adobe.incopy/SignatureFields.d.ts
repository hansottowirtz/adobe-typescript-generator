/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class SignatureFields extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new SignatureField
			 * @param {Layer} layerParam The layer on which to create the 
			 * SignatureField. (Optional)
			 * @param {LocationOptions} atParam The location at which to 
			 * insert the SignatureField relative to the reference object 
			 * or within the container object. (Optional)
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the at parameter is before or after. Can 
			 * accept: Document, Spread, MasterSpread, Page, Layer or 
			 * PageItem. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new SignatureField (Optional)
			 * @returns {Adobe.Incopy.SignatureField}
			 */
			public add(layerParam: Layer, atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Incopy.SignatureField;
			/**
			 * Returns any SignatureField in the collection.
			 * @returns {Adobe.Incopy.SignatureField}
			 */
			public anyItem(): Adobe.Incopy.SignatureField;
			/**
			 * Displays the number of elements in the SignatureField.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every SignatureField in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first SignatureField in the collection.
			 * @returns {Adobe.Incopy.SignatureField}
			 */
			public firstItem(): Adobe.Incopy.SignatureField;
			/**
			 * Returns the SignatureField with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.SignatureField}
			 */
			public item(indexParam: any): Adobe.Incopy.SignatureField;
			/**
			 * Returns the SignatureField with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.SignatureField}
			 */
			public itemByID(idParam: number): Adobe.Incopy.SignatureField;
			/**
			 * Returns the SignatureField with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.SignatureField}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.SignatureField;
			/**
			 * Returns the SignatureFields within the specified range.
			 * @param {any} fromParam The SignatureField, index, or name at 
			 * the beginning of the range. Can accept: SignatureField, Long 
			 * Integer or String.
			 * @param {any} toParam The SignatureField, index, or name at 
			 * the end of the range. Can accept: SignatureField, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last SignatureField in the collection.
			 * @returns {Adobe.Incopy.SignatureField}
			 */
			public lastItem(): Adobe.Incopy.SignatureField;
			/**
			 * Returns the middle SignatureField in the collection.
			 * @returns {Adobe.Incopy.SignatureField}
			 */
			public middleItem(): Adobe.Incopy.SignatureField;
			/**
			 * Returns the SignatureField whose index follows the specified 
			 * SignatureField in the collection.
			 * @param {SignatureField} objParam The SignatureField whose 
			 * index comes before the desired SignatureField. 
			 * @returns {Adobe.Incopy.SignatureField}
			 */
			public nextItem(objParam: SignatureField): Adobe.Incopy.SignatureField;
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
			 * Returns the SignatureField with the index previous to the 
			 * specified index.
			 * @param {SignatureField} objParam The index of the 
			 * SignatureField that follows the desired SignatureField.
			 * @returns {Adobe.Incopy.SignatureField}
			 */
			public previousItem(objParam: SignatureField): Adobe.Incopy.SignatureField;
		}
	}
}