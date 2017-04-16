/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
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
			 * @returns {Adobe.Indesign.ParagraphStyleGroup}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.ParagraphStyleGroup;
			/**
			 * Returns any ParagraphStyleGroup in the collection.
			 * @returns {Adobe.Indesign.ParagraphStyleGroup}
			 */
			public anyItem(): Adobe.Indesign.ParagraphStyleGroup;
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
			 * @returns {Adobe.Indesign.ParagraphStyleGroup}
			 */
			public firstItem(): Adobe.Indesign.ParagraphStyleGroup;
			/**
			 * Returns the ParagraphStyleGroup with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.ParagraphStyleGroup}
			 */
			public item(indexParam: any): Adobe.Indesign.ParagraphStyleGroup;
			/**
			 * Returns the ParagraphStyleGroup with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.ParagraphStyleGroup}
			 */
			public itemByID(idParam: number): Adobe.Indesign.ParagraphStyleGroup;
			/**
			 * Returns the ParagraphStyleGroup with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.ParagraphStyleGroup}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.ParagraphStyleGroup;
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
			 * @returns {Adobe.Indesign.ParagraphStyleGroup}
			 */
			public lastItem(): Adobe.Indesign.ParagraphStyleGroup;
			/**
			 * Returns the middle ParagraphStyleGroup in the collection.
			 * @returns {Adobe.Indesign.ParagraphStyleGroup}
			 */
			public middleItem(): Adobe.Indesign.ParagraphStyleGroup;
			/**
			 * Returns the ParagraphStyleGroup whose index follows the 
			 * specified ParagraphStyleGroup in the collection.
			 * @param {ParagraphStyleGroup} objParam The 
			 * ParagraphStyleGroup whose index comes before the desired 
			 * ParagraphStyleGroup. 
			 * @returns {Adobe.Indesign.ParagraphStyleGroup}
			 */
			public nextItem(objParam: ParagraphStyleGroup): Adobe.Indesign.ParagraphStyleGroup;
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
			 * @returns {Adobe.Indesign.ParagraphStyleGroup}
			 */
			public previousItem(objParam: ParagraphStyleGroup): Adobe.Indesign.ParagraphStyleGroup;
		}
	}
}