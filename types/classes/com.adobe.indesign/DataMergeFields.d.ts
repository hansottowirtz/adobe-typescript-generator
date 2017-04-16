/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DataMergeFields extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any DataMergeField in the collection.
			 * @returns {Adobe.Indesign.DataMergeField}
			 */
			public anyItem(): Adobe.Indesign.DataMergeField;
			/**
			 * Displays the number of elements in the DataMergeField.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every DataMergeField in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first DataMergeField in the collection.
			 * @returns {Adobe.Indesign.DataMergeField}
			 */
			public firstItem(): Adobe.Indesign.DataMergeField;
			/**
			 * Returns the DataMergeField with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.DataMergeField}
			 */
			public item(indexParam: any): Adobe.Indesign.DataMergeField;
			/**
			 * Returns the DataMergeFields within the specified range.
			 * @param {any} fromParam The DataMergeField, index, or name at 
			 * the beginning of the range. Can accept: DataMergeField, Long 
			 * Integer or String.
			 * @param {any} toParam The DataMergeField, index, or name at 
			 * the end of the range. Can accept: DataMergeField, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last DataMergeField in the collection.
			 * @returns {Adobe.Indesign.DataMergeField}
			 */
			public lastItem(): Adobe.Indesign.DataMergeField;
			/**
			 * Returns the middle DataMergeField in the collection.
			 * @returns {Adobe.Indesign.DataMergeField}
			 */
			public middleItem(): Adobe.Indesign.DataMergeField;
			/**
			 * Returns the DataMergeField whose index follows the specified 
			 * DataMergeField in the collection.
			 * @param {DataMergeField} objParam The DataMergeField whose 
			 * index comes before the desired DataMergeField. 
			 * @returns {Adobe.Indesign.DataMergeField}
			 */
			public nextItem(objParam: DataMergeField): Adobe.Indesign.DataMergeField;
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
			 * Returns the DataMergeField with the index previous to the 
			 * specified index.
			 * @param {DataMergeField} objParam The index of the 
			 * DataMergeField that follows the desired DataMergeField.
			 * @returns {Adobe.Indesign.DataMergeField}
			 */
			public previousItem(objParam: DataMergeField): Adobe.Indesign.DataMergeField;
		}
	}
}