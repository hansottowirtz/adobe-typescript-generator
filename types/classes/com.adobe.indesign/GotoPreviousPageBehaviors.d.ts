/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class GotoPreviousPageBehaviors extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new GotoPreviousPageBehavior.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new GotoPreviousPageBehavior (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.GotoPreviousPageBehavior;
			/** Returns any GotoPreviousPageBehavior in the collection. */
			public anyItem(): Adobe.Indesign.GotoPreviousPageBehavior;
			/**
			 * Displays the number of elements in the 
			 * GotoPreviousPageBehavior.
			 */
			public count(): number;
			/** Returns every GotoPreviousPageBehavior in the collection. */
			public everyItem(): any;
			/**
			 * Returns the first GotoPreviousPageBehavior in the 
			 * collection.
			 */
			public firstItem(): Adobe.Indesign.GotoPreviousPageBehavior;
			/**
			 * Returns the GotoPreviousPageBehavior with the specified 
			 * index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.GotoPreviousPageBehavior;
			/**
			 * Returns the GotoPreviousPageBehavior with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.GotoPreviousPageBehavior;
			/**
			 * Returns the GotoPreviousPageBehavior with the specified 
			 * name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.GotoPreviousPageBehavior;
			/**
			 * Returns the GotoPreviousPageBehaviors within the specified 
			 * range.
			 * @param {any} fromParam - The GotoPreviousPageBehavior, 
			 * index, or name at the beginning of the range. Can accept: 
			 * GotoPreviousPageBehavior, Long Integer or String.
			 * @param {any} toParam - The GotoPreviousPageBehavior, index, 
			 * or name at the end of the range. Can accept: 
			 * GotoPreviousPageBehavior, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last GotoPreviousPageBehavior in the collection.
			 */
			public lastItem(): Adobe.Indesign.GotoPreviousPageBehavior;
			/**
			 * Returns the middle GotoPreviousPageBehavior in the 
			 * collection.
			 */
			public middleItem(): Adobe.Indesign.GotoPreviousPageBehavior;
			/**
			 * Returns the GotoPreviousPageBehavior whose index follows the 
			 * specified GotoPreviousPageBehavior in the collection.
			 * @param {GotoPreviousPageBehavior} objParam - The 
			 * GotoPreviousPageBehavior whose index comes before the 
			 * desired GotoPreviousPageBehavior. 
			 */
			public nextItem(objParam: GotoPreviousPageBehavior): Adobe.Indesign.GotoPreviousPageBehavior;
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
			 * Returns the GotoPreviousPageBehavior with the index previous 
			 * to the specified index.
			 * @param {GotoPreviousPageBehavior} objParam - The index of 
			 * the GotoPreviousPageBehavior that follows the desired 
			 * GotoPreviousPageBehavior.
			 */
			public previousItem(objParam: GotoPreviousPageBehavior): Adobe.Indesign.GotoPreviousPageBehavior;
		}
	}
}