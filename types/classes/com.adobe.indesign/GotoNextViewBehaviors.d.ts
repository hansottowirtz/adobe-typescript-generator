/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class GotoNextViewBehaviors extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new GotoNextViewBehavior.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new GotoNextViewBehavior (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.GotoNextViewBehavior;
			/** Returns any GotoNextViewBehavior in the collection. */
			public anyItem(): Adobe.Indesign.GotoNextViewBehavior;
			/**
			 * Displays the number of elements in the GotoNextViewBehavior.
			 */
			public count(): number;
			/** Returns every GotoNextViewBehavior in the collection. */
			public everyItem(): any;
			/** Returns the first GotoNextViewBehavior in the collection. */
			public firstItem(): Adobe.Indesign.GotoNextViewBehavior;
			/**
			 * Returns the GotoNextViewBehavior with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.GotoNextViewBehavior;
			/**
			 * Returns the GotoNextViewBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.GotoNextViewBehavior;
			/**
			 * Returns the GotoNextViewBehavior with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.GotoNextViewBehavior;
			/**
			 * Returns the GotoNextViewBehaviors within the specified 
			 * range.
			 * @param {any} fromParam The GotoNextViewBehavior, index, or 
			 * name at the beginning of the range. Can accept: 
			 * GotoNextViewBehavior, Long Integer or String.
			 * @param {any} toParam The GotoNextViewBehavior, index, or 
			 * name at the end of the range. Can accept: 
			 * GotoNextViewBehavior, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last GotoNextViewBehavior in the collection. */
			public lastItem(): Adobe.Indesign.GotoNextViewBehavior;
			/** Returns the middle GotoNextViewBehavior in the collection. */
			public middleItem(): Adobe.Indesign.GotoNextViewBehavior;
			/**
			 * Returns the GotoNextViewBehavior whose index follows the 
			 * specified GotoNextViewBehavior in the collection.
			 * @param {GotoNextViewBehavior} objParam The 
			 * GotoNextViewBehavior whose index comes before the desired 
			 * GotoNextViewBehavior. 
			 */
			public nextItem(objParam: GotoNextViewBehavior): Adobe.Indesign.GotoNextViewBehavior;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the GotoNextViewBehavior with the index previous to 
			 * the specified index.
			 * @param {GotoNextViewBehavior} objParam The index of the 
			 * GotoNextViewBehavior that follows the desired 
			 * GotoNextViewBehavior.
			 */
			public previousItem(objParam: GotoNextViewBehavior): Adobe.Indesign.GotoNextViewBehavior;
		}
	}
}