/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class MeasurementComboboxes extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new MeasurementCombobox.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new MeasurementCombobox (Optional)
			 * @returns {Adobe.Indesign.MeasurementCombobox}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.MeasurementCombobox;
			/**
			 * Returns any MeasurementCombobox in the collection.
			 * @returns {Adobe.Indesign.MeasurementCombobox}
			 */
			public anyItem(): Adobe.Indesign.MeasurementCombobox;
			/**
			 * Displays the number of elements in the MeasurementCombobox.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every MeasurementCombobox in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first MeasurementCombobox in the collection.
			 * @returns {Adobe.Indesign.MeasurementCombobox}
			 */
			public firstItem(): Adobe.Indesign.MeasurementCombobox;
			/**
			 * Returns the MeasurementCombobox with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.MeasurementCombobox}
			 */
			public item(indexParam: any): Adobe.Indesign.MeasurementCombobox;
			/**
			 * Returns the MeasurementCombobox with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.MeasurementCombobox}
			 */
			public itemByID(idParam: number): Adobe.Indesign.MeasurementCombobox;
			/**
			 * Returns the MeasurementComboboxes within the specified 
			 * range.
			 * @param {any} fromParam The MeasurementCombobox, index, or 
			 * name at the beginning of the range. Can accept: 
			 * MeasurementCombobox, Long Integer or String.
			 * @param {any} toParam The MeasurementCombobox, index, or name 
			 * at the end of the range. Can accept: MeasurementCombobox, 
			 * Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last MeasurementCombobox in the collection.
			 * @returns {Adobe.Indesign.MeasurementCombobox}
			 */
			public lastItem(): Adobe.Indesign.MeasurementCombobox;
			/**
			 * Returns the middle MeasurementCombobox in the collection.
			 * @returns {Adobe.Indesign.MeasurementCombobox}
			 */
			public middleItem(): Adobe.Indesign.MeasurementCombobox;
			/**
			 * Returns the MeasurementCombobox whose index follows the 
			 * specified MeasurementCombobox in the collection.
			 * @param {MeasurementCombobox} objParam The 
			 * MeasurementCombobox whose index comes before the desired 
			 * MeasurementCombobox. 
			 * @returns {Adobe.Indesign.MeasurementCombobox}
			 */
			public nextItem(objParam: MeasurementCombobox): Adobe.Indesign.MeasurementCombobox;
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
			 * Returns the MeasurementCombobox with the index previous to 
			 * the specified index.
			 * @param {MeasurementCombobox} objParam The index of the 
			 * MeasurementCombobox that follows the desired 
			 * MeasurementCombobox.
			 * @returns {Adobe.Indesign.MeasurementCombobox}
			 */
			public previousItem(objParam: MeasurementCombobox): Adobe.Indesign.MeasurementCombobox;
		}
	}
}