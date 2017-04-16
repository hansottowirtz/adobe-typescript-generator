/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class MenuItems extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new menu item.
			 * @param {MenuAction} associatedMenuActionParam The menu 
			 * action that implements the  menu item.
			 * @param {LocationOptions} atParam The location of the menu 
			 * item relative to the reference object or within the 
			 * containing object. (Optional)
			 * @param {MenuElement} referenceParam The reference object. 
			 * Note: Required when the at parameter specifies before or 
			 * after. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new MenuItem (Optional)
			 * @returns {Adobe.Indesign.MenuItem}
			 */
			public add(associatedMenuActionParam: MenuAction, atParam: LocationOptions, referenceParam: MenuElement, withPropertiesParam: any): Adobe.Indesign.MenuItem;
			/**
			 * Returns any MenuItem in the collection.
			 * @returns {Adobe.Indesign.MenuItem}
			 */
			public anyItem(): Adobe.Indesign.MenuItem;
			/**
			 * Displays the number of elements in the MenuItem.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every MenuItem in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first MenuItem in the collection.
			 * @returns {Adobe.Indesign.MenuItem}
			 */
			public firstItem(): Adobe.Indesign.MenuItem;
			/**
			 * Returns the MenuItem with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.MenuItem}
			 */
			public item(indexParam: any): Adobe.Indesign.MenuItem;
			/**
			 * Returns the MenuItem with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.MenuItem}
			 */
			public itemByID(idParam: number): Adobe.Indesign.MenuItem;
			/**
			 * Returns the MenuItem with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.MenuItem}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.MenuItem;
			/**
			 * Returns the MenuItems within the specified range.
			 * @param {any} fromParam The MenuItem, index, or name at the 
			 * beginning of the range. Can accept: MenuItem, Long Integer 
			 * or String.
			 * @param {any} toParam The MenuItem, index, or name at the end 
			 * of the range. Can accept: MenuItem, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last MenuItem in the collection.
			 * @returns {Adobe.Indesign.MenuItem}
			 */
			public lastItem(): Adobe.Indesign.MenuItem;
			/**
			 * Returns the middle MenuItem in the collection.
			 * @returns {Adobe.Indesign.MenuItem}
			 */
			public middleItem(): Adobe.Indesign.MenuItem;
			/**
			 * Returns the MenuItem whose index follows the specified 
			 * MenuItem in the collection.
			 * @param {MenuItem} objParam The MenuItem whose index comes 
			 * before the desired MenuItem. 
			 * @returns {Adobe.Indesign.MenuItem}
			 */
			public nextItem(objParam: MenuItem): Adobe.Indesign.MenuItem;
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
			 * Returns the MenuItem with the index previous to the 
			 * specified index.
			 * @param {MenuItem} objParam The index of the MenuItem that 
			 * follows the desired MenuItem.
			 * @returns {Adobe.Indesign.MenuItem}
			 */
			public previousItem(objParam: MenuItem): Adobe.Indesign.MenuItem;
		}
	}
}