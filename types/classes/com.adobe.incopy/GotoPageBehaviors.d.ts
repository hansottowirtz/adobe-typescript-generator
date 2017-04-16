/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class GotoPageBehaviors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any GotoPageBehavior in the collection.
			 * @returns {Adobe.Incopy.GotoPageBehavior}
			 */
			public anyItem(): Adobe.Incopy.GotoPageBehavior;
			/**
			 * Displays the number of elements in the GotoPageBehavior.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every GotoPageBehavior in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first GotoPageBehavior in the collection.
			 * @returns {Adobe.Incopy.GotoPageBehavior}
			 */
			public firstItem(): Adobe.Incopy.GotoPageBehavior;
			/**
			 * Returns the GotoPageBehavior with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.GotoPageBehavior}
			 */
			public item(indexParam: any): Adobe.Incopy.GotoPageBehavior;
			/**
			 * Returns the GotoPageBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.GotoPageBehavior}
			 */
			public itemByID(idParam: number): Adobe.Incopy.GotoPageBehavior;
			/**
			 * Returns the GotoPageBehavior with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.GotoPageBehavior}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.GotoPageBehavior;
			/**
			 * Returns the GotoPageBehaviors within the specified range.
			 * @param {any} fromParam The GotoPageBehavior, index, or name 
			 * at the beginning of the range. Can accept: GotoPageBehavior, 
			 * Long Integer or String.
			 * @param {any} toParam The GotoPageBehavior, index, or name at 
			 * the end of the range. Can accept: GotoPageBehavior, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last GotoPageBehavior in the collection.
			 * @returns {Adobe.Incopy.GotoPageBehavior}
			 */
			public lastItem(): Adobe.Incopy.GotoPageBehavior;
			/**
			 * Returns the middle GotoPageBehavior in the collection.
			 * @returns {Adobe.Incopy.GotoPageBehavior}
			 */
			public middleItem(): Adobe.Incopy.GotoPageBehavior;
			/**
			 * Returns the GotoPageBehavior whose index follows the 
			 * specified GotoPageBehavior in the collection.
			 * @param {GotoPageBehavior} objParam The GotoPageBehavior 
			 * whose index comes before the desired GotoPageBehavior. 
			 * @returns {Adobe.Incopy.GotoPageBehavior}
			 */
			public nextItem(objParam: GotoPageBehavior): Adobe.Incopy.GotoPageBehavior;
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
			 * Returns the GotoPageBehavior with the index previous to the 
			 * specified index.
			 * @param {GotoPageBehavior} objParam The index of the 
			 * GotoPageBehavior that follows the desired GotoPageBehavior.
			 * @returns {Adobe.Incopy.GotoPageBehavior}
			 */
			public previousItem(objParam: GotoPageBehavior): Adobe.Incopy.GotoPageBehavior;
		}
	}
}