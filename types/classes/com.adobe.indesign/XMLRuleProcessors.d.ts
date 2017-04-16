/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class XMLRuleProcessors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Create a new XMLRuleProcessor
			 * @param {any[]} rulePathsParam The XPath condition paths of 
			 * the rules in the rule set.
			 * @param {any[]} prefixMappingTableParam The namespace mapping 
			 * table. Can accept: Array of Arrays of 2 Strings. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new XMLRuleProcessor (Optional)
			 * @returns {Adobe.Indesign.XMLRuleProcessor}
			 */
			public add(rulePathsParam: any[], prefixMappingTableParam: any[], withPropertiesParam: any): Adobe.Indesign.XMLRuleProcessor;
			/**
			 * Returns any XMLRuleProcessor in the collection.
			 * @returns {Adobe.Indesign.XMLRuleProcessor}
			 */
			public anyItem(): Adobe.Indesign.XMLRuleProcessor;
			/**
			 * Displays the number of elements in the XMLRuleProcessor.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every XMLRuleProcessor in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first XMLRuleProcessor in the collection.
			 * @returns {Adobe.Indesign.XMLRuleProcessor}
			 */
			public firstItem(): Adobe.Indesign.XMLRuleProcessor;
			/**
			 * Returns the XMLRuleProcessor with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.XMLRuleProcessor}
			 */
			public item(indexParam: any): Adobe.Indesign.XMLRuleProcessor;
			/**
			 * Returns the XMLRuleProcessor with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.XMLRuleProcessor}
			 */
			public itemByID(idParam: number): Adobe.Indesign.XMLRuleProcessor;
			/**
			 * Returns the XMLRuleProcessor with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.XMLRuleProcessor}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.XMLRuleProcessor;
			/**
			 * Returns the XMLRuleProcessors within the specified range.
			 * @param {any} fromParam The XMLRuleProcessor, index, or name 
			 * at the beginning of the range. Can accept: XMLRuleProcessor, 
			 * Long Integer or String.
			 * @param {any} toParam The XMLRuleProcessor, index, or name at 
			 * the end of the range. Can accept: XMLRuleProcessor, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last XMLRuleProcessor in the collection.
			 * @returns {Adobe.Indesign.XMLRuleProcessor}
			 */
			public lastItem(): Adobe.Indesign.XMLRuleProcessor;
			/**
			 * Returns the middle XMLRuleProcessor in the collection.
			 * @returns {Adobe.Indesign.XMLRuleProcessor}
			 */
			public middleItem(): Adobe.Indesign.XMLRuleProcessor;
			/**
			 * Returns the XMLRuleProcessor whose index follows the 
			 * specified XMLRuleProcessor in the collection.
			 * @param {XMLRuleProcessor} objParam The XMLRuleProcessor 
			 * whose index comes before the desired XMLRuleProcessor. 
			 * @returns {Adobe.Indesign.XMLRuleProcessor}
			 */
			public nextItem(objParam: XMLRuleProcessor): Adobe.Indesign.XMLRuleProcessor;
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
			 * Returns the XMLRuleProcessor with the index previous to the 
			 * specified index.
			 * @param {XMLRuleProcessor} objParam The index of the 
			 * XMLRuleProcessor that follows the desired XMLRuleProcessor.
			 * @returns {Adobe.Indesign.XMLRuleProcessor}
			 */
			public previousItem(objParam: XMLRuleProcessor): Adobe.Indesign.XMLRuleProcessor;
		}
	}
}