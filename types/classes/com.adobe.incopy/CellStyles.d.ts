/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class CellStyles extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new CellStyle.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new CellStyle (Optional)
			 * @returns {Adobe.Incopy.CellStyle}
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.CellStyle;
			/**
			 * Returns any CellStyle in the collection.
			 * @returns {Adobe.Incopy.CellStyle}
			 */
			public anyItem(): Adobe.Incopy.CellStyle;
			/**
			 * Displays the number of elements in the CellStyle.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every CellStyle in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first CellStyle in the collection.
			 * @returns {Adobe.Incopy.CellStyle}
			 */
			public firstItem(): Adobe.Incopy.CellStyle;
			/**
			 * Returns the CellStyle with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.CellStyle}
			 */
			public item(indexParam: any): Adobe.Incopy.CellStyle;
			/**
			 * Returns the CellStyle with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.CellStyle}
			 */
			public itemByID(idParam: number): Adobe.Incopy.CellStyle;
			/**
			 * Returns the CellStyle with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.CellStyle}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.CellStyle;
			/**
			 * Returns the CellStyles within the specified range.
			 * @param {any} fromParam The CellStyle, index, or name at the 
			 * beginning of the range. Can accept: CellStyle, Long Integer 
			 * or String.
			 * @param {any} toParam The CellStyle, index, or name at the 
			 * end of the range. Can accept: CellStyle, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last CellStyle in the collection.
			 * @returns {Adobe.Incopy.CellStyle}
			 */
			public lastItem(): Adobe.Incopy.CellStyle;
			/**
			 * Returns the middle CellStyle in the collection.
			 * @returns {Adobe.Incopy.CellStyle}
			 */
			public middleItem(): Adobe.Incopy.CellStyle;
			/**
			 * Returns the CellStyle whose index follows the specified 
			 * CellStyle in the collection.
			 * @param {CellStyle} objParam The CellStyle whose index comes 
			 * before the desired CellStyle. 
			 * @returns {Adobe.Incopy.CellStyle}
			 */
			public nextItem(objParam: CellStyle): Adobe.Incopy.CellStyle;
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
			 * Returns the CellStyle with the index previous to the 
			 * specified index.
			 * @param {CellStyle} objParam The index of the CellStyle that 
			 * follows the desired CellStyle.
			 * @returns {Adobe.Incopy.CellStyle}
			 */
			public previousItem(objParam: CellStyle): Adobe.Incopy.CellStyle;
		}
	}
}