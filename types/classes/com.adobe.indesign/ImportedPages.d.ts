/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ImportedPages extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new ImportedPage.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new ImportedPage (Optional)
			 * @returns {Adobe.Indesign.ImportedPage}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.ImportedPage;
			/**
			 * Returns any ImportedPage in the collection.
			 * @returns {Adobe.Indesign.ImportedPage}
			 */
			public anyItem(): Adobe.Indesign.ImportedPage;
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
			 * @returns {Adobe.Indesign.ImportedPage}
			 */
			public firstItem(): Adobe.Indesign.ImportedPage;
			/**
			 * Returns the ImportedPage with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.ImportedPage}
			 */
			public item(indexParam: any): Adobe.Indesign.ImportedPage;
			/**
			 * Returns the ImportedPage with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.ImportedPage}
			 */
			public itemByID(idParam: number): Adobe.Indesign.ImportedPage;
			/**
			 * Returns the ImportedPage with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.ImportedPage}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.ImportedPage;
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
			 * @returns {Adobe.Indesign.ImportedPage}
			 */
			public lastItem(): Adobe.Indesign.ImportedPage;
			/**
			 * Returns the middle ImportedPage in the collection.
			 * @returns {Adobe.Indesign.ImportedPage}
			 */
			public middleItem(): Adobe.Indesign.ImportedPage;
			/**
			 * Returns the ImportedPage whose index follows the specified 
			 * ImportedPage in the collection.
			 * @param {ImportedPage} objParam The ImportedPage whose index 
			 * comes before the desired ImportedPage. 
			 * @returns {Adobe.Indesign.ImportedPage}
			 */
			public nextItem(objParam: ImportedPage): Adobe.Indesign.ImportedPage;
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
			 * @returns {Adobe.Indesign.ImportedPage}
			 */
			public previousItem(objParam: ImportedPage): Adobe.Indesign.ImportedPage;
		}
	}
}