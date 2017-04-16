/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PICTs extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any PICT in the collection.
			 * @returns {Adobe.Indesign.PICT}
			 */
			public anyItem(): Adobe.Indesign.PICT;
			/**
			 * Displays the number of elements in the PICT.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every PICT in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first PICT in the collection.
			 * @returns {Adobe.Indesign.PICT}
			 */
			public firstItem(): Adobe.Indesign.PICT;
			/**
			 * Returns the PICT with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.PICT}
			 */
			public item(indexParam: any): Adobe.Indesign.PICT;
			/**
			 * Returns the PICT with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.PICT}
			 */
			public itemByID(idParam: number): Adobe.Indesign.PICT;
			/**
			 * Returns the PICT with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.PICT}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.PICT;
			/**
			 * Returns the PICTs within the specified range.
			 * @param {any} fromParam The PICT, index, or name at the 
			 * beginning of the range. Can accept: PICT, Long Integer or 
			 * String.
			 * @param {any} toParam The PICT, index, or name at the end of 
			 * the range. Can accept: PICT, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last PICT in the collection.
			 * @returns {Adobe.Indesign.PICT}
			 */
			public lastItem(): Adobe.Indesign.PICT;
			/**
			 * Returns the middle PICT in the collection.
			 * @returns {Adobe.Indesign.PICT}
			 */
			public middleItem(): Adobe.Indesign.PICT;
			/**
			 * Returns the PICT whose index follows the specified PICT in 
			 * the collection.
			 * @param {PICT} objParam The PICT whose index comes before the 
			 * desired PICT. 
			 * @returns {Adobe.Indesign.PICT}
			 */
			public nextItem(objParam: PICT): Adobe.Indesign.PICT;
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
			 * Returns the PICT with the index previous to the specified 
			 * index.
			 * @param {PICT} objParam The index of the PICT that follows 
			 * the desired PICT.
			 * @returns {Adobe.Indesign.PICT}
			 */
			public previousItem(objParam: PICT): Adobe.Indesign.PICT;
		}
	}
}