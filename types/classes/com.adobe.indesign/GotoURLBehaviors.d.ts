/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class GotoURLBehaviors extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new GotoURLBehavior.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new GotoURLBehavior (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.GotoURLBehavior;
			/** Returns any GotoURLBehavior in the collection. */
			public anyItem(): Adobe.Indesign.GotoURLBehavior;
			/** Displays the number of elements in the GotoURLBehavior. */
			public count(): number;
			/** Returns every GotoURLBehavior in the collection. */
			public everyItem(): any;
			/** Returns the first GotoURLBehavior in the collection. */
			public firstItem(): Adobe.Indesign.GotoURLBehavior;
			/**
			 * Returns the GotoURLBehavior with the specified index or 
			 * name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.GotoURLBehavior;
			/**
			 * Returns the GotoURLBehavior with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.GotoURLBehavior;
			/**
			 * Returns the GotoURLBehavior with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.GotoURLBehavior;
			/**
			 * Returns the GotoURLBehaviors within the specified range.
			 * @param {any} fromParam - The GotoURLBehavior, index, or name 
			 * at the beginning of the range. Can accept: GotoURLBehavior, 
			 * Long Integer or String.
			 * @param {any} toParam - The GotoURLBehavior, index, or name 
			 * at the end of the range. Can accept: GotoURLBehavior, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last GotoURLBehavior in the collection. */
			public lastItem(): Adobe.Indesign.GotoURLBehavior;
			/** Returns the middle GotoURLBehavior in the collection. */
			public middleItem(): Adobe.Indesign.GotoURLBehavior;
			/**
			 * Returns the GotoURLBehavior whose index follows the 
			 * specified GotoURLBehavior in the collection.
			 * @param {GotoURLBehavior} objParam - The GotoURLBehavior 
			 * whose index comes before the desired GotoURLBehavior. 
			 */
			public nextItem(objParam: GotoURLBehavior): Adobe.Indesign.GotoURLBehavior;
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
			 * Returns the GotoURLBehavior with the index previous to the 
			 * specified index.
			 * @param {GotoURLBehavior} objParam - The index of the 
			 * GotoURLBehavior that follows the desired GotoURLBehavior.
			 */
			public previousItem(objParam: GotoURLBehavior): Adobe.Indesign.GotoURLBehavior;
		}
	}
}