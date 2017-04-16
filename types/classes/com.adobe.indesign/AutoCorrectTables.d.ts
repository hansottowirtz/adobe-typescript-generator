/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class AutoCorrectTables extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any AutoCorrectTable in the collection. */
			public anyItem(): Adobe.Indesign.AutoCorrectTable;
			/** Displays the number of elements in the AutoCorrectTable. */
			public count(): number;
			/** Returns every AutoCorrectTable in the collection. */
			public everyItem(): any;
			/** Returns the first AutoCorrectTable in the collection. */
			public firstItem(): Adobe.Indesign.AutoCorrectTable;
			/**
			 * Returns the AutoCorrectTable with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.AutoCorrectTable;
			/**
			 * Returns the AutoCorrectTable with the specified name.
			 * @param {string} nameParam The name.
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
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last AutoCorrectTable in the collection. */
			public lastItem(): Adobe.Indesign.AutoCorrectTable;
			/** Returns the middle AutoCorrectTable in the collection. */
			public middleItem(): Adobe.Indesign.AutoCorrectTable;
			/**
			 * Returns the AutoCorrectTable whose index follows the 
			 * specified AutoCorrectTable in the collection.
			 * @param {AutoCorrectTable} objParam The AutoCorrectTable 
			 * whose index comes before the desired AutoCorrectTable. 
			 */
			public nextItem(objParam: AutoCorrectTable): Adobe.Indesign.AutoCorrectTable;
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
			 * Returns the AutoCorrectTable with the index previous to the 
			 * specified index.
			 * @param {AutoCorrectTable} objParam The index of the 
			 * AutoCorrectTable that follows the desired AutoCorrectTable.
			 */
			public previousItem(objParam: AutoCorrectTable): Adobe.Indesign.AutoCorrectTable;
		}
	}
}