/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Changes extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Change in the collection.
			 * @returns {Adobe.Indesign.Change}
			 */
			public anyItem(): Adobe.Indesign.Change;
			/**
			 * Displays the number of elements in the Change.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Change in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Change in the collection.
			 * @returns {Adobe.Indesign.Change}
			 */
			public firstItem(): Adobe.Indesign.Change;
			/**
			 * Returns the Change with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Change}
			 */
			public item(indexParam: any): Adobe.Indesign.Change;
			/**
			 * Returns the Changes within the specified range.
			 * @param {any} fromParam The Change, index, or name at the 
			 * beginning of the range. Can accept: Change, Long Integer or 
			 * String.
			 * @param {any} toParam The Change, index, or name at the end 
			 * of the range. Can accept: Change, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Change in the collection.
			 * @returns {Adobe.Indesign.Change}
			 */
			public lastItem(): Adobe.Indesign.Change;
			/**
			 * Returns the middle Change in the collection.
			 * @returns {Adobe.Indesign.Change}
			 */
			public middleItem(): Adobe.Indesign.Change;
			/**
			 * Returns the Change whose index follows the specified Change 
			 * in the collection.
			 * @param {Change} objParam The Change whose index comes before 
			 * the desired Change. 
			 * @returns {Adobe.Indesign.Change}
			 */
			public nextItem(objParam: Change): Adobe.Indesign.Change;
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
			 * Returns the Change with the index previous to the specified 
			 * index.
			 * @param {Change} objParam The index of the Change that 
			 * follows the desired Change.
			 * @returns {Adobe.Indesign.Change}
			 */
			public previousItem(objParam: Change): Adobe.Indesign.Change;
		}
	}
}