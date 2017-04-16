/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class StaticTexts extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new StaticText.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new StaticText (Optional)
			 * @returns {Adobe.Indesign.StaticText}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.StaticText;
			/**
			 * Returns any StaticText in the collection.
			 * @returns {Adobe.Indesign.StaticText}
			 */
			public anyItem(): Adobe.Indesign.StaticText;
			/**
			 * Displays the number of elements in the StaticText.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every StaticText in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first StaticText in the collection.
			 * @returns {Adobe.Indesign.StaticText}
			 */
			public firstItem(): Adobe.Indesign.StaticText;
			/**
			 * Returns the StaticText with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.StaticText}
			 */
			public item(indexParam: any): Adobe.Indesign.StaticText;
			/**
			 * Returns the StaticText with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.StaticText}
			 */
			public itemByID(idParam: number): Adobe.Indesign.StaticText;
			/**
			 * Returns the StaticTexts within the specified range.
			 * @param {any} fromParam The StaticText, index, or name at the 
			 * beginning of the range. Can accept: StaticText, Long Integer 
			 * or String.
			 * @param {any} toParam The StaticText, index, or name at the 
			 * end of the range. Can accept: StaticText, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last StaticText in the collection.
			 * @returns {Adobe.Indesign.StaticText}
			 */
			public lastItem(): Adobe.Indesign.StaticText;
			/**
			 * Returns the middle StaticText in the collection.
			 * @returns {Adobe.Indesign.StaticText}
			 */
			public middleItem(): Adobe.Indesign.StaticText;
			/**
			 * Returns the StaticText whose index follows the specified 
			 * StaticText in the collection.
			 * @param {StaticText} objParam The StaticText whose index 
			 * comes before the desired StaticText. 
			 * @returns {Adobe.Indesign.StaticText}
			 */
			public nextItem(objParam: StaticText): Adobe.Indesign.StaticText;
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
			 * Returns the StaticText with the index previous to the 
			 * specified index.
			 * @param {StaticText} objParam The index of the StaticText 
			 * that follows the desired StaticText.
			 * @returns {Adobe.Indesign.StaticText}
			 */
			public previousItem(objParam: StaticText): Adobe.Indesign.StaticText;
		}
	}
}