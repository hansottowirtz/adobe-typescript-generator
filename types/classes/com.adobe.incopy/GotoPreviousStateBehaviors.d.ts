/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class GotoPreviousStateBehaviors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any GotoPreviousStateBehavior in the collection.
			 * @returns {Adobe.Incopy.GotoPreviousStateBehavior}
			 */
			public anyItem(): Adobe.Incopy.GotoPreviousStateBehavior;
			/**
			 * Displays the number of elements in the 
			 * GotoPreviousStateBehavior.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every GotoPreviousStateBehavior in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first GotoPreviousStateBehavior in the 
			 * collection.
			 * @returns {Adobe.Incopy.GotoPreviousStateBehavior}
			 */
			public firstItem(): Adobe.Incopy.GotoPreviousStateBehavior;
			/**
			 * Returns the GotoPreviousStateBehavior with the specified 
			 * index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.GotoPreviousStateBehavior}
			 */
			public item(indexParam: any): Adobe.Incopy.GotoPreviousStateBehavior;
			/**
			 * Returns the GotoPreviousStateBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.GotoPreviousStateBehavior}
			 */
			public itemByID(idParam: number): Adobe.Incopy.GotoPreviousStateBehavior;
			/**
			 * Returns the GotoPreviousStateBehavior with the specified 
			 * name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.GotoPreviousStateBehavior}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.GotoPreviousStateBehavior;
			/**
			 * Returns the GotoPreviousStateBehaviors within the specified 
			 * range.
			 * @param {any} fromParam The GotoPreviousStateBehavior, index, 
			 * or name at the beginning of the range. Can accept: 
			 * GotoPreviousStateBehavior, Long Integer or String.
			 * @param {any} toParam The GotoPreviousStateBehavior, index, 
			 * or name at the end of the range. Can accept: 
			 * GotoPreviousStateBehavior, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last GotoPreviousStateBehavior in the 
			 * collection.
			 * @returns {Adobe.Incopy.GotoPreviousStateBehavior}
			 */
			public lastItem(): Adobe.Incopy.GotoPreviousStateBehavior;
			/**
			 * Returns the middle GotoPreviousStateBehavior in the 
			 * collection.
			 * @returns {Adobe.Incopy.GotoPreviousStateBehavior}
			 */
			public middleItem(): Adobe.Incopy.GotoPreviousStateBehavior;
			/**
			 * Returns the GotoPreviousStateBehavior whose index follows 
			 * the specified GotoPreviousStateBehavior in the collection.
			 * @param {GotoPreviousStateBehavior} objParam The 
			 * GotoPreviousStateBehavior whose index comes before the 
			 * desired GotoPreviousStateBehavior. 
			 * @returns {Adobe.Incopy.GotoPreviousStateBehavior}
			 */
			public nextItem(objParam: GotoPreviousStateBehavior): Adobe.Incopy.GotoPreviousStateBehavior;
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
			 * Returns the GotoPreviousStateBehavior with the index 
			 * previous to the specified index.
			 * @param {GotoPreviousStateBehavior} objParam The index of the 
			 * GotoPreviousStateBehavior that follows the desired 
			 * GotoPreviousStateBehavior.
			 * @returns {Adobe.Incopy.GotoPreviousStateBehavior}
			 */
			public previousItem(objParam: GotoPreviousStateBehavior): Adobe.Incopy.GotoPreviousStateBehavior;
		}
	}
}