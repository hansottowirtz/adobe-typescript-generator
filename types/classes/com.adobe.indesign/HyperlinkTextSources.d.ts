/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class HyperlinkTextSources extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new hyperlink text source.
			 * @param {Text} sourceParam - The text or insertion point to 
			 * hyperlink.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new HyperlinkTextSource (Optional)
			 */
			public add(sourceParam: Text, withPropertiesParam: any): Adobe.Indesign.HyperlinkTextSource;
			/** Returns any HyperlinkTextSource in the collection. */
			public anyItem(): Adobe.Indesign.HyperlinkTextSource;
			/** Displays the number of elements in the HyperlinkTextSource. */
			public count(): number;
			/** Returns every HyperlinkTextSource in the collection. */
			public everyItem(): any;
			/** Returns the first HyperlinkTextSource in the collection. */
			public firstItem(): Adobe.Indesign.HyperlinkTextSource;
			/**
			 * Returns the HyperlinkTextSource with the specified index or 
			 * name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.HyperlinkTextSource;
			/**
			 * Returns the HyperlinkTextSource with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.HyperlinkTextSource;
			/**
			 * Returns the HyperlinkTextSource with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.HyperlinkTextSource;
			/**
			 * Returns the HyperlinkTextSources within the specified range.
			 * @param {any} fromParam - The HyperlinkTextSource, index, or 
			 * name at the beginning of the range. Can accept: 
			 * HyperlinkTextSource, Long Integer or String.
			 * @param {any} toParam - The HyperlinkTextSource, index, or 
			 * name at the end of the range. Can accept: 
			 * HyperlinkTextSource, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last HyperlinkTextSource in the collection. */
			public lastItem(): Adobe.Indesign.HyperlinkTextSource;
			/** Returns the middle HyperlinkTextSource in the collection. */
			public middleItem(): Adobe.Indesign.HyperlinkTextSource;
			/**
			 * Returns the HyperlinkTextSource whose index follows the 
			 * specified HyperlinkTextSource in the collection.
			 * @param {HyperlinkTextSource} objParam - The 
			 * HyperlinkTextSource whose index comes before the desired 
			 * HyperlinkTextSource. 
			 */
			public nextItem(objParam: HyperlinkTextSource): Adobe.Indesign.HyperlinkTextSource;
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
			 * Returns the HyperlinkTextSource with the index previous to 
			 * the specified index.
			 * @param {HyperlinkTextSource} objParam - The index of the 
			 * HyperlinkTextSource that follows the desired 
			 * HyperlinkTextSource.
			 */
			public previousItem(objParam: HyperlinkTextSource): Adobe.Indesign.HyperlinkTextSource;
		}
	}
}