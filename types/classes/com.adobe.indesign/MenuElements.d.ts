/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class MenuElements extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any MenuElement in the collection.
			 * @returns {Adobe.Indesign.MenuElement}
			 */
			public anyItem(): Adobe.Indesign.MenuElement;
			/**
			 * Displays the number of elements in the MenuElement.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every MenuElement in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first MenuElement in the collection.
			 * @returns {Adobe.Indesign.MenuElement}
			 */
			public firstItem(): Adobe.Indesign.MenuElement;
			/**
			 * Returns the MenuElement with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.MenuElement}
			 */
			public item(indexParam: any): Adobe.Indesign.MenuElement;
			/**
			 * Returns the MenuElements within the specified range.
			 * @param {any} fromParam The MenuElement, index, or name at 
			 * the beginning of the range. Can accept: MenuElement, Long 
			 * Integer or String.
			 * @param {any} toParam The MenuElement, index, or name at the 
			 * end of the range. Can accept: MenuElement, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last MenuElement in the collection.
			 * @returns {Adobe.Indesign.MenuElement}
			 */
			public lastItem(): Adobe.Indesign.MenuElement;
			/**
			 * Returns the middle MenuElement in the collection.
			 * @returns {Adobe.Indesign.MenuElement}
			 */
			public middleItem(): Adobe.Indesign.MenuElement;
			/**
			 * Returns the MenuElement whose index follows the specified 
			 * MenuElement in the collection.
			 * @param {MenuElement} objParam The MenuElement whose index 
			 * comes before the desired MenuElement. 
			 * @returns {Adobe.Indesign.MenuElement}
			 */
			public nextItem(objParam: MenuElement): Adobe.Indesign.MenuElement;
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
			 * Returns the MenuElement with the index previous to the 
			 * specified index.
			 * @param {MenuElement} objParam The index of the MenuElement 
			 * that follows the desired MenuElement.
			 * @returns {Adobe.Indesign.MenuElement}
			 */
			public previousItem(objParam: MenuElement): Adobe.Indesign.MenuElement;
		}
	}
}