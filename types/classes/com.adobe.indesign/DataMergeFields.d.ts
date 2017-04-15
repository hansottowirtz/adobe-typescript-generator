/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DataMergeFields extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any DataMergeField in the collection. */
			public anyItem(): Adobe.Indesign.DataMergeField;
			/** Displays the number of elements in the DataMergeField. */
			public count(): number;
			/** Returns every DataMergeField in the collection. */
			public everyItem(): any;
			/** Returns the first DataMergeField in the collection. */
			public firstItem(): Adobe.Indesign.DataMergeField;
			/**
			 * Returns the DataMergeField with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.DataMergeField;
			/**
			 * Returns the DataMergeFields within the specified range.
			 * @param {any} fromParam - The DataMergeField, index, or name 
			 * at the beginning of the range. Can accept: DataMergeField, 
			 * Long Integer or String.
			 * @param {any} toParam - The DataMergeField, index, or name at 
			 * the end of the range. Can accept: DataMergeField, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last DataMergeField in the collection. */
			public lastItem(): Adobe.Indesign.DataMergeField;
			/** Returns the middle DataMergeField in the collection. */
			public middleItem(): Adobe.Indesign.DataMergeField;
			/**
			 * Returns the DataMergeField whose index follows the specified 
			 * DataMergeField in the collection.
			 * @param {DataMergeField} objParam - The DataMergeField whose 
			 * index comes before the desired DataMergeField. 
			 */
			public nextItem(objParam: DataMergeField): Adobe.Indesign.DataMergeField;
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
			 * Returns the DataMergeField with the index previous to the 
			 * specified index.
			 * @param {DataMergeField} objParam - The index of the 
			 * DataMergeField that follows the desired DataMergeField.
			 */
			public previousItem(objParam: DataMergeField): Adobe.Indesign.DataMergeField;
		}
	}
}