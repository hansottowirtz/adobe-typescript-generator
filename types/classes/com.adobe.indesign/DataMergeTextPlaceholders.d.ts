/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DataMergeTextPlaceholders extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a data merge text placeholder.
			 * @param {Story} parentStoryParam - The story in which to 
			 * insert the placeholder.
			 * @param {any} storyOffsetParam - The position within the 
			 * story at which to insert the placeholder, specified as an 
			 * offset number or an insertion point. Can accept: 
			 * InsertionPoint or Long Integer.
			 * @param {DataMergeField} fieldParam - The field to insert.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new DataMergeTextPlaceholder (Optional)
			 */
			public add(parentStoryParam: Story, storyOffsetParam: any, fieldParam: DataMergeField, withPropertiesParam: any): Adobe.Indesign.DataMergeTextPlaceholder;
			/** Returns any DataMergeTextPlaceholder in the collection. */
			public anyItem(): Adobe.Indesign.DataMergeTextPlaceholder;
			/**
			 * Displays the number of elements in the 
			 * DataMergeTextPlaceholder.
			 */
			public count(): number;
			/** Returns every DataMergeTextPlaceholder in the collection. */
			public everyItem(): any;
			/**
			 * Returns the first DataMergeTextPlaceholder in the 
			 * collection.
			 */
			public firstItem(): Adobe.Indesign.DataMergeTextPlaceholder;
			/**
			 * Returns the DataMergeTextPlaceholder with the specified 
			 * index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.DataMergeTextPlaceholder;
			/**
			 * Returns the DataMergeTextPlaceholders within the specified 
			 * range.
			 * @param {any} fromParam - The DataMergeTextPlaceholder, 
			 * index, or name at the beginning of the range. Can accept: 
			 * DataMergeTextPlaceholder, Long Integer or String.
			 * @param {any} toParam - The DataMergeTextPlaceholder, index, 
			 * or name at the end of the range. Can accept: 
			 * DataMergeTextPlaceholder, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last DataMergeTextPlaceholder in the collection.
			 */
			public lastItem(): Adobe.Indesign.DataMergeTextPlaceholder;
			/**
			 * Returns the middle DataMergeTextPlaceholder in the 
			 * collection.
			 */
			public middleItem(): Adobe.Indesign.DataMergeTextPlaceholder;
			/**
			 * Returns the DataMergeTextPlaceholder whose index follows the 
			 * specified DataMergeTextPlaceholder in the collection.
			 * @param {DataMergeTextPlaceholder} objParam - The 
			 * DataMergeTextPlaceholder whose index comes before the 
			 * desired DataMergeTextPlaceholder. 
			 */
			public nextItem(objParam: DataMergeTextPlaceholder): Adobe.Indesign.DataMergeTextPlaceholder;
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
			 * Returns the DataMergeTextPlaceholder with the index previous 
			 * to the specified index.
			 * @param {DataMergeTextPlaceholder} objParam - The index of 
			 * the DataMergeTextPlaceholder that follows the desired 
			 * DataMergeTextPlaceholder.
			 */
			public previousItem(objParam: DataMergeTextPlaceholder): Adobe.Indesign.DataMergeTextPlaceholder;
		}
	}
}