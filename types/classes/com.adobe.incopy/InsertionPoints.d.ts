/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class InsertionPoints extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any InsertionPoint in the collection.
			 * @returns {Adobe.Incopy.InsertionPoint}
			 */
			public anyItem(): Adobe.Incopy.InsertionPoint;
			/**
			 * Displays the number of elements in the InsertionPoint.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every InsertionPoint in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first InsertionPoint in the collection.
			 * @returns {Adobe.Incopy.InsertionPoint}
			 */
			public firstItem(): Adobe.Incopy.InsertionPoint;
			/**
			 * Returns the InsertionPoint with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.InsertionPoint}
			 */
			public item(indexParam: any): Adobe.Incopy.InsertionPoint;
			/**
			 * Returns the InsertionPoints within the specified range.
			 * @param {any} fromParam The InsertionPoint, index, or name at 
			 * the beginning of the range. Can accept: InsertionPoint, Long 
			 * Integer or String.
			 * @param {any} toParam The InsertionPoint, index, or name at 
			 * the end of the range. Can accept: InsertionPoint, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last InsertionPoint in the collection.
			 * @returns {Adobe.Incopy.InsertionPoint}
			 */
			public lastItem(): Adobe.Incopy.InsertionPoint;
			/**
			 * Returns the middle InsertionPoint in the collection.
			 * @returns {Adobe.Incopy.InsertionPoint}
			 */
			public middleItem(): Adobe.Incopy.InsertionPoint;
			/**
			 * Returns the InsertionPoint whose index follows the specified 
			 * InsertionPoint in the collection.
			 * @param {InsertionPoint} objParam The InsertionPoint whose 
			 * index comes before the desired InsertionPoint. 
			 * @returns {Adobe.Incopy.InsertionPoint}
			 */
			public nextItem(objParam: InsertionPoint): Adobe.Incopy.InsertionPoint;
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
			 * Returns the InsertionPoint with the index previous to the 
			 * specified index.
			 * @param {InsertionPoint} objParam The index of the 
			 * InsertionPoint that follows the desired InsertionPoint.
			 * @returns {Adobe.Incopy.InsertionPoint}
			 */
			public previousItem(objParam: InsertionPoint): Adobe.Incopy.InsertionPoint;
		}
	}
}