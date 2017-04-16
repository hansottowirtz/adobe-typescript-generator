/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class AutoCorrectTables extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any AutoCorrectTable in the collection.
			 * @returns {Adobe.Indesign.AutoCorrectTable}
			 */
			public anyItem(): Adobe.Indesign.AutoCorrectTable;
			/**
			 * Displays the number of elements in the AutoCorrectTable.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every AutoCorrectTable in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first AutoCorrectTable in the collection.
			 * @returns {Adobe.Indesign.AutoCorrectTable}
			 */
			public firstItem(): Adobe.Indesign.AutoCorrectTable;
			/**
			 * Returns the AutoCorrectTable with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.AutoCorrectTable}
			 */
			public item(indexParam: any): Adobe.Indesign.AutoCorrectTable;
			/**
			 * Returns the AutoCorrectTable with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.AutoCorrectTable}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.AutoCorrectTable;
			/**
			 * Returns the AutoCorrectTables within the specified range.
			 * @param {any} fromParam The AutoCorrectTable, index, or name 
			 * at the beginning of the range. Can accept: AutoCorrectTable, 
			 * Long Integer or String.
			 * @param {any} toParam The AutoCorrectTable, index, or name at 
			 * the end of the range. Can accept: AutoCorrectTable, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last AutoCorrectTable in the collection.
			 * @returns {Adobe.Indesign.AutoCorrectTable}
			 */
			public lastItem(): Adobe.Indesign.AutoCorrectTable;
			/**
			 * Returns the middle AutoCorrectTable in the collection.
			 * @returns {Adobe.Indesign.AutoCorrectTable}
			 */
			public middleItem(): Adobe.Indesign.AutoCorrectTable;
			/**
			 * Returns the AutoCorrectTable whose index follows the 
			 * specified AutoCorrectTable in the collection.
			 * @param {AutoCorrectTable} objParam The AutoCorrectTable 
			 * whose index comes before the desired AutoCorrectTable. 
			 * @returns {Adobe.Indesign.AutoCorrectTable}
			 */
			public nextItem(objParam: AutoCorrectTable): Adobe.Indesign.AutoCorrectTable;
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
			 * Returns the AutoCorrectTable with the index previous to the 
			 * specified index.
			 * @param {AutoCorrectTable} objParam The index of the 
			 * AutoCorrectTable that follows the desired AutoCorrectTable.
			 * @returns {Adobe.Indesign.AutoCorrectTable}
			 */
			public previousItem(objParam: AutoCorrectTable): Adobe.Indesign.AutoCorrectTable;
		}
	}
}