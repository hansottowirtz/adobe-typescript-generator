/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
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
			 * @returns {Adobe.Indesign.RadiobuttonGroup}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.RadiobuttonGroup;
			/**
			 * Returns any RadiobuttonGroup in the collection.
			 * @returns {Adobe.Indesign.RadiobuttonGroup}
			 */
			public anyItem(): Adobe.Indesign.RadiobuttonGroup;
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
			 * @returns {Adobe.Indesign.RadiobuttonGroup}
			 */
			public firstItem(): Adobe.Indesign.RadiobuttonGroup;
			/**
			 * Returns the RadiobuttonGroup with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.RadiobuttonGroup}
			 */
			public item(indexParam: any): Adobe.Indesign.RadiobuttonGroup;
			/**
			 * Returns the RadiobuttonGroup with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.RadiobuttonGroup}
			 */
			public itemByID(idParam: number): Adobe.Indesign.RadiobuttonGroup;
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
			 * @returns {Adobe.Indesign.RadiobuttonGroup}
			 */
			public lastItem(): Adobe.Indesign.RadiobuttonGroup;
			/**
			 * Returns the middle RadiobuttonGroup in the collection.
			 * @returns {Adobe.Indesign.RadiobuttonGroup}
			 */
			public middleItem(): Adobe.Indesign.RadiobuttonGroup;
			/**
			 * Returns the RadiobuttonGroup whose index follows the 
			 * specified RadiobuttonGroup in the collection.
			 * @param {RadiobuttonGroup} objParam The RadiobuttonGroup 
			 * whose index comes before the desired RadiobuttonGroup. 
			 * @returns {Adobe.Indesign.RadiobuttonGroup}
			 */
			public nextItem(objParam: RadiobuttonGroup): Adobe.Indesign.RadiobuttonGroup;
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
			 * @returns {Adobe.Indesign.RadiobuttonGroup}
			 */
			public previousItem(objParam: RadiobuttonGroup): Adobe.Indesign.RadiobuttonGroup;
		}
	}
}