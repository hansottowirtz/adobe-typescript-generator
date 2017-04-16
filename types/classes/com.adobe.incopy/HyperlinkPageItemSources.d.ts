/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class HyperlinkPageItemSources extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new hyperlink page item source.
			 * @param {PageItem} sourceParam The page item to hyperlink.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new HyperlinkPageItemSource (Optional)
			 * @returns {Adobe.Incopy.HyperlinkPageItemSource}
			 */
			public add(sourceParam: PageItem, withPropertiesParam: any): Adobe.Incopy.HyperlinkPageItemSource;
			/**
			 * Returns any HyperlinkPageItemSource in the collection.
			 * @returns {Adobe.Incopy.HyperlinkPageItemSource}
			 */
			public anyItem(): Adobe.Incopy.HyperlinkPageItemSource;
			/**
			 * Displays the number of elements in the 
			 * HyperlinkPageItemSource.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every HyperlinkPageItemSource in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first HyperlinkPageItemSource in the collection.
			 * @returns {Adobe.Incopy.HyperlinkPageItemSource}
			 */
			public firstItem(): Adobe.Incopy.HyperlinkPageItemSource;
			/**
			 * Returns the HyperlinkPageItemSource with the specified index 
			 * or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.HyperlinkPageItemSource}
			 */
			public item(indexParam: any): Adobe.Incopy.HyperlinkPageItemSource;
			/**
			 * Returns the HyperlinkPageItemSource with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.HyperlinkPageItemSource}
			 */
			public itemByID(idParam: number): Adobe.Incopy.HyperlinkPageItemSource;
			/**
			 * Returns the HyperlinkPageItemSource with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.HyperlinkPageItemSource}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.HyperlinkPageItemSource;
			/**
			 * Returns the HyperlinkPageItemSources within the specified 
			 * range.
			 * @param {any} fromParam The HyperlinkPageItemSource, index, 
			 * or name at the beginning of the range. Can accept: 
			 * HyperlinkPageItemSource, Long Integer or String.
			 * @param {any} toParam The HyperlinkPageItemSource, index, or 
			 * name at the end of the range. Can accept: 
			 * HyperlinkPageItemSource, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last HyperlinkPageItemSource in the collection.
			 * @returns {Adobe.Incopy.HyperlinkPageItemSource}
			 */
			public lastItem(): Adobe.Incopy.HyperlinkPageItemSource;
			/**
			 * Returns the middle HyperlinkPageItemSource in the 
			 * collection.
			 * @returns {Adobe.Incopy.HyperlinkPageItemSource}
			 */
			public middleItem(): Adobe.Incopy.HyperlinkPageItemSource;
			/**
			 * Returns the HyperlinkPageItemSource whose index follows the 
			 * specified HyperlinkPageItemSource in the collection.
			 * @param {HyperlinkPageItemSource} objParam The 
			 * HyperlinkPageItemSource whose index comes before the desired 
			 * HyperlinkPageItemSource. 
			 * @returns {Adobe.Incopy.HyperlinkPageItemSource}
			 */
			public nextItem(objParam: HyperlinkPageItemSource): Adobe.Incopy.HyperlinkPageItemSource;
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
			 * Returns the HyperlinkPageItemSource with the index previous 
			 * to the specified index.
			 * @param {HyperlinkPageItemSource} objParam The index of the 
			 * HyperlinkPageItemSource that follows the desired 
			 * HyperlinkPageItemSource.
			 * @returns {Adobe.Incopy.HyperlinkPageItemSource}
			 */
			public previousItem(objParam: HyperlinkPageItemSource): Adobe.Incopy.HyperlinkPageItemSource;
		}
	}
}