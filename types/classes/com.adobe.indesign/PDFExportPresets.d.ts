/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PDFExportPresets extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new PDFExportPreset.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new PDFExportPreset (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.PDFExportPreset;
			/** Returns any PDFExportPreset in the collection. */
			public anyItem(): Adobe.Indesign.PDFExportPreset;
			/** Displays the number of elements in the PDFExportPreset. */
			public count(): number;
			/** Returns every PDFExportPreset in the collection. */
			public everyItem(): any;
			/** Returns the first PDFExportPreset in the collection. */
			public firstItem(): Adobe.Indesign.PDFExportPreset;
			/**
			 * Returns the PDFExportPreset with the specified index or 
			 * name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.PDFExportPreset;
			/**
			 * Returns the PDFExportPreset with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.PDFExportPreset;
			/**
			 * Returns the PDFExportPresets within the specified range.
			 * @param {any} fromParam - The PDFExportPreset, index, or name 
			 * at the beginning of the range. Can accept: PDFExportPreset, 
			 * Long Integer or String.
			 * @param {any} toParam - The PDFExportPreset, index, or name 
			 * at the end of the range. Can accept: PDFExportPreset, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last PDFExportPreset in the collection. */
			public lastItem(): Adobe.Indesign.PDFExportPreset;
			/** Returns the middle PDFExportPreset in the collection. */
			public middleItem(): Adobe.Indesign.PDFExportPreset;
			/**
			 * Returns the PDFExportPreset whose index follows the 
			 * specified PDFExportPreset in the collection.
			 * @param {PDFExportPreset} objParam - The PDFExportPreset 
			 * whose index comes before the desired PDFExportPreset. 
			 */
			public nextItem(objParam: PDFExportPreset): Adobe.Indesign.PDFExportPreset;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx - 
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index - 
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the PDFExportPreset with the index previous to the 
			 * specified index.
			 * @param {PDFExportPreset} objParam - The index of the 
			 * PDFExportPreset that follows the desired PDFExportPreset.
			 */
			public previousItem(objParam: PDFExportPreset): Adobe.Indesign.PDFExportPreset;
		}
	}
}