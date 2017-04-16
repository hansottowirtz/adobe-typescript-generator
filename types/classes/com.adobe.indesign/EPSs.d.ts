/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class EPSs extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any EPS in the collection.
			 * @returns {Adobe.Indesign.EPS}
			 */
			public anyItem(): Adobe.Indesign.EPS;
			/**
			 * Displays the number of elements in the EPS.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every EPS in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first EPS in the collection.
			 * @returns {Adobe.Indesign.EPS}
			 */
			public firstItem(): Adobe.Indesign.EPS;
			/**
			 * Returns the EPS with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.EPS}
			 */
			public item(indexParam: any): Adobe.Indesign.EPS;
			/**
			 * Returns the EPS with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.EPS}
			 */
			public itemByID(idParam: number): Adobe.Indesign.EPS;
			/**
			 * Returns the EPS with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.EPS}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.EPS;
			/**
			 * Returns the EPSs within the specified range.
			 * @param {any} fromParam The EPS, index, or name at the 
			 * beginning of the range. Can accept: EPS, Long Integer or 
			 * String.
			 * @param {any} toParam The EPS, index, or name at the end of 
			 * the range. Can accept: EPS, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last EPS in the collection.
			 * @returns {Adobe.Indesign.EPS}
			 */
			public lastItem(): Adobe.Indesign.EPS;
			/**
			 * Returns the middle EPS in the collection.
			 * @returns {Adobe.Indesign.EPS}
			 */
			public middleItem(): Adobe.Indesign.EPS;
			/**
			 * Returns the EPS whose index follows the specified EPS in the 
			 * collection.
			 * @param {EPS} objParam The EPS whose index comes before the 
			 * desired EPS. 
			 * @returns {Adobe.Indesign.EPS}
			 */
			public nextItem(objParam: EPS): Adobe.Indesign.EPS;
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
			 * Returns the EPS with the index previous to the specified 
			 * index.
			 * @param {EPS} objParam The index of the EPS that follows the 
			 * desired EPS.
			 * @returns {Adobe.Indesign.EPS}
			 */
			public previousItem(objParam: EPS): Adobe.Indesign.EPS;
		}
	}
}