/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PageItems extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any PageItem in the collection.
			 * @returns {Adobe.Indesign.PageItem}
			 */
			public anyItem(): Adobe.Indesign.PageItem;
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
			 * @returns {Adobe.Indesign.PageItem}
			 */
			public firstItem(): Adobe.Indesign.PageItem;
			/**
			 * Returns the PageItem with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.PageItem}
			 */
			public item(indexParam: any): Adobe.Indesign.PageItem;
			/**
			 * Returns the PageItem with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.PageItem}
			 */
			public itemByID(idParam: number): Adobe.Indesign.PageItem;
			/**
			 * Returns the PageItem with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.PageItem}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.PageItem;
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
			 * @returns {Adobe.Indesign.PageItem}
			 */
			public lastItem(): Adobe.Indesign.PageItem;
			/**
			 * Returns the middle PageItem in the collection.
			 * @returns {Adobe.Indesign.PageItem}
			 */
			public middleItem(): Adobe.Indesign.PageItem;
			/**
			 * Returns the PageItem whose index follows the specified 
			 * PageItem in the collection.
			 * @param {PageItem} objParam The PageItem whose index comes 
			 * before the desired PageItem. 
			 * @returns {Adobe.Indesign.PageItem}
			 */
			public nextItem(objParam: PageItem): Adobe.Indesign.PageItem;
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
			 * @returns {Adobe.Indesign.PageItem}
			 */
			public previousItem(objParam: PageItem): Adobe.Indesign.PageItem;
		}
	}
}