/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PDFs extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any PDF in the collection.
			 * @returns {Adobe.Indesign.PDF}
			 */
			public anyItem(): Adobe.Indesign.PDF;
			/**
			 * Displays the number of elements in the PDF.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every PDF in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first PDF in the collection.
			 * @returns {Adobe.Indesign.PDF}
			 */
			public firstItem(): Adobe.Indesign.PDF;
			/**
			 * Returns the PDF with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.PDF}
			 */
			public item(indexParam: any): Adobe.Indesign.PDF;
			/**
			 * Returns the PDF with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.PDF}
			 */
			public itemByID(idParam: number): Adobe.Indesign.PDF;
			/**
			 * Returns the PDF with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.PDF}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.PDF;
			/**
			 * Returns the PDFs within the specified range.
			 * @param {any} fromParam The PDF, index, or name at the 
			 * beginning of the range. Can accept: PDF, Long Integer or 
			 * String.
			 * @param {any} toParam The PDF, index, or name at the end of 
			 * the range. Can accept: PDF, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last PDF in the collection.
			 * @returns {Adobe.Indesign.PDF}
			 */
			public lastItem(): Adobe.Indesign.PDF;
			/**
			 * Returns the middle PDF in the collection.
			 * @returns {Adobe.Indesign.PDF}
			 */
			public middleItem(): Adobe.Indesign.PDF;
			/**
			 * Returns the PDF whose index follows the specified PDF in the 
			 * collection.
			 * @param {PDF} objParam The PDF whose index comes before the 
			 * desired PDF. 
			 * @returns {Adobe.Indesign.PDF}
			 */
			public nextItem(objParam: PDF): Adobe.Indesign.PDF;
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
			 * Returns the PDF with the index previous to the specified 
			 * index.
			 * @param {PDF} objParam The index of the PDF that follows the 
			 * desired PDF.
			 * @returns {Adobe.Indesign.PDF}
			 */
			public previousItem(objParam: PDF): Adobe.Indesign.PDF;
		}
	}
}