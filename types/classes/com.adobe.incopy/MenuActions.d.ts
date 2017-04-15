/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class MenuActions extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any MenuAction in the collection. */
			public anyItem(): Adobe.Incopy.MenuAction;
			/** Displays the number of elements in the MenuAction. */
			public count(): number;
			/** Returns every MenuAction in the collection. */
			public everyItem(): any;
			/** Returns the first MenuAction in the collection. */
			public firstItem(): Adobe.Incopy.MenuAction;
			/**
			 * Returns the MenuAction with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.MenuAction;
			/**
			 * Returns the MenuAction with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.MenuAction;
			/**
			 * Returns the MenuAction with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.MenuAction;
			/**
			 * Returns the MenuActions within the specified range.
			 * @param {any} fromParam - The MenuAction, index, or name at 
			 * the beginning of the range. Can accept: MenuAction, Long 
			 * Integer or String.
			 * @param {any} toParam - The MenuAction, index, or name at the 
			 * end of the range. Can accept: MenuAction, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last MenuAction in the collection. */
			public lastItem(): Adobe.Incopy.MenuAction;
			/** Returns the middle MenuAction in the collection. */
			public middleItem(): Adobe.Incopy.MenuAction;
			/**
			 * Returns the MenuAction whose index follows the specified 
			 * MenuAction in the collection.
			 * @param {MenuAction} objParam - The MenuAction whose index 
			 * comes before the desired MenuAction. 
			 */
			public nextItem(objParam: MenuAction): Adobe.Incopy.MenuAction;
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
			 * Returns the MenuAction with the index previous to the 
			 * specified index.
			 * @param {MenuAction} objParam - The index of the MenuAction 
			 * that follows the desired MenuAction.
			 */
			public previousItem(objParam: MenuAction): Adobe.Incopy.MenuAction;
		}
	}
}