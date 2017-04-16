/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Dropdowns extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new Dropdown.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Dropdown (Optional)
			 * @returns {Adobe.Incopy.Dropdown}
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.Dropdown;
			/**
			 * Returns any Dropdown in the collection.
			 * @returns {Adobe.Incopy.Dropdown}
			 */
			public anyItem(): Adobe.Incopy.Dropdown;
			/**
			 * Displays the number of elements in the Dropdown.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Dropdown in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Dropdown in the collection.
			 * @returns {Adobe.Incopy.Dropdown}
			 */
			public firstItem(): Adobe.Incopy.Dropdown;
			/**
			 * Returns the Dropdown with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.Dropdown}
			 */
			public item(indexParam: any): Adobe.Incopy.Dropdown;
			/**
			 * Returns the Dropdown with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.Dropdown}
			 */
			public itemByID(idParam: number): Adobe.Incopy.Dropdown;
			/**
			 * Returns the Dropdowns within the specified range.
			 * @param {any} fromParam The Dropdown, index, or name at the 
			 * beginning of the range. Can accept: Dropdown, Long Integer 
			 * or String.
			 * @param {any} toParam The Dropdown, index, or name at the end 
			 * of the range. Can accept: Dropdown, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Dropdown in the collection.
			 * @returns {Adobe.Incopy.Dropdown}
			 */
			public lastItem(): Adobe.Incopy.Dropdown;
			/**
			 * Returns the middle Dropdown in the collection.
			 * @returns {Adobe.Incopy.Dropdown}
			 */
			public middleItem(): Adobe.Incopy.Dropdown;
			/**
			 * Returns the Dropdown whose index follows the specified 
			 * Dropdown in the collection.
			 * @param {Dropdown} objParam The Dropdown whose index comes 
			 * before the desired Dropdown. 
			 * @returns {Adobe.Incopy.Dropdown}
			 */
			public nextItem(objParam: Dropdown): Adobe.Incopy.Dropdown;
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
			 * Returns the Dropdown with the index previous to the 
			 * specified index.
			 * @param {Dropdown} objParam The index of the Dropdown that 
			 * follows the desired Dropdown.
			 * @returns {Adobe.Incopy.Dropdown}
			 */
			public previousItem(objParam: Dropdown): Adobe.Incopy.Dropdown;
		}
	}
}