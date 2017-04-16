/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class GotoNextStateBehaviors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new GotoNextStateBehavior.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new GotoNextStateBehavior (Optional)
			 * @returns {Adobe.Indesign.GotoNextStateBehavior}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.GotoNextStateBehavior;
			/**
			 * Returns any GotoNextStateBehavior in the collection.
			 * @returns {Adobe.Indesign.GotoNextStateBehavior}
			 */
			public anyItem(): Adobe.Indesign.GotoNextStateBehavior;
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
			 * @returns {Adobe.Indesign.GotoNextStateBehavior}
			 */
			public firstItem(): Adobe.Indesign.GotoNextStateBehavior;
			/**
			 * Returns the GotoNextStateBehavior with the specified index 
			 * or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.GotoNextStateBehavior}
			 */
			public item(indexParam: any): Adobe.Indesign.GotoNextStateBehavior;
			/**
			 * Returns the GotoNextStateBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.GotoNextStateBehavior}
			 */
			public itemByID(idParam: number): Adobe.Indesign.GotoNextStateBehavior;
			/**
			 * Returns the GotoNextStateBehavior with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.GotoNextStateBehavior}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.GotoNextStateBehavior;
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
			 * @returns {Adobe.Indesign.GotoNextStateBehavior}
			 */
			public lastItem(): Adobe.Indesign.GotoNextStateBehavior;
			/**
			 * Returns the middle GotoNextStateBehavior in the collection.
			 * @returns {Adobe.Indesign.GotoNextStateBehavior}
			 */
			public middleItem(): Adobe.Indesign.GotoNextStateBehavior;
			/**
			 * Returns the GotoNextStateBehavior whose index follows the 
			 * specified GotoNextStateBehavior in the collection.
			 * @param {GotoNextStateBehavior} objParam The 
			 * GotoNextStateBehavior whose index comes before the desired 
			 * GotoNextStateBehavior. 
			 * @returns {Adobe.Indesign.GotoNextStateBehavior}
			 */
			public nextItem(objParam: GotoNextStateBehavior): Adobe.Indesign.GotoNextStateBehavior;
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
			 * @returns {Adobe.Indesign.GotoNextStateBehavior}
			 */
			public previousItem(objParam: GotoNextStateBehavior): Adobe.Indesign.GotoNextStateBehavior;
		}
	}
}