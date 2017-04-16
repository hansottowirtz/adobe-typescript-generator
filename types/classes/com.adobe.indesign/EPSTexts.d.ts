/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class EPSTexts extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any EPSText in the collection.
			 * @returns {Adobe.Indesign.EPSText}
			 */
			public anyItem(): Adobe.Indesign.EPSText;
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
			 * @returns {Adobe.Indesign.EPSText}
			 */
			public firstItem(): Adobe.Indesign.EPSText;
			/**
			 * Returns the EPSText with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.EPSText}
			 */
			public item(indexParam: any): Adobe.Indesign.EPSText;
			/**
			 * Returns the EPSText with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.EPSText}
			 */
			public itemByID(idParam: number): Adobe.Indesign.EPSText;
			/**
			 * Returns the EPSText with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.EPSText}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.EPSText;
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
			 * @returns {Adobe.Indesign.EPSText}
			 */
			public lastItem(): Adobe.Indesign.EPSText;
			/**
			 * Returns the middle EPSText in the collection.
			 * @returns {Adobe.Indesign.EPSText}
			 */
			public middleItem(): Adobe.Indesign.EPSText;
			/**
			 * Returns the EPSText whose index follows the specified 
			 * EPSText in the collection.
			 * @param {EPSText} objParam The EPSText whose index comes 
			 * before the desired EPSText. 
			 * @returns {Adobe.Indesign.EPSText}
			 */
			public nextItem(objParam: EPSText): Adobe.Indesign.EPSText;
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
			 * @returns {Adobe.Indesign.EPSText}
			 */
			public previousItem(objParam: EPSText): Adobe.Indesign.EPSText;
		}
	}
}