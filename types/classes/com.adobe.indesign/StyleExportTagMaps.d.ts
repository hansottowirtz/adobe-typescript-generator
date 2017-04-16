/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class StyleExportTagMaps extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Create a new mapping
			 * @param {string} exportTypeParam The type of export.
			 * @param {string} exportTagParam The tag to map.
			 * @param {string} exportClassParam The class to map.
			 * @param {string} exportAttributesParam The attributes to map.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new StyleExportTagMap (Optional)
			 */
			public add(exportTypeParam: string, exportTagParam: string, exportClassParam: string, exportAttributesParam: string, withPropertiesParam: any): Adobe.Indesign.StyleExportTagMap;
			/** Returns any StyleExportTagMap in the collection. */
			public anyItem(): Adobe.Indesign.StyleExportTagMap;
			/** Displays the number of elements in the StyleExportTagMap. */
			public count(): number;
			/** Returns every StyleExportTagMap in the collection. */
			public everyItem(): any;
			/** Returns the first StyleExportTagMap in the collection. */
			public firstItem(): Adobe.Indesign.StyleExportTagMap;
			/**
			 * Returns the StyleExportTagMap with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.StyleExportTagMap;
			/**
			 * Returns the StyleExportTagMaps within the specified range.
			 * @param {any} fromParam The StyleExportTagMap, index, or name 
			 * at the beginning of the range. Can accept: 
			 * StyleExportTagMap, Long Integer or String.
			 * @param {any} toParam The StyleExportTagMap, index, or name 
			 * at the end of the range. Can accept: StyleExportTagMap, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last StyleExportTagMap in the collection. */
			public lastItem(): Adobe.Indesign.StyleExportTagMap;
			/** Returns the middle StyleExportTagMap in the collection. */
			public middleItem(): Adobe.Indesign.StyleExportTagMap;
			/**
			 * Returns the StyleExportTagMap whose index follows the 
			 * specified StyleExportTagMap in the collection.
			 * @param {StyleExportTagMap} objParam The StyleExportTagMap 
			 * whose index comes before the desired StyleExportTagMap. 
			 */
			public nextItem(objParam: StyleExportTagMap): Adobe.Indesign.StyleExportTagMap;
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
			 * Returns the StyleExportTagMap with the index previous to the 
			 * specified index.
			 * @param {StyleExportTagMap} objParam The index of the 
			 * StyleExportTagMap that follows the desired 
			 * StyleExportTagMap.
			 */
			public previousItem(objParam: StyleExportTagMap): Adobe.Indesign.StyleExportTagMap;
		}
	}
}