/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Texts extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any Text in the collection. */
			public anyItem(): Adobe.Indesign.Text;
			/** Displays the number of elements in the Text. */
			public count(): number;
			/** Returns every Text in the collection. */
			public everyItem(): any;
			/** Returns the first Text in the collection. */
			public firstItem(): Adobe.Indesign.Text;
			/**
			 * Returns the Text with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.Text;
			/**
			 * Returns the Texts within the specified range.
			 * @param {any} fromParam The Text, index, or name at the 
			 * beginning of the range. Can accept: Text, Long Integer or 
			 * String.
			 * @param {any} toParam The Text, index, or name at the end of 
			 * the range. Can accept: Text, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Text in the collection. */
			public lastItem(): Adobe.Indesign.Text;
			/** Returns the middle Text in the collection. */
			public middleItem(): Adobe.Indesign.Text;
			/**
			 * Returns the Text whose index follows the specified Text in 
			 * the collection.
			 * @param {Text} objParam The Text whose index comes before the 
			 * desired Text. 
			 */
			public nextItem(objParam: Text): Adobe.Indesign.Text;
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
			 * Returns the Text with the index previous to the specified 
			 * index.
			 * @param {Text} objParam The index of the Text that follows 
			 * the desired Text.
			 */
			public previousItem(objParam: Text): Adobe.Indesign.Text;
		}
	}
}