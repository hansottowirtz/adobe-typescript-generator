/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PICTs extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any PICT in the collection. */
			public anyItem(): Adobe.Indesign.PICT;
			/** Displays the number of elements in the PICT. */
			public count(): number;
			/** Returns every PICT in the collection. */
			public everyItem(): any;
			/** Returns the first PICT in the collection. */
			public firstItem(): Adobe.Indesign.PICT;
			/**
			 * Returns the PICT with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.PICT;
			/**
			 * Returns the PICT with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.PICT;
			/**
			 * Returns the PICT with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.PICT;
			/**
			 * Returns the PICTs within the specified range.
			 * @param {any} fromParam - The PICT, index, or name at the 
			 * beginning of the range. Can accept: PICT, Long Integer or 
			 * String.
			 * @param {any} toParam - The PICT, index, or name at the end 
			 * of the range. Can accept: PICT, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last PICT in the collection. */
			public lastItem(): Adobe.Indesign.PICT;
			/** Returns the middle PICT in the collection. */
			public middleItem(): Adobe.Indesign.PICT;
			/**
			 * Returns the PICT whose index follows the specified PICT in 
			 * the collection.
			 * @param {PICT} objParam - The PICT whose index comes before 
			 * the desired PICT. 
			 */
			public nextItem(objParam: PICT): Adobe.Indesign.PICT;
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
			 * Returns the PICT with the index previous to the specified 
			 * index.
			 * @param {PICT} objParam - The index of the PICT that follows 
			 * the desired PICT.
			 */
			public previousItem(objParam: PICT): Adobe.Indesign.PICT;
		}
	}
}