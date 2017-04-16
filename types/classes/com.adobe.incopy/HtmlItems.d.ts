/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class HtmlItems extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
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
			 */
			public add(layerParam: Layer, atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Incopy.HtmlItem;
			/** Returns any HtmlItem in the collection. */
			public anyItem(): Adobe.Incopy.HtmlItem;
			/** Displays the number of elements in the HtmlItem. */
			public count(): number;
			/** Returns every HtmlItem in the collection. */
			public everyItem(): any;
			/** Returns the first HtmlItem in the collection. */
			public firstItem(): Adobe.Incopy.HtmlItem;
			/**
			 * Returns the HtmlItem with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.HtmlItem;
			/**
			 * Returns the HtmlItem with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.HtmlItem;
			/**
			 * Returns the HtmlItem with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.HtmlItem;
			/**
			 * Returns the HtmlItems within the specified range.
			 * @param {any} fromParam The HtmlItem, index, or name at the 
			 * beginning of the range. Can accept: HtmlItem, Long Integer 
			 * or String.
			 * @param {any} toParam The HtmlItem, index, or name at the end 
			 * of the range. Can accept: HtmlItem, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last HtmlItem in the collection. */
			public lastItem(): Adobe.Incopy.HtmlItem;
			/** Returns the middle HtmlItem in the collection. */
			public middleItem(): Adobe.Incopy.HtmlItem;
			/**
			 * Returns the HtmlItem whose index follows the specified 
			 * HtmlItem in the collection.
			 * @param {HtmlItem} objParam The HtmlItem whose index comes 
			 * before the desired HtmlItem. 
			 */
			public nextItem(objParam: HtmlItem): Adobe.Incopy.HtmlItem;
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
			 * Returns the HtmlItem with the index previous to the 
			 * specified index.
			 * @param {HtmlItem} objParam The index of the HtmlItem that 
			 * follows the desired HtmlItem.
			 */
			public previousItem(objParam: HtmlItem): Adobe.Incopy.HtmlItem;
		}
	}
}