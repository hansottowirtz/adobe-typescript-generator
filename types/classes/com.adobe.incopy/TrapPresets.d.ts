/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TrapPresets extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new TrapPreset.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new TrapPreset (Optional)
			 * @returns {Adobe.Incopy.TrapPreset}
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.TrapPreset;
			/**
			 * Returns any TrapPreset in the collection.
			 * @returns {Adobe.Incopy.TrapPreset}
			 */
			public anyItem(): Adobe.Incopy.TrapPreset;
			/**
			 * Displays the number of elements in the TrapPreset.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every TrapPreset in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first TrapPreset in the collection.
			 * @returns {Adobe.Incopy.TrapPreset}
			 */
			public firstItem(): Adobe.Incopy.TrapPreset;
			/**
			 * Returns the TrapPreset with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.TrapPreset}
			 */
			public item(indexParam: any): Adobe.Incopy.TrapPreset;
			/**
			 * Returns the TrapPreset with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.TrapPreset}
			 */
			public itemByID(idParam: number): Adobe.Incopy.TrapPreset;
			/**
			 * Returns the TrapPreset with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.TrapPreset}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.TrapPreset;
			/**
			 * Returns the TrapPresets within the specified range.
			 * @param {any} fromParam The TrapPreset, index, or name at the 
			 * beginning of the range. Can accept: TrapPreset, Long Integer 
			 * or String.
			 * @param {any} toParam The TrapPreset, index, or name at the 
			 * end of the range. Can accept: TrapPreset, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last TrapPreset in the collection.
			 * @returns {Adobe.Incopy.TrapPreset}
			 */
			public lastItem(): Adobe.Incopy.TrapPreset;
			/**
			 * Returns the middle TrapPreset in the collection.
			 * @returns {Adobe.Incopy.TrapPreset}
			 */
			public middleItem(): Adobe.Incopy.TrapPreset;
			/**
			 * Returns the TrapPreset whose index follows the specified 
			 * TrapPreset in the collection.
			 * @param {TrapPreset} objParam The TrapPreset whose index 
			 * comes before the desired TrapPreset. 
			 * @returns {Adobe.Incopy.TrapPreset}
			 */
			public nextItem(objParam: TrapPreset): Adobe.Incopy.TrapPreset;
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
			 * Returns the TrapPreset with the index previous to the 
			 * specified index.
			 * @param {TrapPreset} objParam The index of the TrapPreset 
			 * that follows the desired TrapPreset.
			 * @returns {Adobe.Incopy.TrapPreset}
			 */
			public previousItem(objParam: TrapPreset): Adobe.Incopy.TrapPreset;
		}
	}
}