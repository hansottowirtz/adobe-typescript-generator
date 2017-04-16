/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PercentEditboxes extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new PercentEditbox.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new PercentEditbox (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.PercentEditbox;
			/** Returns any PercentEditbox in the collection. */
			public anyItem(): Adobe.Indesign.PercentEditbox;
			/** Displays the number of elements in the PercentEditbox. */
			public count(): number;
			/** Returns every PercentEditbox in the collection. */
			public everyItem(): any;
			/** Returns the first PercentEditbox in the collection. */
			public firstItem(): Adobe.Indesign.PercentEditbox;
			/**
			 * Returns the PercentEditbox with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.PercentEditbox;
			/**
			 * Returns the PercentEditbox with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.PercentEditbox;
			/**
			 * Returns the PercentEditboxes within the specified range.
			 * @param {any} fromParam The PercentEditbox, index, or name at 
			 * the beginning of the range. Can accept: PercentEditbox, Long 
			 * Integer or String.
			 * @param {any} toParam The PercentEditbox, index, or name at 
			 * the end of the range. Can accept: PercentEditbox, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last PercentEditbox in the collection. */
			public lastItem(): Adobe.Indesign.PercentEditbox;
			/** Returns the middle PercentEditbox in the collection. */
			public middleItem(): Adobe.Indesign.PercentEditbox;
			/**
			 * Returns the PercentEditbox whose index follows the specified 
			 * PercentEditbox in the collection.
			 * @param {PercentEditbox} objParam The PercentEditbox whose 
			 * index comes before the desired PercentEditbox. 
			 */
			public nextItem(objParam: PercentEditbox): Adobe.Indesign.PercentEditbox;
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
			 * Returns the PercentEditbox with the index previous to the 
			 * specified index.
			 * @param {PercentEditbox} objParam The index of the 
			 * PercentEditbox that follows the desired PercentEditbox.
			 */
			public previousItem(objParam: PercentEditbox): Adobe.Indesign.PercentEditbox;
		}
	}
}