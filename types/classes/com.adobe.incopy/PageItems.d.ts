/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class PageItems extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any PageItem in the collection.
			 * @returns {Adobe.Incopy.PageItem}
			 */
			public anyItem(): Adobe.Incopy.PageItem;
			/**
			 * Displays the number of elements in the PageItem.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every PageItem in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first PageItem in the collection.
			 * @returns {Adobe.Incopy.PageItem}
			 */
			public firstItem(): Adobe.Incopy.PageItem;
			/**
			 * Returns the PageItem with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.PageItem}
			 */
			public item(indexParam: any): Adobe.Incopy.PageItem;
			/**
			 * Returns the PageItem with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.PageItem}
			 */
			public itemByID(idParam: number): Adobe.Incopy.PageItem;
			/**
			 * Returns the PageItem with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.PageItem}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.PageItem;
			/**
			 * Returns the PageItems within the specified range.
			 * @param {any} fromParam The PageItem, index, or name at the 
			 * beginning of the range. Can accept: PageItem, Long Integer 
			 * or String.
			 * @param {any} toParam The PageItem, index, or name at the end 
			 * of the range. Can accept: PageItem, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last PageItem in the collection.
			 * @returns {Adobe.Incopy.PageItem}
			 */
			public lastItem(): Adobe.Incopy.PageItem;
			/**
			 * Returns the middle PageItem in the collection.
			 * @returns {Adobe.Incopy.PageItem}
			 */
			public middleItem(): Adobe.Incopy.PageItem;
			/**
			 * Returns the PageItem whose index follows the specified 
			 * PageItem in the collection.
			 * @param {PageItem} objParam The PageItem whose index comes 
			 * before the desired PageItem. 
			 * @returns {Adobe.Incopy.PageItem}
			 */
			public nextItem(objParam: PageItem): Adobe.Incopy.PageItem;
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
			 * Returns the PageItem with the index previous to the 
			 * specified index.
			 * @param {PageItem} objParam The index of the PageItem that 
			 * follows the desired PageItem.
			 * @returns {Adobe.Incopy.PageItem}
			 */
			public previousItem(objParam: PageItem): Adobe.Incopy.PageItem;
		}
	}
}