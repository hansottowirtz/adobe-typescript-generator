/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class GotoNextStateBehaviors extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any GotoNextStateBehavior in the collection. */
			public anyItem(): Adobe.Incopy.GotoNextStateBehavior;
			/**
			 * Displays the number of elements in the 
			 * GotoNextStateBehavior.
			 */
			public count(): number;
			/** Returns every GotoNextStateBehavior in the collection. */
			public everyItem(): any;
			/** Returns the first GotoNextStateBehavior in the collection. */
			public firstItem(): Adobe.Incopy.GotoNextStateBehavior;
			/**
			 * Returns the GotoNextStateBehavior with the specified index 
			 * or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.GotoNextStateBehavior;
			/**
			 * Returns the GotoNextStateBehavior with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.GotoNextStateBehavior;
			/**
			 * Returns the GotoNextStateBehavior with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.GotoNextStateBehavior;
			/**
			 * Returns the GotoNextStateBehaviors within the specified 
			 * range.
			 * @param {any} fromParam - The GotoNextStateBehavior, index, 
			 * or name at the beginning of the range. Can accept: 
			 * GotoNextStateBehavior, Long Integer or String.
			 * @param {any} toParam - The GotoNextStateBehavior, index, or 
			 * name at the end of the range. Can accept: 
			 * GotoNextStateBehavior, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last GotoNextStateBehavior in the collection. */
			public lastItem(): Adobe.Incopy.GotoNextStateBehavior;
			/** Returns the middle GotoNextStateBehavior in the collection. */
			public middleItem(): Adobe.Incopy.GotoNextStateBehavior;
			/**
			 * Returns the GotoNextStateBehavior whose index follows the 
			 * specified GotoNextStateBehavior in the collection.
			 * @param {GotoNextStateBehavior} objParam - The 
			 * GotoNextStateBehavior whose index comes before the desired 
			 * GotoNextStateBehavior. 
			 */
			public nextItem(objParam: GotoNextStateBehavior): Adobe.Incopy.GotoNextStateBehavior;
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
			 * Returns the GotoNextStateBehavior with the index previous to 
			 * the specified index.
			 * @param {GotoNextStateBehavior} objParam - The index of the 
			 * GotoNextStateBehavior that follows the desired 
			 * GotoNextStateBehavior.
			 */
			public previousItem(objParam: GotoNextStateBehavior): Adobe.Incopy.GotoNextStateBehavior;
		}
	}
}