/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class GotoPreviousViewBehaviors extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new GotoPreviousViewBehavior.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new GotoPreviousViewBehavior (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.GotoPreviousViewBehavior;
			/** Returns any GotoPreviousViewBehavior in the collection. */
			public anyItem(): Adobe.Indesign.GotoPreviousViewBehavior;
			/**
			 * Displays the number of elements in the 
			 * GotoPreviousViewBehavior.
			 */
			public count(): number;
			/** Returns every GotoPreviousViewBehavior in the collection. */
			public everyItem(): any;
			/**
			 * Returns the first GotoPreviousViewBehavior in the 
			 * collection.
			 */
			public firstItem(): Adobe.Indesign.GotoPreviousViewBehavior;
			/**
			 * Returns the GotoPreviousViewBehavior with the specified 
			 * index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.GotoPreviousViewBehavior;
			/**
			 * Returns the GotoPreviousViewBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.GotoPreviousViewBehavior;
			/**
			 * Returns the GotoPreviousViewBehavior with the specified 
			 * name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.GotoPreviousViewBehavior;
			/**
			 * Returns the GotoPreviousViewBehaviors within the specified 
			 * range.
			 * @param {any} fromParam The GotoPreviousViewBehavior, index, 
			 * or name at the beginning of the range. Can accept: 
			 * GotoPreviousViewBehavior, Long Integer or String.
			 * @param {any} toParam The GotoPreviousViewBehavior, index, or 
			 * name at the end of the range. Can accept: 
			 * GotoPreviousViewBehavior, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last GotoPreviousViewBehavior in the collection.
			 */
			public lastItem(): Adobe.Indesign.GotoPreviousViewBehavior;
			/**
			 * Returns the middle GotoPreviousViewBehavior in the 
			 * collection.
			 */
			public middleItem(): Adobe.Indesign.GotoPreviousViewBehavior;
			/**
			 * Returns the GotoPreviousViewBehavior whose index follows the 
			 * specified GotoPreviousViewBehavior in the collection.
			 * @param {GotoPreviousViewBehavior} objParam The 
			 * GotoPreviousViewBehavior whose index comes before the 
			 * desired GotoPreviousViewBehavior. 
			 */
			public nextItem(objParam: GotoPreviousViewBehavior): Adobe.Indesign.GotoPreviousViewBehavior;
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
			 * Returns the GotoPreviousViewBehavior with the index previous 
			 * to the specified index.
			 * @param {GotoPreviousViewBehavior} objParam The index of the 
			 * GotoPreviousViewBehavior that follows the desired 
			 * GotoPreviousViewBehavior.
			 */
			public previousItem(objParam: GotoPreviousViewBehavior): Adobe.Indesign.GotoPreviousViewBehavior;
		}
	}
}