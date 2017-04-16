/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PreflightRuleInstances extends Adobe.Csawlib.CSHostObject {
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
			 * properties of the new PreflightRuleInstance (Optional)
			 * @returns {any}
			 */
			public add(idParam: string, withPropertiesParam: any): any;
			/**
			 * Returns any PreflightRuleInstance in the collection.
			 * @returns {Adobe.Indesign.PreflightRuleInstance}
			 */
			public anyItem(): Adobe.Indesign.PreflightRuleInstance;
			/**
			 * Displays the number of elements in the 
			 * PreflightRuleInstance.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every PreflightRuleInstance in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first PreflightRuleInstance in the collection.
			 * @returns {Adobe.Indesign.PreflightRuleInstance}
			 */
			public firstItem(): Adobe.Indesign.PreflightRuleInstance;
			/**
			 * Returns the PreflightRuleInstance with the specified index 
			 * or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.PreflightRuleInstance}
			 */
			public item(indexParam: any): Adobe.Indesign.PreflightRuleInstance;
			/**
			 * Returns the PreflightRuleInstance with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.PreflightRuleInstance}
			 */
			public itemByID(idParam: number): Adobe.Indesign.PreflightRuleInstance;
			/**
			 * Returns the PreflightRuleInstance with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.PreflightRuleInstance}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.PreflightRuleInstance;
			/**
			 * Returns the PreflightRuleInstances within the specified 
			 * range.
			 * @param {any} fromParam The PreflightRuleInstance, index, or 
			 * name at the beginning of the range. Can accept: 
			 * PreflightRuleInstance, Long Integer or String.
			 * @param {any} toParam The PreflightRuleInstance, index, or 
			 * name at the end of the range. Can accept: 
			 * PreflightRuleInstance, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last PreflightRuleInstance in the collection.
			 * @returns {Adobe.Indesign.PreflightRuleInstance}
			 */
			public lastItem(): Adobe.Indesign.PreflightRuleInstance;
			/**
			 * Returns the middle PreflightRuleInstance in the collection.
			 * @returns {Adobe.Indesign.PreflightRuleInstance}
			 */
			public middleItem(): Adobe.Indesign.PreflightRuleInstance;
			/**
			 * Returns the PreflightRuleInstance whose index follows the 
			 * specified PreflightRuleInstance in the collection.
			 * @param {PreflightRuleInstance} objParam The 
			 * PreflightRuleInstance whose index comes before the desired 
			 * PreflightRuleInstance. 
			 * @returns {Adobe.Indesign.PreflightRuleInstance}
			 */
			public nextItem(objParam: PreflightRuleInstance): Adobe.Indesign.PreflightRuleInstance;
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
			 * Returns the PreflightRuleInstance with the index previous to 
			 * the specified index.
			 * @param {PreflightRuleInstance} objParam The index of the 
			 * PreflightRuleInstance that follows the desired 
			 * PreflightRuleInstance.
			 * @returns {Adobe.Indesign.PreflightRuleInstance}
			 */
			public previousItem(objParam: PreflightRuleInstance): Adobe.Indesign.PreflightRuleInstance;
		}
	}
}