/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SplineItems extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any SplineItem in the collection.
			 * @returns {Adobe.Indesign.SplineItem}
			 */
			public anyItem(): Adobe.Indesign.SplineItem;
			/**
			 * Displays the number of elements in the SplineItem.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every SplineItem in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first SplineItem in the collection.
			 * @returns {Adobe.Indesign.SplineItem}
			 */
			public firstItem(): Adobe.Indesign.SplineItem;
			/**
			 * Returns the SplineItem with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.SplineItem}
			 */
			public item(indexParam: any): Adobe.Indesign.SplineItem;
			/**
			 * Returns the SplineItem with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.SplineItem}
			 */
			public itemByID(idParam: number): Adobe.Indesign.SplineItem;
			/**
			 * Returns the SplineItem with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.SplineItem}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.SplineItem;
			/**
			 * Returns the SplineItems within the specified range.
			 * @param {any} fromParam The SplineItem, index, or name at the 
			 * beginning of the range. Can accept: SplineItem, Long Integer 
			 * or String.
			 * @param {any} toParam The SplineItem, index, or name at the 
			 * end of the range. Can accept: SplineItem, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last SplineItem in the collection.
			 * @returns {Adobe.Indesign.SplineItem}
			 */
			public lastItem(): Adobe.Indesign.SplineItem;
			/**
			 * Returns the middle SplineItem in the collection.
			 * @returns {Adobe.Indesign.SplineItem}
			 */
			public middleItem(): Adobe.Indesign.SplineItem;
			/**
			 * Returns the SplineItem whose index follows the specified 
			 * SplineItem in the collection.
			 * @param {SplineItem} objParam The SplineItem whose index 
			 * comes before the desired SplineItem. 
			 * @returns {Adobe.Indesign.SplineItem}
			 */
			public nextItem(objParam: SplineItem): Adobe.Indesign.SplineItem;
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
			 * Returns the SplineItem with the index previous to the 
			 * specified index.
			 * @param {SplineItem} objParam The index of the SplineItem 
			 * that follows the desired SplineItem.
			 * @returns {Adobe.Indesign.SplineItem}
			 */
			public previousItem(objParam: SplineItem): Adobe.Indesign.SplineItem;
		}
	}
}