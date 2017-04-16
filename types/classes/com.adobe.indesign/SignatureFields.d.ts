/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SignatureFields extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
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
			 */
			public add(layerParam: Layer, atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Indesign.SignatureField;
			/** Returns any SignatureField in the collection. */
			public anyItem(): Adobe.Indesign.SignatureField;
			/** Displays the number of elements in the SignatureField. */
			public count(): number;
			/** Returns every SignatureField in the collection. */
			public everyItem(): any;
			/** Returns the first SignatureField in the collection. */
			public firstItem(): Adobe.Indesign.SignatureField;
			/**
			 * Returns the SignatureField with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.SignatureField;
			/**
			 * Returns the SignatureField with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.SignatureField;
			/**
			 * Returns the SignatureField with the specified name.
			 * @param {string} nameParam The name.
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
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last SignatureField in the collection. */
			public lastItem(): Adobe.Indesign.SignatureField;
			/** Returns the middle SignatureField in the collection. */
			public middleItem(): Adobe.Indesign.SignatureField;
			/**
			 * Returns the SignatureField whose index follows the specified 
			 * SignatureField in the collection.
			 * @param {SignatureField} objParam The SignatureField whose 
			 * index comes before the desired SignatureField. 
			 */
			public nextItem(objParam: SignatureField): Adobe.Indesign.SignatureField;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the SignatureField with the index previous to the 
			 * specified index.
			 * @param {SignatureField} objParam The index of the 
			 * SignatureField that follows the desired SignatureField.
			 */
			public previousItem(objParam: SignatureField): Adobe.Indesign.SignatureField;
		}
	}
}