/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Rows extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new Row.
			 * @param {LocationOptions} atParam The Row's location relative 
			 * to the reference object or within the table.  (Optional)
			 * @param {any} referenceParam The reference object. Note: The 
			 * reference object must be within the table. Required only 
			 * when the at value contains before or after. Can accept: Row, 
			 * Column, Cell or Table. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Row (Optional)
			 * @returns {any}
			 */
			public add(atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): any;
			/**
			 * Returns any Row in the collection.
			 * @returns {Adobe.Indesign.Row}
			 */
			public anyItem(): Adobe.Indesign.Row;
			/**
			 * Displays the number of elements in the Row.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Row in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Row in the collection.
			 * @returns {Adobe.Indesign.Row}
			 */
			public firstItem(): Adobe.Indesign.Row;
			/**
			 * Returns the Row with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Row}
			 */
			public item(indexParam: any): Adobe.Indesign.Row;
			/**
			 * Returns the Row with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.Row}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Row;
			/**
			 * Returns the Rows within the specified range.
			 * @param {any} fromParam The Row, index, or name at the 
			 * beginning of the range. Can accept: Row, Long Integer or 
			 * String.
			 * @param {any} toParam The Row, index, or name at the end of 
			 * the range. Can accept: Row, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Row in the collection.
			 * @returns {Adobe.Indesign.Row}
			 */
			public lastItem(): Adobe.Indesign.Row;
			/**
			 * Returns the middle Row in the collection.
			 * @returns {Adobe.Indesign.Row}
			 */
			public middleItem(): Adobe.Indesign.Row;
			/**
			 * Returns the Row whose index follows the specified Row in the 
			 * collection.
			 * @param {Row} objParam The Row whose index comes before the 
			 * desired Row. 
			 * @returns {Adobe.Indesign.Row}
			 */
			public nextItem(objParam: Row): Adobe.Indesign.Row;
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
			 * Returns the Row with the index previous to the specified 
			 * index.
			 * @param {Row} objParam The index of the Row that follows the 
			 * desired Row.
			 * @returns {Adobe.Indesign.Row}
			 */
			public previousItem(objParam: Row): Adobe.Indesign.Row;
		}
	}
}