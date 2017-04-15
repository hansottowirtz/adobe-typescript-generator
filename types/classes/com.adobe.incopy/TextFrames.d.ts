/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TextFrames extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any TextFrame in the collection. */
			public anyItem(): Adobe.Incopy.TextFrame;
			/** Displays the number of elements in the TextFrame. */
			public count(): number;
			/** Returns every TextFrame in the collection. */
			public everyItem(): any;
			/** Returns the first TextFrame in the collection. */
			public firstItem(): Adobe.Incopy.TextFrame;
			/**
			 * Returns the TextFrame with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.TextFrame;
			/**
			 * Returns the TextFrame with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.TextFrame;
			/**
			 * Returns the TextFrame with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.TextFrame;
			/**
			 * Returns the TextFrames within the specified range.
			 * @param {any} fromParam - The TextFrame, index, or name at 
			 * the beginning of the range. Can accept: TextFrame, Long 
			 * Integer or String.
			 * @param {any} toParam - The TextFrame, index, or name at the 
			 * end of the range. Can accept: TextFrame, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last TextFrame in the collection. */
			public lastItem(): Adobe.Incopy.TextFrame;
			/** Returns the middle TextFrame in the collection. */
			public middleItem(): Adobe.Incopy.TextFrame;
			/**
			 * Returns the TextFrame whose index follows the specified 
			 * TextFrame in the collection.
			 * @param {TextFrame} objParam - The TextFrame whose index 
			 * comes before the desired TextFrame. 
			 */
			public nextItem(objParam: TextFrame): Adobe.Incopy.TextFrame;
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
			 * Returns the TextFrame with the index previous to the 
			 * specified index.
			 * @param {TextFrame} objParam - The index of the TextFrame 
			 * that follows the desired TextFrame.
			 */
			public previousItem(objParam: TextFrame): Adobe.Incopy.TextFrame;
		}
	}
}