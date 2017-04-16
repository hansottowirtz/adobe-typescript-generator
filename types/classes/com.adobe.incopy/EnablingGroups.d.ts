/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class EnablingGroups extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new EnablingGroup.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new EnablingGroup (Optional)
			 * @returns {Adobe.Incopy.EnablingGroup}
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.EnablingGroup;
			/**
			 * Returns any EnablingGroup in the collection.
			 * @returns {Adobe.Incopy.EnablingGroup}
			 */
			public anyItem(): Adobe.Incopy.EnablingGroup;
			/**
			 * Displays the number of elements in the EnablingGroup.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every EnablingGroup in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first EnablingGroup in the collection.
			 * @returns {Adobe.Incopy.EnablingGroup}
			 */
			public firstItem(): Adobe.Incopy.EnablingGroup;
			/**
			 * Returns the EnablingGroup with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.EnablingGroup}
			 */
			public item(indexParam: any): Adobe.Incopy.EnablingGroup;
			/**
			 * Returns the EnablingGroup with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.EnablingGroup}
			 */
			public itemByID(idParam: number): Adobe.Incopy.EnablingGroup;
			/**
			 * Returns the EnablingGroups within the specified range.
			 * @param {any} fromParam The EnablingGroup, index, or name at 
			 * the beginning of the range. Can accept: EnablingGroup, Long 
			 * Integer or String.
			 * @param {any} toParam The EnablingGroup, index, or name at 
			 * the end of the range. Can accept: EnablingGroup, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last EnablingGroup in the collection.
			 * @returns {Adobe.Incopy.EnablingGroup}
			 */
			public lastItem(): Adobe.Incopy.EnablingGroup;
			/**
			 * Returns the middle EnablingGroup in the collection.
			 * @returns {Adobe.Incopy.EnablingGroup}
			 */
			public middleItem(): Adobe.Incopy.EnablingGroup;
			/**
			 * Returns the EnablingGroup whose index follows the specified 
			 * EnablingGroup in the collection.
			 * @param {EnablingGroup} objParam The EnablingGroup whose 
			 * index comes before the desired EnablingGroup. 
			 * @returns {Adobe.Incopy.EnablingGroup}
			 */
			public nextItem(objParam: EnablingGroup): Adobe.Incopy.EnablingGroup;
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
			 * Returns the EnablingGroup with the index previous to the 
			 * specified index.
			 * @param {EnablingGroup} objParam The index of the 
			 * EnablingGroup that follows the desired EnablingGroup.
			 * @returns {Adobe.Incopy.EnablingGroup}
			 */
			public previousItem(objParam: EnablingGroup): Adobe.Incopy.EnablingGroup;
		}
	}
}