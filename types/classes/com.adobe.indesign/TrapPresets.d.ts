/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
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
			 * @returns {Adobe.Indesign.TrapPreset}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.TrapPreset;
			/**
			 * Returns any TrapPreset in the collection.
			 * @returns {Adobe.Indesign.TrapPreset}
			 */
			public anyItem(): Adobe.Indesign.TrapPreset;
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
			 * @returns {Adobe.Indesign.TrapPreset}
			 */
			public firstItem(): Adobe.Indesign.TrapPreset;
			/**
			 * Returns the TrapPreset with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.TrapPreset}
			 */
			public item(indexParam: any): Adobe.Indesign.TrapPreset;
			/**
			 * Returns the TrapPreset with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.TrapPreset}
			 */
			public itemByID(idParam: number): Adobe.Indesign.TrapPreset;
			/**
			 * Returns the TrapPreset with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.TrapPreset}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.TrapPreset;
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
			 * @returns {Adobe.Indesign.TrapPreset}
			 */
			public lastItem(): Adobe.Indesign.TrapPreset;
			/**
			 * Returns the middle TrapPreset in the collection.
			 * @returns {Adobe.Indesign.TrapPreset}
			 */
			public middleItem(): Adobe.Indesign.TrapPreset;
			/**
			 * Returns the TrapPreset whose index follows the specified 
			 * TrapPreset in the collection.
			 * @param {TrapPreset} objParam The TrapPreset whose index 
			 * comes before the desired TrapPreset. 
			 * @returns {Adobe.Indesign.TrapPreset}
			 */
			public nextItem(objParam: TrapPreset): Adobe.Indesign.TrapPreset;
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
			 * @returns {Adobe.Indesign.TrapPreset}
			 */
			public previousItem(objParam: TrapPreset): Adobe.Indesign.TrapPreset;
		}
	}
}