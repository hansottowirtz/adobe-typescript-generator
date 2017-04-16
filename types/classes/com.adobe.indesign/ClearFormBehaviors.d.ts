/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ClearFormBehaviors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new ClearFormBehavior.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new ClearFormBehavior (Optional)
			 * @returns {Adobe.Indesign.ClearFormBehavior}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.ClearFormBehavior;
			/**
			 * Returns any ClearFormBehavior in the collection.
			 * @returns {Adobe.Indesign.ClearFormBehavior}
			 */
			public anyItem(): Adobe.Indesign.ClearFormBehavior;
			/**
			 * Displays the number of elements in the ClearFormBehavior.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every ClearFormBehavior in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first ClearFormBehavior in the collection.
			 * @returns {Adobe.Indesign.ClearFormBehavior}
			 */
			public firstItem(): Adobe.Indesign.ClearFormBehavior;
			/**
			 * Returns the ClearFormBehavior with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.ClearFormBehavior}
			 */
			public item(indexParam: any): Adobe.Indesign.ClearFormBehavior;
			/**
			 * Returns the ClearFormBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.ClearFormBehavior}
			 */
			public itemByID(idParam: number): Adobe.Indesign.ClearFormBehavior;
			/**
			 * Returns the ClearFormBehavior with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.ClearFormBehavior}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.ClearFormBehavior;
			/**
			 * Returns the ClearFormBehaviors within the specified range.
			 * @param {any} fromParam The ClearFormBehavior, index, or name 
			 * at the beginning of the range. Can accept: 
			 * ClearFormBehavior, Long Integer or String.
			 * @param {any} toParam The ClearFormBehavior, index, or name 
			 * at the end of the range. Can accept: ClearFormBehavior, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last ClearFormBehavior in the collection.
			 * @returns {Adobe.Indesign.ClearFormBehavior}
			 */
			public lastItem(): Adobe.Indesign.ClearFormBehavior;
			/**
			 * Returns the middle ClearFormBehavior in the collection.
			 * @returns {Adobe.Indesign.ClearFormBehavior}
			 */
			public middleItem(): Adobe.Indesign.ClearFormBehavior;
			/**
			 * Returns the ClearFormBehavior whose index follows the 
			 * specified ClearFormBehavior in the collection.
			 * @param {ClearFormBehavior} objParam The ClearFormBehavior 
			 * whose index comes before the desired ClearFormBehavior. 
			 * @returns {Adobe.Indesign.ClearFormBehavior}
			 */
			public nextItem(objParam: ClearFormBehavior): Adobe.Indesign.ClearFormBehavior;
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
			 * Returns the ClearFormBehavior with the index previous to the 
			 * specified index.
			 * @param {ClearFormBehavior} objParam The index of the 
			 * ClearFormBehavior that follows the desired 
			 * ClearFormBehavior.
			 * @returns {Adobe.Indesign.ClearFormBehavior}
			 */
			public previousItem(objParam: ClearFormBehavior): Adobe.Indesign.ClearFormBehavior;
		}
	}
}