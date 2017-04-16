/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class FlattenerPresets extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new FlattenerPreset.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new FlattenerPreset (Optional)
			 * @returns {Adobe.Indesign.FlattenerPreset}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.FlattenerPreset;
			/**
			 * Returns any FlattenerPreset in the collection.
			 * @returns {Adobe.Indesign.FlattenerPreset}
			 */
			public anyItem(): Adobe.Indesign.FlattenerPreset;
			/**
			 * Displays the number of elements in the FlattenerPreset.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every FlattenerPreset in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first FlattenerPreset in the collection.
			 * @returns {Adobe.Indesign.FlattenerPreset}
			 */
			public firstItem(): Adobe.Indesign.FlattenerPreset;
			/**
			 * Returns the FlattenerPreset with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.FlattenerPreset}
			 */
			public item(indexParam: any): Adobe.Indesign.FlattenerPreset;
			/**
			 * Returns the FlattenerPreset with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.FlattenerPreset}
			 */
			public itemByID(idParam: number): Adobe.Indesign.FlattenerPreset;
			/**
			 * Returns the FlattenerPreset with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.FlattenerPreset}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.FlattenerPreset;
			/**
			 * Returns the FlattenerPresets within the specified range.
			 * @param {any} fromParam The FlattenerPreset, index, or name 
			 * at the beginning of the range. Can accept: FlattenerPreset, 
			 * Long Integer or String.
			 * @param {any} toParam The FlattenerPreset, index, or name at 
			 * the end of the range. Can accept: FlattenerPreset, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last FlattenerPreset in the collection.
			 * @returns {Adobe.Indesign.FlattenerPreset}
			 */
			public lastItem(): Adobe.Indesign.FlattenerPreset;
			/**
			 * Returns the middle FlattenerPreset in the collection.
			 * @returns {Adobe.Indesign.FlattenerPreset}
			 */
			public middleItem(): Adobe.Indesign.FlattenerPreset;
			/**
			 * Returns the FlattenerPreset whose index follows the 
			 * specified FlattenerPreset in the collection.
			 * @param {FlattenerPreset} objParam The FlattenerPreset whose 
			 * index comes before the desired FlattenerPreset. 
			 * @returns {Adobe.Indesign.FlattenerPreset}
			 */
			public nextItem(objParam: FlattenerPreset): Adobe.Indesign.FlattenerPreset;
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
			 * Returns the FlattenerPreset with the index previous to the 
			 * specified index.
			 * @param {FlattenerPreset} objParam The index of the 
			 * FlattenerPreset that follows the desired FlattenerPreset.
			 * @returns {Adobe.Indesign.FlattenerPreset}
			 */
			public previousItem(objParam: FlattenerPreset): Adobe.Indesign.FlattenerPreset;
		}
	}
}