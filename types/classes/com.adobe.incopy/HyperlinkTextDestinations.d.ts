/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class HyperlinkTextDestinations extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new hyperlink text destination.
			 * @param {Text} destinationParam The text or insertion point 
			 * location that the hyperlink points to.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new HyperlinkTextDestination (Optional)
			 * @returns {Adobe.Incopy.HyperlinkTextDestination}
			 */
			public add(destinationParam: Text, withPropertiesParam: any): Adobe.Incopy.HyperlinkTextDestination;
			/**
			 * Returns any HyperlinkTextDestination in the collection.
			 * @returns {Adobe.Incopy.HyperlinkTextDestination}
			 */
			public anyItem(): Adobe.Incopy.HyperlinkTextDestination;
			/**
			 * Displays the number of elements in the 
			 * HyperlinkTextDestination.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every HyperlinkTextDestination in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first HyperlinkTextDestination in the 
			 * collection.
			 * @returns {Adobe.Incopy.HyperlinkTextDestination}
			 */
			public firstItem(): Adobe.Incopy.HyperlinkTextDestination;
			/**
			 * Returns the HyperlinkTextDestination with the specified 
			 * index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.HyperlinkTextDestination}
			 */
			public item(indexParam: any): Adobe.Incopy.HyperlinkTextDestination;
			/**
			 * Returns the HyperlinkTextDestination with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.HyperlinkTextDestination}
			 */
			public itemByID(idParam: number): Adobe.Incopy.HyperlinkTextDestination;
			/**
			 * Returns the HyperlinkTextDestination with the specified 
			 * name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.HyperlinkTextDestination}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.HyperlinkTextDestination;
			/**
			 * Returns the HyperlinkTextDestinations within the specified 
			 * range.
			 * @param {any} fromParam The HyperlinkTextDestination, index, 
			 * or name at the beginning of the range. Can accept: 
			 * HyperlinkTextDestination, Long Integer or String.
			 * @param {any} toParam The HyperlinkTextDestination, index, or 
			 * name at the end of the range. Can accept: 
			 * HyperlinkTextDestination, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last HyperlinkTextDestination in the collection.
			 * @returns {Adobe.Incopy.HyperlinkTextDestination}
			 */
			public lastItem(): Adobe.Incopy.HyperlinkTextDestination;
			/**
			 * Returns the middle HyperlinkTextDestination in the 
			 * collection.
			 * @returns {Adobe.Incopy.HyperlinkTextDestination}
			 */
			public middleItem(): Adobe.Incopy.HyperlinkTextDestination;
			/**
			 * Returns the HyperlinkTextDestination whose index follows the 
			 * specified HyperlinkTextDestination in the collection.
			 * @param {HyperlinkTextDestination} objParam The 
			 * HyperlinkTextDestination whose index comes before the 
			 * desired HyperlinkTextDestination. 
			 * @returns {Adobe.Incopy.HyperlinkTextDestination}
			 */
			public nextItem(objParam: HyperlinkTextDestination): Adobe.Incopy.HyperlinkTextDestination;
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
			 * Returns the HyperlinkTextDestination with the index previous 
			 * to the specified index.
			 * @param {HyperlinkTextDestination} objParam The index of the 
			 * HyperlinkTextDestination that follows the desired 
			 * HyperlinkTextDestination.
			 * @returns {Adobe.Incopy.HyperlinkTextDestination}
			 */
			public previousItem(objParam: HyperlinkTextDestination): Adobe.Incopy.HyperlinkTextDestination;
		}
	}
}