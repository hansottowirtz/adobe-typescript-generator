/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class SoundBehaviors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any SoundBehavior in the collection.
			 * @returns {Adobe.Incopy.SoundBehavior}
			 */
			public anyItem(): Adobe.Incopy.SoundBehavior;
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
			 * @returns {Adobe.Incopy.SoundBehavior}
			 */
			public firstItem(): Adobe.Incopy.SoundBehavior;
			/**
			 * Returns the SoundBehavior with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.SoundBehavior}
			 */
			public item(indexParam: any): Adobe.Incopy.SoundBehavior;
			/**
			 * Returns the SoundBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.SoundBehavior}
			 */
			public itemByID(idParam: number): Adobe.Incopy.SoundBehavior;
			/**
			 * Returns the SoundBehavior with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.SoundBehavior}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.SoundBehavior;
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
			 * @returns {Adobe.Incopy.SoundBehavior}
			 */
			public lastItem(): Adobe.Incopy.SoundBehavior;
			/**
			 * Returns the middle SoundBehavior in the collection.
			 * @returns {Adobe.Incopy.SoundBehavior}
			 */
			public middleItem(): Adobe.Incopy.SoundBehavior;
			/**
			 * Returns the SoundBehavior whose index follows the specified 
			 * SoundBehavior in the collection.
			 * @param {SoundBehavior} objParam The SoundBehavior whose 
			 * index comes before the desired SoundBehavior. 
			 * @returns {Adobe.Incopy.SoundBehavior}
			 */
			public nextItem(objParam: SoundBehavior): Adobe.Incopy.SoundBehavior;
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
			 * @returns {Adobe.Incopy.SoundBehavior}
			 */
			public previousItem(objParam: SoundBehavior): Adobe.Incopy.SoundBehavior;
		}
	}
}