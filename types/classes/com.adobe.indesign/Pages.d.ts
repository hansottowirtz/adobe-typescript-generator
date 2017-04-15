/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Pages extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new page.
			 * @param {LocationOptions} atParam - The location of the new 
			 * page relative to the reference object or within the document 
			 * or spread.  (Optional)
			 * @param {any} referenceParam - The reference object. Note: 
			 * Required when the at parameter value specifies before or 
			 * after. Can accept: Page, Spread, MasterSpread or Document. 
			 * (Optional)
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new Page (Optional)
			 */
			public add(atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Indesign.Page;
			/** Returns any Page in the collection. */
			public anyItem(): Adobe.Indesign.Page;
			/** Displays the number of elements in the Page. */
			public count(): number;
			/** Returns every Page in the collection. */
			public everyItem(): any;
			/** Returns the first Page in the collection. */
			public firstItem(): Adobe.Indesign.Page;
			/**
			 * Returns the Page with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.Page;
			/**
			 * Returns the Page with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.Page;
			/**
			 * Returns the Page with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Page;
			/**
			 * Returns the Pages within the specified range.
			 * @param {any} fromParam - The Page, index, or name at the 
			 * beginning of the range. Can accept: Page, Long Integer or 
			 * String.
			 * @param {any} toParam - The Page, index, or name at the end 
			 * of the range. Can accept: Page, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Page in the collection. */
			public lastItem(): Adobe.Indesign.Page;
			/** Returns the middle Page in the collection. */
			public middleItem(): Adobe.Indesign.Page;
			/**
			 * Returns the Page whose index follows the specified Page in 
			 * the collection.
			 * @param {Page} objParam - The Page whose index comes before 
			 * the desired Page. 
			 */
			public nextItem(objParam: Page): Adobe.Indesign.Page;
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
			 * Returns the Page with the index previous to the specified 
			 * index.
			 * @param {Page} objParam - The index of the Page that follows 
			 * the desired Page.
			 */
			public previousItem(objParam: Page): Adobe.Indesign.Page;
		}
	}
}