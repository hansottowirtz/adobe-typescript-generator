/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class GotoNextPageBehaviors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new GotoNextPageBehavior.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new GotoNextPageBehavior (Optional)
			 * @returns {Adobe.Indesign.GotoNextPageBehavior}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.GotoNextPageBehavior;
			/**
			 * Returns any GotoNextPageBehavior in the collection.
			 * @returns {Adobe.Indesign.GotoNextPageBehavior}
			 */
			public anyItem(): Adobe.Indesign.GotoNextPageBehavior;
			/**
			 * Displays the number of elements in the GotoNextPageBehavior.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every GotoNextPageBehavior in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first GotoNextPageBehavior in the collection.
			 * @returns {Adobe.Indesign.GotoNextPageBehavior}
			 */
			public firstItem(): Adobe.Indesign.GotoNextPageBehavior;
			/**
			 * Returns the GotoNextPageBehavior with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.GotoNextPageBehavior}
			 */
			public item(indexParam: any): Adobe.Indesign.GotoNextPageBehavior;
			/**
			 * Returns the GotoNextPageBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.GotoNextPageBehavior}
			 */
			public itemByID(idParam: number): Adobe.Indesign.GotoNextPageBehavior;
			/**
			 * Returns the GotoNextPageBehavior with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.GotoNextPageBehavior}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.GotoNextPageBehavior;
			/**
			 * Returns the GotoNextPageBehaviors within the specified 
			 * range.
			 * @param {any} fromParam The GotoNextPageBehavior, index, or 
			 * name at the beginning of the range. Can accept: 
			 * GotoNextPageBehavior, Long Integer or String.
			 * @param {any} toParam The GotoNextPageBehavior, index, or 
			 * name at the end of the range. Can accept: 
			 * GotoNextPageBehavior, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last GotoNextPageBehavior in the collection.
			 * @returns {Adobe.Indesign.GotoNextPageBehavior}
			 */
			public lastItem(): Adobe.Indesign.GotoNextPageBehavior;
			/**
			 * Returns the middle GotoNextPageBehavior in the collection.
			 * @returns {Adobe.Indesign.GotoNextPageBehavior}
			 */
			public middleItem(): Adobe.Indesign.GotoNextPageBehavior;
			/**
			 * Returns the GotoNextPageBehavior whose index follows the 
			 * specified GotoNextPageBehavior in the collection.
			 * @param {GotoNextPageBehavior} objParam The 
			 * GotoNextPageBehavior whose index comes before the desired 
			 * GotoNextPageBehavior. 
			 * @returns {Adobe.Indesign.GotoNextPageBehavior}
			 */
			public nextItem(objParam: GotoNextPageBehavior): Adobe.Indesign.GotoNextPageBehavior;
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
			 * Returns the GotoNextPageBehavior with the index previous to 
			 * the specified index.
			 * @param {GotoNextPageBehavior} objParam The index of the 
			 * GotoNextPageBehavior that follows the desired 
			 * GotoNextPageBehavior.
			 * @returns {Adobe.Indesign.GotoNextPageBehavior}
			 */
			public previousItem(objParam: GotoNextPageBehavior): Adobe.Indesign.GotoNextPageBehavior;
		}
	}
}