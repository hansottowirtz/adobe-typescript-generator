/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ImportedPages extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any ImportedPage in the collection.
			 * @returns {Adobe.Incopy.ImportedPage}
			 */
			public anyItem(): Adobe.Incopy.ImportedPage;
			/**
			 * Displays the number of elements in the ImportedPage.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every ImportedPage in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first ImportedPage in the collection.
			 * @returns {Adobe.Incopy.ImportedPage}
			 */
			public firstItem(): Adobe.Incopy.ImportedPage;
			/**
			 * Returns the ImportedPage with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.ImportedPage}
			 */
			public item(indexParam: any): Adobe.Incopy.ImportedPage;
			/**
			 * Returns the ImportedPage with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.ImportedPage}
			 */
			public itemByID(idParam: number): Adobe.Incopy.ImportedPage;
			/**
			 * Returns the ImportedPage with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.ImportedPage}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.ImportedPage;
			/**
			 * Returns the ImportedPages within the specified range.
			 * @param {any} fromParam The ImportedPage, index, or name at 
			 * the beginning of the range. Can accept: ImportedPage, Long 
			 * Integer or String.
			 * @param {any} toParam The ImportedPage, index, or name at the 
			 * end of the range. Can accept: ImportedPage, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last ImportedPage in the collection.
			 * @returns {Adobe.Incopy.ImportedPage}
			 */
			public lastItem(): Adobe.Incopy.ImportedPage;
			/**
			 * Returns the middle ImportedPage in the collection.
			 * @returns {Adobe.Incopy.ImportedPage}
			 */
			public middleItem(): Adobe.Incopy.ImportedPage;
			/**
			 * Returns the ImportedPage whose index follows the specified 
			 * ImportedPage in the collection.
			 * @param {ImportedPage} objParam The ImportedPage whose index 
			 * comes before the desired ImportedPage. 
			 * @returns {Adobe.Incopy.ImportedPage}
			 */
			public nextItem(objParam: ImportedPage): Adobe.Incopy.ImportedPage;
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
			 * Returns the ImportedPage with the index previous to the 
			 * specified index.
			 * @param {ImportedPage} objParam The index of the ImportedPage 
			 * that follows the desired ImportedPage.
			 * @returns {Adobe.Incopy.ImportedPage}
			 */
			public previousItem(objParam: ImportedPage): Adobe.Incopy.ImportedPage;
		}
	}
}