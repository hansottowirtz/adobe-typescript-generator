/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ParaStyleMappings extends Adobe.Csawlib.CSHostObject {
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
			 * properties of the new ParaStyleMapping (Optional)
			 * @returns {Adobe.Indesign.ParaStyleMapping}
			 */
			public add(sourceStyleNameParam: string, destinationStyleNameParam: string, mappingRuleTypeParam: MapType, withPropertiesParam: any): Adobe.Indesign.ParaStyleMapping;
			/**
			 * Returns any ParaStyleMapping in the collection.
			 * @returns {Adobe.Indesign.ParaStyleMapping}
			 */
			public anyItem(): Adobe.Indesign.ParaStyleMapping;
			/**
			 * Displays the number of elements in the ParaStyleMapping.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every ParaStyleMapping in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first ParaStyleMapping in the collection.
			 * @returns {Adobe.Indesign.ParaStyleMapping}
			 */
			public firstItem(): Adobe.Indesign.ParaStyleMapping;
			/**
			 * Returns the ParaStyleMapping with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.ParaStyleMapping}
			 */
			public item(indexParam: any): Adobe.Indesign.ParaStyleMapping;
			/**
			 * Returns the ParaStyleMappings within the specified range.
			 * @param {any} fromParam The ParaStyleMapping, index, or name 
			 * at the beginning of the range. Can accept: ParaStyleMapping, 
			 * Long Integer or String.
			 * @param {any} toParam The ParaStyleMapping, index, or name at 
			 * the end of the range. Can accept: ParaStyleMapping, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last ParaStyleMapping in the collection.
			 * @returns {Adobe.Indesign.ParaStyleMapping}
			 */
			public lastItem(): Adobe.Indesign.ParaStyleMapping;
			/**
			 * Returns the middle ParaStyleMapping in the collection.
			 * @returns {Adobe.Indesign.ParaStyleMapping}
			 */
			public middleItem(): Adobe.Indesign.ParaStyleMapping;
			/**
			 * Returns the ParaStyleMapping whose index follows the 
			 * specified ParaStyleMapping in the collection.
			 * @param {ParaStyleMapping} objParam The ParaStyleMapping 
			 * whose index comes before the desired ParaStyleMapping. 
			 * @returns {Adobe.Indesign.ParaStyleMapping}
			 */
			public nextItem(objParam: ParaStyleMapping): Adobe.Indesign.ParaStyleMapping;
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
			 * Returns the ParaStyleMapping with the index previous to the 
			 * specified index.
			 * @param {ParaStyleMapping} objParam The index of the 
			 * ParaStyleMapping that follows the desired ParaStyleMapping.
			 * @returns {Adobe.Indesign.ParaStyleMapping}
			 */
			public previousItem(objParam: ParaStyleMapping): Adobe.Indesign.ParaStyleMapping;
		}
	}
}