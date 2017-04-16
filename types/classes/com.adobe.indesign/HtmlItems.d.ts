/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class HtmlItems extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new HtmlItem
			 * @param {Layer} layerParam The layer on which to create the 
			 * HtmlItem. (Optional)
			 * @param {LocationOptions} atParam The location at which to 
			 * insert the HtmlItem relative to the reference object or 
			 * within the container object. (Optional)
			 * @param {any} referenceParam The reference object. Note: 
			 * Required when the at parameter is before or after. Can 
			 * accept: Document, Spread, MasterSpread, Page, Layer or 
			 * PageItem. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new HtmlItem (Optional)
			 * @returns {Adobe.Indesign.HtmlItem}
			 */
			public add(layerParam: Layer, atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Indesign.HtmlItem;
			/**
			 * Returns any HtmlItem in the collection.
			 * @returns {Adobe.Indesign.HtmlItem}
			 */
			public anyItem(): Adobe.Indesign.HtmlItem;
			/**
			 * Displays the number of elements in the HtmlItem.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every HtmlItem in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first HtmlItem in the collection.
			 * @returns {Adobe.Indesign.HtmlItem}
			 */
			public firstItem(): Adobe.Indesign.HtmlItem;
			/**
			 * Returns the HtmlItem with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.HtmlItem}
			 */
			public item(indexParam: any): Adobe.Indesign.HtmlItem;
			/**
			 * Returns the HtmlItem with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.HtmlItem}
			 */
			public itemByID(idParam: number): Adobe.Indesign.HtmlItem;
			/**
			 * Returns the HtmlItem with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.HtmlItem}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.HtmlItem;
			/**
			 * Returns the HtmlItems within the specified range.
			 * @param {any} fromParam The HtmlItem, index, or name at the 
			 * beginning of the range. Can accept: HtmlItem, Long Integer 
			 * or String.
			 * @param {any} toParam The HtmlItem, index, or name at the end 
			 * of the range. Can accept: HtmlItem, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last HtmlItem in the collection.
			 * @returns {Adobe.Indesign.HtmlItem}
			 */
			public lastItem(): Adobe.Indesign.HtmlItem;
			/**
			 * Returns the middle HtmlItem in the collection.
			 * @returns {Adobe.Indesign.HtmlItem}
			 */
			public middleItem(): Adobe.Indesign.HtmlItem;
			/**
			 * Returns the HtmlItem whose index follows the specified 
			 * HtmlItem in the collection.
			 * @param {HtmlItem} objParam The HtmlItem whose index comes 
			 * before the desired HtmlItem. 
			 * @returns {Adobe.Indesign.HtmlItem}
			 */
			public nextItem(objParam: HtmlItem): Adobe.Indesign.HtmlItem;
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
			 * Returns the HtmlItem with the index previous to the 
			 * specified index.
			 * @param {HtmlItem} objParam The index of the HtmlItem that 
			 * follows the desired HtmlItem.
			 * @returns {Adobe.Indesign.HtmlItem}
			 */
			public previousItem(objParam: HtmlItem): Adobe.Indesign.HtmlItem;
		}
	}
}