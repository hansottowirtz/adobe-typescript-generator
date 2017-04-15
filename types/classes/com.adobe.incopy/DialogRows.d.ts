/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class DialogRows extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new DialogRow.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new DialogRow (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.DialogRow;
			/** Returns any DialogRow in the collection. */
			public anyItem(): Adobe.Incopy.DialogRow;
			/** Displays the number of elements in the DialogRow. */
			public count(): number;
			/** Returns every DialogRow in the collection. */
			public everyItem(): any;
			/** Returns the first DialogRow in the collection. */
			public firstItem(): Adobe.Incopy.DialogRow;
			/**
			 * Returns the DialogRow with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.DialogRow;
			/**
			 * Returns the DialogRow with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.DialogRow;
			/**
			 * Returns the DialogRows within the specified range.
			 * @param {any} fromParam - The DialogRow, index, or name at 
			 * the beginning of the range. Can accept: DialogRow, Long 
			 * Integer or String.
			 * @param {any} toParam - The DialogRow, index, or name at the 
			 * end of the range. Can accept: DialogRow, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last DialogRow in the collection. */
			public lastItem(): Adobe.Incopy.DialogRow;
			/** Returns the middle DialogRow in the collection. */
			public middleItem(): Adobe.Incopy.DialogRow;
			/**
			 * Returns the DialogRow whose index follows the specified 
			 * DialogRow in the collection.
			 * @param {DialogRow} objParam - The DialogRow whose index 
			 * comes before the desired DialogRow. 
			 */
			public nextItem(objParam: DialogRow): Adobe.Incopy.DialogRow;
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
			 * Returns the DialogRow with the index previous to the 
			 * specified index.
			 * @param {DialogRow} objParam - The index of the DialogRow 
			 * that follows the desired DialogRow.
			 */
			public previousItem(objParam: DialogRow): Adobe.Incopy.DialogRow;
		}
	}
}