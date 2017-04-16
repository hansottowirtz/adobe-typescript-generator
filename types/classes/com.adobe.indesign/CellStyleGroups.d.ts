/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class CellStyleGroups extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new CellStyleGroup.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new CellStyleGroup (Optional)
			 * @returns {Adobe.Indesign.CellStyleGroup}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.CellStyleGroup;
			/**
			 * Returns any CellStyleGroup in the collection.
			 * @returns {Adobe.Indesign.CellStyleGroup}
			 */
			public anyItem(): Adobe.Indesign.CellStyleGroup;
			/**
			 * Displays the number of elements in the CellStyleGroup.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every CellStyleGroup in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first CellStyleGroup in the collection.
			 * @returns {Adobe.Indesign.CellStyleGroup}
			 */
			public firstItem(): Adobe.Indesign.CellStyleGroup;
			/**
			 * Returns the CellStyleGroup with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.CellStyleGroup}
			 */
			public item(indexParam: any): Adobe.Indesign.CellStyleGroup;
			/**
			 * Returns the CellStyleGroup with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.CellStyleGroup}
			 */
			public itemByID(idParam: number): Adobe.Indesign.CellStyleGroup;
			/**
			 * Returns the CellStyleGroup with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.CellStyleGroup}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.CellStyleGroup;
			/**
			 * Returns the CellStyleGroups within the specified range.
			 * @param {any} fromParam The CellStyleGroup, index, or name at 
			 * the beginning of the range. Can accept: CellStyleGroup, Long 
			 * Integer or String.
			 * @param {any} toParam The CellStyleGroup, index, or name at 
			 * the end of the range. Can accept: CellStyleGroup, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last CellStyleGroup in the collection.
			 * @returns {Adobe.Indesign.CellStyleGroup}
			 */
			public lastItem(): Adobe.Indesign.CellStyleGroup;
			/**
			 * Returns the middle CellStyleGroup in the collection.
			 * @returns {Adobe.Indesign.CellStyleGroup}
			 */
			public middleItem(): Adobe.Indesign.CellStyleGroup;
			/**
			 * Returns the CellStyleGroup whose index follows the specified 
			 * CellStyleGroup in the collection.
			 * @param {CellStyleGroup} objParam The CellStyleGroup whose 
			 * index comes before the desired CellStyleGroup. 
			 * @returns {Adobe.Indesign.CellStyleGroup}
			 */
			public nextItem(objParam: CellStyleGroup): Adobe.Indesign.CellStyleGroup;
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
			 * Returns the CellStyleGroup with the index previous to the 
			 * specified index.
			 * @param {CellStyleGroup} objParam The index of the 
			 * CellStyleGroup that follows the desired CellStyleGroup.
			 * @returns {Adobe.Indesign.CellStyleGroup}
			 */
			public previousItem(objParam: CellStyleGroup): Adobe.Indesign.CellStyleGroup;
		}
	}
}