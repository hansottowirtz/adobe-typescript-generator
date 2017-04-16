/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
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
			 * @returns {Adobe.Incopy.KinsokuTable}
			 */
			public add(nameParam: string, withPropertiesParam: any): Adobe.Incopy.KinsokuTable;
			/**
			 * Returns any KinsokuTable in the collection.
			 * @returns {Adobe.Incopy.KinsokuTable}
			 */
			public anyItem(): Adobe.Incopy.KinsokuTable;
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
			 * @returns {Adobe.Incopy.KinsokuTable}
			 */
			public firstItem(): Adobe.Incopy.KinsokuTable;
			/**
			 * Returns the KinsokuTable with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.KinsokuTable}
			 */
			public item(indexParam: any): Adobe.Incopy.KinsokuTable;
			/**
			 * Returns the KinsokuTable with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.KinsokuTable}
			 */
			public itemByID(idParam: number): Adobe.Incopy.KinsokuTable;
			/**
			 * Returns the KinsokuTable with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.KinsokuTable}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.KinsokuTable;
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
			 * @returns {Adobe.Incopy.KinsokuTable}
			 */
			public lastItem(): Adobe.Incopy.KinsokuTable;
			/**
			 * Returns the middle KinsokuTable in the collection.
			 * @returns {Adobe.Incopy.KinsokuTable}
			 */
			public middleItem(): Adobe.Incopy.KinsokuTable;
			/**
			 * Returns the KinsokuTable whose index follows the specified 
			 * KinsokuTable in the collection.
			 * @param {KinsokuTable} objParam The KinsokuTable whose index 
			 * comes before the desired KinsokuTable. 
			 * @returns {Adobe.Incopy.KinsokuTable}
			 */
			public nextItem(objParam: KinsokuTable): Adobe.Incopy.KinsokuTable;
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
			 * @returns {Adobe.Incopy.KinsokuTable}
			 */
			public previousItem(objParam: KinsokuTable): Adobe.Incopy.KinsokuTable;
		}
	}
}