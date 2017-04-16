/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Assignments extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Assignment in the collection.
			 * @returns {Adobe.Incopy.Assignment}
			 */
			public anyItem(): Adobe.Incopy.Assignment;
			/**
			 * Displays the number of elements in the Assignment.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Assignment in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Assignment in the collection.
			 * @returns {Adobe.Incopy.Assignment}
			 */
			public firstItem(): Adobe.Incopy.Assignment;
			/**
			 * Returns the Assignment with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.Assignment}
			 */
			public item(indexParam: any): Adobe.Incopy.Assignment;
			/**
			 * Returns the Assignment with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.Assignment}
			 */
			public itemByID(idParam: number): Adobe.Incopy.Assignment;
			/**
			 * Returns the Assignment with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.Assignment}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Assignment;
			/**
			 * Returns the Assignments within the specified range.
			 * @param {any} fromParam The Assignment, index, or name at the 
			 * beginning of the range. Can accept: Assignment, Long Integer 
			 * or String.
			 * @param {any} toParam The Assignment, index, or name at the 
			 * end of the range. Can accept: Assignment, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Assignment in the collection.
			 * @returns {Adobe.Incopy.Assignment}
			 */
			public lastItem(): Adobe.Incopy.Assignment;
			/**
			 * Returns the middle Assignment in the collection.
			 * @returns {Adobe.Incopy.Assignment}
			 */
			public middleItem(): Adobe.Incopy.Assignment;
			/**
			 * Returns the Assignment whose index follows the specified 
			 * Assignment in the collection.
			 * @param {Assignment} objParam The Assignment whose index 
			 * comes before the desired Assignment. 
			 * @returns {Adobe.Incopy.Assignment}
			 */
			public nextItem(objParam: Assignment): Adobe.Incopy.Assignment;
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
			 * Returns the Assignment with the index previous to the 
			 * specified index.
			 * @param {Assignment} objParam The index of the Assignment 
			 * that follows the desired Assignment.
			 * @returns {Adobe.Incopy.Assignment}
			 */
			public previousItem(objParam: Assignment): Adobe.Incopy.Assignment;
		}
	}
}