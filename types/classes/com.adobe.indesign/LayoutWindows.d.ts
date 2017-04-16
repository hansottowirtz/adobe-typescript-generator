/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class LayoutWindows extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any LayoutWindow in the collection. */
			public anyItem(): Adobe.Indesign.LayoutWindow;
			/** Displays the number of elements in the LayoutWindow. */
			public count(): number;
			/** Returns every LayoutWindow in the collection. */
			public everyItem(): any;
			/** Returns the first LayoutWindow in the collection. */
			public firstItem(): Adobe.Indesign.LayoutWindow;
			/**
			 * Returns the LayoutWindow with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.LayoutWindow;
			/**
			 * Returns the LayoutWindow with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.LayoutWindow;
			/**
			 * Returns the LayoutWindows within the specified range.
			 * @param {any} fromParam The LayoutWindow, index, or name at 
			 * the beginning of the range. Can accept: LayoutWindow, Long 
			 * Integer or String.
			 * @param {any} toParam The LayoutWindow, index, or name at the 
			 * end of the range. Can accept: LayoutWindow, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last LayoutWindow in the collection. */
			public lastItem(): Adobe.Indesign.LayoutWindow;
			/** Returns the middle LayoutWindow in the collection. */
			public middleItem(): Adobe.Indesign.LayoutWindow;
			/**
			 * Returns the LayoutWindow whose index follows the specified 
			 * LayoutWindow in the collection.
			 * @param {LayoutWindow} objParam The LayoutWindow whose index 
			 * comes before the desired LayoutWindow. 
			 */
			public nextItem(objParam: LayoutWindow): Adobe.Indesign.LayoutWindow;
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
			 * Returns the LayoutWindow with the index previous to the 
			 * specified index.
			 * @param {LayoutWindow} objParam The index of the LayoutWindow 
			 * that follows the desired LayoutWindow.
			 */
			public previousItem(objParam: LayoutWindow): Adobe.Indesign.LayoutWindow;
		}
	}
}