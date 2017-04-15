/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class AngleComboboxes extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new AngleCombobox.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new AngleCombobox (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.AngleCombobox;
			/** Returns any AngleCombobox in the collection. */
			public anyItem(): Adobe.Indesign.AngleCombobox;
			/** Displays the number of elements in the AngleCombobox. */
			public count(): number;
			/** Returns every AngleCombobox in the collection. */
			public everyItem(): any;
			/** Returns the first AngleCombobox in the collection. */
			public firstItem(): Adobe.Indesign.AngleCombobox;
			/**
			 * Returns the AngleCombobox with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.AngleCombobox;
			/**
			 * Returns the AngleCombobox with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.AngleCombobox;
			/**
			 * Returns the AngleComboboxes within the specified range.
			 * @param {any} fromParam - The AngleCombobox, index, or name 
			 * at the beginning of the range. Can accept: AngleCombobox, 
			 * Long Integer or String.
			 * @param {any} toParam - The AngleCombobox, index, or name at 
			 * the end of the range. Can accept: AngleCombobox, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last AngleCombobox in the collection. */
			public lastItem(): Adobe.Indesign.AngleCombobox;
			/** Returns the middle AngleCombobox in the collection. */
			public middleItem(): Adobe.Indesign.AngleCombobox;
			/**
			 * Returns the AngleCombobox whose index follows the specified 
			 * AngleCombobox in the collection.
			 * @param {AngleCombobox} objParam - The AngleCombobox whose 
			 * index comes before the desired AngleCombobox. 
			 */
			public nextItem(objParam: AngleCombobox): Adobe.Indesign.AngleCombobox;
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
			 * Returns the AngleCombobox with the index previous to the 
			 * specified index.
			 * @param {AngleCombobox} objParam - The index of the 
			 * AngleCombobox that follows the desired AngleCombobox.
			 */
			public previousItem(objParam: AngleCombobox): Adobe.Indesign.AngleCombobox;
		}
	}
}