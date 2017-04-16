/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class GotoURLBehaviors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new GotoURLBehavior.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new GotoURLBehavior (Optional)
			 * @returns {Adobe.Indesign.GotoURLBehavior}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.GotoURLBehavior;
			/**
			 * Returns any GotoURLBehavior in the collection.
			 * @returns {Adobe.Indesign.GotoURLBehavior}
			 */
			public anyItem(): Adobe.Indesign.GotoURLBehavior;
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
			 * @returns {Adobe.Indesign.GotoURLBehavior}
			 */
			public firstItem(): Adobe.Indesign.GotoURLBehavior;
			/**
			 * Returns the GotoURLBehavior with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.GotoURLBehavior}
			 */
			public item(indexParam: any): Adobe.Indesign.GotoURLBehavior;
			/**
			 * Returns the GotoURLBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.GotoURLBehavior}
			 */
			public itemByID(idParam: number): Adobe.Indesign.GotoURLBehavior;
			/**
			 * Returns the GotoURLBehavior with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.GotoURLBehavior}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.GotoURLBehavior;
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
			 * @returns {Adobe.Indesign.GotoURLBehavior}
			 */
			public lastItem(): Adobe.Indesign.GotoURLBehavior;
			/**
			 * Returns the middle GotoURLBehavior in the collection.
			 * @returns {Adobe.Indesign.GotoURLBehavior}
			 */
			public middleItem(): Adobe.Indesign.GotoURLBehavior;
			/**
			 * Returns the GotoURLBehavior whose index follows the 
			 * specified GotoURLBehavior in the collection.
			 * @param {GotoURLBehavior} objParam The GotoURLBehavior whose 
			 * index comes before the desired GotoURLBehavior. 
			 * @returns {Adobe.Indesign.GotoURLBehavior}
			 */
			public nextItem(objParam: GotoURLBehavior): Adobe.Indesign.GotoURLBehavior;
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
			 * @returns {Adobe.Indesign.GotoURLBehavior}
			 */
			public previousItem(objParam: GotoURLBehavior): Adobe.Indesign.GotoURLBehavior;
		}
	}
}