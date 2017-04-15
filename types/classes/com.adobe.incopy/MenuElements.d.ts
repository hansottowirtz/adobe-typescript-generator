/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class MenuElements extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any MenuElement in the collection. */
			public anyItem(): Adobe.Incopy.MenuElement;
			/** Displays the number of elements in the MenuElement. */
			public count(): number;
			/** Returns every MenuElement in the collection. */
			public everyItem(): any;
			/** Returns the first MenuElement in the collection. */
			public firstItem(): Adobe.Incopy.MenuElement;
			/**
			 * Returns the MenuElement with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.MenuElement;
			/**
			 * Returns the MenuElements within the specified range.
			 * @param {any} fromParam - The MenuElement, index, or name at 
			 * the beginning of the range. Can accept: MenuElement, Long 
			 * Integer or String.
			 * @param {any} toParam - The MenuElement, index, or name at 
			 * the end of the range. Can accept: MenuElement, Long Integer 
			 * or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last MenuElement in the collection. */
			public lastItem(): Adobe.Incopy.MenuElement;
			/** Returns the middle MenuElement in the collection. */
			public middleItem(): Adobe.Incopy.MenuElement;
			/**
			 * Returns the MenuElement whose index follows the specified 
			 * MenuElement in the collection.
			 * @param {MenuElement} objParam - The MenuElement whose index 
			 * comes before the desired MenuElement. 
			 */
			public nextItem(objParam: MenuElement): Adobe.Incopy.MenuElement;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx - 
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index - 
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the MenuElement with the index previous to the 
			 * specified index.
			 * @param {MenuElement} objParam - The index of the MenuElement 
			 * that follows the desired MenuElement.
			 */
			public previousItem(objParam: MenuElement): Adobe.Incopy.MenuElement;
		}
	}
}