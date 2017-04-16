/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Menus extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Menu in the collection.
			 * @returns {Adobe.Indesign.Menu}
			 */
			public anyItem(): Adobe.Indesign.Menu;
			/**
			 * Displays the number of elements in the Menu.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Menu in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Menu in the collection.
			 * @returns {Adobe.Indesign.Menu}
			 */
			public firstItem(): Adobe.Indesign.Menu;
			/**
			 * Returns the Menu with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Menu}
			 */
			public item(indexParam: any): Adobe.Indesign.Menu;
			/**
			 * Returns the Menu with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.Menu}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Menu;
			/**
			 * Returns the Menus within the specified range.
			 * @param {any} fromParam The Menu, index, or name at the 
			 * beginning of the range. Can accept: Menu, Long Integer or 
			 * String.
			 * @param {any} toParam The Menu, index, or name at the end of 
			 * the range. Can accept: Menu, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Menu in the collection.
			 * @returns {Adobe.Indesign.Menu}
			 */
			public lastItem(): Adobe.Indesign.Menu;
			/**
			 * Returns the middle Menu in the collection.
			 * @returns {Adobe.Indesign.Menu}
			 */
			public middleItem(): Adobe.Indesign.Menu;
			/**
			 * Returns the Menu whose index follows the specified Menu in 
			 * the collection.
			 * @param {Menu} objParam The Menu whose index comes before the 
			 * desired Menu. 
			 * @returns {Adobe.Indesign.Menu}
			 */
			public nextItem(objParam: Menu): Adobe.Indesign.Menu;
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
			 * Returns the Menu with the index previous to the specified 
			 * index.
			 * @param {Menu} objParam The index of the Menu that follows 
			 * the desired Menu.
			 * @returns {Adobe.Indesign.Menu}
			 */
			public previousItem(objParam: Menu): Adobe.Indesign.Menu;
		}
	}
}