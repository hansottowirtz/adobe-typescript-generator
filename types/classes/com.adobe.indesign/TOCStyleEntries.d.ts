/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TOCStyleEntries extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Adds a TOC style entry.
			 * @param {string} styleNameParam The paragraph style to 
			 * include as TOC entries in the TOC. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new TOCStyleEntry (Optional)
			 */
			public add(styleNameParam: string, withPropertiesParam: any): Adobe.Indesign.TOCStyleEntry;
			/** Returns any TOCStyleEntry in the collection. */
			public anyItem(): Adobe.Indesign.TOCStyleEntry;
			/** Displays the number of elements in the TOCStyleEntry. */
			public count(): number;
			/** Returns every TOCStyleEntry in the collection. */
			public everyItem(): any;
			/** Returns the first TOCStyleEntry in the collection. */
			public firstItem(): Adobe.Indesign.TOCStyleEntry;
			/**
			 * Returns the TOCStyleEntry with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.TOCStyleEntry;
			/**
			 * Returns the TOCStyleEntry with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.TOCStyleEntry;
			/**
			 * Returns the TOCStyleEntries within the specified range.
			 * @param {any} fromParam The TOCStyleEntry, index, or name at 
			 * the beginning of the range. Can accept: TOCStyleEntry, Long 
			 * Integer or String.
			 * @param {any} toParam The TOCStyleEntry, index, or name at 
			 * the end of the range. Can accept: TOCStyleEntry, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last TOCStyleEntry in the collection. */
			public lastItem(): Adobe.Indesign.TOCStyleEntry;
			/** Returns the middle TOCStyleEntry in the collection. */
			public middleItem(): Adobe.Indesign.TOCStyleEntry;
			/**
			 * Returns the TOCStyleEntry whose index follows the specified 
			 * TOCStyleEntry in the collection.
			 * @param {TOCStyleEntry} objParam The TOCStyleEntry whose 
			 * index comes before the desired TOCStyleEntry. 
			 */
			public nextItem(objParam: TOCStyleEntry): Adobe.Indesign.TOCStyleEntry;
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
			 * Returns the TOCStyleEntry with the index previous to the 
			 * specified index.
			 * @param {TOCStyleEntry} objParam The index of the 
			 * TOCStyleEntry that follows the desired TOCStyleEntry.
			 */
			public previousItem(objParam: TOCStyleEntry): Adobe.Indesign.TOCStyleEntry;
		}
	}
}