/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
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
			 * @returns {Adobe.Indesign.EnablingGroup}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.EnablingGroup;
			/**
			 * Returns any EnablingGroup in the collection.
			 * @returns {Adobe.Indesign.EnablingGroup}
			 */
			public anyItem(): Adobe.Indesign.EnablingGroup;
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
			 * @returns {Adobe.Indesign.EnablingGroup}
			 */
			public firstItem(): Adobe.Indesign.EnablingGroup;
			/**
			 * Returns the EnablingGroup with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.EnablingGroup}
			 */
			public item(indexParam: any): Adobe.Indesign.EnablingGroup;
			/**
			 * Returns the EnablingGroup with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.EnablingGroup}
			 */
			public itemByID(idParam: number): Adobe.Indesign.EnablingGroup;
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
			 * @returns {Adobe.Indesign.EnablingGroup}
			 */
			public lastItem(): Adobe.Indesign.EnablingGroup;
			/**
			 * Returns the middle EnablingGroup in the collection.
			 * @returns {Adobe.Indesign.EnablingGroup}
			 */
			public middleItem(): Adobe.Indesign.EnablingGroup;
			/**
			 * Returns the EnablingGroup whose index follows the specified 
			 * EnablingGroup in the collection.
			 * @param {EnablingGroup} objParam The EnablingGroup whose 
			 * index comes before the desired EnablingGroup. 
			 * @returns {Adobe.Indesign.EnablingGroup}
			 */
			public nextItem(objParam: EnablingGroup): Adobe.Indesign.EnablingGroup;
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
			 * @returns {Adobe.Indesign.EnablingGroup}
			 */
			public previousItem(objParam: EnablingGroup): Adobe.Indesign.EnablingGroup;
		}
	}
}