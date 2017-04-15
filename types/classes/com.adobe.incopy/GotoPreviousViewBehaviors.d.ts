/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class GotoPreviousViewBehaviors extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any GotoPreviousViewBehavior in the collection. */
			public anyItem(): Adobe.Incopy.GotoPreviousViewBehavior;
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
			public firstItem(): Adobe.Incopy.GotoPreviousViewBehavior;
			/**
			 * Returns the GotoPreviousViewBehavior with the specified 
			 * index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.GotoPreviousViewBehavior;
			/**
			 * Returns the GotoPreviousViewBehavior with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.GotoPreviousViewBehavior;
			/**
			 * Returns the GotoPreviousViewBehavior with the specified 
			 * name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.GotoPreviousViewBehavior;
			/**
			 * Returns the GotoPreviousViewBehaviors within the specified 
			 * range.
			 * @param {any} fromParam - The GotoPreviousViewBehavior, 
			 * index, or name at the beginning of the range. Can accept: 
			 * GotoPreviousViewBehavior, Long Integer or String.
			 * @param {any} toParam - The GotoPreviousViewBehavior, index, 
			 * or name at the end of the range. Can accept: 
			 * GotoPreviousViewBehavior, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last GotoPreviousViewBehavior in the collection.
			 */
			public lastItem(): Adobe.Incopy.GotoPreviousViewBehavior;
			/**
			 * Returns the middle GotoPreviousViewBehavior in the 
			 * collection.
			 */
			public middleItem(): Adobe.Incopy.GotoPreviousViewBehavior;
			/**
			 * Returns the GotoPreviousViewBehavior whose index follows the 
			 * specified GotoPreviousViewBehavior in the collection.
			 * @param {GotoPreviousViewBehavior} objParam - The 
			 * GotoPreviousViewBehavior whose index comes before the 
			 * desired GotoPreviousViewBehavior. 
			 */
			public nextItem(objParam: GotoPreviousViewBehavior): Adobe.Incopy.GotoPreviousViewBehavior;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx - 
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index - 
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the GotoPreviousViewBehavior with the index previous 
			 * to the specified index.
			 * @param {GotoPreviousViewBehavior} objParam - The index of 
			 * the GotoPreviousViewBehavior that follows the desired 
			 * GotoPreviousViewBehavior.
			 */
			public previousItem(objParam: GotoPreviousViewBehavior): Adobe.Incopy.GotoPreviousViewBehavior;
		}
	}
}