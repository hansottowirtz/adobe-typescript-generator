/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class MotionPresets extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new MotionPreset.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new MotionPreset (Optional)
			 * @returns {Adobe.Indesign.MotionPreset}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.MotionPreset;
			/**
			 * Returns any MotionPreset in the collection.
			 * @returns {Adobe.Indesign.MotionPreset}
			 */
			public anyItem(): Adobe.Indesign.MotionPreset;
			/**
			 * Displays the number of elements in the MotionPreset.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every MotionPreset in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first MotionPreset in the collection.
			 * @returns {Adobe.Indesign.MotionPreset}
			 */
			public firstItem(): Adobe.Indesign.MotionPreset;
			/**
			 * Returns the MotionPreset with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.MotionPreset}
			 */
			public item(indexParam: any): Adobe.Indesign.MotionPreset;
			/**
			 * Returns the MotionPreset with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.MotionPreset}
			 */
			public itemByID(idParam: number): Adobe.Indesign.MotionPreset;
			/**
			 * Returns the MotionPreset with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.MotionPreset}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.MotionPreset;
			/**
			 * Returns the MotionPresets within the specified range.
			 * @param {any} fromParam The MotionPreset, index, or name at 
			 * the beginning of the range. Can accept: MotionPreset, Long 
			 * Integer or String.
			 * @param {any} toParam The MotionPreset, index, or name at the 
			 * end of the range. Can accept: MotionPreset, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last MotionPreset in the collection.
			 * @returns {Adobe.Indesign.MotionPreset}
			 */
			public lastItem(): Adobe.Indesign.MotionPreset;
			/**
			 * Returns the middle MotionPreset in the collection.
			 * @returns {Adobe.Indesign.MotionPreset}
			 */
			public middleItem(): Adobe.Indesign.MotionPreset;
			/**
			 * Returns the MotionPreset whose index follows the specified 
			 * MotionPreset in the collection.
			 * @param {MotionPreset} objParam The MotionPreset whose index 
			 * comes before the desired MotionPreset. 
			 * @returns {Adobe.Indesign.MotionPreset}
			 */
			public nextItem(objParam: MotionPreset): Adobe.Indesign.MotionPreset;
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
			 * Returns the MotionPreset with the index previous to the 
			 * specified index.
			 * @param {MotionPreset} objParam The index of the MotionPreset 
			 * that follows the desired MotionPreset.
			 * @returns {Adobe.Indesign.MotionPreset}
			 */
			public previousItem(objParam: MotionPreset): Adobe.Indesign.MotionPreset;
		}
	}
}