/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class GotoStateBehaviors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any GotoStateBehavior in the collection.
			 * @returns {Adobe.Incopy.GotoStateBehavior}
			 */
			public anyItem(): Adobe.Incopy.GotoStateBehavior;
			/**
			 * Displays the number of elements in the GotoStateBehavior.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every GotoStateBehavior in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first GotoStateBehavior in the collection.
			 * @returns {Adobe.Incopy.GotoStateBehavior}
			 */
			public firstItem(): Adobe.Incopy.GotoStateBehavior;
			/**
			 * Returns the GotoStateBehavior with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.GotoStateBehavior}
			 */
			public item(indexParam: any): Adobe.Incopy.GotoStateBehavior;
			/**
			 * Returns the GotoStateBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.GotoStateBehavior}
			 */
			public itemByID(idParam: number): Adobe.Incopy.GotoStateBehavior;
			/**
			 * Returns the GotoStateBehavior with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.GotoStateBehavior}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.GotoStateBehavior;
			/**
			 * Returns the GotoStateBehaviors within the specified range.
			 * @param {any} fromParam The GotoStateBehavior, index, or name 
			 * at the beginning of the range. Can accept: 
			 * GotoStateBehavior, Long Integer or String.
			 * @param {any} toParam The GotoStateBehavior, index, or name 
			 * at the end of the range. Can accept: GotoStateBehavior, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last GotoStateBehavior in the collection.
			 * @returns {Adobe.Incopy.GotoStateBehavior}
			 */
			public lastItem(): Adobe.Incopy.GotoStateBehavior;
			/**
			 * Returns the middle GotoStateBehavior in the collection.
			 * @returns {Adobe.Incopy.GotoStateBehavior}
			 */
			public middleItem(): Adobe.Incopy.GotoStateBehavior;
			/**
			 * Returns the GotoStateBehavior whose index follows the 
			 * specified GotoStateBehavior in the collection.
			 * @param {GotoStateBehavior} objParam The GotoStateBehavior 
			 * whose index comes before the desired GotoStateBehavior. 
			 * @returns {Adobe.Incopy.GotoStateBehavior}
			 */
			public nextItem(objParam: GotoStateBehavior): Adobe.Incopy.GotoStateBehavior;
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
			 * Returns the GotoStateBehavior with the index previous to the 
			 * specified index.
			 * @param {GotoStateBehavior} objParam The index of the 
			 * GotoStateBehavior that follows the desired 
			 * GotoStateBehavior.
			 * @returns {Adobe.Incopy.GotoStateBehavior}
			 */
			public previousItem(objParam: GotoStateBehavior): Adobe.Incopy.GotoStateBehavior;
		}
	}
}