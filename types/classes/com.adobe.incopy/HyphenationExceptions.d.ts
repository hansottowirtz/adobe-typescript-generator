/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class HyphenationExceptions extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any HyphenationException in the collection. */
			public anyItem(): Adobe.Incopy.HyphenationException;
			/**
			 * Displays the number of elements in the HyphenationException.
			 */
			public count(): number;
			/** Returns every HyphenationException in the collection. */
			public everyItem(): any;
			/** Returns the first HyphenationException in the collection. */
			public firstItem(): Adobe.Incopy.HyphenationException;
			/**
			 * Returns the HyphenationException with the specified index or 
			 * name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.HyphenationException;
			/**
			 * Returns the HyphenationException with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.HyphenationException;
			/**
			 * Returns the HyphenationExceptions within the specified 
			 * range.
			 * @param {any} fromParam - The HyphenationException, index, or 
			 * name at the beginning of the range. Can accept: 
			 * HyphenationException, Long Integer or String.
			 * @param {any} toParam - The HyphenationException, index, or 
			 * name at the end of the range. Can accept: 
			 * HyphenationException, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last HyphenationException in the collection. */
			public lastItem(): Adobe.Incopy.HyphenationException;
			/** Returns the middle HyphenationException in the collection. */
			public middleItem(): Adobe.Incopy.HyphenationException;
			/**
			 * Returns the HyphenationException whose index follows the 
			 * specified HyphenationException in the collection.
			 * @param {HyphenationException} objParam - The 
			 * HyphenationException whose index comes before the desired 
			 * HyphenationException. 
			 */
			public nextItem(objParam: HyphenationException): Adobe.Incopy.HyphenationException;
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
			 * Returns the HyphenationException with the index previous to 
			 * the specified index.
			 * @param {HyphenationException} objParam - The index of the 
			 * HyphenationException that follows the desired 
			 * HyphenationException.
			 */
			public previousItem(objParam: HyphenationException): Adobe.Incopy.HyphenationException;
		}
	}
}