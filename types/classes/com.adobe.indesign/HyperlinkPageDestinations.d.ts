/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class HyperlinkPageDestinations extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new hyperlink page destination.
			 * @param {Page} destinationParam The document page that the 
			 * hyperlink points to. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new HyperlinkPageDestination (Optional)
			 * @returns {Adobe.Indesign.HyperlinkPageDestination}
			 */
			public add(destinationParam: Page, withPropertiesParam: any): Adobe.Indesign.HyperlinkPageDestination;
			/**
			 * Returns any HyperlinkPageDestination in the collection.
			 * @returns {Adobe.Indesign.HyperlinkPageDestination}
			 */
			public anyItem(): Adobe.Indesign.HyperlinkPageDestination;
			/**
			 * Displays the number of elements in the 
			 * HyperlinkPageDestination.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every HyperlinkPageDestination in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first HyperlinkPageDestination in the 
			 * collection.
			 * @returns {Adobe.Indesign.HyperlinkPageDestination}
			 */
			public firstItem(): Adobe.Indesign.HyperlinkPageDestination;
			/**
			 * Returns the HyperlinkPageDestination with the specified 
			 * index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.HyperlinkPageDestination}
			 */
			public item(indexParam: any): Adobe.Indesign.HyperlinkPageDestination;
			/**
			 * Returns the HyperlinkPageDestination with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.HyperlinkPageDestination}
			 */
			public itemByID(idParam: number): Adobe.Indesign.HyperlinkPageDestination;
			/**
			 * Returns the HyperlinkPageDestination with the specified 
			 * name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.HyperlinkPageDestination}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.HyperlinkPageDestination;
			/**
			 * Returns the HyperlinkPageDestinations within the specified 
			 * range.
			 * @param {any} fromParam The HyperlinkPageDestination, index, 
			 * or name at the beginning of the range. Can accept: 
			 * HyperlinkPageDestination, Long Integer or String.
			 * @param {any} toParam The HyperlinkPageDestination, index, or 
			 * name at the end of the range. Can accept: 
			 * HyperlinkPageDestination, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last HyperlinkPageDestination in the collection.
			 * @returns {Adobe.Indesign.HyperlinkPageDestination}
			 */
			public lastItem(): Adobe.Indesign.HyperlinkPageDestination;
			/**
			 * Returns the middle HyperlinkPageDestination in the 
			 * collection.
			 * @returns {Adobe.Indesign.HyperlinkPageDestination}
			 */
			public middleItem(): Adobe.Indesign.HyperlinkPageDestination;
			/**
			 * Returns the HyperlinkPageDestination whose index follows the 
			 * specified HyperlinkPageDestination in the collection.
			 * @param {HyperlinkPageDestination} objParam The 
			 * HyperlinkPageDestination whose index comes before the 
			 * desired HyperlinkPageDestination. 
			 * @returns {Adobe.Indesign.HyperlinkPageDestination}
			 */
			public nextItem(objParam: HyperlinkPageDestination): Adobe.Indesign.HyperlinkPageDestination;
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
			 * Returns the HyperlinkPageDestination with the index previous 
			 * to the specified index.
			 * @param {HyperlinkPageDestination} objParam The index of the 
			 * HyperlinkPageDestination that follows the desired 
			 * HyperlinkPageDestination.
			 * @returns {Adobe.Indesign.HyperlinkPageDestination}
			 */
			public previousItem(objParam: HyperlinkPageDestination): Adobe.Indesign.HyperlinkPageDestination;
		}
	}
}