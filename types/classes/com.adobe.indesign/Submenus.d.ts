/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Submenus extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new submenu.
			 * @param {string} titleParam The name of the Submenu for 
			 * display in the user interface. The title includes any 
			 * ampersand characters (&), which are used to tell the Windows 
			 * OS to underline the following character in the name for use 
			 * with the Alt key to navigate to a menu item. Double 
			 * ampersands are used to display an actual ampersand character 
			 * in the name. The Mac OS ignores and removes the extra 
			 * ampersand characters.
			 * @param {LocationOptions} atParam The location of the submenu 
			 * relative to the reference object or within the containing 
			 * object. (Optional)
			 * @param {MenuElement} referenceParam The reference object. 
			 * Note: Required when the at parameter specifies before or 
			 * after. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Submenu (Optional)
			 * @returns {Adobe.Indesign.Submenu}
			 */
			public add(titleParam: string, atParam: LocationOptions, referenceParam: MenuElement, withPropertiesParam: any): Adobe.Indesign.Submenu;
			/**
			 * Returns any Submenu in the collection.
			 * @returns {Adobe.Indesign.Submenu}
			 */
			public anyItem(): Adobe.Indesign.Submenu;
			/**
			 * Displays the number of elements in the Submenu.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Submenu in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Submenu in the collection.
			 * @returns {Adobe.Indesign.Submenu}
			 */
			public firstItem(): Adobe.Indesign.Submenu;
			/**
			 * Returns the Submenu with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Submenu}
			 */
			public item(indexParam: any): Adobe.Indesign.Submenu;
			/**
			 * Returns the Submenu with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.Submenu}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Submenu;
			/**
			 * Returns the Submenus within the specified range.
			 * @param {any} fromParam The Submenu, index, or name at the 
			 * beginning of the range. Can accept: Submenu, Long Integer or 
			 * String.
			 * @param {any} toParam The Submenu, index, or name at the end 
			 * of the range. Can accept: Submenu, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Submenu in the collection.
			 * @returns {Adobe.Indesign.Submenu}
			 */
			public lastItem(): Adobe.Indesign.Submenu;
			/**
			 * Returns the middle Submenu in the collection.
			 * @returns {Adobe.Indesign.Submenu}
			 */
			public middleItem(): Adobe.Indesign.Submenu;
			/**
			 * Returns the Submenu whose index follows the specified 
			 * Submenu in the collection.
			 * @param {Submenu} objParam The Submenu whose index comes 
			 * before the desired Submenu. 
			 * @returns {Adobe.Indesign.Submenu}
			 */
			public nextItem(objParam: Submenu): Adobe.Indesign.Submenu;
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
			 * Returns the Submenu with the index previous to the specified 
			 * index.
			 * @param {Submenu} objParam The index of the Submenu that 
			 * follows the desired Submenu.
			 * @returns {Adobe.Indesign.Submenu}
			 */
			public previousItem(objParam: Submenu): Adobe.Indesign.Submenu;
		}
	}
}