/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class EnablingGroups extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new EnablingGroup.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new EnablingGroup (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.EnablingGroup;
			/** Returns any EnablingGroup in the collection. */
			public anyItem(): Adobe.Incopy.EnablingGroup;
			/** Displays the number of elements in the EnablingGroup. */
			public count(): number;
			/** Returns every EnablingGroup in the collection. */
			public everyItem(): any;
			/** Returns the first EnablingGroup in the collection. */
			public firstItem(): Adobe.Incopy.EnablingGroup;
			/**
			 * Returns the EnablingGroup with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.EnablingGroup;
			/**
			 * Returns the EnablingGroup with the specified ID.
			 * @param {number} idParam The ID.
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
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last EnablingGroup in the collection. */
			public lastItem(): Adobe.Incopy.EnablingGroup;
			/** Returns the middle EnablingGroup in the collection. */
			public middleItem(): Adobe.Incopy.EnablingGroup;
			/**
			 * Returns the EnablingGroup whose index follows the specified 
			 * EnablingGroup in the collection.
			 * @param {EnablingGroup} objParam The EnablingGroup whose 
			 * index comes before the desired EnablingGroup. 
			 */
			public nextItem(objParam: EnablingGroup): Adobe.Incopy.EnablingGroup;
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
			 * Returns the EnablingGroup with the index previous to the 
			 * specified index.
			 * @param {EnablingGroup} objParam The index of the 
			 * EnablingGroup that follows the desired EnablingGroup.
			 */
			public previousItem(objParam: EnablingGroup): Adobe.Incopy.EnablingGroup;
		}
	}
}