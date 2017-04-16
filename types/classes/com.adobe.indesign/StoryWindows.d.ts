/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class StoryWindows extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any StoryWindow in the collection.
			 * @returns {Adobe.Indesign.StoryWindow}
			 */
			public anyItem(): Adobe.Indesign.StoryWindow;
			/**
			 * Displays the number of elements in the StoryWindow.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every StoryWindow in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first StoryWindow in the collection.
			 * @returns {Adobe.Indesign.StoryWindow}
			 */
			public firstItem(): Adobe.Indesign.StoryWindow;
			/**
			 * Returns the StoryWindow with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.StoryWindow}
			 */
			public item(indexParam: any): Adobe.Indesign.StoryWindow;
			/**
			 * Returns the StoryWindow with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.StoryWindow}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.StoryWindow;
			/**
			 * Returns the StoryWindows within the specified range.
			 * @param {any} fromParam The StoryWindow, index, or name at 
			 * the beginning of the range. Can accept: StoryWindow, Long 
			 * Integer or String.
			 * @param {any} toParam The StoryWindow, index, or name at the 
			 * end of the range. Can accept: StoryWindow, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last StoryWindow in the collection.
			 * @returns {Adobe.Indesign.StoryWindow}
			 */
			public lastItem(): Adobe.Indesign.StoryWindow;
			/**
			 * Returns the middle StoryWindow in the collection.
			 * @returns {Adobe.Indesign.StoryWindow}
			 */
			public middleItem(): Adobe.Indesign.StoryWindow;
			/**
			 * Returns the StoryWindow whose index follows the specified 
			 * StoryWindow in the collection.
			 * @param {StoryWindow} objParam The StoryWindow whose index 
			 * comes before the desired StoryWindow. 
			 * @returns {Adobe.Indesign.StoryWindow}
			 */
			public nextItem(objParam: StoryWindow): Adobe.Indesign.StoryWindow;
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
			 * Returns the StoryWindow with the index previous to the 
			 * specified index.
			 * @param {StoryWindow} objParam The index of the StoryWindow 
			 * that follows the desired StoryWindow.
			 * @returns {Adobe.Indesign.StoryWindow}
			 */
			public previousItem(objParam: StoryWindow): Adobe.Indesign.StoryWindow;
		}
	}
}