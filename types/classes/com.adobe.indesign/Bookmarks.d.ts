/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Bookmarks extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new bookmark.
			 * @param {any} destinationParam The bookmark destination. Can 
			 * accept: HyperlinkTextDestination, HyperlinkPageDestination, 
			 * HyperlinkExternalPageDestination or Page.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Bookmark (Optional)
			 * @returns {Adobe.Indesign.Bookmark}
			 */
			public add(destinationParam: any, withPropertiesParam: any): Adobe.Indesign.Bookmark;
			/**
			 * Returns any Bookmark in the collection.
			 * @returns {Adobe.Indesign.Bookmark}
			 */
			public anyItem(): Adobe.Indesign.Bookmark;
			/**
			 * Displays the number of elements in the Bookmark.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Bookmark in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Bookmark in the collection.
			 * @returns {Adobe.Indesign.Bookmark}
			 */
			public firstItem(): Adobe.Indesign.Bookmark;
			/**
			 * Returns the Bookmark with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Bookmark}
			 */
			public item(indexParam: any): Adobe.Indesign.Bookmark;
			/**
			 * Returns the Bookmark with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.Bookmark}
			 */
			public itemByID(idParam: number): Adobe.Indesign.Bookmark;
			/**
			 * Returns the Bookmark with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.Bookmark}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Bookmark;
			/**
			 * Returns the Bookmarks within the specified range.
			 * @param {any} fromParam The Bookmark, index, or name at the 
			 * beginning of the range. Can accept: Bookmark, Long Integer 
			 * or String.
			 * @param {any} toParam The Bookmark, index, or name at the end 
			 * of the range. Can accept: Bookmark, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Bookmark in the collection.
			 * @returns {Adobe.Indesign.Bookmark}
			 */
			public lastItem(): Adobe.Indesign.Bookmark;
			/**
			 * Returns the middle Bookmark in the collection.
			 * @returns {Adobe.Indesign.Bookmark}
			 */
			public middleItem(): Adobe.Indesign.Bookmark;
			/**
			 * Returns the Bookmark whose index follows the specified 
			 * Bookmark in the collection.
			 * @param {Bookmark} objParam The Bookmark whose index comes 
			 * before the desired Bookmark. 
			 * @returns {Adobe.Indesign.Bookmark}
			 */
			public nextItem(objParam: Bookmark): Adobe.Indesign.Bookmark;
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
			 * Returns the Bookmark with the index previous to the 
			 * specified index.
			 * @param {Bookmark} objParam The index of the Bookmark that 
			 * follows the desired Bookmark.
			 * @returns {Adobe.Indesign.Bookmark}
			 */
			public previousItem(objParam: Bookmark): Adobe.Indesign.Bookmark;
		}
	}
}