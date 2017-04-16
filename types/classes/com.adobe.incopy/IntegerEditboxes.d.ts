/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class IntegerEditboxes extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new IntegerEditbox.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new IntegerEditbox (Optional)
			 * @returns {Adobe.Incopy.IntegerEditbox}
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.IntegerEditbox;
			/**
			 * Returns any IntegerEditbox in the collection.
			 * @returns {Adobe.Incopy.IntegerEditbox}
			 */
			public anyItem(): Adobe.Incopy.IntegerEditbox;
			/**
			 * Displays the number of elements in the IntegerEditbox.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every IntegerEditbox in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first IntegerEditbox in the collection.
			 * @returns {Adobe.Incopy.IntegerEditbox}
			 */
			public firstItem(): Adobe.Incopy.IntegerEditbox;
			/**
			 * Returns the IntegerEditbox with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.IntegerEditbox}
			 */
			public item(indexParam: any): Adobe.Incopy.IntegerEditbox;
			/**
			 * Returns the IntegerEditbox with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.IntegerEditbox}
			 */
			public itemByID(idParam: number): Adobe.Incopy.IntegerEditbox;
			/**
			 * Returns the IntegerEditboxes within the specified range.
			 * @param {any} fromParam The IntegerEditbox, index, or name at 
			 * the beginning of the range. Can accept: IntegerEditbox, Long 
			 * Integer or String.
			 * @param {any} toParam The IntegerEditbox, index, or name at 
			 * the end of the range. Can accept: IntegerEditbox, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last IntegerEditbox in the collection.
			 * @returns {Adobe.Incopy.IntegerEditbox}
			 */
			public lastItem(): Adobe.Incopy.IntegerEditbox;
			/**
			 * Returns the middle IntegerEditbox in the collection.
			 * @returns {Adobe.Incopy.IntegerEditbox}
			 */
			public middleItem(): Adobe.Incopy.IntegerEditbox;
			/**
			 * Returns the IntegerEditbox whose index follows the specified 
			 * IntegerEditbox in the collection.
			 * @param {IntegerEditbox} objParam The IntegerEditbox whose 
			 * index comes before the desired IntegerEditbox. 
			 * @returns {Adobe.Incopy.IntegerEditbox}
			 */
			public nextItem(objParam: IntegerEditbox): Adobe.Incopy.IntegerEditbox;
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
			 * Returns the IntegerEditbox with the index previous to the 
			 * specified index.
			 * @param {IntegerEditbox} objParam The index of the 
			 * IntegerEditbox that follows the desired IntegerEditbox.
			 * @returns {Adobe.Incopy.IntegerEditbox}
			 */
			public previousItem(objParam: IntegerEditbox): Adobe.Incopy.IntegerEditbox;
		}
	}
}