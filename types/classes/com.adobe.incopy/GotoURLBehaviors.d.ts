/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class GotoURLBehaviors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any GotoURLBehavior in the collection.
			 * @returns {Adobe.Incopy.GotoURLBehavior}
			 */
			public anyItem(): Adobe.Incopy.GotoURLBehavior;
			/**
			 * Displays the number of elements in the GotoURLBehavior.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every GotoURLBehavior in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first GotoURLBehavior in the collection.
			 * @returns {Adobe.Incopy.GotoURLBehavior}
			 */
			public firstItem(): Adobe.Incopy.GotoURLBehavior;
			/**
			 * Returns the GotoURLBehavior with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.GotoURLBehavior}
			 */
			public item(indexParam: any): Adobe.Incopy.GotoURLBehavior;
			/**
			 * Returns the GotoURLBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.GotoURLBehavior}
			 */
			public itemByID(idParam: number): Adobe.Incopy.GotoURLBehavior;
			/**
			 * Returns the GotoURLBehavior with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.GotoURLBehavior}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.GotoURLBehavior;
			/**
			 * Returns the GotoURLBehaviors within the specified range.
			 * @param {any} fromParam The GotoURLBehavior, index, or name 
			 * at the beginning of the range. Can accept: GotoURLBehavior, 
			 * Long Integer or String.
			 * @param {any} toParam The GotoURLBehavior, index, or name at 
			 * the end of the range. Can accept: GotoURLBehavior, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last GotoURLBehavior in the collection.
			 * @returns {Adobe.Incopy.GotoURLBehavior}
			 */
			public lastItem(): Adobe.Incopy.GotoURLBehavior;
			/**
			 * Returns the middle GotoURLBehavior in the collection.
			 * @returns {Adobe.Incopy.GotoURLBehavior}
			 */
			public middleItem(): Adobe.Incopy.GotoURLBehavior;
			/**
			 * Returns the GotoURLBehavior whose index follows the 
			 * specified GotoURLBehavior in the collection.
			 * @param {GotoURLBehavior} objParam The GotoURLBehavior whose 
			 * index comes before the desired GotoURLBehavior. 
			 * @returns {Adobe.Incopy.GotoURLBehavior}
			 */
			public nextItem(objParam: GotoURLBehavior): Adobe.Incopy.GotoURLBehavior;
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
			 * Returns the GotoURLBehavior with the index previous to the 
			 * specified index.
			 * @param {GotoURLBehavior} objParam The index of the 
			 * GotoURLBehavior that follows the desired GotoURLBehavior.
			 * @returns {Adobe.Incopy.GotoURLBehavior}
			 */
			public previousItem(objParam: GotoURLBehavior): Adobe.Incopy.GotoURLBehavior;
		}
	}
}