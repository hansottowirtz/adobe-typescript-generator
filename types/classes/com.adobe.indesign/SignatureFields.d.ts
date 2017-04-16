/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
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
			 * @returns {Adobe.Indesign.SignatureField}
			 */
			public add(layerParam: Layer, atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Indesign.SignatureField;
			/**
			 * Returns any SignatureField in the collection.
			 * @returns {Adobe.Indesign.SignatureField}
			 */
			public anyItem(): Adobe.Indesign.SignatureField;
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
			 * @returns {Adobe.Indesign.SignatureField}
			 */
			public firstItem(): Adobe.Indesign.SignatureField;
			/**
			 * Returns the SignatureField with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.SignatureField}
			 */
			public item(indexParam: any): Adobe.Indesign.SignatureField;
			/**
			 * Returns the SignatureField with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.SignatureField}
			 */
			public itemByID(idParam: number): Adobe.Indesign.SignatureField;
			/**
			 * Returns the SignatureField with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.SignatureField}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.SignatureField;
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
			 * @returns {Adobe.Indesign.SignatureField}
			 */
			public lastItem(): Adobe.Indesign.SignatureField;
			/**
			 * Returns the middle SignatureField in the collection.
			 * @returns {Adobe.Indesign.SignatureField}
			 */
			public middleItem(): Adobe.Indesign.SignatureField;
			/**
			 * Returns the SignatureField whose index follows the specified 
			 * SignatureField in the collection.
			 * @param {SignatureField} objParam The SignatureField whose 
			 * index comes before the desired SignatureField. 
			 * @returns {Adobe.Indesign.SignatureField}
			 */
			public nextItem(objParam: SignatureField): Adobe.Indesign.SignatureField;
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
			 * @returns {Adobe.Indesign.SignatureField}
			 */
			public previousItem(objParam: SignatureField): Adobe.Indesign.SignatureField;
		}
	}
}