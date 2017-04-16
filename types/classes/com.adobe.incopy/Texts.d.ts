/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Texts extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Text in the collection.
			 * @returns {Adobe.Incopy.Text}
			 */
			public anyItem(): Adobe.Incopy.Text;
			/**
			 * Displays the number of elements in the Text.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Text in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Text in the collection.
			 * @returns {Adobe.Incopy.Text}
			 */
			public firstItem(): Adobe.Incopy.Text;
			/**
			 * Returns the Text with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.Text}
			 */
			public item(indexParam: any): Adobe.Incopy.Text;
			/**
			 * Returns the Texts within the specified range.
			 * @param {any} fromParam The Text, index, or name at the 
			 * beginning of the range. Can accept: Text, Long Integer or 
			 * String.
			 * @param {any} toParam The Text, index, or name at the end of 
			 * the range. Can accept: Text, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Text in the collection.
			 * @returns {Adobe.Incopy.Text}
			 */
			public lastItem(): Adobe.Incopy.Text;
			/**
			 * Returns the middle Text in the collection.
			 * @returns {Adobe.Incopy.Text}
			 */
			public middleItem(): Adobe.Incopy.Text;
			/**
			 * Returns the Text whose index follows the specified Text in 
			 * the collection.
			 * @param {Text} objParam The Text whose index comes before the 
			 * desired Text. 
			 * @returns {Adobe.Incopy.Text}
			 */
			public nextItem(objParam: Text): Adobe.Incopy.Text;
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
			 * Returns the Text with the index previous to the specified 
			 * index.
			 * @param {Text} objParam The index of the Text that follows 
			 * the desired Text.
			 * @returns {Adobe.Incopy.Text}
			 */
			public previousItem(objParam: Text): Adobe.Incopy.Text;
		}
	}
}