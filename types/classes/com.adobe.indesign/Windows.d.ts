/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Windows extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new Window.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Window (Optional)
			 * @returns {Adobe.Indesign.Window}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.Window;
			/**
			 * Returns any Window in the collection.
			 * @returns {Adobe.Indesign.Window}
			 */
			public anyItem(): Adobe.Indesign.Window;
			/**
			 * Displays the number of elements in the Window.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Window in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Window in the collection.
			 * @returns {Adobe.Indesign.Window}
			 */
			public firstItem(): Adobe.Indesign.Window;
			/**
			 * Returns the Window with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Window}
			 */
			public item(indexParam: any): Adobe.Indesign.Window;
			/**
			 * Returns the Window with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.Window}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Window;
			/**
			 * Returns the Windows within the specified range.
			 * @param {any} fromParam The Window, index, or name at the 
			 * beginning of the range. Can accept: Window, Long Integer or 
			 * String.
			 * @param {any} toParam The Window, index, or name at the end 
			 * of the range. Can accept: Window, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Window in the collection.
			 * @returns {Adobe.Indesign.Window}
			 */
			public lastItem(): Adobe.Indesign.Window;
			/**
			 * Returns the middle Window in the collection.
			 * @returns {Adobe.Indesign.Window}
			 */
			public middleItem(): Adobe.Indesign.Window;
			/**
			 * Returns the Window whose index follows the specified Window 
			 * in the collection.
			 * @param {Window} objParam The Window whose index comes before 
			 * the desired Window. 
			 * @returns {Adobe.Indesign.Window}
			 */
			public nextItem(objParam: Window): Adobe.Indesign.Window;
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
			 * Returns the Window with the index previous to the specified 
			 * index.
			 * @param {Window} objParam The index of the Window that 
			 * follows the desired Window.
			 * @returns {Adobe.Indesign.Window}
			 */
			public previousItem(objParam: Window): Adobe.Indesign.Window;
		}
	}
}