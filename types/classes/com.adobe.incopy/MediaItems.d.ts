/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class MediaItems extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any MediaItem in the collection. */
			public anyItem(): Adobe.Incopy.MediaItem;
			/** Displays the number of elements in the MediaItem. */
			public count(): number;
			/** Returns every MediaItem in the collection. */
			public everyItem(): any;
			/** Returns the first MediaItem in the collection. */
			public firstItem(): Adobe.Incopy.MediaItem;
			/**
			 * Returns the MediaItem with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.MediaItem;
			/**
			 * Returns the MediaItem with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.MediaItem;
			/**
			 * Returns the MediaItem with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.MediaItem;
			/**
			 * Returns the MediaItems within the specified range.
			 * @param {any} fromParam The MediaItem, index, or name at the 
			 * beginning of the range. Can accept: MediaItem, Long Integer 
			 * or String.
			 * @param {any} toParam The MediaItem, index, or name at the 
			 * end of the range. Can accept: MediaItem, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last MediaItem in the collection. */
			public lastItem(): Adobe.Incopy.MediaItem;
			/** Returns the middle MediaItem in the collection. */
			public middleItem(): Adobe.Incopy.MediaItem;
			/**
			 * Returns the MediaItem whose index follows the specified 
			 * MediaItem in the collection.
			 * @param {MediaItem} objParam The MediaItem whose index comes 
			 * before the desired MediaItem. 
			 */
			public nextItem(objParam: MediaItem): Adobe.Incopy.MediaItem;
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
			 * Returns the MediaItem with the index previous to the 
			 * specified index.
			 * @param {MediaItem} objParam The index of the MediaItem that 
			 * follows the desired MediaItem.
			 */
			public previousItem(objParam: MediaItem): Adobe.Incopy.MediaItem;
		}
	}
}