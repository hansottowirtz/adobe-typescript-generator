/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class IndexSections extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any IndexSection in the collection.
			 * @returns {Adobe.Indesign.IndexSection}
			 */
			public anyItem(): Adobe.Indesign.IndexSection;
			/**
			 * Displays the number of elements in the IndexSection.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every IndexSection in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first IndexSection in the collection.
			 * @returns {Adobe.Indesign.IndexSection}
			 */
			public firstItem(): Adobe.Indesign.IndexSection;
			/**
			 * Returns the IndexSection with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.IndexSection}
			 */
			public item(indexParam: any): Adobe.Indesign.IndexSection;
			/**
			 * Returns the IndexSection with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.IndexSection}
			 */
			public itemByID(idParam: number): Adobe.Indesign.IndexSection;
			/**
			 * Returns the IndexSection with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.IndexSection}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.IndexSection;
			/**
			 * Returns the IndexSections within the specified range.
			 * @param {any} fromParam The IndexSection, index, or name at 
			 * the beginning of the range. Can accept: IndexSection, Long 
			 * Integer or String.
			 * @param {any} toParam The IndexSection, index, or name at the 
			 * end of the range. Can accept: IndexSection, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last IndexSection in the collection.
			 * @returns {Adobe.Indesign.IndexSection}
			 */
			public lastItem(): Adobe.Indesign.IndexSection;
			/**
			 * Returns the middle IndexSection in the collection.
			 * @returns {Adobe.Indesign.IndexSection}
			 */
			public middleItem(): Adobe.Indesign.IndexSection;
			/**
			 * Returns the IndexSection whose index follows the specified 
			 * IndexSection in the collection.
			 * @param {IndexSection} objParam The IndexSection whose index 
			 * comes before the desired IndexSection. 
			 * @returns {Adobe.Indesign.IndexSection}
			 */
			public nextItem(objParam: IndexSection): Adobe.Indesign.IndexSection;
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
			 * Returns the IndexSection with the index previous to the 
			 * specified index.
			 * @param {IndexSection} objParam The index of the IndexSection 
			 * that follows the desired IndexSection.
			 * @returns {Adobe.Indesign.IndexSection}
			 */
			public previousItem(objParam: IndexSection): Adobe.Indesign.IndexSection;
		}
	}
}