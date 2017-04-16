/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class MenuActions extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any MenuAction in the collection.
			 * @returns {Adobe.Indesign.MenuAction}
			 */
			public anyItem(): Adobe.Indesign.MenuAction;
			/**
			 * Displays the number of elements in the MenuAction.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every MenuAction in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first MenuAction in the collection.
			 * @returns {Adobe.Indesign.MenuAction}
			 */
			public firstItem(): Adobe.Indesign.MenuAction;
			/**
			 * Returns the MenuAction with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.MenuAction}
			 */
			public item(indexParam: any): Adobe.Indesign.MenuAction;
			/**
			 * Returns the MenuAction with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.MenuAction}
			 */
			public itemByID(idParam: number): Adobe.Indesign.MenuAction;
			/**
			 * Returns the MenuAction with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.MenuAction}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.MenuAction;
			/**
			 * Returns the MenuActions within the specified range.
			 * @param {any} fromParam The MenuAction, index, or name at the 
			 * beginning of the range. Can accept: MenuAction, Long Integer 
			 * or String.
			 * @param {any} toParam The MenuAction, index, or name at the 
			 * end of the range. Can accept: MenuAction, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last MenuAction in the collection.
			 * @returns {Adobe.Indesign.MenuAction}
			 */
			public lastItem(): Adobe.Indesign.MenuAction;
			/**
			 * Returns the middle MenuAction in the collection.
			 * @returns {Adobe.Indesign.MenuAction}
			 */
			public middleItem(): Adobe.Indesign.MenuAction;
			/**
			 * Returns the MenuAction whose index follows the specified 
			 * MenuAction in the collection.
			 * @param {MenuAction} objParam The MenuAction whose index 
			 * comes before the desired MenuAction. 
			 * @returns {Adobe.Indesign.MenuAction}
			 */
			public nextItem(objParam: MenuAction): Adobe.Indesign.MenuAction;
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
			 * Returns the MenuAction with the index previous to the 
			 * specified index.
			 * @param {MenuAction} objParam The index of the MenuAction 
			 * that follows the desired MenuAction.
			 * @returns {Adobe.Indesign.MenuAction}
			 */
			public previousItem(objParam: MenuAction): Adobe.Indesign.MenuAction;
		}
	}
}