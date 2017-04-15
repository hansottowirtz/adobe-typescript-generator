/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class MeasurementComboboxes extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new MeasurementCombobox.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new MeasurementCombobox (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.MeasurementCombobox;
			/** Returns any MeasurementCombobox in the collection. */
			public anyItem(): Adobe.Incopy.MeasurementCombobox;
			/** Displays the number of elements in the MeasurementCombobox. */
			public count(): number;
			/** Returns every MeasurementCombobox in the collection. */
			public everyItem(): any;
			/** Returns the first MeasurementCombobox in the collection. */
			public firstItem(): Adobe.Incopy.MeasurementCombobox;
			/**
			 * Returns the MeasurementCombobox with the specified index or 
			 * name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.MeasurementCombobox;
			/**
			 * Returns the MeasurementCombobox with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.MeasurementCombobox;
			/**
			 * Returns the MeasurementComboboxes within the specified 
			 * range.
			 * @param {any} fromParam - The MeasurementCombobox, index, or 
			 * name at the beginning of the range. Can accept: 
			 * MeasurementCombobox, Long Integer or String.
			 * @param {any} toParam - The MeasurementCombobox, index, or 
			 * name at the end of the range. Can accept: 
			 * MeasurementCombobox, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last MeasurementCombobox in the collection. */
			public lastItem(): Adobe.Incopy.MeasurementCombobox;
			/** Returns the middle MeasurementCombobox in the collection. */
			public middleItem(): Adobe.Incopy.MeasurementCombobox;
			/**
			 * Returns the MeasurementCombobox whose index follows the 
			 * specified MeasurementCombobox in the collection.
			 * @param {MeasurementCombobox} objParam - The 
			 * MeasurementCombobox whose index comes before the desired 
			 * MeasurementCombobox. 
			 */
			public nextItem(objParam: MeasurementCombobox): Adobe.Incopy.MeasurementCombobox;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx - 
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index - 
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the MeasurementCombobox with the index previous to 
			 * the specified index.
			 * @param {MeasurementCombobox} objParam - The index of the 
			 * MeasurementCombobox that follows the desired 
			 * MeasurementCombobox.
			 */
			public previousItem(objParam: MeasurementCombobox): Adobe.Incopy.MeasurementCombobox;
		}
	}
}