/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class GotoPageBehaviors extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any GotoPageBehavior in the collection. */
			public anyItem(): Adobe.Incopy.GotoPageBehavior;
			/** Displays the number of elements in the GotoPageBehavior. */
			public count(): number;
			/** Returns every GotoPageBehavior in the collection. */
			public everyItem(): any;
			/** Returns the first GotoPageBehavior in the collection. */
			public firstItem(): Adobe.Incopy.GotoPageBehavior;
			/**
			 * Returns the GotoPageBehavior with the specified index or 
			 * name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.GotoPageBehavior;
			/**
			 * Returns the GotoPageBehavior with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.GotoPageBehavior;
			/**
			 * Returns the GotoPageBehavior with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.GotoPageBehavior;
			/**
			 * Returns the GotoPageBehaviors within the specified range.
			 * @param {any} fromParam - The GotoPageBehavior, index, or 
			 * name at the beginning of the range. Can accept: 
			 * GotoPageBehavior, Long Integer or String.
			 * @param {any} toParam - The GotoPageBehavior, index, or name 
			 * at the end of the range. Can accept: GotoPageBehavior, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last GotoPageBehavior in the collection. */
			public lastItem(): Adobe.Incopy.GotoPageBehavior;
			/** Returns the middle GotoPageBehavior in the collection. */
			public middleItem(): Adobe.Incopy.GotoPageBehavior;
			/**
			 * Returns the GotoPageBehavior whose index follows the 
			 * specified GotoPageBehavior in the collection.
			 * @param {GotoPageBehavior} objParam - The GotoPageBehavior 
			 * whose index comes before the desired GotoPageBehavior. 
			 */
			public nextItem(objParam: GotoPageBehavior): Adobe.Incopy.GotoPageBehavior;
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
			 * Returns the GotoPageBehavior with the index previous to the 
			 * specified index.
			 * @param {GotoPageBehavior} objParam - The index of the 
			 * GotoPageBehavior that follows the desired GotoPageBehavior.
			 */
			public previousItem(objParam: GotoPageBehavior): Adobe.Incopy.GotoPageBehavior;
		}
	}
}