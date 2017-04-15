/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ImportedPages extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new ImportedPage.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new ImportedPage (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.ImportedPage;
			/** Returns any ImportedPage in the collection. */
			public anyItem(): Adobe.Indesign.ImportedPage;
			/** Displays the number of elements in the ImportedPage. */
			public count(): number;
			/** Returns every ImportedPage in the collection. */
			public everyItem(): any;
			/** Returns the first ImportedPage in the collection. */
			public firstItem(): Adobe.Indesign.ImportedPage;
			/**
			 * Returns the ImportedPage with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.ImportedPage;
			/**
			 * Returns the ImportedPage with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.ImportedPage;
			/**
			 * Returns the ImportedPage with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.ImportedPage;
			/**
			 * Returns the ImportedPages within the specified range.
			 * @param {any} fromParam - The ImportedPage, index, or name at 
			 * the beginning of the range. Can accept: ImportedPage, Long 
			 * Integer or String.
			 * @param {any} toParam - The ImportedPage, index, or name at 
			 * the end of the range. Can accept: ImportedPage, Long Integer 
			 * or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last ImportedPage in the collection. */
			public lastItem(): Adobe.Indesign.ImportedPage;
			/** Returns the middle ImportedPage in the collection. */
			public middleItem(): Adobe.Indesign.ImportedPage;
			/**
			 * Returns the ImportedPage whose index follows the specified 
			 * ImportedPage in the collection.
			 * @param {ImportedPage} objParam - The ImportedPage whose 
			 * index comes before the desired ImportedPage. 
			 */
			public nextItem(objParam: ImportedPage): Adobe.Indesign.ImportedPage;
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
			 * Returns the ImportedPage with the index previous to the 
			 * specified index.
			 * @param {ImportedPage} objParam - The index of the 
			 * ImportedPage that follows the desired ImportedPage.
			 */
			public previousItem(objParam: ImportedPage): Adobe.Indesign.ImportedPage;
		}
	}
}