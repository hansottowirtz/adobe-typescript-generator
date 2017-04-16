/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PDFExportPresets extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new PDFExportPreset.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new PDFExportPreset (Optional)
			 * @returns {Adobe.Indesign.PDFExportPreset}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.PDFExportPreset;
			/**
			 * Returns any PDFExportPreset in the collection.
			 * @returns {Adobe.Indesign.PDFExportPreset}
			 */
			public anyItem(): Adobe.Indesign.PDFExportPreset;
			/**
			 * Displays the number of elements in the PDFExportPreset.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every PDFExportPreset in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first PDFExportPreset in the collection.
			 * @returns {Adobe.Indesign.PDFExportPreset}
			 */
			public firstItem(): Adobe.Indesign.PDFExportPreset;
			/**
			 * Returns the PDFExportPreset with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.PDFExportPreset}
			 */
			public item(indexParam: any): Adobe.Indesign.PDFExportPreset;
			/**
			 * Returns the PDFExportPreset with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.PDFExportPreset}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.PDFExportPreset;
			/**
			 * Returns the PDFExportPresets within the specified range.
			 * @param {any} fromParam The PDFExportPreset, index, or name 
			 * at the beginning of the range. Can accept: PDFExportPreset, 
			 * Long Integer or String.
			 * @param {any} toParam The PDFExportPreset, index, or name at 
			 * the end of the range. Can accept: PDFExportPreset, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last PDFExportPreset in the collection.
			 * @returns {Adobe.Indesign.PDFExportPreset}
			 */
			public lastItem(): Adobe.Indesign.PDFExportPreset;
			/**
			 * Returns the middle PDFExportPreset in the collection.
			 * @returns {Adobe.Indesign.PDFExportPreset}
			 */
			public middleItem(): Adobe.Indesign.PDFExportPreset;
			/**
			 * Returns the PDFExportPreset whose index follows the 
			 * specified PDFExportPreset in the collection.
			 * @param {PDFExportPreset} objParam The PDFExportPreset whose 
			 * index comes before the desired PDFExportPreset. 
			 * @returns {Adobe.Indesign.PDFExportPreset}
			 */
			public nextItem(objParam: PDFExportPreset): Adobe.Indesign.PDFExportPreset;
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
			 * Returns the PDFExportPreset with the index previous to the 
			 * specified index.
			 * @param {PDFExportPreset} objParam The index of the 
			 * PDFExportPreset that follows the desired PDFExportPreset.
			 * @returns {Adobe.Indesign.PDFExportPreset}
			 */
			public previousItem(objParam: PDFExportPreset): Adobe.Indesign.PDFExportPreset;
		}
	}
}