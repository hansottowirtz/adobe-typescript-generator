/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TextStyleRanges extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any TextStyleRange in the collection.
			 * @returns {Adobe.Incopy.TextStyleRange}
			 */
			public anyItem(): Adobe.Incopy.TextStyleRange;
			/**
			 * Displays the number of elements in the TextStyleRange.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every TextStyleRange in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first TextStyleRange in the collection.
			 * @returns {Adobe.Incopy.TextStyleRange}
			 */
			public firstItem(): Adobe.Incopy.TextStyleRange;
			/**
			 * Returns the TextStyleRange with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.TextStyleRange}
			 */
			public item(indexParam: any): Adobe.Incopy.TextStyleRange;
			/**
			 * Returns the TextStyleRanges within the specified range.
			 * @param {any} fromParam The TextStyleRange, index, or name at 
			 * the beginning of the range. Can accept: TextStyleRange, Long 
			 * Integer or String.
			 * @param {any} toParam The TextStyleRange, index, or name at 
			 * the end of the range. Can accept: TextStyleRange, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last TextStyleRange in the collection.
			 * @returns {Adobe.Incopy.TextStyleRange}
			 */
			public lastItem(): Adobe.Incopy.TextStyleRange;
			/**
			 * Returns the middle TextStyleRange in the collection.
			 * @returns {Adobe.Incopy.TextStyleRange}
			 */
			public middleItem(): Adobe.Incopy.TextStyleRange;
			/**
			 * Returns the TextStyleRange whose index follows the specified 
			 * TextStyleRange in the collection.
			 * @param {TextStyleRange} objParam The TextStyleRange whose 
			 * index comes before the desired TextStyleRange. 
			 * @returns {Adobe.Incopy.TextStyleRange}
			 */
			public nextItem(objParam: TextStyleRange): Adobe.Incopy.TextStyleRange;
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
			 * Returns the TextStyleRange with the index previous to the 
			 * specified index.
			 * @param {TextStyleRange} objParam The index of the 
			 * TextStyleRange that follows the desired TextStyleRange.
			 * @returns {Adobe.Incopy.TextStyleRange}
			 */
			public previousItem(objParam: TextStyleRange): Adobe.Incopy.TextStyleRange;
		}
	}
}