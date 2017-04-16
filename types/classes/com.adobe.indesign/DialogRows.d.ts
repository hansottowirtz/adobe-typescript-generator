/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DialogRows extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new DialogRow.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new DialogRow (Optional)
			 * @returns {Adobe.Indesign.DialogRow}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.DialogRow;
			/**
			 * Returns any DialogRow in the collection.
			 * @returns {Adobe.Indesign.DialogRow}
			 */
			public anyItem(): Adobe.Indesign.DialogRow;
			/**
			 * Displays the number of elements in the DialogRow.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every DialogRow in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first DialogRow in the collection.
			 * @returns {Adobe.Indesign.DialogRow}
			 */
			public firstItem(): Adobe.Indesign.DialogRow;
			/**
			 * Returns the DialogRow with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.DialogRow}
			 */
			public item(indexParam: any): Adobe.Indesign.DialogRow;
			/**
			 * Returns the DialogRow with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.DialogRow}
			 */
			public itemByID(idParam: number): Adobe.Indesign.DialogRow;
			/**
			 * Returns the DialogRows within the specified range.
			 * @param {any} fromParam The DialogRow, index, or name at the 
			 * beginning of the range. Can accept: DialogRow, Long Integer 
			 * or String.
			 * @param {any} toParam The DialogRow, index, or name at the 
			 * end of the range. Can accept: DialogRow, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last DialogRow in the collection.
			 * @returns {Adobe.Indesign.DialogRow}
			 */
			public lastItem(): Adobe.Indesign.DialogRow;
			/**
			 * Returns the middle DialogRow in the collection.
			 * @returns {Adobe.Indesign.DialogRow}
			 */
			public middleItem(): Adobe.Indesign.DialogRow;
			/**
			 * Returns the DialogRow whose index follows the specified 
			 * DialogRow in the collection.
			 * @param {DialogRow} objParam The DialogRow whose index comes 
			 * before the desired DialogRow. 
			 * @returns {Adobe.Indesign.DialogRow}
			 */
			public nextItem(objParam: DialogRow): Adobe.Indesign.DialogRow;
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
			 * Returns the DialogRow with the index previous to the 
			 * specified index.
			 * @param {DialogRow} objParam The index of the DialogRow that 
			 * follows the desired DialogRow.
			 * @returns {Adobe.Indesign.DialogRow}
			 */
			public previousItem(objParam: DialogRow): Adobe.Indesign.DialogRow;
		}
	}
}