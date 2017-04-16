/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class CellStyleMappings extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Adds a style mapping.
			 * @param {string} sourceStyleNameParam The source style name.
			 * @param {string} destinationStyleNameParam The destination 
			 * style name.
			 * @param {MapType} mappingRuleTypeParam The mapping type
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new CellStyleMapping (Optional)
			 * @returns {Adobe.Indesign.CellStyleMapping}
			 */
			public add(sourceStyleNameParam: string, destinationStyleNameParam: string, mappingRuleTypeParam: MapType, withPropertiesParam: any): Adobe.Indesign.CellStyleMapping;
			/**
			 * Returns any CellStyleMapping in the collection.
			 * @returns {Adobe.Indesign.CellStyleMapping}
			 */
			public anyItem(): Adobe.Indesign.CellStyleMapping;
			/**
			 * Displays the number of elements in the CellStyleMapping.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every CellStyleMapping in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first CellStyleMapping in the collection.
			 * @returns {Adobe.Indesign.CellStyleMapping}
			 */
			public firstItem(): Adobe.Indesign.CellStyleMapping;
			/**
			 * Returns the CellStyleMapping with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.CellStyleMapping}
			 */
			public item(indexParam: any): Adobe.Indesign.CellStyleMapping;
			/**
			 * Returns the CellStyleMappings within the specified range.
			 * @param {any} fromParam The CellStyleMapping, index, or name 
			 * at the beginning of the range. Can accept: CellStyleMapping, 
			 * Long Integer or String.
			 * @param {any} toParam The CellStyleMapping, index, or name at 
			 * the end of the range. Can accept: CellStyleMapping, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last CellStyleMapping in the collection.
			 * @returns {Adobe.Indesign.CellStyleMapping}
			 */
			public lastItem(): Adobe.Indesign.CellStyleMapping;
			/**
			 * Returns the middle CellStyleMapping in the collection.
			 * @returns {Adobe.Indesign.CellStyleMapping}
			 */
			public middleItem(): Adobe.Indesign.CellStyleMapping;
			/**
			 * Returns the CellStyleMapping whose index follows the 
			 * specified CellStyleMapping in the collection.
			 * @param {CellStyleMapping} objParam The CellStyleMapping 
			 * whose index comes before the desired CellStyleMapping. 
			 * @returns {Adobe.Indesign.CellStyleMapping}
			 */
			public nextItem(objParam: CellStyleMapping): Adobe.Indesign.CellStyleMapping;
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
			 * Returns the CellStyleMapping with the index previous to the 
			 * specified index.
			 * @param {CellStyleMapping} objParam The index of the 
			 * CellStyleMapping that follows the desired CellStyleMapping.
			 * @returns {Adobe.Indesign.CellStyleMapping}
			 */
			public previousItem(objParam: CellStyleMapping): Adobe.Indesign.CellStyleMapping;
		}
	}
}