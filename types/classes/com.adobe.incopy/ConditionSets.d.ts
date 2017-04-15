/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ConditionSets extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new ConditionSet.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new ConditionSet (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.ConditionSet;
			/** Returns any ConditionSet in the collection. */
			public anyItem(): Adobe.Incopy.ConditionSet;
			/** Displays the number of elements in the ConditionSet. */
			public count(): number;
			/** Returns every ConditionSet in the collection. */
			public everyItem(): any;
			/** Returns the first ConditionSet in the collection. */
			public firstItem(): Adobe.Incopy.ConditionSet;
			/**
			 * Returns the ConditionSet with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.ConditionSet;
			/**
			 * Returns the ConditionSet with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.ConditionSet;
			/**
			 * Returns the ConditionSet with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.ConditionSet;
			/**
			 * Returns the ConditionSets within the specified range.
			 * @param {any} fromParam - The ConditionSet, index, or name at 
			 * the beginning of the range. Can accept: ConditionSet, Long 
			 * Integer or String.
			 * @param {any} toParam - The ConditionSet, index, or name at 
			 * the end of the range. Can accept: ConditionSet, Long Integer 
			 * or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last ConditionSet in the collection. */
			public lastItem(): Adobe.Incopy.ConditionSet;
			/** Returns the middle ConditionSet in the collection. */
			public middleItem(): Adobe.Incopy.ConditionSet;
			/**
			 * Returns the ConditionSet whose index follows the specified 
			 * ConditionSet in the collection.
			 * @param {ConditionSet} objParam - The ConditionSet whose 
			 * index comes before the desired ConditionSet. 
			 */
			public nextItem(objParam: ConditionSet): Adobe.Incopy.ConditionSet;
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
			 * Returns the ConditionSet with the index previous to the 
			 * specified index.
			 * @param {ConditionSet} objParam - The index of the 
			 * ConditionSet that follows the desired ConditionSet.
			 */
			public previousItem(objParam: ConditionSet): Adobe.Incopy.ConditionSet;
		}
	}
}