/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class FormFields extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any FormField in the collection.
			 * @returns {Adobe.Incopy.FormField}
			 */
			public anyItem(): Adobe.Incopy.FormField;
			/**
			 * Displays the number of elements in the FormField.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every FormField in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first FormField in the collection.
			 * @returns {Adobe.Incopy.FormField}
			 */
			public firstItem(): Adobe.Incopy.FormField;
			/**
			 * Returns the FormField with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.FormField}
			 */
			public item(indexParam: any): Adobe.Incopy.FormField;
			/**
			 * Returns the FormField with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.FormField}
			 */
			public itemByID(idParam: number): Adobe.Incopy.FormField;
			/**
			 * Returns the FormField with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.FormField}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.FormField;
			/**
			 * Returns the FormFields within the specified range.
			 * @param {any} fromParam The FormField, index, or name at the 
			 * beginning of the range. Can accept: FormField, Long Integer 
			 * or String.
			 * @param {any} toParam The FormField, index, or name at the 
			 * end of the range. Can accept: FormField, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last FormField in the collection.
			 * @returns {Adobe.Incopy.FormField}
			 */
			public lastItem(): Adobe.Incopy.FormField;
			/**
			 * Returns the middle FormField in the collection.
			 * @returns {Adobe.Incopy.FormField}
			 */
			public middleItem(): Adobe.Incopy.FormField;
			/**
			 * Returns the FormField whose index follows the specified 
			 * FormField in the collection.
			 * @param {FormField} objParam The FormField whose index comes 
			 * before the desired FormField. 
			 * @returns {Adobe.Incopy.FormField}
			 */
			public nextItem(objParam: FormField): Adobe.Incopy.FormField;
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
			 * Returns the FormField with the index previous to the 
			 * specified index.
			 * @param {FormField} objParam The index of the FormField that 
			 * follows the desired FormField.
			 * @returns {Adobe.Incopy.FormField}
			 */
			public previousItem(objParam: FormField): Adobe.Incopy.FormField;
		}
	}
}