/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class PDFs extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any PDF in the collection.
			 * @returns {Adobe.Incopy.PDF}
			 */
			public anyItem(): Adobe.Incopy.PDF;
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
			 * @returns {Adobe.Incopy.PDF}
			 */
			public firstItem(): Adobe.Incopy.PDF;
			/**
			 * Returns the PDF with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.PDF}
			 */
			public item(indexParam: any): Adobe.Incopy.PDF;
			/**
			 * Returns the PDF with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.PDF}
			 */
			public itemByID(idParam: number): Adobe.Incopy.PDF;
			/**
			 * Returns the PDF with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.PDF}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.PDF;
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
			 * @returns {Adobe.Incopy.PDF}
			 */
			public lastItem(): Adobe.Incopy.PDF;
			/**
			 * Returns the middle PDF in the collection.
			 * @returns {Adobe.Incopy.PDF}
			 */
			public middleItem(): Adobe.Incopy.PDF;
			/**
			 * Returns the PDF whose index follows the specified PDF in the 
			 * collection.
			 * @param {PDF} objParam The PDF whose index comes before the 
			 * desired PDF. 
			 * @returns {Adobe.Incopy.PDF}
			 */
			public nextItem(objParam: PDF): Adobe.Incopy.PDF;
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
			 * @returns {Adobe.Incopy.PDF}
			 */
			public previousItem(objParam: PDF): Adobe.Incopy.PDF;
		}
	}
}