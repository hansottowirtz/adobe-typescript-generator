/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class MasterSpreads extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any MasterSpread in the collection.
			 * @returns {Adobe.Incopy.MasterSpread}
			 */
			public anyItem(): Adobe.Incopy.MasterSpread;
			/**
			 * Displays the number of elements in the MasterSpread.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every MasterSpread in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first MasterSpread in the collection.
			 * @returns {Adobe.Incopy.MasterSpread}
			 */
			public firstItem(): Adobe.Incopy.MasterSpread;
			/**
			 * Returns the MasterSpread with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.MasterSpread}
			 */
			public item(indexParam: any): Adobe.Incopy.MasterSpread;
			/**
			 * Returns the MasterSpread with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.MasterSpread}
			 */
			public itemByID(idParam: number): Adobe.Incopy.MasterSpread;
			/**
			 * Returns the MasterSpread with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.MasterSpread}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.MasterSpread;
			/**
			 * Returns the MasterSpreads within the specified range.
			 * @param {any} fromParam The MasterSpread, index, or name at 
			 * the beginning of the range. Can accept: MasterSpread, Long 
			 * Integer or String.
			 * @param {any} toParam The MasterSpread, index, or name at the 
			 * end of the range. Can accept: MasterSpread, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last MasterSpread in the collection.
			 * @returns {Adobe.Incopy.MasterSpread}
			 */
			public lastItem(): Adobe.Incopy.MasterSpread;
			/**
			 * Returns the middle MasterSpread in the collection.
			 * @returns {Adobe.Incopy.MasterSpread}
			 */
			public middleItem(): Adobe.Incopy.MasterSpread;
			/**
			 * Returns the MasterSpread whose index follows the specified 
			 * MasterSpread in the collection.
			 * @param {MasterSpread} objParam The MasterSpread whose index 
			 * comes before the desired MasterSpread. 
			 * @returns {Adobe.Incopy.MasterSpread}
			 */
			public nextItem(objParam: MasterSpread): Adobe.Incopy.MasterSpread;
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
			 * Returns the MasterSpread with the index previous to the 
			 * specified index.
			 * @param {MasterSpread} objParam The index of the MasterSpread 
			 * that follows the desired MasterSpread.
			 * @returns {Adobe.Incopy.MasterSpread}
			 */
			public previousItem(objParam: MasterSpread): Adobe.Incopy.MasterSpread;
		}
	}
}