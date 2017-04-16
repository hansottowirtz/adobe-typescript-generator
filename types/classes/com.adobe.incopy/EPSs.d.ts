/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class EPSs extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any EPS in the collection.
			 * @returns {Adobe.Incopy.EPS}
			 */
			public anyItem(): Adobe.Incopy.EPS;
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
			 * @returns {Adobe.Incopy.EPS}
			 */
			public firstItem(): Adobe.Incopy.EPS;
			/**
			 * Returns the EPS with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.EPS}
			 */
			public item(indexParam: any): Adobe.Incopy.EPS;
			/**
			 * Returns the EPS with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.EPS}
			 */
			public itemByID(idParam: number): Adobe.Incopy.EPS;
			/**
			 * Returns the EPS with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.EPS}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.EPS;
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
			 * @returns {Adobe.Incopy.EPS}
			 */
			public lastItem(): Adobe.Incopy.EPS;
			/**
			 * Returns the middle EPS in the collection.
			 * @returns {Adobe.Incopy.EPS}
			 */
			public middleItem(): Adobe.Incopy.EPS;
			/**
			 * Returns the EPS whose index follows the specified EPS in the 
			 * collection.
			 * @param {EPS} objParam The EPS whose index comes before the 
			 * desired EPS. 
			 * @returns {Adobe.Incopy.EPS}
			 */
			public nextItem(objParam: EPS): Adobe.Incopy.EPS;
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
			 * @returns {Adobe.Incopy.EPS}
			 */
			public previousItem(objParam: EPS): Adobe.Incopy.EPS;
		}
	}
}