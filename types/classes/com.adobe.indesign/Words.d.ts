/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Words extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any Word in the collection. */
			public anyItem(): Adobe.Indesign.Word;
			/** Displays the number of elements in the Word. */
			public count(): number;
			/** Returns every Word in the collection. */
			public everyItem(): any;
			/** Returns the first Word in the collection. */
			public firstItem(): Adobe.Indesign.Word;
			/**
			 * Returns the Word with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.Word;
			/**
			 * Returns the Words within the specified range.
			 * @param {any} fromParam The Word, index, or name at the 
			 * beginning of the range. Can accept: Word, Long Integer or 
			 * String.
			 * @param {any} toParam The Word, index, or name at the end of 
			 * the range. Can accept: Word, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Word in the collection. */
			public lastItem(): Adobe.Indesign.Word;
			/** Returns the middle Word in the collection. */
			public middleItem(): Adobe.Indesign.Word;
			/**
			 * Returns the Word whose index follows the specified Word in 
			 * the collection.
			 * @param {Word} objParam The Word whose index comes before the 
			 * desired Word. 
			 */
			public nextItem(objParam: Word): Adobe.Indesign.Word;
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
			 * Returns the Word with the index previous to the specified 
			 * index.
			 * @param {Word} objParam The index of the Word that follows 
			 * the desired Word.
			 */
			public previousItem(objParam: Word): Adobe.Indesign.Word;
		}
	}
}