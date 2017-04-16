/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Bookmarks extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new bookmark.
			 * @param {any} destinationParam The bookmark destination. Can 
			 * accept: HyperlinkTextDestination, HyperlinkPageDestination, 
			 * HyperlinkExternalPageDestination or Page.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Bookmark (Optional)
			 */
			public add(destinationParam: any, withPropertiesParam: any): Adobe.Indesign.Bookmark;
			/** Returns any Bookmark in the collection. */
			public anyItem(): Adobe.Indesign.Bookmark;
			/** Displays the number of elements in the Bookmark. */
			public count(): number;
			/** Returns every Bookmark in the collection. */
			public everyItem(): any;
			/** Returns the first Bookmark in the collection. */
			public firstItem(): Adobe.Indesign.Bookmark;
			/**
			 * Returns the Bookmark with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.Bookmark;
			/**
			 * Returns the Bookmark with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.Bookmark;
			/**
			 * Returns the Bookmark with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Bookmark;
			/**
			 * Returns the Bookmarks within the specified range.
			 * @param {any} fromParam The Bookmark, index, or name at the 
			 * beginning of the range. Can accept: Bookmark, Long Integer 
			 * or String.
			 * @param {any} toParam The Bookmark, index, or name at the end 
			 * of the range. Can accept: Bookmark, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Bookmark in the collection. */
			public lastItem(): Adobe.Indesign.Bookmark;
			/** Returns the middle Bookmark in the collection. */
			public middleItem(): Adobe.Indesign.Bookmark;
			/**
			 * Returns the Bookmark whose index follows the specified 
			 * Bookmark in the collection.
			 * @param {Bookmark} objParam The Bookmark whose index comes 
			 * before the desired Bookmark. 
			 */
			public nextItem(objParam: Bookmark): Adobe.Indesign.Bookmark;
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
			 * Returns the Bookmark with the index previous to the 
			 * specified index.
			 * @param {Bookmark} objParam The index of the Bookmark that 
			 * follows the desired Bookmark.
			 */
			public previousItem(objParam: Bookmark): Adobe.Indesign.Bookmark;
		}
	}
}