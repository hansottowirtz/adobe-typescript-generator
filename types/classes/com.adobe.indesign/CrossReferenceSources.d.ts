/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class CrossReferenceSources extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new cross reference text source.
			 * @param {Text} sourceParam - The text or insertion point to 
			 * create the source.
			 * @param {CrossReferenceFormat} appliedFormatParam - Format 
			 * used for cross reference source.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new CrossReferenceSource (Optional)
			 */
			public add(sourceParam: Text, appliedFormatParam: CrossReferenceFormat, withPropertiesParam: any): Adobe.Indesign.CrossReferenceSource;
			/** Returns any CrossReferenceSource in the collection. */
			public anyItem(): Adobe.Indesign.CrossReferenceSource;
			/**
			 * Displays the number of elements in the CrossReferenceSource.
			 */
			public count(): number;
			/** Returns every CrossReferenceSource in the collection. */
			public everyItem(): any;
			/** Returns the first CrossReferenceSource in the collection. */
			public firstItem(): Adobe.Indesign.CrossReferenceSource;
			/**
			 * Returns the CrossReferenceSource with the specified index or 
			 * name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.CrossReferenceSource;
			/**
			 * Returns the CrossReferenceSource with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.CrossReferenceSource;
			/**
			 * Returns the CrossReferenceSource with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.CrossReferenceSource;
			/**
			 * Returns the CrossReferenceSources within the specified 
			 * range.
			 * @param {any} fromParam - The CrossReferenceSource, index, or 
			 * name at the beginning of the range. Can accept: 
			 * CrossReferenceSource, Long Integer or String.
			 * @param {any} toParam - The CrossReferenceSource, index, or 
			 * name at the end of the range. Can accept: 
			 * CrossReferenceSource, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last CrossReferenceSource in the collection. */
			public lastItem(): Adobe.Indesign.CrossReferenceSource;
			/** Returns the middle CrossReferenceSource in the collection. */
			public middleItem(): Adobe.Indesign.CrossReferenceSource;
			/**
			 * Returns the CrossReferenceSource whose index follows the 
			 * specified CrossReferenceSource in the collection.
			 * @param {CrossReferenceSource} objParam - The 
			 * CrossReferenceSource whose index comes before the desired 
			 * CrossReferenceSource. 
			 */
			public nextItem(objParam: CrossReferenceSource): Adobe.Indesign.CrossReferenceSource;
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
			 * Returns the CrossReferenceSource with the index previous to 
			 * the specified index.
			 * @param {CrossReferenceSource} objParam - The index of the 
			 * CrossReferenceSource that follows the desired 
			 * CrossReferenceSource.
			 */
			public previousItem(objParam: CrossReferenceSource): Adobe.Indesign.CrossReferenceSource;
		}
	}
}