/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Indexes extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new Index.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Index (Optional)
			 * @returns {Adobe.Indesign.Index}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.Index;
			/**
			 * Returns any Index in the collection.
			 * @returns {Adobe.Indesign.Index}
			 */
			public anyItem(): Adobe.Indesign.Index;
			/**
			 * Displays the number of elements in the Index.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Index in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Index in the collection.
			 * @returns {Adobe.Indesign.Index}
			 */
			public firstItem(): Adobe.Indesign.Index;
			/**
			 * Returns the Index with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Index}
			 */
			public item(indexParam: any): Adobe.Indesign.Index;
			/**
			 * Returns the Index with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.Index}
			 */
			public itemByID(idParam: number): Adobe.Indesign.Index;
			/**
			 * Returns the Index with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.Index}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Index;
			/**
			 * Returns the Indexes within the specified range.
			 * @param {any} fromParam The Index, index, or name at the 
			 * beginning of the range. Can accept: Index, Long Integer or 
			 * String.
			 * @param {any} toParam The Index, index, or name at the end of 
			 * the range. Can accept: Index, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Index in the collection.
			 * @returns {Adobe.Indesign.Index}
			 */
			public lastItem(): Adobe.Indesign.Index;
			/**
			 * Returns the middle Index in the collection.
			 * @returns {Adobe.Indesign.Index}
			 */
			public middleItem(): Adobe.Indesign.Index;
			/**
			 * Returns the Index whose index follows the specified Index in 
			 * the collection.
			 * @param {Index} objParam The Index whose index comes before 
			 * the desired Index. 
			 * @returns {Adobe.Indesign.Index}
			 */
			public nextItem(objParam: Index): Adobe.Indesign.Index;
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
			 * Returns the Index with the index previous to the specified 
			 * index.
			 * @param {Index} objParam The index of the Index that follows 
			 * the desired Index.
			 * @returns {Adobe.Indesign.Index}
			 */
			public previousItem(objParam: Index): Adobe.Indesign.Index;
		}
	}
}