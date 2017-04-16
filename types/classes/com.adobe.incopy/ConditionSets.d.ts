/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ConditionSets extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new ConditionSet.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new ConditionSet (Optional)
			 * @returns {Adobe.Incopy.ConditionSet}
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.ConditionSet;
			/**
			 * Returns any ConditionSet in the collection.
			 * @returns {Adobe.Incopy.ConditionSet}
			 */
			public anyItem(): Adobe.Incopy.ConditionSet;
			/**
			 * Displays the number of elements in the ConditionSet.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every ConditionSet in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first ConditionSet in the collection.
			 * @returns {Adobe.Incopy.ConditionSet}
			 */
			public firstItem(): Adobe.Incopy.ConditionSet;
			/**
			 * Returns the ConditionSet with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.ConditionSet}
			 */
			public item(indexParam: any): Adobe.Incopy.ConditionSet;
			/**
			 * Returns the ConditionSet with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.ConditionSet}
			 */
			public itemByID(idParam: number): Adobe.Incopy.ConditionSet;
			/**
			 * Returns the ConditionSet with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.ConditionSet}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.ConditionSet;
			/**
			 * Returns the ConditionSets within the specified range.
			 * @param {any} fromParam The ConditionSet, index, or name at 
			 * the beginning of the range. Can accept: ConditionSet, Long 
			 * Integer or String.
			 * @param {any} toParam The ConditionSet, index, or name at the 
			 * end of the range. Can accept: ConditionSet, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last ConditionSet in the collection.
			 * @returns {Adobe.Incopy.ConditionSet}
			 */
			public lastItem(): Adobe.Incopy.ConditionSet;
			/**
			 * Returns the middle ConditionSet in the collection.
			 * @returns {Adobe.Incopy.ConditionSet}
			 */
			public middleItem(): Adobe.Incopy.ConditionSet;
			/**
			 * Returns the ConditionSet whose index follows the specified 
			 * ConditionSet in the collection.
			 * @param {ConditionSet} objParam The ConditionSet whose index 
			 * comes before the desired ConditionSet. 
			 * @returns {Adobe.Incopy.ConditionSet}
			 */
			public nextItem(objParam: ConditionSet): Adobe.Incopy.ConditionSet;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx
			 * @returns {number}
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index
			 * @returns {any}
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the ConditionSet with the index previous to the 
			 * specified index.
			 * @param {ConditionSet} objParam The index of the ConditionSet 
			 * that follows the desired ConditionSet.
			 * @returns {Adobe.Incopy.ConditionSet}
			 */
			public previousItem(objParam: ConditionSet): Adobe.Incopy.ConditionSet;
		}
	}
}