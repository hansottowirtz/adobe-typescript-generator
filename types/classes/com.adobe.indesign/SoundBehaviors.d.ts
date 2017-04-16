/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SoundBehaviors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new SoundBehavior.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new SoundBehavior (Optional)
			 * @returns {Adobe.Indesign.SoundBehavior}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.SoundBehavior;
			/**
			 * Returns any SoundBehavior in the collection.
			 * @returns {Adobe.Indesign.SoundBehavior}
			 */
			public anyItem(): Adobe.Indesign.SoundBehavior;
			/**
			 * Displays the number of elements in the SoundBehavior.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every SoundBehavior in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first SoundBehavior in the collection.
			 * @returns {Adobe.Indesign.SoundBehavior}
			 */
			public firstItem(): Adobe.Indesign.SoundBehavior;
			/**
			 * Returns the SoundBehavior with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.SoundBehavior}
			 */
			public item(indexParam: any): Adobe.Indesign.SoundBehavior;
			/**
			 * Returns the SoundBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.SoundBehavior}
			 */
			public itemByID(idParam: number): Adobe.Indesign.SoundBehavior;
			/**
			 * Returns the SoundBehavior with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.SoundBehavior}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.SoundBehavior;
			/**
			 * Returns the SoundBehaviors within the specified range.
			 * @param {any} fromParam The SoundBehavior, index, or name at 
			 * the beginning of the range. Can accept: SoundBehavior, Long 
			 * Integer or String.
			 * @param {any} toParam The SoundBehavior, index, or name at 
			 * the end of the range. Can accept: SoundBehavior, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last SoundBehavior in the collection.
			 * @returns {Adobe.Indesign.SoundBehavior}
			 */
			public lastItem(): Adobe.Indesign.SoundBehavior;
			/**
			 * Returns the middle SoundBehavior in the collection.
			 * @returns {Adobe.Indesign.SoundBehavior}
			 */
			public middleItem(): Adobe.Indesign.SoundBehavior;
			/**
			 * Returns the SoundBehavior whose index follows the specified 
			 * SoundBehavior in the collection.
			 * @param {SoundBehavior} objParam The SoundBehavior whose 
			 * index comes before the desired SoundBehavior. 
			 * @returns {Adobe.Indesign.SoundBehavior}
			 */
			public nextItem(objParam: SoundBehavior): Adobe.Indesign.SoundBehavior;
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
			 * Returns the SoundBehavior with the index previous to the 
			 * specified index.
			 * @param {SoundBehavior} objParam The index of the 
			 * SoundBehavior that follows the desired SoundBehavior.
			 * @returns {Adobe.Indesign.SoundBehavior}
			 */
			public previousItem(objParam: SoundBehavior): Adobe.Indesign.SoundBehavior;
		}
	}
}