/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
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
			 * @returns {Adobe.Incopy.StaticText}
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.StaticText;
			/**
			 * Returns any StaticText in the collection.
			 * @returns {Adobe.Incopy.StaticText}
			 */
			public anyItem(): Adobe.Incopy.StaticText;
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
			 * @returns {Adobe.Incopy.StaticText}
			 */
			public firstItem(): Adobe.Incopy.StaticText;
			/**
			 * Returns the StaticText with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.StaticText}
			 */
			public item(indexParam: any): Adobe.Incopy.StaticText;
			/**
			 * Returns the StaticText with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.StaticText}
			 */
			public itemByID(idParam: number): Adobe.Incopy.StaticText;
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
			 * @returns {Adobe.Incopy.StaticText}
			 */
			public lastItem(): Adobe.Incopy.StaticText;
			/**
			 * Returns the middle StaticText in the collection.
			 * @returns {Adobe.Incopy.StaticText}
			 */
			public middleItem(): Adobe.Incopy.StaticText;
			/**
			 * Returns the StaticText whose index follows the specified 
			 * StaticText in the collection.
			 * @param {StaticText} objParam The StaticText whose index 
			 * comes before the desired StaticText. 
			 * @returns {Adobe.Incopy.StaticText}
			 */
			public nextItem(objParam: StaticText): Adobe.Incopy.StaticText;
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
			 * @returns {Adobe.Incopy.StaticText}
			 */
			public previousItem(objParam: StaticText): Adobe.Incopy.StaticText;
		}
	}
}