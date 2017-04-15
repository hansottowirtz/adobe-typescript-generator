/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ValidationErrors extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any ValidationError in the collection. */
			public anyItem(): Adobe.Incopy.ValidationError;
			/** Displays the number of elements in the ValidationError. */
			public count(): number;
			/** Returns every ValidationError in the collection. */
			public everyItem(): any;
			/** Returns the first ValidationError in the collection. */
			public firstItem(): Adobe.Incopy.ValidationError;
			/**
			 * Returns the ValidationError with the specified index or 
			 * name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.ValidationError;
			/**
			 * Returns the ValidationErrors within the specified range.
			 * @param {any} fromParam - The ValidationError, index, or name 
			 * at the beginning of the range. Can accept: ValidationError, 
			 * Long Integer or String.
			 * @param {any} toParam - The ValidationError, index, or name 
			 * at the end of the range. Can accept: ValidationError, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last ValidationError in the collection. */
			public lastItem(): Adobe.Incopy.ValidationError;
			/** Returns the middle ValidationError in the collection. */
			public middleItem(): Adobe.Incopy.ValidationError;
			/**
			 * Returns the ValidationError whose index follows the 
			 * specified ValidationError in the collection.
			 * @param {ValidationError} objParam - The ValidationError 
			 * whose index comes before the desired ValidationError. 
			 */
			public nextItem(objParam: ValidationError): Adobe.Incopy.ValidationError;
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
			 * Returns the ValidationError with the index previous to the 
			 * specified index.
			 * @param {ValidationError} objParam - The index of the 
			 * ValidationError that follows the desired ValidationError.
			 */
			public previousItem(objParam: ValidationError): Adobe.Incopy.ValidationError;
		}
	}
}