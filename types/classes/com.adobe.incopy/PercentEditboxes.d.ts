/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class PercentEditboxes extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new PercentEditbox.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new PercentEditbox (Optional)
			 * @returns {Adobe.Incopy.PercentEditbox}
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.PercentEditbox;
			/**
			 * Returns any PercentEditbox in the collection.
			 * @returns {Adobe.Incopy.PercentEditbox}
			 */
			public anyItem(): Adobe.Incopy.PercentEditbox;
			/**
			 * Displays the number of elements in the PercentEditbox.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every PercentEditbox in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first PercentEditbox in the collection.
			 * @returns {Adobe.Incopy.PercentEditbox}
			 */
			public firstItem(): Adobe.Incopy.PercentEditbox;
			/**
			 * Returns the PercentEditbox with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.PercentEditbox}
			 */
			public item(indexParam: any): Adobe.Incopy.PercentEditbox;
			/**
			 * Returns the PercentEditbox with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.PercentEditbox}
			 */
			public itemByID(idParam: number): Adobe.Incopy.PercentEditbox;
			/**
			 * Returns the PercentEditboxes within the specified range.
			 * @param {any} fromParam The PercentEditbox, index, or name at 
			 * the beginning of the range. Can accept: PercentEditbox, Long 
			 * Integer or String.
			 * @param {any} toParam The PercentEditbox, index, or name at 
			 * the end of the range. Can accept: PercentEditbox, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last PercentEditbox in the collection.
			 * @returns {Adobe.Incopy.PercentEditbox}
			 */
			public lastItem(): Adobe.Incopy.PercentEditbox;
			/**
			 * Returns the middle PercentEditbox in the collection.
			 * @returns {Adobe.Incopy.PercentEditbox}
			 */
			public middleItem(): Adobe.Incopy.PercentEditbox;
			/**
			 * Returns the PercentEditbox whose index follows the specified 
			 * PercentEditbox in the collection.
			 * @param {PercentEditbox} objParam The PercentEditbox whose 
			 * index comes before the desired PercentEditbox. 
			 * @returns {Adobe.Incopy.PercentEditbox}
			 */
			public nextItem(objParam: PercentEditbox): Adobe.Incopy.PercentEditbox;
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
			 * Returns the PercentEditbox with the index previous to the 
			 * specified index.
			 * @param {PercentEditbox} objParam The index of the 
			 * PercentEditbox that follows the desired PercentEditbox.
			 * @returns {Adobe.Incopy.PercentEditbox}
			 */
			public previousItem(objParam: PercentEditbox): Adobe.Incopy.PercentEditbox;
		}
	}
}