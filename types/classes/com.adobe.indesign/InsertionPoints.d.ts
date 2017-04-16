/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class InsertionPoints extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any InsertionPoint in the collection.
			 * @returns {Adobe.Indesign.InsertionPoint}
			 */
			public anyItem(): Adobe.Indesign.InsertionPoint;
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
			 * @returns {Adobe.Indesign.InsertionPoint}
			 */
			public firstItem(): Adobe.Indesign.InsertionPoint;
			/**
			 * Returns the InsertionPoint with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.InsertionPoint}
			 */
			public item(indexParam: any): Adobe.Indesign.InsertionPoint;
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
			 * @returns {Adobe.Indesign.InsertionPoint}
			 */
			public lastItem(): Adobe.Indesign.InsertionPoint;
			/**
			 * Returns the middle InsertionPoint in the collection.
			 * @returns {Adobe.Indesign.InsertionPoint}
			 */
			public middleItem(): Adobe.Indesign.InsertionPoint;
			/**
			 * Returns the InsertionPoint whose index follows the specified 
			 * InsertionPoint in the collection.
			 * @param {InsertionPoint} objParam The InsertionPoint whose 
			 * index comes before the desired InsertionPoint. 
			 * @returns {Adobe.Indesign.InsertionPoint}
			 */
			public nextItem(objParam: InsertionPoint): Adobe.Indesign.InsertionPoint;
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
			 * @returns {Adobe.Indesign.InsertionPoint}
			 */
			public previousItem(objParam: InsertionPoint): Adobe.Indesign.InsertionPoint;
		}
	}
}