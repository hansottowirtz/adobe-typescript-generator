/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class HiddenTexts extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any HiddenText in the collection.
			 * @returns {Adobe.Incopy.HiddenText}
			 */
			public anyItem(): Adobe.Incopy.HiddenText;
			/**
			 * Displays the number of elements in the HiddenText.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every HiddenText in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first HiddenText in the collection.
			 * @returns {Adobe.Incopy.HiddenText}
			 */
			public firstItem(): Adobe.Incopy.HiddenText;
			/**
			 * Returns the HiddenText with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.HiddenText}
			 */
			public item(indexParam: any): Adobe.Incopy.HiddenText;
			/**
			 * Returns the HiddenText with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.HiddenText}
			 */
			public itemByID(idParam: number): Adobe.Incopy.HiddenText;
			/**
			 * Returns the HiddenText with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.HiddenText}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.HiddenText;
			/**
			 * Returns the HiddenTexts within the specified range.
			 * @param {any} fromParam The HiddenText, index, or name at the 
			 * beginning of the range. Can accept: HiddenText, Long Integer 
			 * or String.
			 * @param {any} toParam The HiddenText, index, or name at the 
			 * end of the range. Can accept: HiddenText, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last HiddenText in the collection.
			 * @returns {Adobe.Incopy.HiddenText}
			 */
			public lastItem(): Adobe.Incopy.HiddenText;
			/**
			 * Returns the middle HiddenText in the collection.
			 * @returns {Adobe.Incopy.HiddenText}
			 */
			public middleItem(): Adobe.Incopy.HiddenText;
			/**
			 * Returns the HiddenText whose index follows the specified 
			 * HiddenText in the collection.
			 * @param {HiddenText} objParam The HiddenText whose index 
			 * comes before the desired HiddenText. 
			 * @returns {Adobe.Incopy.HiddenText}
			 */
			public nextItem(objParam: HiddenText): Adobe.Incopy.HiddenText;
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
			 * Returns the HiddenText with the index previous to the 
			 * specified index.
			 * @param {HiddenText} objParam The index of the HiddenText 
			 * that follows the desired HiddenText.
			 * @returns {Adobe.Incopy.HiddenText}
			 */
			public previousItem(objParam: HiddenText): Adobe.Incopy.HiddenText;
		}
	}
}