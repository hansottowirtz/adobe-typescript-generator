/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PreflightRules extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any PreflightRule in the collection.
			 * @returns {Adobe.Indesign.PreflightRule}
			 */
			public anyItem(): Adobe.Indesign.PreflightRule;
			/**
			 * Displays the number of elements in the PreflightRule.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every PreflightRule in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first PreflightRule in the collection.
			 * @returns {Adobe.Indesign.PreflightRule}
			 */
			public firstItem(): Adobe.Indesign.PreflightRule;
			/**
			 * Returns the PreflightRule with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.PreflightRule}
			 */
			public item(indexParam: any): Adobe.Indesign.PreflightRule;
			/**
			 * Returns the PreflightRule with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.PreflightRule}
			 */
			public itemByID(idParam: number): Adobe.Indesign.PreflightRule;
			/**
			 * Returns the PreflightRule with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.PreflightRule}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.PreflightRule;
			/**
			 * Returns the PreflightRules within the specified range.
			 * @param {any} fromParam The PreflightRule, index, or name at 
			 * the beginning of the range. Can accept: PreflightRule, Long 
			 * Integer or String.
			 * @param {any} toParam The PreflightRule, index, or name at 
			 * the end of the range. Can accept: PreflightRule, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last PreflightRule in the collection.
			 * @returns {Adobe.Indesign.PreflightRule}
			 */
			public lastItem(): Adobe.Indesign.PreflightRule;
			/**
			 * Returns the middle PreflightRule in the collection.
			 * @returns {Adobe.Indesign.PreflightRule}
			 */
			public middleItem(): Adobe.Indesign.PreflightRule;
			/**
			 * Returns the PreflightRule whose index follows the specified 
			 * PreflightRule in the collection.
			 * @param {PreflightRule} objParam The PreflightRule whose 
			 * index comes before the desired PreflightRule. 
			 * @returns {Adobe.Indesign.PreflightRule}
			 */
			public nextItem(objParam: PreflightRule): Adobe.Indesign.PreflightRule;
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
			 * Returns the PreflightRule with the index previous to the 
			 * specified index.
			 * @param {PreflightRule} objParam The index of the 
			 * PreflightRule that follows the desired PreflightRule.
			 * @returns {Adobe.Indesign.PreflightRule}
			 */
			public previousItem(objParam: PreflightRule): Adobe.Indesign.PreflightRule;
		}
	}
}