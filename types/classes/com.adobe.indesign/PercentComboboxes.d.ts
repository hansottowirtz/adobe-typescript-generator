/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PercentComboboxes extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new PercentCombobox.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new PercentCombobox (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.PercentCombobox;
			/** Returns any PercentCombobox in the collection. */
			public anyItem(): Adobe.Indesign.PercentCombobox;
			/** Displays the number of elements in the PercentCombobox. */
			public count(): number;
			/** Returns every PercentCombobox in the collection. */
			public everyItem(): any;
			/** Returns the first PercentCombobox in the collection. */
			public firstItem(): Adobe.Indesign.PercentCombobox;
			/**
			 * Returns the PercentCombobox with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.PercentCombobox;
			/**
			 * Returns the PercentCombobox with the specified ID.
			 * @param {number} idParam The ID.
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
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last PercentCombobox in the collection. */
			public lastItem(): Adobe.Indesign.PercentCombobox;
			/** Returns the middle PercentCombobox in the collection. */
			public middleItem(): Adobe.Indesign.PercentCombobox;
			/**
			 * Returns the PercentCombobox whose index follows the 
			 * specified PercentCombobox in the collection.
			 * @param {PercentCombobox} objParam The PercentCombobox whose 
			 * index comes before the desired PercentCombobox. 
			 */
			public nextItem(objParam: PercentCombobox): Adobe.Indesign.PercentCombobox;
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
			 * Returns the PercentCombobox with the index previous to the 
			 * specified index.
			 * @param {PercentCombobox} objParam The index of the 
			 * PercentCombobox that follows the desired PercentCombobox.
			 */
			public previousItem(objParam: PercentCombobox): Adobe.Indesign.PercentCombobox;
		}
	}
}