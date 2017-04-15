/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class GotoStateBehaviors extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any GotoStateBehavior in the collection. */
			public anyItem(): Adobe.Incopy.GotoStateBehavior;
			/** Displays the number of elements in the GotoStateBehavior. */
			public count(): number;
			/** Returns every GotoStateBehavior in the collection. */
			public everyItem(): any;
			/** Returns the first GotoStateBehavior in the collection. */
			public firstItem(): Adobe.Incopy.GotoStateBehavior;
			/**
			 * Returns the GotoStateBehavior with the specified index or 
			 * name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.GotoStateBehavior;
			/**
			 * Returns the GotoStateBehavior with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.GotoStateBehavior;
			/**
			 * Returns the GotoStateBehavior with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.GotoStateBehavior;
			/**
			 * Returns the GotoStateBehaviors within the specified range.
			 * @param {any} fromParam - The GotoStateBehavior, index, or 
			 * name at the beginning of the range. Can accept: 
			 * GotoStateBehavior, Long Integer or String.
			 * @param {any} toParam - The GotoStateBehavior, index, or name 
			 * at the end of the range. Can accept: GotoStateBehavior, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last GotoStateBehavior in the collection. */
			public lastItem(): Adobe.Incopy.GotoStateBehavior;
			/** Returns the middle GotoStateBehavior in the collection. */
			public middleItem(): Adobe.Incopy.GotoStateBehavior;
			/**
			 * Returns the GotoStateBehavior whose index follows the 
			 * specified GotoStateBehavior in the collection.
			 * @param {GotoStateBehavior} objParam - The GotoStateBehavior 
			 * whose index comes before the desired GotoStateBehavior. 
			 */
			public nextItem(objParam: GotoStateBehavior): Adobe.Incopy.GotoStateBehavior;
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
			 * Returns the GotoStateBehavior with the index previous to the 
			 * specified index.
			 * @param {GotoStateBehavior} objParam - The index of the 
			 * GotoStateBehavior that follows the desired 
			 * GotoStateBehavior.
			 */
			public previousItem(objParam: GotoStateBehavior): Adobe.Incopy.GotoStateBehavior;
		}
	}
}