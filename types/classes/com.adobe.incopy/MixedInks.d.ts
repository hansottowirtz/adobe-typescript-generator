/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class MixedInks extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any MixedInk in the collection. */
			public anyItem(): Adobe.Incopy.MixedInk;
			/** Displays the number of elements in the MixedInk. */
			public count(): number;
			/** Returns every MixedInk in the collection. */
			public everyItem(): any;
			/** Returns the first MixedInk in the collection. */
			public firstItem(): Adobe.Incopy.MixedInk;
			/**
			 * Returns the MixedInk with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.MixedInk;
			/**
			 * Returns the MixedInk with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.MixedInk;
			/**
			 * Returns the MixedInk with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.MixedInk;
			/**
			 * Returns the MixedInks within the specified range.
			 * @param {any} fromParam The MixedInk, index, or name at the 
			 * beginning of the range. Can accept: MixedInk, Long Integer 
			 * or String.
			 * @param {any} toParam The MixedInk, index, or name at the end 
			 * of the range. Can accept: MixedInk, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last MixedInk in the collection. */
			public lastItem(): Adobe.Incopy.MixedInk;
			/** Returns the middle MixedInk in the collection. */
			public middleItem(): Adobe.Incopy.MixedInk;
			/**
			 * Returns the MixedInk whose index follows the specified 
			 * MixedInk in the collection.
			 * @param {MixedInk} objParam The MixedInk whose index comes 
			 * before the desired MixedInk. 
			 */
			public nextItem(objParam: MixedInk): Adobe.Incopy.MixedInk;
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
			 * Returns the MixedInk with the index previous to the 
			 * specified index.
			 * @param {MixedInk} objParam The index of the MixedInk that 
			 * follows the desired MixedInk.
			 */
			public previousItem(objParam: MixedInk): Adobe.Incopy.MixedInk;
		}
	}
}