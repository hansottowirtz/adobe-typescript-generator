/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class CrossReferenceFormats extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new cross reference format.
			 * @param {string} nameParam The format name. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new CrossReferenceFormat (Optional)
			 */
			public add(nameParam: string, withPropertiesParam: any): Adobe.Indesign.CrossReferenceFormat;
			/** Returns any CrossReferenceFormat in the collection. */
			public anyItem(): Adobe.Indesign.CrossReferenceFormat;
			/**
			 * Displays the number of elements in the CrossReferenceFormat.
			 */
			public count(): number;
			/** Returns every CrossReferenceFormat in the collection. */
			public everyItem(): any;
			/** Returns the first CrossReferenceFormat in the collection. */
			public firstItem(): Adobe.Indesign.CrossReferenceFormat;
			/**
			 * Returns the CrossReferenceFormat with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.CrossReferenceFormat;
			/**
			 * Returns the CrossReferenceFormat with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.CrossReferenceFormat;
			/**
			 * Returns the CrossReferenceFormat with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.CrossReferenceFormat;
			/**
			 * Returns the CrossReferenceFormats within the specified 
			 * range.
			 * @param {any} fromParam The CrossReferenceFormat, index, or 
			 * name at the beginning of the range. Can accept: 
			 * CrossReferenceFormat, Long Integer or String.
			 * @param {any} toParam The CrossReferenceFormat, index, or 
			 * name at the end of the range. Can accept: 
			 * CrossReferenceFormat, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last CrossReferenceFormat in the collection. */
			public lastItem(): Adobe.Indesign.CrossReferenceFormat;
			/** Returns the middle CrossReferenceFormat in the collection. */
			public middleItem(): Adobe.Indesign.CrossReferenceFormat;
			/**
			 * Returns the CrossReferenceFormat whose index follows the 
			 * specified CrossReferenceFormat in the collection.
			 * @param {CrossReferenceFormat} objParam The 
			 * CrossReferenceFormat whose index comes before the desired 
			 * CrossReferenceFormat. 
			 */
			public nextItem(objParam: CrossReferenceFormat): Adobe.Indesign.CrossReferenceFormat;
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
			 * Returns the CrossReferenceFormat with the index previous to 
			 * the specified index.
			 * @param {CrossReferenceFormat} objParam The index of the 
			 * CrossReferenceFormat that follows the desired 
			 * CrossReferenceFormat.
			 */
			public previousItem(objParam: CrossReferenceFormat): Adobe.Indesign.CrossReferenceFormat;
		}
	}
}