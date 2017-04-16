/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PreflightRules extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any PreflightRule in the collection. */
			public anyItem(): Adobe.Indesign.PreflightRule;
			/** Displays the number of elements in the PreflightRule. */
			public count(): number;
			/** Returns every PreflightRule in the collection. */
			public everyItem(): any;
			/** Returns the first PreflightRule in the collection. */
			public firstItem(): Adobe.Indesign.PreflightRule;
			/**
			 * Returns the PreflightRule with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.PreflightRule;
			/**
			 * Returns the PreflightRule with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.PreflightRule;
			/**
			 * Returns the PreflightRule with the specified name.
			 * @param {string} nameParam The name.
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
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last PreflightRule in the collection. */
			public lastItem(): Adobe.Indesign.PreflightRule;
			/** Returns the middle PreflightRule in the collection. */
			public middleItem(): Adobe.Indesign.PreflightRule;
			/**
			 * Returns the PreflightRule whose index follows the specified 
			 * PreflightRule in the collection.
			 * @param {PreflightRule} objParam The PreflightRule whose 
			 * index comes before the desired PreflightRule. 
			 */
			public nextItem(objParam: PreflightRule): Adobe.Indesign.PreflightRule;
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
			 * Returns the PreflightRule with the index previous to the 
			 * specified index.
			 * @param {PreflightRule} objParam The index of the 
			 * PreflightRule that follows the desired PreflightRule.
			 */
			public previousItem(objParam: PreflightRule): Adobe.Indesign.PreflightRule;
		}
	}
}