/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class MixedInks extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any MixedInk in the collection.
			 * @returns {Adobe.Incopy.MixedInk}
			 */
			public anyItem(): Adobe.Incopy.MixedInk;
			/**
			 * Displays the number of elements in the MixedInk.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every MixedInk in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first MixedInk in the collection.
			 * @returns {Adobe.Incopy.MixedInk}
			 */
			public firstItem(): Adobe.Incopy.MixedInk;
			/**
			 * Returns the MixedInk with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.MixedInk}
			 */
			public item(indexParam: any): Adobe.Incopy.MixedInk;
			/**
			 * Returns the MixedInk with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.MixedInk}
			 */
			public itemByID(idParam: number): Adobe.Incopy.MixedInk;
			/**
			 * Returns the MixedInk with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.MixedInk}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.MixedInk;
			/**
			 * Returns the MixedInks within the specified range.
			 * @param {any} fromParam The MixedInk, index, or name at the 
			 * beginning of the range. Can accept: MixedInk, Long Integer 
			 * or String.
			 * @param {any} toParam The MixedInk, index, or name at the end 
			 * of the range. Can accept: MixedInk, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last MixedInk in the collection.
			 * @returns {Adobe.Incopy.MixedInk}
			 */
			public lastItem(): Adobe.Incopy.MixedInk;
			/**
			 * Returns the middle MixedInk in the collection.
			 * @returns {Adobe.Incopy.MixedInk}
			 */
			public middleItem(): Adobe.Incopy.MixedInk;
			/**
			 * Returns the MixedInk whose index follows the specified 
			 * MixedInk in the collection.
			 * @param {MixedInk} objParam The MixedInk whose index comes 
			 * before the desired MixedInk. 
			 * @returns {Adobe.Incopy.MixedInk}
			 */
			public nextItem(objParam: MixedInk): Adobe.Incopy.MixedInk;
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
			 * Returns the MixedInk with the index previous to the 
			 * specified index.
			 * @param {MixedInk} objParam The index of the MixedInk that 
			 * follows the desired MixedInk.
			 * @returns {Adobe.Incopy.MixedInk}
			 */
			public previousItem(objParam: MixedInk): Adobe.Incopy.MixedInk;
		}
	}
}