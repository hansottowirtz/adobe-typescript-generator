/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class XMLImportMaps extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Create a new mapping
			 * @param {any} markupTagParam - The tag to map. Can accept: 
			 * XMLTag or String.
			 * @param {any} mappedStyleParam - the mapped style. Can 
			 * accept: ParagraphStyle, CharacterStyle, TableStyle, 
			 * CellStyle or String.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new XMLImportMap (Optional)
			 */
			public add(markupTagParam: any, mappedStyleParam: any, withPropertiesParam: any): Adobe.Incopy.XMLImportMap;
			/** Returns any XMLImportMap in the collection. */
			public anyItem(): Adobe.Incopy.XMLImportMap;
			/** Displays the number of elements in the XMLImportMap. */
			public count(): number;
			/** Returns every XMLImportMap in the collection. */
			public everyItem(): any;
			/** Returns the first XMLImportMap in the collection. */
			public firstItem(): Adobe.Incopy.XMLImportMap;
			/**
			 * Returns the XMLImportMap with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.XMLImportMap;
			/**
			 * Returns the XMLImportMaps within the specified range.
			 * @param {any} fromParam - The XMLImportMap, index, or name at 
			 * the beginning of the range. Can accept: XMLImportMap, Long 
			 * Integer or String.
			 * @param {any} toParam - The XMLImportMap, index, or name at 
			 * the end of the range. Can accept: XMLImportMap, Long Integer 
			 * or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last XMLImportMap in the collection. */
			public lastItem(): Adobe.Incopy.XMLImportMap;
			/** Returns the middle XMLImportMap in the collection. */
			public middleItem(): Adobe.Incopy.XMLImportMap;
			/**
			 * Returns the XMLImportMap whose index follows the specified 
			 * XMLImportMap in the collection.
			 * @param {XMLImportMap} objParam - The XMLImportMap whose 
			 * index comes before the desired XMLImportMap. 
			 */
			public nextItem(objParam: XMLImportMap): Adobe.Incopy.XMLImportMap;
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
			 * Returns the XMLImportMap with the index previous to the 
			 * specified index.
			 * @param {XMLImportMap} objParam - The index of the 
			 * XMLImportMap that follows the desired XMLImportMap.
			 */
			public previousItem(objParam: XMLImportMap): Adobe.Incopy.XMLImportMap;
		}
	}
}