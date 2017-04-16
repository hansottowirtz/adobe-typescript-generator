/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class HyperlinkExternalPageDestinations extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new hyperlink external page destination.
			 * @param {Page} destinationParam The destination page. 
			 * (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new HyperlinkExternalPageDestination 
			 * (Optional)
			 * @returns {Adobe.Incopy.HyperlinkExternalPageDestination}
			 */
			public add(destinationParam: Page, withPropertiesParam: any): Adobe.Incopy.HyperlinkExternalPageDestination;
			/**
			 * Returns any HyperlinkExternalPageDestination in the 
			 * collection.
			 * @returns {Adobe.Incopy.HyperlinkExternalPageDestination}
			 */
			public anyItem(): Adobe.Incopy.HyperlinkExternalPageDestination;
			/**
			 * Displays the number of elements in the 
			 * HyperlinkExternalPageDestination.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every HyperlinkExternalPageDestination in the 
			 * collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first HyperlinkExternalPageDestination in the 
			 * collection.
			 * @returns {Adobe.Incopy.HyperlinkExternalPageDestination}
			 */
			public firstItem(): Adobe.Incopy.HyperlinkExternalPageDestination;
			/**
			 * Returns the HyperlinkExternalPageDestination with the 
			 * specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.HyperlinkExternalPageDestination}
			 */
			public item(indexParam: any): Adobe.Incopy.HyperlinkExternalPageDestination;
			/**
			 * Returns the HyperlinkExternalPageDestination with the 
			 * specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.HyperlinkExternalPageDestination}
			 */
			public itemByID(idParam: number): Adobe.Incopy.HyperlinkExternalPageDestination;
			/**
			 * Returns the HyperlinkExternalPageDestination with the 
			 * specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.HyperlinkExternalPageDestination}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.HyperlinkExternalPageDestination;
			/**
			 * Returns the HyperlinkExternalPageDestinations within the 
			 * specified range.
			 * @param {any} fromParam The HyperlinkExternalPageDestination, 
			 * index, or name at the beginning of the range. Can accept: 
			 * HyperlinkExternalPageDestination, Long Integer or String.
			 * @param {any} toParam The HyperlinkExternalPageDestination, 
			 * index, or name at the end of the range. Can accept: 
			 * HyperlinkExternalPageDestination, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last HyperlinkExternalPageDestination in the 
			 * collection.
			 * @returns {Adobe.Incopy.HyperlinkExternalPageDestination}
			 */
			public lastItem(): Adobe.Incopy.HyperlinkExternalPageDestination;
			/**
			 * Returns the middle HyperlinkExternalPageDestination in the 
			 * collection.
			 * @returns {Adobe.Incopy.HyperlinkExternalPageDestination}
			 */
			public middleItem(): Adobe.Incopy.HyperlinkExternalPageDestination;
			/**
			 * Returns the HyperlinkExternalPageDestination whose index 
			 * follows the specified HyperlinkExternalPageDestination in 
			 * the collection.
			 * @param {HyperlinkExternalPageDestination} objParam The 
			 * HyperlinkExternalPageDestination whose index comes before 
			 * the desired HyperlinkExternalPageDestination. 
			 * @returns {Adobe.Incopy.HyperlinkExternalPageDestination}
			 */
			public nextItem(objParam: HyperlinkExternalPageDestination): Adobe.Incopy.HyperlinkExternalPageDestination;
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
			 * Returns the HyperlinkExternalPageDestination with the index 
			 * previous to the specified index.
			 * @param {HyperlinkExternalPageDestination} objParam The index 
			 * of the HyperlinkExternalPageDestination that follows the 
			 * desired HyperlinkExternalPageDestination.
			 * @returns {Adobe.Incopy.HyperlinkExternalPageDestination}
			 */
			public previousItem(objParam: HyperlinkExternalPageDestination): Adobe.Incopy.HyperlinkExternalPageDestination;
		}
	}
}