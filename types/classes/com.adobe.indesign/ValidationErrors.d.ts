/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ValidationErrors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any ValidationError in the collection.
			 * @returns {Adobe.Indesign.ValidationError}
			 */
			public anyItem(): Adobe.Indesign.ValidationError;
			/**
			 * Displays the number of elements in the ValidationError.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every ValidationError in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first ValidationError in the collection.
			 * @returns {Adobe.Indesign.ValidationError}
			 */
			public firstItem(): Adobe.Indesign.ValidationError;
			/**
			 * Returns the ValidationError with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.ValidationError}
			 */
			public item(indexParam: any): Adobe.Indesign.ValidationError;
			/**
			 * Returns the ValidationErrors within the specified range.
			 * @param {any} fromParam The ValidationError, index, or name 
			 * at the beginning of the range. Can accept: ValidationError, 
			 * Long Integer or String.
			 * @param {any} toParam The ValidationError, index, or name at 
			 * the end of the range. Can accept: ValidationError, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last ValidationError in the collection.
			 * @returns {Adobe.Indesign.ValidationError}
			 */
			public lastItem(): Adobe.Indesign.ValidationError;
			/**
			 * Returns the middle ValidationError in the collection.
			 * @returns {Adobe.Indesign.ValidationError}
			 */
			public middleItem(): Adobe.Indesign.ValidationError;
			/**
			 * Returns the ValidationError whose index follows the 
			 * specified ValidationError in the collection.
			 * @param {ValidationError} objParam The ValidationError whose 
			 * index comes before the desired ValidationError. 
			 * @returns {Adobe.Indesign.ValidationError}
			 */
			public nextItem(objParam: ValidationError): Adobe.Indesign.ValidationError;
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
			 * Returns the ValidationError with the index previous to the 
			 * specified index.
			 * @param {ValidationError} objParam The index of the 
			 * ValidationError that follows the desired ValidationError.
			 * @returns {Adobe.Indesign.ValidationError}
			 */
			public previousItem(objParam: ValidationError): Adobe.Indesign.ValidationError;
		}
	}
}