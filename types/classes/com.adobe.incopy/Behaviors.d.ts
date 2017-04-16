/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Behaviors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Behavior in the collection.
			 * @returns {Adobe.Incopy.Behavior}
			 */
			public anyItem(): Adobe.Incopy.Behavior;
			/**
			 * Displays the number of elements in the Behavior.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Behavior in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Behavior in the collection.
			 * @returns {Adobe.Incopy.Behavior}
			 */
			public firstItem(): Adobe.Incopy.Behavior;
			/**
			 * Returns the Behavior with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.Behavior}
			 */
			public item(indexParam: any): Adobe.Incopy.Behavior;
			/**
			 * Returns the Behavior with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.Behavior}
			 */
			public itemByID(idParam: number): Adobe.Incopy.Behavior;
			/**
			 * Returns the Behavior with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.Behavior}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Behavior;
			/**
			 * Returns the Behaviors within the specified range.
			 * @param {any} fromParam The Behavior, index, or name at the 
			 * beginning of the range. Can accept: Behavior, Long Integer 
			 * or String.
			 * @param {any} toParam The Behavior, index, or name at the end 
			 * of the range. Can accept: Behavior, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Behavior in the collection.
			 * @returns {Adobe.Incopy.Behavior}
			 */
			public lastItem(): Adobe.Incopy.Behavior;
			/**
			 * Returns the middle Behavior in the collection.
			 * @returns {Adobe.Incopy.Behavior}
			 */
			public middleItem(): Adobe.Incopy.Behavior;
			/**
			 * Returns the Behavior whose index follows the specified 
			 * Behavior in the collection.
			 * @param {Behavior} objParam The Behavior whose index comes 
			 * before the desired Behavior. 
			 * @returns {Adobe.Incopy.Behavior}
			 */
			public nextItem(objParam: Behavior): Adobe.Incopy.Behavior;
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
			 * Returns the Behavior with the index previous to the 
			 * specified index.
			 * @param {Behavior} objParam The index of the Behavior that 
			 * follows the desired Behavior.
			 * @returns {Adobe.Incopy.Behavior}
			 */
			public previousItem(objParam: Behavior): Adobe.Incopy.Behavior;
		}
	}
}