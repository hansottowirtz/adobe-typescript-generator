/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
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
			 * @returns {Adobe.Indesign.CellStyle}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.CellStyle;
			/**
			 * Returns any CellStyle in the collection.
			 * @returns {Adobe.Indesign.CellStyle}
			 */
			public anyItem(): Adobe.Indesign.CellStyle;
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
			 * @returns {Adobe.Indesign.CellStyle}
			 */
			public firstItem(): Adobe.Indesign.CellStyle;
			/**
			 * Returns the CellStyle with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.CellStyle}
			 */
			public item(indexParam: any): Adobe.Indesign.CellStyle;
			/**
			 * Returns the CellStyle with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.CellStyle}
			 */
			public itemByID(idParam: number): Adobe.Indesign.CellStyle;
			/**
			 * Returns the CellStyle with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.CellStyle}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.CellStyle;
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
			 * @returns {Adobe.Indesign.CellStyle}
			 */
			public lastItem(): Adobe.Indesign.CellStyle;
			/**
			 * Returns the middle CellStyle in the collection.
			 * @returns {Adobe.Indesign.CellStyle}
			 */
			public middleItem(): Adobe.Indesign.CellStyle;
			/**
			 * Returns the CellStyle whose index follows the specified 
			 * CellStyle in the collection.
			 * @param {CellStyle} objParam The CellStyle whose index comes 
			 * before the desired CellStyle. 
			 * @returns {Adobe.Indesign.CellStyle}
			 */
			public nextItem(objParam: CellStyle): Adobe.Indesign.CellStyle;
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
			 * @returns {Adobe.Indesign.CellStyle}
			 */
			public previousItem(objParam: CellStyle): Adobe.Indesign.CellStyle;
		}
	}
}