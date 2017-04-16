/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Conditions extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new Condition.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Condition (Optional)
			 * @returns {Adobe.Indesign.Condition}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.Condition;
			/**
			 * Returns any Condition in the collection.
			 * @returns {Adobe.Indesign.Condition}
			 */
			public anyItem(): Adobe.Indesign.Condition;
			/**
			 * Displays the number of elements in the Condition.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Condition in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Condition in the collection.
			 * @returns {Adobe.Indesign.Condition}
			 */
			public firstItem(): Adobe.Indesign.Condition;
			/**
			 * Returns the Condition with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Condition}
			 */
			public item(indexParam: any): Adobe.Indesign.Condition;
			/**
			 * Returns the Condition with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.Condition}
			 */
			public itemByID(idParam: number): Adobe.Indesign.Condition;
			/**
			 * Returns the Condition with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.Condition}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Condition;
			/**
			 * Returns the Conditions within the specified range.
			 * @param {any} fromParam The Condition, index, or name at the 
			 * beginning of the range. Can accept: Condition, Long Integer 
			 * or String.
			 * @param {any} toParam The Condition, index, or name at the 
			 * end of the range. Can accept: Condition, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Condition in the collection.
			 * @returns {Adobe.Indesign.Condition}
			 */
			public lastItem(): Adobe.Indesign.Condition;
			/**
			 * Returns the middle Condition in the collection.
			 * @returns {Adobe.Indesign.Condition}
			 */
			public middleItem(): Adobe.Indesign.Condition;
			/**
			 * Returns the Condition whose index follows the specified 
			 * Condition in the collection.
			 * @param {Condition} objParam The Condition whose index comes 
			 * before the desired Condition. 
			 * @returns {Adobe.Indesign.Condition}
			 */
			public nextItem(objParam: Condition): Adobe.Indesign.Condition;
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
			 * Returns the Condition with the index previous to the 
			 * specified index.
			 * @param {Condition} objParam The index of the Condition that 
			 * follows the desired Condition.
			 * @returns {Adobe.Indesign.Condition}
			 */
			public previousItem(objParam: Condition): Adobe.Indesign.Condition;
		}
	}
}