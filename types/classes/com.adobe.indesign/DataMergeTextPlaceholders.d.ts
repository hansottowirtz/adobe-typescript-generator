/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DataMergeTextPlaceholders extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a data merge text placeholder.
			 * @param {Story} parentStoryParam The story in which to insert 
			 * the placeholder.
			 * @param {any} storyOffsetParam The position within the story 
			 * at which to insert the placeholder, specified as an offset 
			 * number or an insertion point. Can accept: InsertionPoint or 
			 * Long Integer.
			 * @param {DataMergeField} fieldParam The field to insert.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new DataMergeTextPlaceholder (Optional)
			 * @returns {Adobe.Indesign.DataMergeTextPlaceholder}
			 */
			public add(parentStoryParam: Story, storyOffsetParam: any, fieldParam: DataMergeField, withPropertiesParam: any): Adobe.Indesign.DataMergeTextPlaceholder;
			/**
			 * Returns any DataMergeTextPlaceholder in the collection.
			 * @returns {Adobe.Indesign.DataMergeTextPlaceholder}
			 */
			public anyItem(): Adobe.Indesign.DataMergeTextPlaceholder;
			/**
			 * Displays the number of elements in the 
			 * DataMergeTextPlaceholder.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every DataMergeTextPlaceholder in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first DataMergeTextPlaceholder in the 
			 * collection.
			 * @returns {Adobe.Indesign.DataMergeTextPlaceholder}
			 */
			public firstItem(): Adobe.Indesign.DataMergeTextPlaceholder;
			/**
			 * Returns the DataMergeTextPlaceholder with the specified 
			 * index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.DataMergeTextPlaceholder}
			 */
			public item(indexParam: any): Adobe.Indesign.DataMergeTextPlaceholder;
			/**
			 * Returns the DataMergeTextPlaceholders within the specified 
			 * range.
			 * @param {any} fromParam The DataMergeTextPlaceholder, index, 
			 * or name at the beginning of the range. Can accept: 
			 * DataMergeTextPlaceholder, Long Integer or String.
			 * @param {any} toParam The DataMergeTextPlaceholder, index, or 
			 * name at the end of the range. Can accept: 
			 * DataMergeTextPlaceholder, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last DataMergeTextPlaceholder in the collection.
			 * @returns {Adobe.Indesign.DataMergeTextPlaceholder}
			 */
			public lastItem(): Adobe.Indesign.DataMergeTextPlaceholder;
			/**
			 * Returns the middle DataMergeTextPlaceholder in the 
			 * collection.
			 * @returns {Adobe.Indesign.DataMergeTextPlaceholder}
			 */
			public middleItem(): Adobe.Indesign.DataMergeTextPlaceholder;
			/**
			 * Returns the DataMergeTextPlaceholder whose index follows the 
			 * specified DataMergeTextPlaceholder in the collection.
			 * @param {DataMergeTextPlaceholder} objParam The 
			 * DataMergeTextPlaceholder whose index comes before the 
			 * desired DataMergeTextPlaceholder. 
			 * @returns {Adobe.Indesign.DataMergeTextPlaceholder}
			 */
			public nextItem(objParam: DataMergeTextPlaceholder): Adobe.Indesign.DataMergeTextPlaceholder;
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
			 * Returns the DataMergeTextPlaceholder with the index previous 
			 * to the specified index.
			 * @param {DataMergeTextPlaceholder} objParam The index of the 
			 * DataMergeTextPlaceholder that follows the desired 
			 * DataMergeTextPlaceholder.
			 * @returns {Adobe.Indesign.DataMergeTextPlaceholder}
			 */
			public previousItem(objParam: DataMergeTextPlaceholder): Adobe.Indesign.DataMergeTextPlaceholder;
		}
	}
}