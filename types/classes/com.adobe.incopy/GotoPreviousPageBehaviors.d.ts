/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class GotoPreviousPageBehaviors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any GotoPreviousPageBehavior in the collection.
			 * @returns {Adobe.Incopy.GotoPreviousPageBehavior}
			 */
			public anyItem(): Adobe.Incopy.GotoPreviousPageBehavior;
			/**
			 * Displays the number of elements in the 
			 * GotoPreviousPageBehavior.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every GotoPreviousPageBehavior in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first GotoPreviousPageBehavior in the 
			 * collection.
			 * @returns {Adobe.Incopy.GotoPreviousPageBehavior}
			 */
			public firstItem(): Adobe.Incopy.GotoPreviousPageBehavior;
			/**
			 * Returns the GotoPreviousPageBehavior with the specified 
			 * index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.GotoPreviousPageBehavior}
			 */
			public item(indexParam: any): Adobe.Incopy.GotoPreviousPageBehavior;
			/**
			 * Returns the GotoPreviousPageBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.GotoPreviousPageBehavior}
			 */
			public itemByID(idParam: number): Adobe.Incopy.GotoPreviousPageBehavior;
			/**
			 * Returns the GotoPreviousPageBehavior with the specified 
			 * name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.GotoPreviousPageBehavior}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.GotoPreviousPageBehavior;
			/**
			 * Returns the GotoPreviousPageBehaviors within the specified 
			 * range.
			 * @param {any} fromParam The GotoPreviousPageBehavior, index, 
			 * or name at the beginning of the range. Can accept: 
			 * GotoPreviousPageBehavior, Long Integer or String.
			 * @param {any} toParam The GotoPreviousPageBehavior, index, or 
			 * name at the end of the range. Can accept: 
			 * GotoPreviousPageBehavior, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last GotoPreviousPageBehavior in the collection.
			 * @returns {Adobe.Incopy.GotoPreviousPageBehavior}
			 */
			public lastItem(): Adobe.Incopy.GotoPreviousPageBehavior;
			/**
			 * Returns the middle GotoPreviousPageBehavior in the 
			 * collection.
			 * @returns {Adobe.Incopy.GotoPreviousPageBehavior}
			 */
			public middleItem(): Adobe.Incopy.GotoPreviousPageBehavior;
			/**
			 * Returns the GotoPreviousPageBehavior whose index follows the 
			 * specified GotoPreviousPageBehavior in the collection.
			 * @param {GotoPreviousPageBehavior} objParam The 
			 * GotoPreviousPageBehavior whose index comes before the 
			 * desired GotoPreviousPageBehavior. 
			 * @returns {Adobe.Incopy.GotoPreviousPageBehavior}
			 */
			public nextItem(objParam: GotoPreviousPageBehavior): Adobe.Incopy.GotoPreviousPageBehavior;
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
			 * Returns the GotoPreviousPageBehavior with the index previous 
			 * to the specified index.
			 * @param {GotoPreviousPageBehavior} objParam The index of the 
			 * GotoPreviousPageBehavior that follows the desired 
			 * GotoPreviousPageBehavior.
			 * @returns {Adobe.Incopy.GotoPreviousPageBehavior}
			 */
			public previousItem(objParam: GotoPreviousPageBehavior): Adobe.Incopy.GotoPreviousPageBehavior;
		}
	}
}