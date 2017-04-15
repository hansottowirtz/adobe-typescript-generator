/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class XMLRuleProcessors extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Create a new XMLRuleProcessor
			 * @param {any[]} rulePathsParam - The XPath condition paths of 
			 * the rules in the rule set.
			 * @param {any[]} prefixMappingTableParam - The namespace 
			 * mapping table. Can accept: Array of Arrays of 2 Strings. 
			 * (Optional)
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new XMLRuleProcessor (Optional)
			 */
			public add(rulePathsParam: any[], prefixMappingTableParam: any[], withPropertiesParam: any): Adobe.Indesign.XMLRuleProcessor;
			/** Returns any XMLRuleProcessor in the collection. */
			public anyItem(): Adobe.Indesign.XMLRuleProcessor;
			/** Displays the number of elements in the XMLRuleProcessor. */
			public count(): number;
			/** Returns every XMLRuleProcessor in the collection. */
			public everyItem(): any;
			/** Returns the first XMLRuleProcessor in the collection. */
			public firstItem(): Adobe.Indesign.XMLRuleProcessor;
			/**
			 * Returns the XMLRuleProcessor with the specified index or 
			 * name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.XMLRuleProcessor;
			/**
			 * Returns the XMLRuleProcessor with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.XMLRuleProcessor;
			/**
			 * Returns the XMLRuleProcessor with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.XMLRuleProcessor;
			/**
			 * Returns the XMLRuleProcessors within the specified range.
			 * @param {any} fromParam - The XMLRuleProcessor, index, or 
			 * name at the beginning of the range. Can accept: 
			 * XMLRuleProcessor, Long Integer or String.
			 * @param {any} toParam - The XMLRuleProcessor, index, or name 
			 * at the end of the range. Can accept: XMLRuleProcessor, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last XMLRuleProcessor in the collection. */
			public lastItem(): Adobe.Indesign.XMLRuleProcessor;
			/** Returns the middle XMLRuleProcessor in the collection. */
			public middleItem(): Adobe.Indesign.XMLRuleProcessor;
			/**
			 * Returns the XMLRuleProcessor whose index follows the 
			 * specified XMLRuleProcessor in the collection.
			 * @param {XMLRuleProcessor} objParam - The XMLRuleProcessor 
			 * whose index comes before the desired XMLRuleProcessor. 
			 */
			public nextItem(objParam: XMLRuleProcessor): Adobe.Indesign.XMLRuleProcessor;
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
			 * Returns the XMLRuleProcessor with the index previous to the 
			 * specified index.
			 * @param {XMLRuleProcessor} objParam - The index of the 
			 * XMLRuleProcessor that follows the desired XMLRuleProcessor.
			 */
			public previousItem(objParam: XMLRuleProcessor): Adobe.Indesign.XMLRuleProcessor;
		}
	}
}