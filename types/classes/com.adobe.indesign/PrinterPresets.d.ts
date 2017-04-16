/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PrinterPresets extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new PrinterPreset.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new PrinterPreset (Optional)
			 * @returns {Adobe.Indesign.PrinterPreset}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.PrinterPreset;
			/**
			 * Returns any PrinterPreset in the collection.
			 * @returns {Adobe.Indesign.PrinterPreset}
			 */
			public anyItem(): Adobe.Indesign.PrinterPreset;
			/**
			 * Displays the number of elements in the PrinterPreset.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every PrinterPreset in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first PrinterPreset in the collection.
			 * @returns {Adobe.Indesign.PrinterPreset}
			 */
			public firstItem(): Adobe.Indesign.PrinterPreset;
			/**
			 * Returns the PrinterPreset with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.PrinterPreset}
			 */
			public item(indexParam: any): Adobe.Indesign.PrinterPreset;
			/**
			 * Returns the PrinterPreset with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.PrinterPreset}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.PrinterPreset;
			/**
			 * Returns the PrinterPresets within the specified range.
			 * @param {any} fromParam The PrinterPreset, index, or name at 
			 * the beginning of the range. Can accept: PrinterPreset, Long 
			 * Integer or String.
			 * @param {any} toParam The PrinterPreset, index, or name at 
			 * the end of the range. Can accept: PrinterPreset, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last PrinterPreset in the collection.
			 * @returns {Adobe.Indesign.PrinterPreset}
			 */
			public lastItem(): Adobe.Indesign.PrinterPreset;
			/**
			 * Returns the middle PrinterPreset in the collection.
			 * @returns {Adobe.Indesign.PrinterPreset}
			 */
			public middleItem(): Adobe.Indesign.PrinterPreset;
			/**
			 * Returns the PrinterPreset whose index follows the specified 
			 * PrinterPreset in the collection.
			 * @param {PrinterPreset} objParam The PrinterPreset whose 
			 * index comes before the desired PrinterPreset. 
			 * @returns {Adobe.Indesign.PrinterPreset}
			 */
			public nextItem(objParam: PrinterPreset): Adobe.Indesign.PrinterPreset;
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
			 * Returns the PrinterPreset with the index previous to the 
			 * specified index.
			 * @param {PrinterPreset} objParam The index of the 
			 * PrinterPreset that follows the desired PrinterPreset.
			 * @returns {Adobe.Indesign.PrinterPreset}
			 */
			public previousItem(objParam: PrinterPreset): Adobe.Indesign.PrinterPreset;
		}
	}
}