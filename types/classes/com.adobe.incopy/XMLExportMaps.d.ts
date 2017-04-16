/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class XMLExportMaps extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Create a new mapping
			 * @param {any} mappedStyleParam The mapped style. Can accept: 
			 * ParagraphStyle, CharacterStyle, TableStyle, CellStyle or 
			 * String.
			 * @param {any} markupTagParam The tag to map. Can accept: 
			 * XMLTag or String.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new XMLExportMap (Optional)
			 */
			public add(mappedStyleParam: any, markupTagParam: any, withPropertiesParam: any): Adobe.Incopy.XMLExportMap;
			/** Returns any XMLExportMap in the collection. */
			public anyItem(): Adobe.Incopy.XMLExportMap;
			/** Displays the number of elements in the XMLExportMap. */
			public count(): number;
			/** Returns every XMLExportMap in the collection. */
			public everyItem(): any;
			/** Returns the first XMLExportMap in the collection. */
			public firstItem(): Adobe.Incopy.XMLExportMap;
			/**
			 * Returns the XMLExportMap with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.XMLExportMap;
			/**
			 * Returns the XMLExportMaps within the specified range.
			 * @param {any} fromParam The XMLExportMap, index, or name at 
			 * the beginning of the range. Can accept: XMLExportMap, Long 
			 * Integer or String.
			 * @param {any} toParam The XMLExportMap, index, or name at the 
			 * end of the range. Can accept: XMLExportMap, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last XMLExportMap in the collection. */
			public lastItem(): Adobe.Incopy.XMLExportMap;
			/** Returns the middle XMLExportMap in the collection. */
			public middleItem(): Adobe.Incopy.XMLExportMap;
			/**
			 * Returns the XMLExportMap whose index follows the specified 
			 * XMLExportMap in the collection.
			 * @param {XMLExportMap} objParam The XMLExportMap whose index 
			 * comes before the desired XMLExportMap. 
			 */
			public nextItem(objParam: XMLExportMap): Adobe.Incopy.XMLExportMap;
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
			 * Returns the XMLExportMap with the index previous to the 
			 * specified index.
			 * @param {XMLExportMap} objParam The index of the XMLExportMap 
			 * that follows the desired XMLExportMap.
			 */
			public previousItem(objParam: XMLExportMap): Adobe.Incopy.XMLExportMap;
		}
	}
}