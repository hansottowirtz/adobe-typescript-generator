/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class MojikumiTables extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new mojikumi table.
			 * @param {string} nameParam - The name of the new mojikumi 
			 * table.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new MojikumiTable (Optional)
			 */
			public add(nameParam: string, withPropertiesParam: any): Adobe.Incopy.MojikumiTable;
			/** Returns any MojikumiTable in the collection. */
			public anyItem(): Adobe.Incopy.MojikumiTable;
			/** Displays the number of elements in the MojikumiTable. */
			public count(): number;
			/** Returns every MojikumiTable in the collection. */
			public everyItem(): any;
			/** Returns the first MojikumiTable in the collection. */
			public firstItem(): Adobe.Incopy.MojikumiTable;
			/**
			 * Returns the MojikumiTable with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.MojikumiTable;
			/**
			 * Returns the MojikumiTable with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.MojikumiTable;
			/**
			 * Returns the MojikumiTable with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.MojikumiTable;
			/**
			 * Returns the MojikumiTables within the specified range.
			 * @param {any} fromParam - The MojikumiTable, index, or name 
			 * at the beginning of the range. Can accept: MojikumiTable, 
			 * Long Integer or String.
			 * @param {any} toParam - The MojikumiTable, index, or name at 
			 * the end of the range. Can accept: MojikumiTable, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last MojikumiTable in the collection. */
			public lastItem(): Adobe.Incopy.MojikumiTable;
			/** Returns the middle MojikumiTable in the collection. */
			public middleItem(): Adobe.Incopy.MojikumiTable;
			/**
			 * Returns the MojikumiTable whose index follows the specified 
			 * MojikumiTable in the collection.
			 * @param {MojikumiTable} objParam - The MojikumiTable whose 
			 * index comes before the desired MojikumiTable. 
			 */
			public nextItem(objParam: MojikumiTable): Adobe.Incopy.MojikumiTable;
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
			 * Returns the MojikumiTable with the index previous to the 
			 * specified index.
			 * @param {MojikumiTable} objParam - The index of the 
			 * MojikumiTable that follows the desired MojikumiTable.
			 */
			public previousItem(objParam: MojikumiTable): Adobe.Incopy.MojikumiTable;
		}
	}
}