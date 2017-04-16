/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class HiddenTexts extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any HiddenText in the collection.
			 * @returns {Adobe.Indesign.HiddenText}
			 */
			public anyItem(): Adobe.Indesign.HiddenText;
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
			 * @returns {Adobe.Indesign.HiddenText}
			 */
			public firstItem(): Adobe.Indesign.HiddenText;
			/**
			 * Returns the HiddenText with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.HiddenText}
			 */
			public item(indexParam: any): Adobe.Indesign.HiddenText;
			/**
			 * Returns the HiddenText with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.HiddenText}
			 */
			public itemByID(idParam: number): Adobe.Indesign.HiddenText;
			/**
			 * Returns the HiddenText with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.HiddenText}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.HiddenText;
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
			 * @returns {Adobe.Indesign.HiddenText}
			 */
			public lastItem(): Adobe.Indesign.HiddenText;
			/**
			 * Returns the middle HiddenText in the collection.
			 * @returns {Adobe.Indesign.HiddenText}
			 */
			public middleItem(): Adobe.Indesign.HiddenText;
			/**
			 * Returns the HiddenText whose index follows the specified 
			 * HiddenText in the collection.
			 * @param {HiddenText} objParam The HiddenText whose index 
			 * comes before the desired HiddenText. 
			 * @returns {Adobe.Indesign.HiddenText}
			 */
			public nextItem(objParam: HiddenText): Adobe.Indesign.HiddenText;
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
			 * @returns {Adobe.Indesign.HiddenText}
			 */
			public previousItem(objParam: HiddenText): Adobe.Indesign.HiddenText;
		}
	}
}