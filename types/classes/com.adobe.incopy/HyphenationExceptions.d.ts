/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class HyphenationExceptions extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any HyphenationException in the collection.
			 * @returns {Adobe.Incopy.HyphenationException}
			 */
			public anyItem(): Adobe.Incopy.HyphenationException;
			/**
			 * Displays the number of elements in the HyphenationException.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every HyphenationException in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first HyphenationException in the collection.
			 * @returns {Adobe.Incopy.HyphenationException}
			 */
			public firstItem(): Adobe.Incopy.HyphenationException;
			/**
			 * Returns the HyphenationException with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.HyphenationException}
			 */
			public item(indexParam: any): Adobe.Incopy.HyphenationException;
			/**
			 * Returns the HyphenationException with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.HyphenationException}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.HyphenationException;
			/**
			 * Returns the HyphenationExceptions within the specified 
			 * range.
			 * @param {any} fromParam The HyphenationException, index, or 
			 * name at the beginning of the range. Can accept: 
			 * HyphenationException, Long Integer or String.
			 * @param {any} toParam The HyphenationException, index, or 
			 * name at the end of the range. Can accept: 
			 * HyphenationException, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last HyphenationException in the collection.
			 * @returns {Adobe.Incopy.HyphenationException}
			 */
			public lastItem(): Adobe.Incopy.HyphenationException;
			/**
			 * Returns the middle HyphenationException in the collection.
			 * @returns {Adobe.Incopy.HyphenationException}
			 */
			public middleItem(): Adobe.Incopy.HyphenationException;
			/**
			 * Returns the HyphenationException whose index follows the 
			 * specified HyphenationException in the collection.
			 * @param {HyphenationException} objParam The 
			 * HyphenationException whose index comes before the desired 
			 * HyphenationException. 
			 * @returns {Adobe.Incopy.HyphenationException}
			 */
			public nextItem(objParam: HyphenationException): Adobe.Incopy.HyphenationException;
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
			 * Returns the HyphenationException with the index previous to 
			 * the specified index.
			 * @param {HyphenationException} objParam The index of the 
			 * HyphenationException that follows the desired 
			 * HyphenationException.
			 * @returns {Adobe.Incopy.HyphenationException}
			 */
			public previousItem(objParam: HyphenationException): Adobe.Incopy.HyphenationException;
		}
	}
}