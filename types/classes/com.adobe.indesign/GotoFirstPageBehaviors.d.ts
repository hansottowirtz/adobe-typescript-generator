/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class GotoFirstPageBehaviors extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new GotoFirstPageBehavior.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new GotoFirstPageBehavior (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.GotoFirstPageBehavior;
			/** Returns any GotoFirstPageBehavior in the collection. */
			public anyItem(): Adobe.Indesign.GotoFirstPageBehavior;
			/**
			 * Displays the number of elements in the 
			 * GotoFirstPageBehavior.
			 */
			public count(): number;
			/** Returns every GotoFirstPageBehavior in the collection. */
			public everyItem(): any;
			/** Returns the first GotoFirstPageBehavior in the collection. */
			public firstItem(): Adobe.Indesign.GotoFirstPageBehavior;
			/**
			 * Returns the GotoFirstPageBehavior with the specified index 
			 * or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.GotoFirstPageBehavior;
			/**
			 * Returns the GotoFirstPageBehavior with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.GotoFirstPageBehavior;
			/**
			 * Returns the GotoFirstPageBehavior with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.GotoFirstPageBehavior;
			/**
			 * Returns the GotoFirstPageBehaviors within the specified 
			 * range.
			 * @param {any} fromParam - The GotoFirstPageBehavior, index, 
			 * or name at the beginning of the range. Can accept: 
			 * GotoFirstPageBehavior, Long Integer or String.
			 * @param {any} toParam - The GotoFirstPageBehavior, index, or 
			 * name at the end of the range. Can accept: 
			 * GotoFirstPageBehavior, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last GotoFirstPageBehavior in the collection. */
			public lastItem(): Adobe.Indesign.GotoFirstPageBehavior;
			/** Returns the middle GotoFirstPageBehavior in the collection. */
			public middleItem(): Adobe.Indesign.GotoFirstPageBehavior;
			/**
			 * Returns the GotoFirstPageBehavior whose index follows the 
			 * specified GotoFirstPageBehavior in the collection.
			 * @param {GotoFirstPageBehavior} objParam - The 
			 * GotoFirstPageBehavior whose index comes before the desired 
			 * GotoFirstPageBehavior. 
			 */
			public nextItem(objParam: GotoFirstPageBehavior): Adobe.Indesign.GotoFirstPageBehavior;
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
			 * Returns the GotoFirstPageBehavior with the index previous to 
			 * the specified index.
			 * @param {GotoFirstPageBehavior} objParam - The index of the 
			 * GotoFirstPageBehavior that follows the desired 
			 * GotoFirstPageBehavior.
			 */
			public previousItem(objParam: GotoFirstPageBehavior): Adobe.Indesign.GotoFirstPageBehavior;
		}
	}
}