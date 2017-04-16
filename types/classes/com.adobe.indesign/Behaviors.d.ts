/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Behaviors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Behavior in the collection.
			 * @returns {Adobe.Indesign.Behavior}
			 */
			public anyItem(): Adobe.Indesign.Behavior;
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
			 * @returns {Adobe.Indesign.Behavior}
			 */
			public firstItem(): Adobe.Indesign.Behavior;
			/**
			 * Returns the Behavior with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Behavior}
			 */
			public item(indexParam: any): Adobe.Indesign.Behavior;
			/**
			 * Returns the Behavior with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.Behavior}
			 */
			public itemByID(idParam: number): Adobe.Indesign.Behavior;
			/**
			 * Returns the Behavior with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.Behavior}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Behavior;
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
			 * @returns {Adobe.Indesign.Behavior}
			 */
			public lastItem(): Adobe.Indesign.Behavior;
			/**
			 * Returns the middle Behavior in the collection.
			 * @returns {Adobe.Indesign.Behavior}
			 */
			public middleItem(): Adobe.Indesign.Behavior;
			/**
			 * Returns the Behavior whose index follows the specified 
			 * Behavior in the collection.
			 * @param {Behavior} objParam The Behavior whose index comes 
			 * before the desired Behavior. 
			 * @returns {Adobe.Indesign.Behavior}
			 */
			public nextItem(objParam: Behavior): Adobe.Indesign.Behavior;
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
			 * @returns {Adobe.Indesign.Behavior}
			 */
			public previousItem(objParam: Behavior): Adobe.Indesign.Behavior;
		}
	}
}