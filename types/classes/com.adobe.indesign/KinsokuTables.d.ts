/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class KinsokuTables extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new kinsoku table.
			 * @param {string} nameParam The name of the new kinsoku table. 
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new KinsokuTable (Optional)
			 * @returns {Adobe.Indesign.KinsokuTable}
			 */
			public add(nameParam: string, withPropertiesParam: any): Adobe.Indesign.KinsokuTable;
			/**
			 * Returns any KinsokuTable in the collection.
			 * @returns {Adobe.Indesign.KinsokuTable}
			 */
			public anyItem(): Adobe.Indesign.KinsokuTable;
			/**
			 * Displays the number of elements in the KinsokuTable.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every KinsokuTable in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first KinsokuTable in the collection.
			 * @returns {Adobe.Indesign.KinsokuTable}
			 */
			public firstItem(): Adobe.Indesign.KinsokuTable;
			/**
			 * Returns the KinsokuTable with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.KinsokuTable}
			 */
			public item(indexParam: any): Adobe.Indesign.KinsokuTable;
			/**
			 * Returns the KinsokuTable with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.KinsokuTable}
			 */
			public itemByID(idParam: number): Adobe.Indesign.KinsokuTable;
			/**
			 * Returns the KinsokuTable with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.KinsokuTable}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.KinsokuTable;
			/**
			 * Returns the KinsokuTables within the specified range.
			 * @param {any} fromParam The KinsokuTable, index, or name at 
			 * the beginning of the range. Can accept: KinsokuTable, Long 
			 * Integer or String.
			 * @param {any} toParam The KinsokuTable, index, or name at the 
			 * end of the range. Can accept: KinsokuTable, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last KinsokuTable in the collection.
			 * @returns {Adobe.Indesign.KinsokuTable}
			 */
			public lastItem(): Adobe.Indesign.KinsokuTable;
			/**
			 * Returns the middle KinsokuTable in the collection.
			 * @returns {Adobe.Indesign.KinsokuTable}
			 */
			public middleItem(): Adobe.Indesign.KinsokuTable;
			/**
			 * Returns the KinsokuTable whose index follows the specified 
			 * KinsokuTable in the collection.
			 * @param {KinsokuTable} objParam The KinsokuTable whose index 
			 * comes before the desired KinsokuTable. 
			 * @returns {Adobe.Indesign.KinsokuTable}
			 */
			public nextItem(objParam: KinsokuTable): Adobe.Indesign.KinsokuTable;
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
			 * Returns the KinsokuTable with the index previous to the 
			 * specified index.
			 * @param {KinsokuTable} objParam The index of the KinsokuTable 
			 * that follows the desired KinsokuTable.
			 * @returns {Adobe.Indesign.KinsokuTable}
			 */
			public previousItem(objParam: KinsokuTable): Adobe.Indesign.KinsokuTable;
		}
	}
}