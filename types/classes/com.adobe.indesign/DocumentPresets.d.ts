/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DocumentPresets extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new DocumentPreset.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new DocumentPreset (Optional)
			 * @returns {Adobe.Indesign.DocumentPreset}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.DocumentPreset;
			/**
			 * Returns any DocumentPreset in the collection.
			 * @returns {Adobe.Indesign.DocumentPreset}
			 */
			public anyItem(): Adobe.Indesign.DocumentPreset;
			/**
			 * Displays the number of elements in the DocumentPreset.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every DocumentPreset in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first DocumentPreset in the collection.
			 * @returns {Adobe.Indesign.DocumentPreset}
			 */
			public firstItem(): Adobe.Indesign.DocumentPreset;
			/**
			 * Returns the DocumentPreset with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.DocumentPreset}
			 */
			public item(indexParam: any): Adobe.Indesign.DocumentPreset;
			/**
			 * Returns the DocumentPreset with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.DocumentPreset}
			 */
			public itemByID(idParam: number): Adobe.Indesign.DocumentPreset;
			/**
			 * Returns the DocumentPreset with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.DocumentPreset}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.DocumentPreset;
			/**
			 * Returns the DocumentPresets within the specified range.
			 * @param {any} fromParam The DocumentPreset, index, or name at 
			 * the beginning of the range. Can accept: DocumentPreset, Long 
			 * Integer or String.
			 * @param {any} toParam The DocumentPreset, index, or name at 
			 * the end of the range. Can accept: DocumentPreset, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last DocumentPreset in the collection.
			 * @returns {Adobe.Indesign.DocumentPreset}
			 */
			public lastItem(): Adobe.Indesign.DocumentPreset;
			/**
			 * Returns the middle DocumentPreset in the collection.
			 * @returns {Adobe.Indesign.DocumentPreset}
			 */
			public middleItem(): Adobe.Indesign.DocumentPreset;
			/**
			 * Returns the DocumentPreset whose index follows the specified 
			 * DocumentPreset in the collection.
			 * @param {DocumentPreset} objParam The DocumentPreset whose 
			 * index comes before the desired DocumentPreset. 
			 * @returns {Adobe.Indesign.DocumentPreset}
			 */
			public nextItem(objParam: DocumentPreset): Adobe.Indesign.DocumentPreset;
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
			 * Returns the DocumentPreset with the index previous to the 
			 * specified index.
			 * @param {DocumentPreset} objParam The index of the 
			 * DocumentPreset that follows the desired DocumentPreset.
			 * @returns {Adobe.Indesign.DocumentPreset}
			 */
			public previousItem(objParam: DocumentPreset): Adobe.Indesign.DocumentPreset;
		}
	}
}