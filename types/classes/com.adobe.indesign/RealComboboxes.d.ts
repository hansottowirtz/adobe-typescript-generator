/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class RealComboboxes extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new RealCombobox.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new RealCombobox (Optional)
			 * @returns {Adobe.Indesign.RealCombobox}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.RealCombobox;
			/**
			 * Returns any RealCombobox in the collection.
			 * @returns {Adobe.Indesign.RealCombobox}
			 */
			public anyItem(): Adobe.Indesign.RealCombobox;
			/**
			 * Displays the number of elements in the RealCombobox.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every RealCombobox in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first RealCombobox in the collection.
			 * @returns {Adobe.Indesign.RealCombobox}
			 */
			public firstItem(): Adobe.Indesign.RealCombobox;
			/**
			 * Returns the RealCombobox with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.RealCombobox}
			 */
			public item(indexParam: any): Adobe.Indesign.RealCombobox;
			/**
			 * Returns the RealCombobox with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.RealCombobox}
			 */
			public itemByID(idParam: number): Adobe.Indesign.RealCombobox;
			/**
			 * Returns the RealComboboxes within the specified range.
			 * @param {any} fromParam The RealCombobox, index, or name at 
			 * the beginning of the range. Can accept: RealCombobox, Long 
			 * Integer or String.
			 * @param {any} toParam The RealCombobox, index, or name at the 
			 * end of the range. Can accept: RealCombobox, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last RealCombobox in the collection.
			 * @returns {Adobe.Indesign.RealCombobox}
			 */
			public lastItem(): Adobe.Indesign.RealCombobox;
			/**
			 * Returns the middle RealCombobox in the collection.
			 * @returns {Adobe.Indesign.RealCombobox}
			 */
			public middleItem(): Adobe.Indesign.RealCombobox;
			/**
			 * Returns the RealCombobox whose index follows the specified 
			 * RealCombobox in the collection.
			 * @param {RealCombobox} objParam The RealCombobox whose index 
			 * comes before the desired RealCombobox. 
			 * @returns {Adobe.Indesign.RealCombobox}
			 */
			public nextItem(objParam: RealCombobox): Adobe.Indesign.RealCombobox;
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
			 * Returns the RealCombobox with the index previous to the 
			 * specified index.
			 * @param {RealCombobox} objParam The index of the RealCombobox 
			 * that follows the desired RealCombobox.
			 * @returns {Adobe.Indesign.RealCombobox}
			 */
			public previousItem(objParam: RealCombobox): Adobe.Indesign.RealCombobox;
		}
	}
}