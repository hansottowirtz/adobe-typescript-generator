/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class IntegerComboboxes extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new IntegerCombobox.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new IntegerCombobox (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.IntegerCombobox;
			/** Returns any IntegerCombobox in the collection. */
			public anyItem(): Adobe.Incopy.IntegerCombobox;
			/** Displays the number of elements in the IntegerCombobox. */
			public count(): number;
			/** Returns every IntegerCombobox in the collection. */
			public everyItem(): any;
			/** Returns the first IntegerCombobox in the collection. */
			public firstItem(): Adobe.Incopy.IntegerCombobox;
			/**
			 * Returns the IntegerCombobox with the specified index or 
			 * name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.IntegerCombobox;
			/**
			 * Returns the IntegerCombobox with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.IntegerCombobox;
			/**
			 * Returns the IntegerComboboxes within the specified range.
			 * @param {any} fromParam - The IntegerCombobox, index, or name 
			 * at the beginning of the range. Can accept: IntegerCombobox, 
			 * Long Integer or String.
			 * @param {any} toParam - The IntegerCombobox, index, or name 
			 * at the end of the range. Can accept: IntegerCombobox, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last IntegerCombobox in the collection. */
			public lastItem(): Adobe.Incopy.IntegerCombobox;
			/** Returns the middle IntegerCombobox in the collection. */
			public middleItem(): Adobe.Incopy.IntegerCombobox;
			/**
			 * Returns the IntegerCombobox whose index follows the 
			 * specified IntegerCombobox in the collection.
			 * @param {IntegerCombobox} objParam - The IntegerCombobox 
			 * whose index comes before the desired IntegerCombobox. 
			 */
			public nextItem(objParam: IntegerCombobox): Adobe.Incopy.IntegerCombobox;
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
			 * Returns the IntegerCombobox with the index previous to the 
			 * specified index.
			 * @param {IntegerCombobox} objParam - The index of the 
			 * IntegerCombobox that follows the desired IntegerCombobox.
			 */
			public previousItem(objParam: IntegerCombobox): Adobe.Incopy.IntegerCombobox;
		}
	}
}