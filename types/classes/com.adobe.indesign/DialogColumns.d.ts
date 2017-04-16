/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DialogColumns extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new DialogColumn.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new DialogColumn (Optional)
			 * @returns {Adobe.Indesign.DialogColumn}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.DialogColumn;
			/**
			 * Returns any DialogColumn in the collection.
			 * @returns {Adobe.Indesign.DialogColumn}
			 */
			public anyItem(): Adobe.Indesign.DialogColumn;
			/**
			 * Displays the number of elements in the DialogColumn.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every DialogColumn in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first DialogColumn in the collection.
			 * @returns {Adobe.Indesign.DialogColumn}
			 */
			public firstItem(): Adobe.Indesign.DialogColumn;
			/**
			 * Returns the DialogColumn with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.DialogColumn}
			 */
			public item(indexParam: any): Adobe.Indesign.DialogColumn;
			/**
			 * Returns the DialogColumn with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.DialogColumn}
			 */
			public itemByID(idParam: number): Adobe.Indesign.DialogColumn;
			/**
			 * Returns the DialogColumns within the specified range.
			 * @param {any} fromParam The DialogColumn, index, or name at 
			 * the beginning of the range. Can accept: DialogColumn, Long 
			 * Integer or String.
			 * @param {any} toParam The DialogColumn, index, or name at the 
			 * end of the range. Can accept: DialogColumn, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last DialogColumn in the collection.
			 * @returns {Adobe.Indesign.DialogColumn}
			 */
			public lastItem(): Adobe.Indesign.DialogColumn;
			/**
			 * Returns the middle DialogColumn in the collection.
			 * @returns {Adobe.Indesign.DialogColumn}
			 */
			public middleItem(): Adobe.Indesign.DialogColumn;
			/**
			 * Returns the DialogColumn whose index follows the specified 
			 * DialogColumn in the collection.
			 * @param {DialogColumn} objParam The DialogColumn whose index 
			 * comes before the desired DialogColumn. 
			 * @returns {Adobe.Indesign.DialogColumn}
			 */
			public nextItem(objParam: DialogColumn): Adobe.Indesign.DialogColumn;
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
			 * Returns the DialogColumn with the index previous to the 
			 * specified index.
			 * @param {DialogColumn} objParam The index of the DialogColumn 
			 * that follows the desired DialogColumn.
			 * @returns {Adobe.Indesign.DialogColumn}
			 */
			public previousItem(objParam: DialogColumn): Adobe.Indesign.DialogColumn;
		}
	}
}