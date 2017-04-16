/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Paths extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any Path in the collection. */
			public anyItem(): Adobe.Incopy.Path;
			/** Displays the number of elements in the Path. */
			public count(): number;
			/** Returns every Path in the collection. */
			public everyItem(): any;
			/** Returns the first Path in the collection. */
			public firstItem(): Adobe.Incopy.Path;
			/**
			 * Returns the Path with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.Path;
			/**
			 * Returns the Paths within the specified range.
			 * @param {any} fromParam The Path, index, or name at the 
			 * beginning of the range. Can accept: Path, Long Integer or 
			 * String.
			 * @param {any} toParam The Path, index, or name at the end of 
			 * the range. Can accept: Path, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Path in the collection. */
			public lastItem(): Adobe.Incopy.Path;
			/** Returns the middle Path in the collection. */
			public middleItem(): Adobe.Incopy.Path;
			/**
			 * Returns the Path whose index follows the specified Path in 
			 * the collection.
			 * @param {Path} objParam The Path whose index comes before the 
			 * desired Path. 
			 */
			public nextItem(objParam: Path): Adobe.Incopy.Path;
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
			 * Returns the Path with the index previous to the specified 
			 * index.
			 * @param {Path} objParam The index of the Path that follows 
			 * the desired Path.
			 */
			public previousItem(objParam: Path): Adobe.Incopy.Path;
		}
	}
}