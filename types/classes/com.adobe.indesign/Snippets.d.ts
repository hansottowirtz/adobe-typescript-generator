/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Snippets extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any Snippet in the collection. */
			public anyItem(): Adobe.Indesign.Snippet;
			/** Displays the number of elements in the Snippet. */
			public count(): number;
			/** Returns every Snippet in the collection. */
			public everyItem(): any;
			/** Returns the first Snippet in the collection. */
			public firstItem(): Adobe.Indesign.Snippet;
			/**
			 * Returns the Snippet with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.Snippet;
			/**
			 * Returns the Snippet with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.Snippet;
			/**
			 * Returns the Snippet with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Snippet;
			/**
			 * Returns the Snippets within the specified range.
			 * @param {any} fromParam The Snippet, index, or name at the 
			 * beginning of the range. Can accept: Snippet, Long Integer or 
			 * String.
			 * @param {any} toParam The Snippet, index, or name at the end 
			 * of the range. Can accept: Snippet, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Snippet in the collection. */
			public lastItem(): Adobe.Indesign.Snippet;
			/** Returns the middle Snippet in the collection. */
			public middleItem(): Adobe.Indesign.Snippet;
			/**
			 * Returns the Snippet whose index follows the specified 
			 * Snippet in the collection.
			 * @param {Snippet} objParam The Snippet whose index comes 
			 * before the desired Snippet. 
			 */
			public nextItem(objParam: Snippet): Adobe.Indesign.Snippet;
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
			 * Returns the Snippet with the index previous to the specified 
			 * index.
			 * @param {Snippet} objParam The index of the Snippet that 
			 * follows the desired Snippet.
			 */
			public previousItem(objParam: Snippet): Adobe.Indesign.Snippet;
		}
	}
}