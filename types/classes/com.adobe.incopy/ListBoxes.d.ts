/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ListBoxes extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new ListBox
			 * @param {Layer} layerParam The layer on which to create the 
			 * ListBox. (Optional)
			 * @param {LocationOptions} atParam The location at which to 
			 * insert the ListBox relative to the reference object or 
			 * within the container object. (Optional)
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the at parameter is before or after. Can 
			 * accept: Document, Spread, MasterSpread, Page, Layer or 
			 * PageItem. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new ListBox (Optional)
			 * @returns {Adobe.Incopy.ListBox}
			 */
			public add(layerParam: Layer, atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Incopy.ListBox;
			/**
			 * Returns any ListBox in the collection.
			 * @returns {Adobe.Incopy.ListBox}
			 */
			public anyItem(): Adobe.Incopy.ListBox;
			/**
			 * Displays the number of elements in the ListBox.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every ListBox in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first ListBox in the collection.
			 * @returns {Adobe.Incopy.ListBox}
			 */
			public firstItem(): Adobe.Incopy.ListBox;
			/**
			 * Returns the ListBox with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.ListBox}
			 */
			public item(indexParam: any): Adobe.Incopy.ListBox;
			/**
			 * Returns the ListBox with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.ListBox}
			 */
			public itemByID(idParam: number): Adobe.Incopy.ListBox;
			/**
			 * Returns the ListBox with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.ListBox}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.ListBox;
			/**
			 * Returns the ListBoxes within the specified range.
			 * @param {any} fromParam The ListBox, index, or name at the 
			 * beginning of the range. Can accept: ListBox, Long Integer or 
			 * String.
			 * @param {any} toParam The ListBox, index, or name at the end 
			 * of the range. Can accept: ListBox, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last ListBox in the collection.
			 * @returns {Adobe.Incopy.ListBox}
			 */
			public lastItem(): Adobe.Incopy.ListBox;
			/**
			 * Returns the middle ListBox in the collection.
			 * @returns {Adobe.Incopy.ListBox}
			 */
			public middleItem(): Adobe.Incopy.ListBox;
			/**
			 * Returns the ListBox whose index follows the specified 
			 * ListBox in the collection.
			 * @param {ListBox} objParam The ListBox whose index comes 
			 * before the desired ListBox. 
			 * @returns {Adobe.Incopy.ListBox}
			 */
			public nextItem(objParam: ListBox): Adobe.Incopy.ListBox;
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
			 * Returns the ListBox with the index previous to the specified 
			 * index.
			 * @param {ListBox} objParam The index of the ListBox that 
			 * follows the desired ListBox.
			 * @returns {Adobe.Incopy.ListBox}
			 */
			public previousItem(objParam: ListBox): Adobe.Incopy.ListBox;
		}
	}
}