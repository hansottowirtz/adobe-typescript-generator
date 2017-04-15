/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class StaticTexts extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new StaticText.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new StaticText (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.StaticText;
			/** Returns any StaticText in the collection. */
			public anyItem(): Adobe.Indesign.StaticText;
			/** Displays the number of elements in the StaticText. */
			public count(): number;
			/** Returns every StaticText in the collection. */
			public everyItem(): any;
			/** Returns the first StaticText in the collection. */
			public firstItem(): Adobe.Indesign.StaticText;
			/**
			 * Returns the StaticText with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.StaticText;
			/**
			 * Returns the StaticText with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.StaticText;
			/**
			 * Returns the StaticTexts within the specified range.
			 * @param {any} fromParam - The StaticText, index, or name at 
			 * the beginning of the range. Can accept: StaticText, Long 
			 * Integer or String.
			 * @param {any} toParam - The StaticText, index, or name at the 
			 * end of the range. Can accept: StaticText, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last StaticText in the collection. */
			public lastItem(): Adobe.Indesign.StaticText;
			/** Returns the middle StaticText in the collection. */
			public middleItem(): Adobe.Indesign.StaticText;
			/**
			 * Returns the StaticText whose index follows the specified 
			 * StaticText in the collection.
			 * @param {StaticText} objParam - The StaticText whose index 
			 * comes before the desired StaticText. 
			 */
			public nextItem(objParam: StaticText): Adobe.Indesign.StaticText;
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
			 * Returns the StaticText with the index previous to the 
			 * specified index.
			 * @param {StaticText} objParam - The index of the StaticText 
			 * that follows the desired StaticText.
			 */
			public previousItem(objParam: StaticText): Adobe.Indesign.StaticText;
		}
	}
}