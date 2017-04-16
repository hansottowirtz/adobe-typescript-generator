/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
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
			 * @returns {Adobe.Incopy.DialogColumn}
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.DialogColumn;
			/**
			 * Returns any DialogColumn in the collection.
			 * @returns {Adobe.Incopy.DialogColumn}
			 */
			public anyItem(): Adobe.Incopy.DialogColumn;
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
			 * @returns {Adobe.Incopy.DialogColumn}
			 */
			public firstItem(): Adobe.Incopy.DialogColumn;
			/**
			 * Returns the DialogColumn with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.DialogColumn}
			 */
			public item(indexParam: any): Adobe.Incopy.DialogColumn;
			/**
			 * Returns the DialogColumn with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.DialogColumn}
			 */
			public itemByID(idParam: number): Adobe.Incopy.DialogColumn;
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
			 * @returns {Adobe.Incopy.DialogColumn}
			 */
			public lastItem(): Adobe.Incopy.DialogColumn;
			/**
			 * Returns the middle DialogColumn in the collection.
			 * @returns {Adobe.Incopy.DialogColumn}
			 */
			public middleItem(): Adobe.Incopy.DialogColumn;
			/**
			 * Returns the DialogColumn whose index follows the specified 
			 * DialogColumn in the collection.
			 * @param {DialogColumn} objParam The DialogColumn whose index 
			 * comes before the desired DialogColumn. 
			 * @returns {Adobe.Incopy.DialogColumn}
			 */
			public nextItem(objParam: DialogColumn): Adobe.Incopy.DialogColumn;
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
			 * @returns {Adobe.Incopy.DialogColumn}
			 */
			public previousItem(objParam: DialogColumn): Adobe.Incopy.DialogColumn;
		}
	}
}