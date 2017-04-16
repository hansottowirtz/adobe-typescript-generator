/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Lines extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any Line in the collection. */
			public anyItem(): Adobe.Incopy.Line;
			/** Displays the number of elements in the Line. */
			public count(): number;
			/** Returns every Line in the collection. */
			public everyItem(): any;
			/** Returns the first Line in the collection. */
			public firstItem(): Adobe.Incopy.Line;
			/**
			 * Returns the Line with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.Line;
			/**
			 * Returns the Lines within the specified range.
			 * @param {any} fromParam The Line, index, or name at the 
			 * beginning of the range. Can accept: Line, Long Integer or 
			 * String.
			 * @param {any} toParam The Line, index, or name at the end of 
			 * the range. Can accept: Line, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Line in the collection. */
			public lastItem(): Adobe.Incopy.Line;
			/** Returns the middle Line in the collection. */
			public middleItem(): Adobe.Incopy.Line;
			/**
			 * Returns the Line whose index follows the specified Line in 
			 * the collection.
			 * @param {Line} objParam The Line whose index comes before the 
			 * desired Line. 
			 */
			public nextItem(objParam: Line): Adobe.Incopy.Line;
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
			 * Returns the Line with the index previous to the specified 
			 * index.
			 * @param {Line} objParam The index of the Line that follows 
			 * the desired Line.
			 */
			public previousItem(objParam: Line): Adobe.Incopy.Line;
		}
	}
}