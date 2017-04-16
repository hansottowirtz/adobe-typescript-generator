/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class GotoAnchorBehaviors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any GotoAnchorBehavior in the collection.
			 * @returns {Adobe.Incopy.GotoAnchorBehavior}
			 */
			public anyItem(): Adobe.Incopy.GotoAnchorBehavior;
			/**
			 * Displays the number of elements in the GotoAnchorBehavior.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every GotoAnchorBehavior in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first GotoAnchorBehavior in the collection.
			 * @returns {Adobe.Incopy.GotoAnchorBehavior}
			 */
			public firstItem(): Adobe.Incopy.GotoAnchorBehavior;
			/**
			 * Returns the GotoAnchorBehavior with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.GotoAnchorBehavior}
			 */
			public item(indexParam: any): Adobe.Incopy.GotoAnchorBehavior;
			/**
			 * Returns the GotoAnchorBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.GotoAnchorBehavior}
			 */
			public itemByID(idParam: number): Adobe.Incopy.GotoAnchorBehavior;
			/**
			 * Returns the GotoAnchorBehavior with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.GotoAnchorBehavior}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.GotoAnchorBehavior;
			/**
			 * Returns the GotoAnchorBehaviors within the specified range.
			 * @param {any} fromParam The GotoAnchorBehavior, index, or 
			 * name at the beginning of the range. Can accept: 
			 * GotoAnchorBehavior, Long Integer or String.
			 * @param {any} toParam The GotoAnchorBehavior, index, or name 
			 * at the end of the range. Can accept: GotoAnchorBehavior, 
			 * Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last GotoAnchorBehavior in the collection.
			 * @returns {Adobe.Incopy.GotoAnchorBehavior}
			 */
			public lastItem(): Adobe.Incopy.GotoAnchorBehavior;
			/**
			 * Returns the middle GotoAnchorBehavior in the collection.
			 * @returns {Adobe.Incopy.GotoAnchorBehavior}
			 */
			public middleItem(): Adobe.Incopy.GotoAnchorBehavior;
			/**
			 * Returns the GotoAnchorBehavior whose index follows the 
			 * specified GotoAnchorBehavior in the collection.
			 * @param {GotoAnchorBehavior} objParam The GotoAnchorBehavior 
			 * whose index comes before the desired GotoAnchorBehavior. 
			 * @returns {Adobe.Incopy.GotoAnchorBehavior}
			 */
			public nextItem(objParam: GotoAnchorBehavior): Adobe.Incopy.GotoAnchorBehavior;
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
			 * Returns the GotoAnchorBehavior with the index previous to 
			 * the specified index.
			 * @param {GotoAnchorBehavior} objParam The index of the 
			 * GotoAnchorBehavior that follows the desired 
			 * GotoAnchorBehavior.
			 * @returns {Adobe.Incopy.GotoAnchorBehavior}
			 */
			public previousItem(objParam: GotoAnchorBehavior): Adobe.Incopy.GotoAnchorBehavior;
		}
	}
}