/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class PDFs extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any PDF in the collection. */
			public anyItem(): Adobe.Incopy.PDF;
			/** Displays the number of elements in the PDF. */
			public count(): number;
			/** Returns every PDF in the collection. */
			public everyItem(): any;
			/** Returns the first PDF in the collection. */
			public firstItem(): Adobe.Incopy.PDF;
			/**
			 * Returns the PDF with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.PDF;
			/**
			 * Returns the PDF with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.PDF;
			/**
			 * Returns the PDF with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.PDF;
			/**
			 * Returns the PDFs within the specified range.
			 * @param {any} fromParam The PDF, index, or name at the 
			 * beginning of the range. Can accept: PDF, Long Integer or 
			 * String.
			 * @param {any} toParam The PDF, index, or name at the end of 
			 * the range. Can accept: PDF, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last PDF in the collection. */
			public lastItem(): Adobe.Incopy.PDF;
			/** Returns the middle PDF in the collection. */
			public middleItem(): Adobe.Incopy.PDF;
			/**
			 * Returns the PDF whose index follows the specified PDF in the 
			 * collection.
			 * @param {PDF} objParam The PDF whose index comes before the 
			 * desired PDF. 
			 */
			public nextItem(objParam: PDF): Adobe.Incopy.PDF;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the PDF with the index previous to the specified 
			 * index.
			 * @param {PDF} objParam The index of the PDF that follows the 
			 * desired PDF.
			 */
			public previousItem(objParam: PDF): Adobe.Incopy.PDF;
		}
	}
}