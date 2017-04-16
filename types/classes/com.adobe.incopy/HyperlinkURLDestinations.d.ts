/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class HyperlinkURLDestinations extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new hyperlink URL destination.
			 * @param {string} destinationParam The URL that the hyperlink 
			 * points to. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new HyperlinkURLDestination (Optional)
			 * @returns {Adobe.Incopy.HyperlinkURLDestination}
			 */
			public add(destinationParam: string, withPropertiesParam: any): Adobe.Incopy.HyperlinkURLDestination;
			/**
			 * Returns any HyperlinkURLDestination in the collection.
			 * @returns {Adobe.Incopy.HyperlinkURLDestination}
			 */
			public anyItem(): Adobe.Incopy.HyperlinkURLDestination;
			/**
			 * Displays the number of elements in the 
			 * HyperlinkURLDestination.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every HyperlinkURLDestination in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first HyperlinkURLDestination in the collection.
			 * @returns {Adobe.Incopy.HyperlinkURLDestination}
			 */
			public firstItem(): Adobe.Incopy.HyperlinkURLDestination;
			/**
			 * Returns the HyperlinkURLDestination with the specified index 
			 * or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.HyperlinkURLDestination}
			 */
			public item(indexParam: any): Adobe.Incopy.HyperlinkURLDestination;
			/**
			 * Returns the HyperlinkURLDestination with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.HyperlinkURLDestination}
			 */
			public itemByID(idParam: number): Adobe.Incopy.HyperlinkURLDestination;
			/**
			 * Returns the HyperlinkURLDestination with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.HyperlinkURLDestination}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.HyperlinkURLDestination;
			/**
			 * Returns the HyperlinkURLDestinations within the specified 
			 * range.
			 * @param {any} fromParam The HyperlinkURLDestination, index, 
			 * or name at the beginning of the range. Can accept: 
			 * HyperlinkURLDestination, Long Integer or String.
			 * @param {any} toParam The HyperlinkURLDestination, index, or 
			 * name at the end of the range. Can accept: 
			 * HyperlinkURLDestination, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last HyperlinkURLDestination in the collection.
			 * @returns {Adobe.Incopy.HyperlinkURLDestination}
			 */
			public lastItem(): Adobe.Incopy.HyperlinkURLDestination;
			/**
			 * Returns the middle HyperlinkURLDestination in the 
			 * collection.
			 * @returns {Adobe.Incopy.HyperlinkURLDestination}
			 */
			public middleItem(): Adobe.Incopy.HyperlinkURLDestination;
			/**
			 * Returns the HyperlinkURLDestination whose index follows the 
			 * specified HyperlinkURLDestination in the collection.
			 * @param {HyperlinkURLDestination} objParam The 
			 * HyperlinkURLDestination whose index comes before the desired 
			 * HyperlinkURLDestination. 
			 * @returns {Adobe.Incopy.HyperlinkURLDestination}
			 */
			public nextItem(objParam: HyperlinkURLDestination): Adobe.Incopy.HyperlinkURLDestination;
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
			 * Returns the HyperlinkURLDestination with the index previous 
			 * to the specified index.
			 * @param {HyperlinkURLDestination} objParam The index of the 
			 * HyperlinkURLDestination that follows the desired 
			 * HyperlinkURLDestination.
			 * @returns {Adobe.Incopy.HyperlinkURLDestination}
			 */
			public previousItem(objParam: HyperlinkURLDestination): Adobe.Incopy.HyperlinkURLDestination;
		}
	}
}