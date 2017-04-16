/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Lines extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Line in the collection.
			 * @returns {Adobe.Indesign.Line}
			 */
			public anyItem(): Adobe.Indesign.Line;
			/**
			 * Displays the number of elements in the Line.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Line in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Line in the collection.
			 * @returns {Adobe.Indesign.Line}
			 */
			public firstItem(): Adobe.Indesign.Line;
			/**
			 * Returns the Line with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Line}
			 */
			public item(indexParam: any): Adobe.Indesign.Line;
			/**
			 * Returns the Lines within the specified range.
			 * @param {any} fromParam The Line, index, or name at the 
			 * beginning of the range. Can accept: Line, Long Integer or 
			 * String.
			 * @param {any} toParam The Line, index, or name at the end of 
			 * the range. Can accept: Line, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Line in the collection.
			 * @returns {Adobe.Indesign.Line}
			 */
			public lastItem(): Adobe.Indesign.Line;
			/**
			 * Returns the middle Line in the collection.
			 * @returns {Adobe.Indesign.Line}
			 */
			public middleItem(): Adobe.Indesign.Line;
			/**
			 * Returns the Line whose index follows the specified Line in 
			 * the collection.
			 * @param {Line} objParam The Line whose index comes before the 
			 * desired Line. 
			 * @returns {Adobe.Indesign.Line}
			 */
			public nextItem(objParam: Line): Adobe.Indesign.Line;
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
			 * Returns the Line with the index previous to the specified 
			 * index.
			 * @param {Line} objParam The index of the Line that follows 
			 * the desired Line.
			 * @returns {Adobe.Indesign.Line}
			 */
			public previousItem(objParam: Line): Adobe.Indesign.Line;
		}
	}
}