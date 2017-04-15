/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TextStyleRanges extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any TextStyleRange in the collection. */
			public anyItem(): Adobe.Incopy.TextStyleRange;
			/** Displays the number of elements in the TextStyleRange. */
			public count(): number;
			/** Returns every TextStyleRange in the collection. */
			public everyItem(): any;
			/** Returns the first TextStyleRange in the collection. */
			public firstItem(): Adobe.Incopy.TextStyleRange;
			/**
			 * Returns the TextStyleRange with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.TextStyleRange;
			/**
			 * Returns the TextStyleRanges within the specified range.
			 * @param {any} fromParam - The TextStyleRange, index, or name 
			 * at the beginning of the range. Can accept: TextStyleRange, 
			 * Long Integer or String.
			 * @param {any} toParam - The TextStyleRange, index, or name at 
			 * the end of the range. Can accept: TextStyleRange, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last TextStyleRange in the collection. */
			public lastItem(): Adobe.Incopy.TextStyleRange;
			/** Returns the middle TextStyleRange in the collection. */
			public middleItem(): Adobe.Incopy.TextStyleRange;
			/**
			 * Returns the TextStyleRange whose index follows the specified 
			 * TextStyleRange in the collection.
			 * @param {TextStyleRange} objParam - The TextStyleRange whose 
			 * index comes before the desired TextStyleRange. 
			 */
			public nextItem(objParam: TextStyleRange): Adobe.Incopy.TextStyleRange;
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
			 * Returns the TextStyleRange with the index previous to the 
			 * specified index.
			 * @param {TextStyleRange} objParam - The index of the 
			 * TextStyleRange that follows the desired TextStyleRange.
			 */
			public previousItem(objParam: TextStyleRange): Adobe.Incopy.TextStyleRange;
		}
	}
}