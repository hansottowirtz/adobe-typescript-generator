/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class GotoPreviousStateBehaviors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new GotoPreviousStateBehavior.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new GotoPreviousStateBehavior (Optional)
			 * @returns {Adobe.Indesign.GotoPreviousStateBehavior}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.GotoPreviousStateBehavior;
			/**
			 * Returns any GotoPreviousStateBehavior in the collection.
			 * @returns {Adobe.Indesign.GotoPreviousStateBehavior}
			 */
			public anyItem(): Adobe.Indesign.GotoPreviousStateBehavior;
			/**
			 * Displays the number of elements in the 
			 * GotoPreviousStateBehavior.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every GotoPreviousStateBehavior in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first GotoPreviousStateBehavior in the 
			 * collection.
			 * @returns {Adobe.Indesign.GotoPreviousStateBehavior}
			 */
			public firstItem(): Adobe.Indesign.GotoPreviousStateBehavior;
			/**
			 * Returns the GotoPreviousStateBehavior with the specified 
			 * index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.GotoPreviousStateBehavior}
			 */
			public item(indexParam: any): Adobe.Indesign.GotoPreviousStateBehavior;
			/**
			 * Returns the GotoPreviousStateBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.GotoPreviousStateBehavior}
			 */
			public itemByID(idParam: number): Adobe.Indesign.GotoPreviousStateBehavior;
			/**
			 * Returns the GotoPreviousStateBehavior with the specified 
			 * name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.GotoPreviousStateBehavior}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.GotoPreviousStateBehavior;
			/**
			 * Returns the GotoPreviousStateBehaviors within the specified 
			 * range.
			 * @param {any} fromParam The GotoPreviousStateBehavior, index, 
			 * or name at the beginning of the range. Can accept: 
			 * GotoPreviousStateBehavior, Long Integer or String.
			 * @param {any} toParam The GotoPreviousStateBehavior, index, 
			 * or name at the end of the range. Can accept: 
			 * GotoPreviousStateBehavior, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last GotoPreviousStateBehavior in the 
			 * collection.
			 * @returns {Adobe.Indesign.GotoPreviousStateBehavior}
			 */
			public lastItem(): Adobe.Indesign.GotoPreviousStateBehavior;
			/**
			 * Returns the middle GotoPreviousStateBehavior in the 
			 * collection.
			 * @returns {Adobe.Indesign.GotoPreviousStateBehavior}
			 */
			public middleItem(): Adobe.Indesign.GotoPreviousStateBehavior;
			/**
			 * Returns the GotoPreviousStateBehavior whose index follows 
			 * the specified GotoPreviousStateBehavior in the collection.
			 * @param {GotoPreviousStateBehavior} objParam The 
			 * GotoPreviousStateBehavior whose index comes before the 
			 * desired GotoPreviousStateBehavior. 
			 * @returns {Adobe.Indesign.GotoPreviousStateBehavior}
			 */
			public nextItem(objParam: GotoPreviousStateBehavior): Adobe.Indesign.GotoPreviousStateBehavior;
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
			 * Returns the GotoPreviousStateBehavior with the index 
			 * previous to the specified index.
			 * @param {GotoPreviousStateBehavior} objParam The index of the 
			 * GotoPreviousStateBehavior that follows the desired 
			 * GotoPreviousStateBehavior.
			 * @returns {Adobe.Indesign.GotoPreviousStateBehavior}
			 */
			public previousItem(objParam: GotoPreviousStateBehavior): Adobe.Indesign.GotoPreviousStateBehavior;
		}
	}
}