/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
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
			 * @returns {Adobe.Indesign.HyperlinkURLDestination}
			 */
			public add(destinationParam: string, withPropertiesParam: any): Adobe.Indesign.HyperlinkURLDestination;
			/**
			 * Returns any HyperlinkURLDestination in the collection.
			 * @returns {Adobe.Indesign.HyperlinkURLDestination}
			 */
			public anyItem(): Adobe.Indesign.HyperlinkURLDestination;
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
			 * @returns {Adobe.Indesign.HyperlinkURLDestination}
			 */
			public firstItem(): Adobe.Indesign.HyperlinkURLDestination;
			/**
			 * Returns the HyperlinkURLDestination with the specified index 
			 * or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.HyperlinkURLDestination}
			 */
			public item(indexParam: any): Adobe.Indesign.HyperlinkURLDestination;
			/**
			 * Returns the HyperlinkURLDestination with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.HyperlinkURLDestination}
			 */
			public itemByID(idParam: number): Adobe.Indesign.HyperlinkURLDestination;
			/**
			 * Returns the HyperlinkURLDestination with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.HyperlinkURLDestination}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.HyperlinkURLDestination;
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
			 * @returns {Adobe.Indesign.HyperlinkURLDestination}
			 */
			public lastItem(): Adobe.Indesign.HyperlinkURLDestination;
			/**
			 * Returns the middle HyperlinkURLDestination in the 
			 * collection.
			 * @returns {Adobe.Indesign.HyperlinkURLDestination}
			 */
			public middleItem(): Adobe.Indesign.HyperlinkURLDestination;
			/**
			 * Returns the HyperlinkURLDestination whose index follows the 
			 * specified HyperlinkURLDestination in the collection.
			 * @param {HyperlinkURLDestination} objParam The 
			 * HyperlinkURLDestination whose index comes before the desired 
			 * HyperlinkURLDestination. 
			 * @returns {Adobe.Indesign.HyperlinkURLDestination}
			 */
			public nextItem(objParam: HyperlinkURLDestination): Adobe.Indesign.HyperlinkURLDestination;
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
			 * @returns {Adobe.Indesign.HyperlinkURLDestination}
			 */
			public previousItem(objParam: HyperlinkURLDestination): Adobe.Indesign.HyperlinkURLDestination;
		}
	}
}