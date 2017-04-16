/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DataMergeImagePlaceholders extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a data merge image placeholder.
			 * @param {PageItem} placeholderParam The page item on which to 
			 * place the placeholder.
			 * @param {DataMergeField} fieldParam The data merge field to 
			 * insert.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new DataMergeImagePlaceholder (Optional)
			 * @returns {Adobe.Indesign.DataMergeImagePlaceholder}
			 */
			public add(placeholderParam: PageItem, fieldParam: DataMergeField, withPropertiesParam: any): Adobe.Indesign.DataMergeImagePlaceholder;
			/**
			 * Returns any DataMergeImagePlaceholder in the collection.
			 * @returns {Adobe.Indesign.DataMergeImagePlaceholder}
			 */
			public anyItem(): Adobe.Indesign.DataMergeImagePlaceholder;
			/**
			 * Displays the number of elements in the 
			 * DataMergeImagePlaceholder.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every DataMergeImagePlaceholder in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first DataMergeImagePlaceholder in the 
			 * collection.
			 * @returns {Adobe.Indesign.DataMergeImagePlaceholder}
			 */
			public firstItem(): Adobe.Indesign.DataMergeImagePlaceholder;
			/**
			 * Returns the DataMergeImagePlaceholder with the specified 
			 * index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.DataMergeImagePlaceholder}
			 */
			public item(indexParam: any): Adobe.Indesign.DataMergeImagePlaceholder;
			/**
			 * Returns the DataMergeImagePlaceholders within the specified 
			 * range.
			 * @param {any} fromParam The DataMergeImagePlaceholder, index, 
			 * or name at the beginning of the range. Can accept: 
			 * DataMergeImagePlaceholder, Long Integer or String.
			 * @param {any} toParam The DataMergeImagePlaceholder, index, 
			 * or name at the end of the range. Can accept: 
			 * DataMergeImagePlaceholder, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last DataMergeImagePlaceholder in the 
			 * collection.
			 * @returns {Adobe.Indesign.DataMergeImagePlaceholder}
			 */
			public lastItem(): Adobe.Indesign.DataMergeImagePlaceholder;
			/**
			 * Returns the middle DataMergeImagePlaceholder in the 
			 * collection.
			 * @returns {Adobe.Indesign.DataMergeImagePlaceholder}
			 */
			public middleItem(): Adobe.Indesign.DataMergeImagePlaceholder;
			/**
			 * Returns the DataMergeImagePlaceholder whose index follows 
			 * the specified DataMergeImagePlaceholder in the collection.
			 * @param {DataMergeImagePlaceholder} objParam The 
			 * DataMergeImagePlaceholder whose index comes before the 
			 * desired DataMergeImagePlaceholder. 
			 * @returns {Adobe.Indesign.DataMergeImagePlaceholder}
			 */
			public nextItem(objParam: DataMergeImagePlaceholder): Adobe.Indesign.DataMergeImagePlaceholder;
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
			 * Returns the DataMergeImagePlaceholder with the index 
			 * previous to the specified index.
			 * @param {DataMergeImagePlaceholder} objParam The index of the 
			 * DataMergeImagePlaceholder that follows the desired 
			 * DataMergeImagePlaceholder.
			 * @returns {Adobe.Indesign.DataMergeImagePlaceholder}
			 */
			public previousItem(objParam: DataMergeImagePlaceholder): Adobe.Indesign.DataMergeImagePlaceholder;
		}
	}
}