/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class FormFields extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new FormField
			 * @param {Layer} layerParam The layer on which to create the 
			 * FormField. (Optional)
			 * @param {LocationOptions} atParam The location at which to 
			 * insert the FormField relative to the reference object or 
			 * within the container object. (Optional)
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the at parameter is before or after. Can 
			 * accept: Document, Spread, MasterSpread, Page, Layer or 
			 * PageItem. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new FormField (Optional)
			 */
			public add(layerParam: Layer, atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Indesign.FormField;
			/** Returns any FormField in the collection. */
			public anyItem(): Adobe.Indesign.FormField;
			/** Displays the number of elements in the FormField. */
			public count(): number;
			/** Returns every FormField in the collection. */
			public everyItem(): any;
			/** Returns the first FormField in the collection. */
			public firstItem(): Adobe.Indesign.FormField;
			/**
			 * Returns the FormField with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.FormField;
			/**
			 * Returns the FormField with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.FormField;
			/**
			 * Returns the FormField with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.FormField;
			/**
			 * Returns the FormFields within the specified range.
			 * @param {any} fromParam The FormField, index, or name at the 
			 * beginning of the range. Can accept: FormField, Long Integer 
			 * or String.
			 * @param {any} toParam The FormField, index, or name at the 
			 * end of the range. Can accept: FormField, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last FormField in the collection. */
			public lastItem(): Adobe.Indesign.FormField;
			/** Returns the middle FormField in the collection. */
			public middleItem(): Adobe.Indesign.FormField;
			/**
			 * Returns the FormField whose index follows the specified 
			 * FormField in the collection.
			 * @param {FormField} objParam The FormField whose index comes 
			 * before the desired FormField. 
			 */
			public nextItem(objParam: FormField): Adobe.Indesign.FormField;
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
			 * Returns the FormField with the index previous to the 
			 * specified index.
			 * @param {FormField} objParam The index of the FormField that 
			 * follows the desired FormField.
			 */
			public previousItem(objParam: FormField): Adobe.Indesign.FormField;
		}
	}
}