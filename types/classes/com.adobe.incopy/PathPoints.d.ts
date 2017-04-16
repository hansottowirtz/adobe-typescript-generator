/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class PathPoints extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any PathPoint in the collection. */
			public anyItem(): Adobe.Incopy.PathPoint;
			/** Displays the number of elements in the PathPoint. */
			public count(): number;
			/** Returns every PathPoint in the collection. */
			public everyItem(): any;
			/** Returns the first PathPoint in the collection. */
			public firstItem(): Adobe.Incopy.PathPoint;
			/**
			 * Returns the PathPoint with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.PathPoint;
			/**
			 * Returns the PathPoints within the specified range.
			 * @param {any} fromParam The PathPoint, index, or name at the 
			 * beginning of the range. Can accept: PathPoint, Long Integer 
			 * or String.
			 * @param {any} toParam The PathPoint, index, or name at the 
			 * end of the range. Can accept: PathPoint, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last PathPoint in the collection. */
			public lastItem(): Adobe.Incopy.PathPoint;
			/** Returns the middle PathPoint in the collection. */
			public middleItem(): Adobe.Incopy.PathPoint;
			/**
			 * Returns the PathPoint whose index follows the specified 
			 * PathPoint in the collection.
			 * @param {PathPoint} objParam The PathPoint whose index comes 
			 * before the desired PathPoint. 
			 */
			public nextItem(objParam: PathPoint): Adobe.Incopy.PathPoint;
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
			 * Returns the PathPoint with the index previous to the 
			 * specified index.
			 * @param {PathPoint} objParam The index of the PathPoint that 
			 * follows the desired PathPoint.
			 */
			public previousItem(objParam: PathPoint): Adobe.Incopy.PathPoint;
		}
	}
}