/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class GotoLastPageBehaviors extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new GotoLastPageBehavior.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new GotoLastPageBehavior (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.GotoLastPageBehavior;
			/** Returns any GotoLastPageBehavior in the collection. */
			public anyItem(): Adobe.Indesign.GotoLastPageBehavior;
			/**
			 * Displays the number of elements in the GotoLastPageBehavior.
			 */
			public count(): number;
			/** Returns every GotoLastPageBehavior in the collection. */
			public everyItem(): any;
			/** Returns the first GotoLastPageBehavior in the collection. */
			public firstItem(): Adobe.Indesign.GotoLastPageBehavior;
			/**
			 * Returns the GotoLastPageBehavior with the specified index or 
			 * name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.GotoLastPageBehavior;
			/**
			 * Returns the GotoLastPageBehavior with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.GotoLastPageBehavior;
			/**
			 * Returns the GotoLastPageBehavior with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.GotoLastPageBehavior;
			/**
			 * Returns the GotoLastPageBehaviors within the specified 
			 * range.
			 * @param {any} fromParam - The GotoLastPageBehavior, index, or 
			 * name at the beginning of the range. Can accept: 
			 * GotoLastPageBehavior, Long Integer or String.
			 * @param {any} toParam - The GotoLastPageBehavior, index, or 
			 * name at the end of the range. Can accept: 
			 * GotoLastPageBehavior, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last GotoLastPageBehavior in the collection. */
			public lastItem(): Adobe.Indesign.GotoLastPageBehavior;
			/** Returns the middle GotoLastPageBehavior in the collection. */
			public middleItem(): Adobe.Indesign.GotoLastPageBehavior;
			/**
			 * Returns the GotoLastPageBehavior whose index follows the 
			 * specified GotoLastPageBehavior in the collection.
			 * @param {GotoLastPageBehavior} objParam - The 
			 * GotoLastPageBehavior whose index comes before the desired 
			 * GotoLastPageBehavior. 
			 */
			public nextItem(objParam: GotoLastPageBehavior): Adobe.Indesign.GotoLastPageBehavior;
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
			 * Returns the GotoLastPageBehavior with the index previous to 
			 * the specified index.
			 * @param {GotoLastPageBehavior} objParam - The index of the 
			 * GotoLastPageBehavior that follows the desired 
			 * GotoLastPageBehavior.
			 */
			public previousItem(objParam: GotoLastPageBehavior): Adobe.Indesign.GotoLastPageBehavior;
		}
	}
}