/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Windows extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new Window.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new Window (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.Window;
			/** Returns any Window in the collection. */
			public anyItem(): Adobe.Incopy.Window;
			/** Displays the number of elements in the Window. */
			public count(): number;
			/** Returns every Window in the collection. */
			public everyItem(): any;
			/** Returns the first Window in the collection. */
			public firstItem(): Adobe.Incopy.Window;
			/**
			 * Returns the Window with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.Window;
			/**
			 * Returns the Window with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Window;
			/**
			 * Returns the Windows within the specified range.
			 * @param {any} fromParam - The Window, index, or name at the 
			 * beginning of the range. Can accept: Window, Long Integer or 
			 * String.
			 * @param {any} toParam - The Window, index, or name at the end 
			 * of the range. Can accept: Window, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Window in the collection. */
			public lastItem(): Adobe.Incopy.Window;
			/** Returns the middle Window in the collection. */
			public middleItem(): Adobe.Incopy.Window;
			/**
			 * Returns the Window whose index follows the specified Window 
			 * in the collection.
			 * @param {Window} objParam - The Window whose index comes 
			 * before the desired Window. 
			 */
			public nextItem(objParam: Window): Adobe.Incopy.Window;
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
			 * Returns the Window with the index previous to the specified 
			 * index.
			 * @param {Window} objParam - The index of the Window that 
			 * follows the desired Window.
			 */
			public previousItem(objParam: Window): Adobe.Incopy.Window;
		}
	}
}