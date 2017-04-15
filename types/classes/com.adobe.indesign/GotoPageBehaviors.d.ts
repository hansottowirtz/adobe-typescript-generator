/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class GotoPageBehaviors extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new GotoPageBehavior.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new GotoPageBehavior (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.GotoPageBehavior;
			/** Returns any GotoPageBehavior in the collection. */
			public anyItem(): Adobe.Indesign.GotoPageBehavior;
			/** Displays the number of elements in the GotoPageBehavior. */
			public count(): number;
			/** Returns every GotoPageBehavior in the collection. */
			public everyItem(): any;
			/** Returns the first GotoPageBehavior in the collection. */
			public firstItem(): Adobe.Indesign.GotoPageBehavior;
			/**
			 * Returns the GotoPageBehavior with the specified index or 
			 * name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.GotoPageBehavior;
			/**
			 * Returns the GotoPageBehavior with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.GotoPageBehavior;
			/**
			 * Returns the GotoPageBehavior with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.GotoPageBehavior;
			/**
			 * Returns the GotoPageBehaviors within the specified range.
			 * @param {any} fromParam - The GotoPageBehavior, index, or 
			 * name at the beginning of the range. Can accept: 
			 * GotoPageBehavior, Long Integer or String.
			 * @param {any} toParam - The GotoPageBehavior, index, or name 
			 * at the end of the range. Can accept: GotoPageBehavior, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last GotoPageBehavior in the collection. */
			public lastItem(): Adobe.Indesign.GotoPageBehavior;
			/** Returns the middle GotoPageBehavior in the collection. */
			public middleItem(): Adobe.Indesign.GotoPageBehavior;
			/**
			 * Returns the GotoPageBehavior whose index follows the 
			 * specified GotoPageBehavior in the collection.
			 * @param {GotoPageBehavior} objParam - The GotoPageBehavior 
			 * whose index comes before the desired GotoPageBehavior. 
			 */
			public nextItem(objParam: GotoPageBehavior): Adobe.Indesign.GotoPageBehavior;
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
			 * Returns the GotoPageBehavior with the index previous to the 
			 * specified index.
			 * @param {GotoPageBehavior} objParam - The index of the 
			 * GotoPageBehavior that follows the desired GotoPageBehavior.
			 */
			public previousItem(objParam: GotoPageBehavior): Adobe.Indesign.GotoPageBehavior;
		}
	}
}