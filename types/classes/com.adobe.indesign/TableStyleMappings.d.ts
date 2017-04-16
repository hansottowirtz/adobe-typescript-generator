/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TableStyleMappings extends Adobe.Csawlib.CSHostObject {
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
			 * properties of the new TableStyleMapping (Optional)
			 * @returns {Adobe.Indesign.TableStyleMapping}
			 */
			public add(sourceStyleNameParam: string, destinationStyleNameParam: string, mappingRuleTypeParam: MapType, withPropertiesParam: any): Adobe.Indesign.TableStyleMapping;
			/**
			 * Returns any TableStyleMapping in the collection.
			 * @returns {Adobe.Indesign.TableStyleMapping}
			 */
			public anyItem(): Adobe.Indesign.TableStyleMapping;
			/**
			 * Displays the number of elements in the TableStyleMapping.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every TableStyleMapping in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first TableStyleMapping in the collection.
			 * @returns {Adobe.Indesign.TableStyleMapping}
			 */
			public firstItem(): Adobe.Indesign.TableStyleMapping;
			/**
			 * Returns the TableStyleMapping with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.TableStyleMapping}
			 */
			public item(indexParam: any): Adobe.Indesign.TableStyleMapping;
			/**
			 * Returns the TableStyleMappings within the specified range.
			 * @param {any} fromParam The TableStyleMapping, index, or name 
			 * at the beginning of the range. Can accept: 
			 * TableStyleMapping, Long Integer or String.
			 * @param {any} toParam The TableStyleMapping, index, or name 
			 * at the end of the range. Can accept: TableStyleMapping, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last TableStyleMapping in the collection.
			 * @returns {Adobe.Indesign.TableStyleMapping}
			 */
			public lastItem(): Adobe.Indesign.TableStyleMapping;
			/**
			 * Returns the middle TableStyleMapping in the collection.
			 * @returns {Adobe.Indesign.TableStyleMapping}
			 */
			public middleItem(): Adobe.Indesign.TableStyleMapping;
			/**
			 * Returns the TableStyleMapping whose index follows the 
			 * specified TableStyleMapping in the collection.
			 * @param {TableStyleMapping} objParam The TableStyleMapping 
			 * whose index comes before the desired TableStyleMapping. 
			 * @returns {Adobe.Indesign.TableStyleMapping}
			 */
			public nextItem(objParam: TableStyleMapping): Adobe.Indesign.TableStyleMapping;
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
			 * Returns the TableStyleMapping with the index previous to the 
			 * specified index.
			 * @param {TableStyleMapping} objParam The index of the 
			 * TableStyleMapping that follows the desired 
			 * TableStyleMapping.
			 * @returns {Adobe.Indesign.TableStyleMapping}
			 */
			public previousItem(objParam: TableStyleMapping): Adobe.Indesign.TableStyleMapping;
		}
	}
}