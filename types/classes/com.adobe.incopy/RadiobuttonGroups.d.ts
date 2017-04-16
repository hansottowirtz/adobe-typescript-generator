/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class RadiobuttonGroups extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new RadiobuttonGroup.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new RadiobuttonGroup (Optional)
			 * @returns {Adobe.Incopy.RadiobuttonGroup}
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.RadiobuttonGroup;
			/**
			 * Returns any RadiobuttonGroup in the collection.
			 * @returns {Adobe.Incopy.RadiobuttonGroup}
			 */
			public anyItem(): Adobe.Incopy.RadiobuttonGroup;
			/**
			 * Displays the number of elements in the RadiobuttonGroup.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every RadiobuttonGroup in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first RadiobuttonGroup in the collection.
			 * @returns {Adobe.Incopy.RadiobuttonGroup}
			 */
			public firstItem(): Adobe.Incopy.RadiobuttonGroup;
			/**
			 * Returns the RadiobuttonGroup with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.RadiobuttonGroup}
			 */
			public item(indexParam: any): Adobe.Incopy.RadiobuttonGroup;
			/**
			 * Returns the RadiobuttonGroup with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.RadiobuttonGroup}
			 */
			public itemByID(idParam: number): Adobe.Incopy.RadiobuttonGroup;
			/**
			 * Returns the RadiobuttonGroups within the specified range.
			 * @param {any} fromParam The RadiobuttonGroup, index, or name 
			 * at the beginning of the range. Can accept: RadiobuttonGroup, 
			 * Long Integer or String.
			 * @param {any} toParam The RadiobuttonGroup, index, or name at 
			 * the end of the range. Can accept: RadiobuttonGroup, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last RadiobuttonGroup in the collection.
			 * @returns {Adobe.Incopy.RadiobuttonGroup}
			 */
			public lastItem(): Adobe.Incopy.RadiobuttonGroup;
			/**
			 * Returns the middle RadiobuttonGroup in the collection.
			 * @returns {Adobe.Incopy.RadiobuttonGroup}
			 */
			public middleItem(): Adobe.Incopy.RadiobuttonGroup;
			/**
			 * Returns the RadiobuttonGroup whose index follows the 
			 * specified RadiobuttonGroup in the collection.
			 * @param {RadiobuttonGroup} objParam The RadiobuttonGroup 
			 * whose index comes before the desired RadiobuttonGroup. 
			 * @returns {Adobe.Incopy.RadiobuttonGroup}
			 */
			public nextItem(objParam: RadiobuttonGroup): Adobe.Incopy.RadiobuttonGroup;
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
			 * Returns the RadiobuttonGroup with the index previous to the 
			 * specified index.
			 * @param {RadiobuttonGroup} objParam The index of the 
			 * RadiobuttonGroup that follows the desired RadiobuttonGroup.
			 * @returns {Adobe.Incopy.RadiobuttonGroup}
			 */
			public previousItem(objParam: RadiobuttonGroup): Adobe.Incopy.RadiobuttonGroup;
		}
	}
}