/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class AutoCorrectTables extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any AutoCorrectTable in the collection.
			 * @returns {Adobe.Incopy.AutoCorrectTable}
			 */
			public anyItem(): Adobe.Incopy.AutoCorrectTable;
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
			 * @returns {Adobe.Incopy.AutoCorrectTable}
			 */
			public firstItem(): Adobe.Incopy.AutoCorrectTable;
			/**
			 * Returns the AutoCorrectTable with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.AutoCorrectTable}
			 */
			public item(indexParam: any): Adobe.Incopy.AutoCorrectTable;
			/**
			 * Returns the AutoCorrectTable with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.AutoCorrectTable}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.AutoCorrectTable;
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
			 * @returns {Adobe.Incopy.AutoCorrectTable}
			 */
			public lastItem(): Adobe.Incopy.AutoCorrectTable;
			/**
			 * Returns the middle AutoCorrectTable in the collection.
			 * @returns {Adobe.Incopy.AutoCorrectTable}
			 */
			public middleItem(): Adobe.Incopy.AutoCorrectTable;
			/**
			 * Returns the AutoCorrectTable whose index follows the 
			 * specified AutoCorrectTable in the collection.
			 * @param {AutoCorrectTable} objParam The AutoCorrectTable 
			 * whose index comes before the desired AutoCorrectTable. 
			 * @returns {Adobe.Incopy.AutoCorrectTable}
			 */
			public nextItem(objParam: AutoCorrectTable): Adobe.Incopy.AutoCorrectTable;
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
			 * @returns {Adobe.Incopy.AutoCorrectTable}
			 */
			public previousItem(objParam: AutoCorrectTable): Adobe.Incopy.AutoCorrectTable;
		}
	}
}