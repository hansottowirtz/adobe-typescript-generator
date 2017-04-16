/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class RealComboboxes extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new RealCombobox.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new RealCombobox (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.RealCombobox;
			/** Returns any RealCombobox in the collection. */
			public anyItem(): Adobe.Indesign.RealCombobox;
			/** Displays the number of elements in the RealCombobox. */
			public count(): number;
			/** Returns every RealCombobox in the collection. */
			public everyItem(): any;
			/** Returns the first RealCombobox in the collection. */
			public firstItem(): Adobe.Indesign.RealCombobox;
			/**
			 * Returns the RealCombobox with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.RealCombobox;
			/**
			 * Returns the RealCombobox with the specified ID.
			 * @param {number} idParam The ID.
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
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last RealCombobox in the collection. */
			public lastItem(): Adobe.Indesign.RealCombobox;
			/** Returns the middle RealCombobox in the collection. */
			public middleItem(): Adobe.Indesign.RealCombobox;
			/**
			 * Returns the RealCombobox whose index follows the specified 
			 * RealCombobox in the collection.
			 * @param {RealCombobox} objParam The RealCombobox whose index 
			 * comes before the desired RealCombobox. 
			 */
			public nextItem(objParam: RealCombobox): Adobe.Indesign.RealCombobox;
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
			 * Returns the RealCombobox with the index previous to the 
			 * specified index.
			 * @param {RealCombobox} objParam The index of the RealCombobox 
			 * that follows the desired RealCombobox.
			 */
			public previousItem(objParam: RealCombobox): Adobe.Indesign.RealCombobox;
		}
	}
}