/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class EPSTexts extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any EPSText in the collection.
			 * @returns {Adobe.Incopy.EPSText}
			 */
			public anyItem(): Adobe.Incopy.EPSText;
			/**
			 * Displays the number of elements in the EPSText.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every EPSText in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first EPSText in the collection.
			 * @returns {Adobe.Incopy.EPSText}
			 */
			public firstItem(): Adobe.Incopy.EPSText;
			/**
			 * Returns the EPSText with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.EPSText}
			 */
			public item(indexParam: any): Adobe.Incopy.EPSText;
			/**
			 * Returns the EPSText with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.EPSText}
			 */
			public itemByID(idParam: number): Adobe.Incopy.EPSText;
			/**
			 * Returns the EPSText with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.EPSText}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.EPSText;
			/**
			 * Returns the EPSTexts within the specified range.
			 * @param {any} fromParam The EPSText, index, or name at the 
			 * beginning of the range. Can accept: EPSText, Long Integer or 
			 * String.
			 * @param {any} toParam The EPSText, index, or name at the end 
			 * of the range. Can accept: EPSText, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last EPSText in the collection.
			 * @returns {Adobe.Incopy.EPSText}
			 */
			public lastItem(): Adobe.Incopy.EPSText;
			/**
			 * Returns the middle EPSText in the collection.
			 * @returns {Adobe.Incopy.EPSText}
			 */
			public middleItem(): Adobe.Incopy.EPSText;
			/**
			 * Returns the EPSText whose index follows the specified 
			 * EPSText in the collection.
			 * @param {EPSText} objParam The EPSText whose index comes 
			 * before the desired EPSText. 
			 * @returns {Adobe.Incopy.EPSText}
			 */
			public nextItem(objParam: EPSText): Adobe.Incopy.EPSText;
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
			 * Returns the EPSText with the index previous to the specified 
			 * index.
			 * @param {EPSText} objParam The index of the EPSText that 
			 * follows the desired EPSText.
			 * @returns {Adobe.Incopy.EPSText}
			 */
			public previousItem(objParam: EPSText): Adobe.Incopy.EPSText;
		}
	}
}