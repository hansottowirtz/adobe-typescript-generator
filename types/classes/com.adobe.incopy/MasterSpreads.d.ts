/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class MasterSpreads extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any MasterSpread in the collection. */
			public anyItem(): Adobe.Incopy.MasterSpread;
			/** Displays the number of elements in the MasterSpread. */
			public count(): number;
			/** Returns every MasterSpread in the collection. */
			public everyItem(): any;
			/** Returns the first MasterSpread in the collection. */
			public firstItem(): Adobe.Incopy.MasterSpread;
			/**
			 * Returns the MasterSpread with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.MasterSpread;
			/**
			 * Returns the MasterSpread with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.MasterSpread;
			/**
			 * Returns the MasterSpread with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.MasterSpread;
			/**
			 * Returns the MasterSpreads within the specified range.
			 * @param {any} fromParam - The MasterSpread, index, or name at 
			 * the beginning of the range. Can accept: MasterSpread, Long 
			 * Integer or String.
			 * @param {any} toParam - The MasterSpread, index, or name at 
			 * the end of the range. Can accept: MasterSpread, Long Integer 
			 * or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last MasterSpread in the collection. */
			public lastItem(): Adobe.Incopy.MasterSpread;
			/** Returns the middle MasterSpread in the collection. */
			public middleItem(): Adobe.Incopy.MasterSpread;
			/**
			 * Returns the MasterSpread whose index follows the specified 
			 * MasterSpread in the collection.
			 * @param {MasterSpread} objParam - The MasterSpread whose 
			 * index comes before the desired MasterSpread. 
			 */
			public nextItem(objParam: MasterSpread): Adobe.Incopy.MasterSpread;
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
			 * Returns the MasterSpread with the index previous to the 
			 * specified index.
			 * @param {MasterSpread} objParam - The index of the 
			 * MasterSpread that follows the desired MasterSpread.
			 */
			public previousItem(objParam: MasterSpread): Adobe.Incopy.MasterSpread;
		}
	}
}