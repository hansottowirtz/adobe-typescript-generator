/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
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
			 * @returns {Adobe.Indesign.ListBox}
			 */
			public add(layerParam: Layer, atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Indesign.ListBox;
			/**
			 * Returns any ListBox in the collection.
			 * @returns {Adobe.Indesign.ListBox}
			 */
			public anyItem(): Adobe.Indesign.ListBox;
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
			 * @returns {Adobe.Indesign.ListBox}
			 */
			public firstItem(): Adobe.Indesign.ListBox;
			/**
			 * Returns the ListBox with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.ListBox}
			 */
			public item(indexParam: any): Adobe.Indesign.ListBox;
			/**
			 * Returns the ListBox with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.ListBox}
			 */
			public itemByID(idParam: number): Adobe.Indesign.ListBox;
			/**
			 * Returns the ListBox with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.ListBox}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.ListBox;
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
			 * @returns {Adobe.Indesign.ListBox}
			 */
			public lastItem(): Adobe.Indesign.ListBox;
			/**
			 * Returns the middle ListBox in the collection.
			 * @returns {Adobe.Indesign.ListBox}
			 */
			public middleItem(): Adobe.Indesign.ListBox;
			/**
			 * Returns the ListBox whose index follows the specified 
			 * ListBox in the collection.
			 * @param {ListBox} objParam The ListBox whose index comes 
			 * before the desired ListBox. 
			 * @returns {Adobe.Indesign.ListBox}
			 */
			public nextItem(objParam: ListBox): Adobe.Indesign.ListBox;
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
			 * @returns {Adobe.Indesign.ListBox}
			 */
			public previousItem(objParam: ListBox): Adobe.Indesign.ListBox;
		}
	}
}