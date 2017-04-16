/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ParagraphStyleGroups extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new ParagraphStyleGroup.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new ParagraphStyleGroup (Optional)
			 * @returns {Adobe.Incopy.ParagraphStyleGroup}
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.ParagraphStyleGroup;
			/**
			 * Returns any ParagraphStyleGroup in the collection.
			 * @returns {Adobe.Incopy.ParagraphStyleGroup}
			 */
			public anyItem(): Adobe.Incopy.ParagraphStyleGroup;
			/**
			 * Displays the number of elements in the ParagraphStyleGroup.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every ParagraphStyleGroup in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first ParagraphStyleGroup in the collection.
			 * @returns {Adobe.Incopy.ParagraphStyleGroup}
			 */
			public firstItem(): Adobe.Incopy.ParagraphStyleGroup;
			/**
			 * Returns the ParagraphStyleGroup with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.ParagraphStyleGroup}
			 */
			public item(indexParam: any): Adobe.Incopy.ParagraphStyleGroup;
			/**
			 * Returns the ParagraphStyleGroup with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.ParagraphStyleGroup}
			 */
			public itemByID(idParam: number): Adobe.Incopy.ParagraphStyleGroup;
			/**
			 * Returns the ParagraphStyleGroup with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.ParagraphStyleGroup}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.ParagraphStyleGroup;
			/**
			 * Returns the ParagraphStyleGroups within the specified range.
			 * @param {any} fromParam The ParagraphStyleGroup, index, or 
			 * name at the beginning of the range. Can accept: 
			 * ParagraphStyleGroup, Long Integer or String.
			 * @param {any} toParam The ParagraphStyleGroup, index, or name 
			 * at the end of the range. Can accept: ParagraphStyleGroup, 
			 * Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last ParagraphStyleGroup in the collection.
			 * @returns {Adobe.Incopy.ParagraphStyleGroup}
			 */
			public lastItem(): Adobe.Incopy.ParagraphStyleGroup;
			/**
			 * Returns the middle ParagraphStyleGroup in the collection.
			 * @returns {Adobe.Incopy.ParagraphStyleGroup}
			 */
			public middleItem(): Adobe.Incopy.ParagraphStyleGroup;
			/**
			 * Returns the ParagraphStyleGroup whose index follows the 
			 * specified ParagraphStyleGroup in the collection.
			 * @param {ParagraphStyleGroup} objParam The 
			 * ParagraphStyleGroup whose index comes before the desired 
			 * ParagraphStyleGroup. 
			 * @returns {Adobe.Incopy.ParagraphStyleGroup}
			 */
			public nextItem(objParam: ParagraphStyleGroup): Adobe.Incopy.ParagraphStyleGroup;
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
			 * Returns the ParagraphStyleGroup with the index previous to 
			 * the specified index.
			 * @param {ParagraphStyleGroup} objParam The index of the 
			 * ParagraphStyleGroup that follows the desired 
			 * ParagraphStyleGroup.
			 * @returns {Adobe.Incopy.ParagraphStyleGroup}
			 */
			public previousItem(objParam: ParagraphStyleGroup): Adobe.Incopy.ParagraphStyleGroup;
		}
	}
}