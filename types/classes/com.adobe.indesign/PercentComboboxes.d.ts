/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PercentComboboxes extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new PercentCombobox.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new PercentCombobox (Optional)
			 * @returns {Adobe.Indesign.PercentCombobox}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.PercentCombobox;
			/**
			 * Returns any PercentCombobox in the collection.
			 * @returns {Adobe.Indesign.PercentCombobox}
			 */
			public anyItem(): Adobe.Indesign.PercentCombobox;
			/**
			 * Displays the number of elements in the PercentCombobox.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every PercentCombobox in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first PercentCombobox in the collection.
			 * @returns {Adobe.Indesign.PercentCombobox}
			 */
			public firstItem(): Adobe.Indesign.PercentCombobox;
			/**
			 * Returns the PercentCombobox with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.PercentCombobox}
			 */
			public item(indexParam: any): Adobe.Indesign.PercentCombobox;
			/**
			 * Returns the PercentCombobox with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.PercentCombobox}
			 */
			public itemByID(idParam: number): Adobe.Indesign.PercentCombobox;
			/**
			 * Returns the PercentComboboxes within the specified range.
			 * @param {any} fromParam The PercentCombobox, index, or name 
			 * at the beginning of the range. Can accept: PercentCombobox, 
			 * Long Integer or String.
			 * @param {any} toParam The PercentCombobox, index, or name at 
			 * the end of the range. Can accept: PercentCombobox, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last PercentCombobox in the collection.
			 * @returns {Adobe.Indesign.PercentCombobox}
			 */
			public lastItem(): Adobe.Indesign.PercentCombobox;
			/**
			 * Returns the middle PercentCombobox in the collection.
			 * @returns {Adobe.Indesign.PercentCombobox}
			 */
			public middleItem(): Adobe.Indesign.PercentCombobox;
			/**
			 * Returns the PercentCombobox whose index follows the 
			 * specified PercentCombobox in the collection.
			 * @param {PercentCombobox} objParam The PercentCombobox whose 
			 * index comes before the desired PercentCombobox. 
			 * @returns {Adobe.Indesign.PercentCombobox}
			 */
			public nextItem(objParam: PercentCombobox): Adobe.Indesign.PercentCombobox;
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
			 * Returns the PercentCombobox with the index previous to the 
			 * specified index.
			 * @param {PercentCombobox} objParam The index of the 
			 * PercentCombobox that follows the desired PercentCombobox.
			 * @returns {Adobe.Indesign.PercentCombobox}
			 */
			public previousItem(objParam: PercentCombobox): Adobe.Indesign.PercentCombobox;
		}
	}
}