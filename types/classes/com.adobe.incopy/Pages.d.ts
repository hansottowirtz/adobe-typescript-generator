/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Pages extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Page in the collection.
			 * @returns {Adobe.Incopy.Page}
			 */
			public anyItem(): Adobe.Incopy.Page;
			/**
			 * Displays the number of elements in the Page.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Page in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Page in the collection.
			 * @returns {Adobe.Incopy.Page}
			 */
			public firstItem(): Adobe.Incopy.Page;
			/**
			 * Returns the Page with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.Page}
			 */
			public item(indexParam: any): Adobe.Incopy.Page;
			/**
			 * Returns the Page with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.Page}
			 */
			public itemByID(idParam: number): Adobe.Incopy.Page;
			/**
			 * Returns the Page with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.Page}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Page;
			/**
			 * Returns the Pages within the specified range.
			 * @param {any} fromParam The Page, index, or name at the 
			 * beginning of the range. Can accept: Page, Long Integer or 
			 * String.
			 * @param {any} toParam The Page, index, or name at the end of 
			 * the range. Can accept: Page, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Page in the collection.
			 * @returns {Adobe.Incopy.Page}
			 */
			public lastItem(): Adobe.Incopy.Page;
			/**
			 * Returns the middle Page in the collection.
			 * @returns {Adobe.Incopy.Page}
			 */
			public middleItem(): Adobe.Incopy.Page;
			/**
			 * Returns the Page whose index follows the specified Page in 
			 * the collection.
			 * @param {Page} objParam The Page whose index comes before the 
			 * desired Page. 
			 * @returns {Adobe.Incopy.Page}
			 */
			public nextItem(objParam: Page): Adobe.Incopy.Page;
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
			 * Returns the Page with the index previous to the specified 
			 * index.
			 * @param {Page} objParam The index of the Page that follows 
			 * the desired Page.
			 * @returns {Adobe.Incopy.Page}
			 */
			public previousItem(objParam: Page): Adobe.Incopy.Page;
		}
	}
}