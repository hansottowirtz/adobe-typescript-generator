/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class CharStyleMappings extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Adds a style mapping.
			 * @param {string} sourceStyleNameParam The source style name.
			 * @param {string} destinationStyleNameParam The destination 
			 * style name.
			 * @param {MapType} mappingRuleTypeParam The mapping type
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new CharStyleMapping (Optional)
			 */
			public add(sourceStyleNameParam: string, destinationStyleNameParam: string, mappingRuleTypeParam: MapType, withPropertiesParam: any): Adobe.Indesign.CharStyleMapping;
			/** Returns any CharStyleMapping in the collection. */
			public anyItem(): Adobe.Indesign.CharStyleMapping;
			/** Displays the number of elements in the CharStyleMapping. */
			public count(): number;
			/** Returns every CharStyleMapping in the collection. */
			public everyItem(): any;
			/** Returns the first CharStyleMapping in the collection. */
			public firstItem(): Adobe.Indesign.CharStyleMapping;
			/**
			 * Returns the CharStyleMapping with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.CharStyleMapping;
			/**
			 * Returns the CharStyleMappings within the specified range.
			 * @param {any} fromParam The CharStyleMapping, index, or name 
			 * at the beginning of the range. Can accept: CharStyleMapping, 
			 * Long Integer or String.
			 * @param {any} toParam The CharStyleMapping, index, or name at 
			 * the end of the range. Can accept: CharStyleMapping, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last CharStyleMapping in the collection. */
			public lastItem(): Adobe.Indesign.CharStyleMapping;
			/** Returns the middle CharStyleMapping in the collection. */
			public middleItem(): Adobe.Indesign.CharStyleMapping;
			/**
			 * Returns the CharStyleMapping whose index follows the 
			 * specified CharStyleMapping in the collection.
			 * @param {CharStyleMapping} objParam The CharStyleMapping 
			 * whose index comes before the desired CharStyleMapping. 
			 */
			public nextItem(objParam: CharStyleMapping): Adobe.Indesign.CharStyleMapping;
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
			 * Returns the CharStyleMapping with the index previous to the 
			 * specified index.
			 * @param {CharStyleMapping} objParam The index of the 
			 * CharStyleMapping that follows the desired CharStyleMapping.
			 */
			public previousItem(objParam: CharStyleMapping): Adobe.Indesign.CharStyleMapping;
		}
	}
}