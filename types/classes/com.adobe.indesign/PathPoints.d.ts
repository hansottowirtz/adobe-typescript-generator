/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PathPoints extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new PathPoint.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new PathPoint (Optional)
			 * @returns {Adobe.Indesign.PathPoint}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.PathPoint;
			/**
			 * Returns any PathPoint in the collection.
			 * @returns {Adobe.Indesign.PathPoint}
			 */
			public anyItem(): Adobe.Indesign.PathPoint;
			/**
			 * Displays the number of elements in the PathPoint.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every PathPoint in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first PathPoint in the collection.
			 * @returns {Adobe.Indesign.PathPoint}
			 */
			public firstItem(): Adobe.Indesign.PathPoint;
			/**
			 * Returns the PathPoint with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.PathPoint}
			 */
			public item(indexParam: any): Adobe.Indesign.PathPoint;
			/**
			 * Returns the PathPoints within the specified range.
			 * @param {any} fromParam The PathPoint, index, or name at the 
			 * beginning of the range. Can accept: PathPoint, Long Integer 
			 * or String.
			 * @param {any} toParam The PathPoint, index, or name at the 
			 * end of the range. Can accept: PathPoint, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last PathPoint in the collection.
			 * @returns {Adobe.Indesign.PathPoint}
			 */
			public lastItem(): Adobe.Indesign.PathPoint;
			/**
			 * Returns the middle PathPoint in the collection.
			 * @returns {Adobe.Indesign.PathPoint}
			 */
			public middleItem(): Adobe.Indesign.PathPoint;
			/**
			 * Returns the PathPoint whose index follows the specified 
			 * PathPoint in the collection.
			 * @param {PathPoint} objParam The PathPoint whose index comes 
			 * before the desired PathPoint. 
			 * @returns {Adobe.Indesign.PathPoint}
			 */
			public nextItem(objParam: PathPoint): Adobe.Indesign.PathPoint;
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
			 * Returns the PathPoint with the index previous to the 
			 * specified index.
			 * @param {PathPoint} objParam The index of the PathPoint that 
			 * follows the desired PathPoint.
			 * @returns {Adobe.Indesign.PathPoint}
			 */
			public previousItem(objParam: PathPoint): Adobe.Indesign.PathPoint;
		}
	}
}