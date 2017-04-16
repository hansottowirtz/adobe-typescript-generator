/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class HyperlinkTextDestinations extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new hyperlink text destination.
			 * @param {Text} destinationParam The text or insertion point 
			 * location that the hyperlink points to.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new HyperlinkTextDestination (Optional)
			 */
			public add(destinationParam: Text, withPropertiesParam: any): Adobe.Incopy.HyperlinkTextDestination;
			/** Returns any HyperlinkTextDestination in the collection. */
			public anyItem(): Adobe.Incopy.HyperlinkTextDestination;
			/**
			 * Displays the number of elements in the 
			 * HyperlinkTextDestination.
			 */
			public count(): number;
			/** Returns every HyperlinkTextDestination in the collection. */
			public everyItem(): any;
			/**
			 * Returns the first HyperlinkTextDestination in the 
			 * collection.
			 */
			public firstItem(): Adobe.Incopy.HyperlinkTextDestination;
			/**
			 * Returns the HyperlinkTextDestination with the specified 
			 * index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.HyperlinkTextDestination;
			/**
			 * Returns the HyperlinkTextDestination with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.HyperlinkTextDestination;
			/**
			 * Returns the HyperlinkTextDestination with the specified 
			 * name.
			 * @param {string} nameParam The name.
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
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last HyperlinkTextDestination in the collection.
			 */
			public lastItem(): Adobe.Incopy.HyperlinkTextDestination;
			/**
			 * Returns the middle HyperlinkTextDestination in the 
			 * collection.
			 */
			public middleItem(): Adobe.Incopy.HyperlinkTextDestination;
			/**
			 * Returns the HyperlinkTextDestination whose index follows the 
			 * specified HyperlinkTextDestination in the collection.
			 * @param {HyperlinkTextDestination} objParam The 
			 * HyperlinkTextDestination whose index comes before the 
			 * desired HyperlinkTextDestination. 
			 */
			public nextItem(objParam: HyperlinkTextDestination): Adobe.Incopy.HyperlinkTextDestination;
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
			 * Returns the HyperlinkTextDestination with the index previous 
			 * to the specified index.
			 * @param {HyperlinkTextDestination} objParam The index of the 
			 * HyperlinkTextDestination that follows the desired 
			 * HyperlinkTextDestination.
			 */
			public previousItem(objParam: HyperlinkTextDestination): Adobe.Incopy.HyperlinkTextDestination;
		}
	}
}