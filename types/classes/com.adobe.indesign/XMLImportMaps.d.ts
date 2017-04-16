/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class XMLImportMaps extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Create a new mapping
			 * @param {any} markupTagParam The tag to map. Can accept: 
			 * XMLTag or String.
			 * @param {any} mappedStyleParam the mapped style. Can accept: 
			 * ParagraphStyle, CharacterStyle, TableStyle, CellStyle or 
			 * String.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new XMLImportMap (Optional)
			 * @returns {Adobe.Indesign.XMLImportMap}
			 */
			public add(markupTagParam: any, mappedStyleParam: any, withPropertiesParam: any): Adobe.Indesign.XMLImportMap;
			/**
			 * Returns any XMLImportMap in the collection.
			 * @returns {Adobe.Indesign.XMLImportMap}
			 */
			public anyItem(): Adobe.Indesign.XMLImportMap;
			/**
			 * Displays the number of elements in the XMLImportMap.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every XMLImportMap in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first XMLImportMap in the collection.
			 * @returns {Adobe.Indesign.XMLImportMap}
			 */
			public firstItem(): Adobe.Indesign.XMLImportMap;
			/**
			 * Returns the XMLImportMap with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.XMLImportMap}
			 */
			public item(indexParam: any): Adobe.Indesign.XMLImportMap;
			/**
			 * Returns the XMLImportMaps within the specified range.
			 * @param {any} fromParam The XMLImportMap, index, or name at 
			 * the beginning of the range. Can accept: XMLImportMap, Long 
			 * Integer or String.
			 * @param {any} toParam The XMLImportMap, index, or name at the 
			 * end of the range. Can accept: XMLImportMap, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last XMLImportMap in the collection.
			 * @returns {Adobe.Indesign.XMLImportMap}
			 */
			public lastItem(): Adobe.Indesign.XMLImportMap;
			/**
			 * Returns the middle XMLImportMap in the collection.
			 * @returns {Adobe.Indesign.XMLImportMap}
			 */
			public middleItem(): Adobe.Indesign.XMLImportMap;
			/**
			 * Returns the XMLImportMap whose index follows the specified 
			 * XMLImportMap in the collection.
			 * @param {XMLImportMap} objParam The XMLImportMap whose index 
			 * comes before the desired XMLImportMap. 
			 * @returns {Adobe.Indesign.XMLImportMap}
			 */
			public nextItem(objParam: XMLImportMap): Adobe.Indesign.XMLImportMap;
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
			 * Returns the XMLImportMap with the index previous to the 
			 * specified index.
			 * @param {XMLImportMap} objParam The index of the XMLImportMap 
			 * that follows the desired XMLImportMap.
			 * @returns {Adobe.Indesign.XMLImportMap}
			 */
			public previousItem(objParam: XMLImportMap): Adobe.Indesign.XMLImportMap;
		}
	}
}