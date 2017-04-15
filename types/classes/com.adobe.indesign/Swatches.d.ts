/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Swatches extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any Swatch in the collection. */
			public anyItem(): Adobe.Indesign.Swatch;
			/** Displays the number of elements in the Swatch. */
			public count(): number;
			/** Returns every Swatch in the collection. */
			public everyItem(): any;
			/** Returns the first Swatch in the collection. */
			public firstItem(): Adobe.Indesign.Swatch;
			/**
			 * Returns the Swatch with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.Swatch;
			/**
			 * Returns the Swatch with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.Swatch;
			/**
			 * Returns the Swatch with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Swatch;
			/**
			 * Returns the Swatches within the specified range.
			 * @param {any} fromParam - The Swatch, index, or name at the 
			 * beginning of the range. Can accept: Swatch, Long Integer or 
			 * String.
			 * @param {any} toParam - The Swatch, index, or name at the end 
			 * of the range. Can accept: Swatch, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Swatch in the collection. */
			public lastItem(): Adobe.Indesign.Swatch;
			/** Returns the middle Swatch in the collection. */
			public middleItem(): Adobe.Indesign.Swatch;
			/**
			 * Returns the Swatch whose index follows the specified Swatch 
			 * in the collection.
			 * @param {Swatch} objParam - The Swatch whose index comes 
			 * before the desired Swatch. 
			 */
			public nextItem(objParam: Swatch): Adobe.Indesign.Swatch;
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
			 * Returns the Swatch with the index previous to the specified 
			 * index.
			 * @param {Swatch} objParam - The index of the Swatch that 
			 * follows the desired Swatch.
			 */
			public previousItem(objParam: Swatch): Adobe.Indesign.Swatch;
		}
	}
}