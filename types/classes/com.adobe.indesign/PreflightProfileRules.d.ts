/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PreflightProfileRules extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Adds a new preflight rule to the profile.
			 * @param {string} idParam The ID of the rule to be added
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new PreflightProfileRule (Optional)
			 * @returns {any}
			 */
			public add(idParam: string, withPropertiesParam: any): any;
			/**
			 * Returns any PreflightProfileRule in the collection.
			 * @returns {Adobe.Indesign.PreflightProfileRule}
			 */
			public anyItem(): Adobe.Indesign.PreflightProfileRule;
			/**
			 * Displays the number of elements in the PreflightProfileRule.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every PreflightProfileRule in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first PreflightProfileRule in the collection.
			 * @returns {Adobe.Indesign.PreflightProfileRule}
			 */
			public firstItem(): Adobe.Indesign.PreflightProfileRule;
			/**
			 * Returns the PreflightProfileRule with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.PreflightProfileRule}
			 */
			public item(indexParam: any): Adobe.Indesign.PreflightProfileRule;
			/**
			 * Returns the PreflightProfileRule with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.PreflightProfileRule}
			 */
			public itemByID(idParam: number): Adobe.Indesign.PreflightProfileRule;
			/**
			 * Returns the PreflightProfileRule with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.PreflightProfileRule}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.PreflightProfileRule;
			/**
			 * Returns the PreflightProfileRules within the specified 
			 * range.
			 * @param {any} fromParam The PreflightProfileRule, index, or 
			 * name at the beginning of the range. Can accept: 
			 * PreflightProfileRule, Long Integer or String.
			 * @param {any} toParam The PreflightProfileRule, index, or 
			 * name at the end of the range. Can accept: 
			 * PreflightProfileRule, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last PreflightProfileRule in the collection.
			 * @returns {Adobe.Indesign.PreflightProfileRule}
			 */
			public lastItem(): Adobe.Indesign.PreflightProfileRule;
			/**
			 * Returns the middle PreflightProfileRule in the collection.
			 * @returns {Adobe.Indesign.PreflightProfileRule}
			 */
			public middleItem(): Adobe.Indesign.PreflightProfileRule;
			/**
			 * Returns the PreflightProfileRule whose index follows the 
			 * specified PreflightProfileRule in the collection.
			 * @param {PreflightProfileRule} objParam The 
			 * PreflightProfileRule whose index comes before the desired 
			 * PreflightProfileRule. 
			 * @returns {Adobe.Indesign.PreflightProfileRule}
			 */
			public nextItem(objParam: PreflightProfileRule): Adobe.Indesign.PreflightProfileRule;
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
			 * Returns the PreflightProfileRule with the index previous to 
			 * the specified index.
			 * @param {PreflightProfileRule} objParam The index of the 
			 * PreflightProfileRule that follows the desired 
			 * PreflightProfileRule.
			 * @returns {Adobe.Indesign.PreflightProfileRule}
			 */
			public previousItem(objParam: PreflightProfileRule): Adobe.Indesign.PreflightProfileRule;
		}
	}
}