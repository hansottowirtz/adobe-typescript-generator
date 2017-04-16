/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DTDs extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any DTD in the collection.
			 * @returns {Adobe.Indesign.DTD}
			 */
			public anyItem(): Adobe.Indesign.DTD;
			/**
			 * Displays the number of elements in the DTD.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every DTD in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first DTD in the collection.
			 * @returns {Adobe.Indesign.DTD}
			 */
			public firstItem(): Adobe.Indesign.DTD;
			/**
			 * Returns the DTD with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.DTD}
			 */
			public item(indexParam: any): Adobe.Indesign.DTD;
			/**
			 * Returns the DTD with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.DTD}
			 */
			public itemByID(idParam: number): Adobe.Indesign.DTD;
			/**
			 * Returns the DTDs within the specified range.
			 * @param {any} fromParam The DTD, index, or name at the 
			 * beginning of the range. Can accept: DTD, Long Integer or 
			 * String.
			 * @param {any} toParam The DTD, index, or name at the end of 
			 * the range. Can accept: DTD, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last DTD in the collection.
			 * @returns {Adobe.Indesign.DTD}
			 */
			public lastItem(): Adobe.Indesign.DTD;
			/**
			 * Returns the middle DTD in the collection.
			 * @returns {Adobe.Indesign.DTD}
			 */
			public middleItem(): Adobe.Indesign.DTD;
			/**
			 * Returns the DTD whose index follows the specified DTD in the 
			 * collection.
			 * @param {DTD} objParam The DTD whose index comes before the 
			 * desired DTD. 
			 * @returns {Adobe.Indesign.DTD}
			 */
			public nextItem(objParam: DTD): Adobe.Indesign.DTD;
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
			 * Returns the DTD with the index previous to the specified 
			 * index.
			 * @param {DTD} objParam The index of the DTD that follows the 
			 * desired DTD.
			 * @returns {Adobe.Indesign.DTD}
			 */
			public previousItem(objParam: DTD): Adobe.Indesign.DTD;
		}
	}
}