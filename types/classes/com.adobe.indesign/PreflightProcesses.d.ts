/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PreflightProcesses extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Adds a new preflight process.
			 * @param {Document} targetObjectParam - The document the 
			 * process should inspect.
			 * @param {PreflightProfile} appliedProfileParam - The 
			 * preflight profile that should be used.
			 * @param {PreflightOption} preflightOptionsParam - The 
			 * preflight options that should be used. (Optional)
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new PreflightProcess (Optional)
			 */
			public add(targetObjectParam: Document, appliedProfileParam: PreflightProfile, preflightOptionsParam: PreflightOption, withPropertiesParam: any): Adobe.Indesign.PreflightProcess;
			/** Returns any PreflightProcess in the collection. */
			public anyItem(): Adobe.Indesign.PreflightProcess;
			/** Displays the number of elements in the PreflightProcess. */
			public count(): number;
			/** Returns every PreflightProcess in the collection. */
			public everyItem(): any;
			/** Returns the first PreflightProcess in the collection. */
			public firstItem(): Adobe.Indesign.PreflightProcess;
			/**
			 * Returns the PreflightProcess with the specified index or 
			 * name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.PreflightProcess;
			/**
			 * Returns the PreflightProcesses within the specified range.
			 * @param {any} fromParam - The PreflightProcess, index, or 
			 * name at the beginning of the range. Can accept: 
			 * PreflightProcess, Long Integer or String.
			 * @param {any} toParam - The PreflightProcess, index, or name 
			 * at the end of the range. Can accept: PreflightProcess, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last PreflightProcess in the collection. */
			public lastItem(): Adobe.Indesign.PreflightProcess;
			/** Returns the middle PreflightProcess in the collection. */
			public middleItem(): Adobe.Indesign.PreflightProcess;
			/**
			 * Returns the PreflightProcess whose index follows the 
			 * specified PreflightProcess in the collection.
			 * @param {PreflightProcess} objParam - The PreflightProcess 
			 * whose index comes before the desired PreflightProcess. 
			 */
			public nextItem(objParam: PreflightProcess): Adobe.Indesign.PreflightProcess;
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
			 * Returns the PreflightProcess with the index previous to the 
			 * specified index.
			 * @param {PreflightProcess} objParam - The index of the 
			 * PreflightProcess that follows the desired PreflightProcess.
			 */
			public previousItem(objParam: PreflightProcess): Adobe.Indesign.PreflightProcess;
		}
	}
}