/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TextFrames extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any TextFrame in the collection.
			 * @returns {Adobe.Incopy.TextFrame}
			 */
			public anyItem(): Adobe.Incopy.TextFrame;
			/**
			 * Displays the number of elements in the TextFrame.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every TextFrame in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first TextFrame in the collection.
			 * @returns {Adobe.Incopy.TextFrame}
			 */
			public firstItem(): Adobe.Incopy.TextFrame;
			/**
			 * Returns the TextFrame with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.TextFrame}
			 */
			public item(indexParam: any): Adobe.Incopy.TextFrame;
			/**
			 * Returns the TextFrame with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.TextFrame}
			 */
			public itemByID(idParam: number): Adobe.Incopy.TextFrame;
			/**
			 * Returns the TextFrame with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.TextFrame}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.TextFrame;
			/**
			 * Returns the TextFrames within the specified range.
			 * @param {any} fromParam The TextFrame, index, or name at the 
			 * beginning of the range. Can accept: TextFrame, Long Integer 
			 * or String.
			 * @param {any} toParam The TextFrame, index, or name at the 
			 * end of the range. Can accept: TextFrame, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last TextFrame in the collection.
			 * @returns {Adobe.Incopy.TextFrame}
			 */
			public lastItem(): Adobe.Incopy.TextFrame;
			/**
			 * Returns the middle TextFrame in the collection.
			 * @returns {Adobe.Incopy.TextFrame}
			 */
			public middleItem(): Adobe.Incopy.TextFrame;
			/**
			 * Returns the TextFrame whose index follows the specified 
			 * TextFrame in the collection.
			 * @param {TextFrame} objParam The TextFrame whose index comes 
			 * before the desired TextFrame. 
			 * @returns {Adobe.Incopy.TextFrame}
			 */
			public nextItem(objParam: TextFrame): Adobe.Incopy.TextFrame;
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
			 * Returns the TextFrame with the index previous to the 
			 * specified index.
			 * @param {TextFrame} objParam The index of the TextFrame that 
			 * follows the desired TextFrame.
			 * @returns {Adobe.Incopy.TextFrame}
			 */
			public previousItem(objParam: TextFrame): Adobe.Incopy.TextFrame;
		}
	}
}