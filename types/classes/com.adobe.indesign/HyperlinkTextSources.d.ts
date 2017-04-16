/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class HyperlinkTextSources extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new hyperlink text source.
			 * @param {Text} sourceParam The text or insertion point to 
			 * hyperlink.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new HyperlinkTextSource (Optional)
			 * @returns {Adobe.Indesign.HyperlinkTextSource}
			 */
			public add(sourceParam: Text, withPropertiesParam: any): Adobe.Indesign.HyperlinkTextSource;
			/**
			 * Returns any HyperlinkTextSource in the collection.
			 * @returns {Adobe.Indesign.HyperlinkTextSource}
			 */
			public anyItem(): Adobe.Indesign.HyperlinkTextSource;
			/**
			 * Displays the number of elements in the HyperlinkTextSource.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every HyperlinkTextSource in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first HyperlinkTextSource in the collection.
			 * @returns {Adobe.Indesign.HyperlinkTextSource}
			 */
			public firstItem(): Adobe.Indesign.HyperlinkTextSource;
			/**
			 * Returns the HyperlinkTextSource with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.HyperlinkTextSource}
			 */
			public item(indexParam: any): Adobe.Indesign.HyperlinkTextSource;
			/**
			 * Returns the HyperlinkTextSource with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.HyperlinkTextSource}
			 */
			public itemByID(idParam: number): Adobe.Indesign.HyperlinkTextSource;
			/**
			 * Returns the HyperlinkTextSource with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.HyperlinkTextSource}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.HyperlinkTextSource;
			/**
			 * Returns the HyperlinkTextSources within the specified range.
			 * @param {any} fromParam The HyperlinkTextSource, index, or 
			 * name at the beginning of the range. Can accept: 
			 * HyperlinkTextSource, Long Integer or String.
			 * @param {any} toParam The HyperlinkTextSource, index, or name 
			 * at the end of the range. Can accept: HyperlinkTextSource, 
			 * Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last HyperlinkTextSource in the collection.
			 * @returns {Adobe.Indesign.HyperlinkTextSource}
			 */
			public lastItem(): Adobe.Indesign.HyperlinkTextSource;
			/**
			 * Returns the middle HyperlinkTextSource in the collection.
			 * @returns {Adobe.Indesign.HyperlinkTextSource}
			 */
			public middleItem(): Adobe.Indesign.HyperlinkTextSource;
			/**
			 * Returns the HyperlinkTextSource whose index follows the 
			 * specified HyperlinkTextSource in the collection.
			 * @param {HyperlinkTextSource} objParam The 
			 * HyperlinkTextSource whose index comes before the desired 
			 * HyperlinkTextSource. 
			 * @returns {Adobe.Indesign.HyperlinkTextSource}
			 */
			public nextItem(objParam: HyperlinkTextSource): Adobe.Indesign.HyperlinkTextSource;
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
			 * Returns the HyperlinkTextSource with the index previous to 
			 * the specified index.
			 * @param {HyperlinkTextSource} objParam The index of the 
			 * HyperlinkTextSource that follows the desired 
			 * HyperlinkTextSource.
			 * @returns {Adobe.Indesign.HyperlinkTextSource}
			 */
			public previousItem(objParam: HyperlinkTextSource): Adobe.Indesign.HyperlinkTextSource;
		}
	}
}