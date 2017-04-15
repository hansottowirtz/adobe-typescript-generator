/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class GotoNextPageBehaviors extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any GotoNextPageBehavior in the collection. */
			public anyItem(): Adobe.Incopy.GotoNextPageBehavior;
			/**
			 * Displays the number of elements in the GotoNextPageBehavior.
			 */
			public count(): number;
			/** Returns every GotoNextPageBehavior in the collection. */
			public everyItem(): any;
			/** Returns the first GotoNextPageBehavior in the collection. */
			public firstItem(): Adobe.Incopy.GotoNextPageBehavior;
			/**
			 * Returns the GotoNextPageBehavior with the specified index or 
			 * name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.GotoNextPageBehavior;
			/**
			 * Returns the GotoNextPageBehavior with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.GotoNextPageBehavior;
			/**
			 * Returns the GotoNextPageBehavior with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.GotoNextPageBehavior;
			/**
			 * Returns the GotoNextPageBehaviors within the specified 
			 * range.
			 * @param {any} fromParam - The GotoNextPageBehavior, index, or 
			 * name at the beginning of the range. Can accept: 
			 * GotoNextPageBehavior, Long Integer or String.
			 * @param {any} toParam - The GotoNextPageBehavior, index, or 
			 * name at the end of the range. Can accept: 
			 * GotoNextPageBehavior, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last GotoNextPageBehavior in the collection. */
			public lastItem(): Adobe.Incopy.GotoNextPageBehavior;
			/** Returns the middle GotoNextPageBehavior in the collection. */
			public middleItem(): Adobe.Incopy.GotoNextPageBehavior;
			/**
			 * Returns the GotoNextPageBehavior whose index follows the 
			 * specified GotoNextPageBehavior in the collection.
			 * @param {GotoNextPageBehavior} objParam - The 
			 * GotoNextPageBehavior whose index comes before the desired 
			 * GotoNextPageBehavior. 
			 */
			public nextItem(objParam: GotoNextPageBehavior): Adobe.Incopy.GotoNextPageBehavior;
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
			 * Returns the GotoNextPageBehavior with the index previous to 
			 * the specified index.
			 * @param {GotoNextPageBehavior} objParam - The index of the 
			 * GotoNextPageBehavior that follows the desired 
			 * GotoNextPageBehavior.
			 */
			public previousItem(objParam: GotoNextPageBehavior): Adobe.Incopy.GotoNextPageBehavior;
		}
	}
}