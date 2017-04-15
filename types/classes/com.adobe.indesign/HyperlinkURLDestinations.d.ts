/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class HyperlinkURLDestinations extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new hyperlink URL destination.
			 * @param {string} destinationParam - The URL that the 
			 * hyperlink points to. (Optional)
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new HyperlinkURLDestination (Optional)
			 */
			public add(destinationParam: string, withPropertiesParam: any): Adobe.Indesign.HyperlinkURLDestination;
			/** Returns any HyperlinkURLDestination in the collection. */
			public anyItem(): Adobe.Indesign.HyperlinkURLDestination;
			/**
			 * Displays the number of elements in the 
			 * HyperlinkURLDestination.
			 */
			public count(): number;
			/** Returns every HyperlinkURLDestination in the collection. */
			public everyItem(): any;
			/**
			 * Returns the first HyperlinkURLDestination in the collection.
			 */
			public firstItem(): Adobe.Indesign.HyperlinkURLDestination;
			/**
			 * Returns the HyperlinkURLDestination with the specified index 
			 * or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.HyperlinkURLDestination;
			/**
			 * Returns the HyperlinkURLDestination with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.HyperlinkURLDestination;
			/**
			 * Returns the HyperlinkURLDestination with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.HyperlinkURLDestination;
			/**
			 * Returns the HyperlinkURLDestinations within the specified 
			 * range.
			 * @param {any} fromParam - The HyperlinkURLDestination, index, 
			 * or name at the beginning of the range. Can accept: 
			 * HyperlinkURLDestination, Long Integer or String.
			 * @param {any} toParam - The HyperlinkURLDestination, index, 
			 * or name at the end of the range. Can accept: 
			 * HyperlinkURLDestination, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last HyperlinkURLDestination in the collection. */
			public lastItem(): Adobe.Indesign.HyperlinkURLDestination;
			/**
			 * Returns the middle HyperlinkURLDestination in the 
			 * collection.
			 */
			public middleItem(): Adobe.Indesign.HyperlinkURLDestination;
			/**
			 * Returns the HyperlinkURLDestination whose index follows the 
			 * specified HyperlinkURLDestination in the collection.
			 * @param {HyperlinkURLDestination} objParam - The 
			 * HyperlinkURLDestination whose index comes before the desired 
			 * HyperlinkURLDestination. 
			 */
			public nextItem(objParam: HyperlinkURLDestination): Adobe.Indesign.HyperlinkURLDestination;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx - 
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index - 
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the HyperlinkURLDestination with the index previous 
			 * to the specified index.
			 * @param {HyperlinkURLDestination} objParam - The index of the 
			 * HyperlinkURLDestination that follows the desired 
			 * HyperlinkURLDestination.
			 */
			public previousItem(objParam: HyperlinkURLDestination): Adobe.Indesign.HyperlinkURLDestination;
		}
	}
}