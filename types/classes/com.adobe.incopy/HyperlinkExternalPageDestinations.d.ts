/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class HyperlinkExternalPageDestinations extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new hyperlink external page destination.
			 * @param {Page} destinationParam - The destination page. 
			 * (Optional)
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new HyperlinkExternalPageDestination 
			 * (Optional)
			 */
			public add(destinationParam: Page, withPropertiesParam: any): Adobe.Incopy.HyperlinkExternalPageDestination;
			/**
			 * Returns any HyperlinkExternalPageDestination in the 
			 * collection.
			 */
			public anyItem(): Adobe.Incopy.HyperlinkExternalPageDestination;
			/**
			 * Displays the number of elements in the 
			 * HyperlinkExternalPageDestination.
			 */
			public count(): number;
			/**
			 * Returns every HyperlinkExternalPageDestination in the 
			 * collection.
			 */
			public everyItem(): any;
			/**
			 * Returns the first HyperlinkExternalPageDestination in the 
			 * collection.
			 */
			public firstItem(): Adobe.Incopy.HyperlinkExternalPageDestination;
			/**
			 * Returns the HyperlinkExternalPageDestination with the 
			 * specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.HyperlinkExternalPageDestination;
			/**
			 * Returns the HyperlinkExternalPageDestination with the 
			 * specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.HyperlinkExternalPageDestination;
			/**
			 * Returns the HyperlinkExternalPageDestination with the 
			 * specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.HyperlinkExternalPageDestination;
			/**
			 * Returns the HyperlinkExternalPageDestinations within the 
			 * specified range.
			 * @param {any} fromParam - The 
			 * HyperlinkExternalPageDestination, index, or name at the 
			 * beginning of the range. Can accept: 
			 * HyperlinkExternalPageDestination, Long Integer or String.
			 * @param {any} toParam - The HyperlinkExternalPageDestination, 
			 * index, or name at the end of the range. Can accept: 
			 * HyperlinkExternalPageDestination, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last HyperlinkExternalPageDestination in the 
			 * collection.
			 */
			public lastItem(): Adobe.Incopy.HyperlinkExternalPageDestination;
			/**
			 * Returns the middle HyperlinkExternalPageDestination in the 
			 * collection.
			 */
			public middleItem(): Adobe.Incopy.HyperlinkExternalPageDestination;
			/**
			 * Returns the HyperlinkExternalPageDestination whose index 
			 * follows the specified HyperlinkExternalPageDestination in 
			 * the collection.
			 * @param {HyperlinkExternalPageDestination} objParam - The 
			 * HyperlinkExternalPageDestination whose index comes before 
			 * the desired HyperlinkExternalPageDestination. 
			 */
			public nextItem(objParam: HyperlinkExternalPageDestination): Adobe.Incopy.HyperlinkExternalPageDestination;
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
			 * Returns the HyperlinkExternalPageDestination with the index 
			 * previous to the specified index.
			 * @param {HyperlinkExternalPageDestination} objParam - The 
			 * index of the HyperlinkExternalPageDestination that follows 
			 * the desired HyperlinkExternalPageDestination.
			 */
			public previousItem(objParam: HyperlinkExternalPageDestination): Adobe.Incopy.HyperlinkExternalPageDestination;
		}
	}
}