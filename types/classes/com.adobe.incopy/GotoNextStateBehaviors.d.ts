/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class GotoNextStateBehaviors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any GotoNextStateBehavior in the collection.
			 * @returns {Adobe.Incopy.GotoNextStateBehavior}
			 */
			public anyItem(): Adobe.Incopy.GotoNextStateBehavior;
			/**
			 * Displays the number of elements in the 
			 * GotoNextStateBehavior.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every GotoNextStateBehavior in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first GotoNextStateBehavior in the collection.
			 * @returns {Adobe.Incopy.GotoNextStateBehavior}
			 */
			public firstItem(): Adobe.Incopy.GotoNextStateBehavior;
			/**
			 * Returns the GotoNextStateBehavior with the specified index 
			 * or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.GotoNextStateBehavior}
			 */
			public item(indexParam: any): Adobe.Incopy.GotoNextStateBehavior;
			/**
			 * Returns the GotoNextStateBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.GotoNextStateBehavior}
			 */
			public itemByID(idParam: number): Adobe.Incopy.GotoNextStateBehavior;
			/**
			 * Returns the GotoNextStateBehavior with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.GotoNextStateBehavior}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.GotoNextStateBehavior;
			/**
			 * Returns the GotoNextStateBehaviors within the specified 
			 * range.
			 * @param {any} fromParam The GotoNextStateBehavior, index, or 
			 * name at the beginning of the range. Can accept: 
			 * GotoNextStateBehavior, Long Integer or String.
			 * @param {any} toParam The GotoNextStateBehavior, index, or 
			 * name at the end of the range. Can accept: 
			 * GotoNextStateBehavior, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last GotoNextStateBehavior in the collection.
			 * @returns {Adobe.Incopy.GotoNextStateBehavior}
			 */
			public lastItem(): Adobe.Incopy.GotoNextStateBehavior;
			/**
			 * Returns the middle GotoNextStateBehavior in the collection.
			 * @returns {Adobe.Incopy.GotoNextStateBehavior}
			 */
			public middleItem(): Adobe.Incopy.GotoNextStateBehavior;
			/**
			 * Returns the GotoNextStateBehavior whose index follows the 
			 * specified GotoNextStateBehavior in the collection.
			 * @param {GotoNextStateBehavior} objParam The 
			 * GotoNextStateBehavior whose index comes before the desired 
			 * GotoNextStateBehavior. 
			 * @returns {Adobe.Incopy.GotoNextStateBehavior}
			 */
			public nextItem(objParam: GotoNextStateBehavior): Adobe.Incopy.GotoNextStateBehavior;
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
			 * Returns the GotoNextStateBehavior with the index previous to 
			 * the specified index.
			 * @param {GotoNextStateBehavior} objParam The index of the 
			 * GotoNextStateBehavior that follows the desired 
			 * GotoNextStateBehavior.
			 * @returns {Adobe.Incopy.GotoNextStateBehavior}
			 */
			public previousItem(objParam: GotoNextStateBehavior): Adobe.Incopy.GotoNextStateBehavior;
		}
	}
}