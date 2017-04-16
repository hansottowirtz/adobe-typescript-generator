/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class GotoLastPageBehaviors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any GotoLastPageBehavior in the collection.
			 * @returns {Adobe.Incopy.GotoLastPageBehavior}
			 */
			public anyItem(): Adobe.Incopy.GotoLastPageBehavior;
			/**
			 * Displays the number of elements in the GotoLastPageBehavior.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every GotoLastPageBehavior in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first GotoLastPageBehavior in the collection.
			 * @returns {Adobe.Incopy.GotoLastPageBehavior}
			 */
			public firstItem(): Adobe.Incopy.GotoLastPageBehavior;
			/**
			 * Returns the GotoLastPageBehavior with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.GotoLastPageBehavior}
			 */
			public item(indexParam: any): Adobe.Incopy.GotoLastPageBehavior;
			/**
			 * Returns the GotoLastPageBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.GotoLastPageBehavior}
			 */
			public itemByID(idParam: number): Adobe.Incopy.GotoLastPageBehavior;
			/**
			 * Returns the GotoLastPageBehavior with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.GotoLastPageBehavior}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.GotoLastPageBehavior;
			/**
			 * Returns the GotoLastPageBehaviors within the specified 
			 * range.
			 * @param {any} fromParam The GotoLastPageBehavior, index, or 
			 * name at the beginning of the range. Can accept: 
			 * GotoLastPageBehavior, Long Integer or String.
			 * @param {any} toParam The GotoLastPageBehavior, index, or 
			 * name at the end of the range. Can accept: 
			 * GotoLastPageBehavior, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last GotoLastPageBehavior in the collection.
			 * @returns {Adobe.Incopy.GotoLastPageBehavior}
			 */
			public lastItem(): Adobe.Incopy.GotoLastPageBehavior;
			/**
			 * Returns the middle GotoLastPageBehavior in the collection.
			 * @returns {Adobe.Incopy.GotoLastPageBehavior}
			 */
			public middleItem(): Adobe.Incopy.GotoLastPageBehavior;
			/**
			 * Returns the GotoLastPageBehavior whose index follows the 
			 * specified GotoLastPageBehavior in the collection.
			 * @param {GotoLastPageBehavior} objParam The 
			 * GotoLastPageBehavior whose index comes before the desired 
			 * GotoLastPageBehavior. 
			 * @returns {Adobe.Incopy.GotoLastPageBehavior}
			 */
			public nextItem(objParam: GotoLastPageBehavior): Adobe.Incopy.GotoLastPageBehavior;
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
			 * Returns the GotoLastPageBehavior with the index previous to 
			 * the specified index.
			 * @param {GotoLastPageBehavior} objParam The index of the 
			 * GotoLastPageBehavior that follows the desired 
			 * GotoLastPageBehavior.
			 * @returns {Adobe.Incopy.GotoLastPageBehavior}
			 */
			public previousItem(objParam: GotoLastPageBehavior): Adobe.Incopy.GotoLastPageBehavior;
		}
	}
}