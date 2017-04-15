/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TextEditboxes extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new TextEditbox.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new TextEditbox (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.TextEditbox;
			/** Returns any TextEditbox in the collection. */
			public anyItem(): Adobe.Incopy.TextEditbox;
			/** Displays the number of elements in the TextEditbox. */
			public count(): number;
			/** Returns every TextEditbox in the collection. */
			public everyItem(): any;
			/** Returns the first TextEditbox in the collection. */
			public firstItem(): Adobe.Incopy.TextEditbox;
			/**
			 * Returns the TextEditbox with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.TextEditbox;
			/**
			 * Returns the TextEditbox with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.TextEditbox;
			/**
			 * Returns the TextEditboxes within the specified range.
			 * @param {any} fromParam - The TextEditbox, index, or name at 
			 * the beginning of the range. Can accept: TextEditbox, Long 
			 * Integer or String.
			 * @param {any} toParam - The TextEditbox, index, or name at 
			 * the end of the range. Can accept: TextEditbox, Long Integer 
			 * or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last TextEditbox in the collection. */
			public lastItem(): Adobe.Incopy.TextEditbox;
			/** Returns the middle TextEditbox in the collection. */
			public middleItem(): Adobe.Incopy.TextEditbox;
			/**
			 * Returns the TextEditbox whose index follows the specified 
			 * TextEditbox in the collection.
			 * @param {TextEditbox} objParam - The TextEditbox whose index 
			 * comes before the desired TextEditbox. 
			 */
			public nextItem(objParam: TextEditbox): Adobe.Incopy.TextEditbox;
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
			 * Returns the TextEditbox with the index previous to the 
			 * specified index.
			 * @param {TextEditbox} objParam - The index of the TextEditbox 
			 * that follows the desired TextEditbox.
			 */
			public previousItem(objParam: TextEditbox): Adobe.Incopy.TextEditbox;
		}
	}
}