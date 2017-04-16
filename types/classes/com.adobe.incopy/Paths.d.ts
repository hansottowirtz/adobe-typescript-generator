/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Paths extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Path in the collection.
			 * @returns {Adobe.Incopy.Path}
			 */
			public anyItem(): Adobe.Incopy.Path;
			/**
			 * Displays the number of elements in the Path.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Path in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Path in the collection.
			 * @returns {Adobe.Incopy.Path}
			 */
			public firstItem(): Adobe.Incopy.Path;
			/**
			 * Returns the Path with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.Path}
			 */
			public item(indexParam: any): Adobe.Incopy.Path;
			/**
			 * Returns the Paths within the specified range.
			 * @param {any} fromParam The Path, index, or name at the 
			 * beginning of the range. Can accept: Path, Long Integer or 
			 * String.
			 * @param {any} toParam The Path, index, or name at the end of 
			 * the range. Can accept: Path, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Path in the collection.
			 * @returns {Adobe.Incopy.Path}
			 */
			public lastItem(): Adobe.Incopy.Path;
			/**
			 * Returns the middle Path in the collection.
			 * @returns {Adobe.Incopy.Path}
			 */
			public middleItem(): Adobe.Incopy.Path;
			/**
			 * Returns the Path whose index follows the specified Path in 
			 * the collection.
			 * @param {Path} objParam The Path whose index comes before the 
			 * desired Path. 
			 * @returns {Adobe.Incopy.Path}
			 */
			public nextItem(objParam: Path): Adobe.Incopy.Path;
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
			 * Returns the Path with the index previous to the specified 
			 * index.
			 * @param {Path} objParam The index of the Path that follows 
			 * the desired Path.
			 * @returns {Adobe.Incopy.Path}
			 */
			public previousItem(objParam: Path): Adobe.Incopy.Path;
		}
	}
}