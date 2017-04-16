/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class CrossReferenceSources extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new cross reference text source.
			 * @param {Text} sourceParam The text or insertion point to 
			 * create the source.
			 * @param {CrossReferenceFormat} appliedFormatParam Format used 
			 * for cross reference source.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new CrossReferenceSource (Optional)
			 * @returns {Adobe.Incopy.CrossReferenceSource}
			 */
			public add(sourceParam: Text, appliedFormatParam: CrossReferenceFormat, withPropertiesParam: any): Adobe.Incopy.CrossReferenceSource;
			/**
			 * Returns any CrossReferenceSource in the collection.
			 * @returns {Adobe.Incopy.CrossReferenceSource}
			 */
			public anyItem(): Adobe.Incopy.CrossReferenceSource;
			/**
			 * Displays the number of elements in the CrossReferenceSource.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every CrossReferenceSource in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first CrossReferenceSource in the collection.
			 * @returns {Adobe.Incopy.CrossReferenceSource}
			 */
			public firstItem(): Adobe.Incopy.CrossReferenceSource;
			/**
			 * Returns the CrossReferenceSource with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.CrossReferenceSource}
			 */
			public item(indexParam: any): Adobe.Incopy.CrossReferenceSource;
			/**
			 * Returns the CrossReferenceSource with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.CrossReferenceSource}
			 */
			public itemByID(idParam: number): Adobe.Incopy.CrossReferenceSource;
			/**
			 * Returns the CrossReferenceSource with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.CrossReferenceSource}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.CrossReferenceSource;
			/**
			 * Returns the CrossReferenceSources within the specified 
			 * range.
			 * @param {any} fromParam The CrossReferenceSource, index, or 
			 * name at the beginning of the range. Can accept: 
			 * CrossReferenceSource, Long Integer or String.
			 * @param {any} toParam The CrossReferenceSource, index, or 
			 * name at the end of the range. Can accept: 
			 * CrossReferenceSource, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last CrossReferenceSource in the collection.
			 * @returns {Adobe.Incopy.CrossReferenceSource}
			 */
			public lastItem(): Adobe.Incopy.CrossReferenceSource;
			/**
			 * Returns the middle CrossReferenceSource in the collection.
			 * @returns {Adobe.Incopy.CrossReferenceSource}
			 */
			public middleItem(): Adobe.Incopy.CrossReferenceSource;
			/**
			 * Returns the CrossReferenceSource whose index follows the 
			 * specified CrossReferenceSource in the collection.
			 * @param {CrossReferenceSource} objParam The 
			 * CrossReferenceSource whose index comes before the desired 
			 * CrossReferenceSource. 
			 * @returns {Adobe.Incopy.CrossReferenceSource}
			 */
			public nextItem(objParam: CrossReferenceSource): Adobe.Incopy.CrossReferenceSource;
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
			 * Returns the CrossReferenceSource with the index previous to 
			 * the specified index.
			 * @param {CrossReferenceSource} objParam The index of the 
			 * CrossReferenceSource that follows the desired 
			 * CrossReferenceSource.
			 * @returns {Adobe.Incopy.CrossReferenceSource}
			 */
			public previousItem(objParam: CrossReferenceSource): Adobe.Incopy.CrossReferenceSource;
		}
	}
}