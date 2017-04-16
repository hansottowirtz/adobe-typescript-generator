/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Paragraphs extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Paragraph in the collection.
			 * @returns {Adobe.Indesign.Paragraph}
			 */
			public anyItem(): Adobe.Indesign.Paragraph;
			/**
			 * Displays the number of elements in the Paragraph.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Paragraph in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Paragraph in the collection.
			 * @returns {Adobe.Indesign.Paragraph}
			 */
			public firstItem(): Adobe.Indesign.Paragraph;
			/**
			 * Returns the Paragraph with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Paragraph}
			 */
			public item(indexParam: any): Adobe.Indesign.Paragraph;
			/**
			 * Returns the Paragraphs within the specified range.
			 * @param {any} fromParam The Paragraph, index, or name at the 
			 * beginning of the range. Can accept: Paragraph, Long Integer 
			 * or String.
			 * @param {any} toParam The Paragraph, index, or name at the 
			 * end of the range. Can accept: Paragraph, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Paragraph in the collection.
			 * @returns {Adobe.Indesign.Paragraph}
			 */
			public lastItem(): Adobe.Indesign.Paragraph;
			/**
			 * Returns the middle Paragraph in the collection.
			 * @returns {Adobe.Indesign.Paragraph}
			 */
			public middleItem(): Adobe.Indesign.Paragraph;
			/**
			 * Returns the Paragraph whose index follows the specified 
			 * Paragraph in the collection.
			 * @param {Paragraph} objParam The Paragraph whose index comes 
			 * before the desired Paragraph. 
			 * @returns {Adobe.Indesign.Paragraph}
			 */
			public nextItem(objParam: Paragraph): Adobe.Indesign.Paragraph;
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
			 * Returns the Paragraph with the index previous to the 
			 * specified index.
			 * @param {Paragraph} objParam The index of the Paragraph that 
			 * follows the desired Paragraph.
			 * @returns {Adobe.Indesign.Paragraph}
			 */
			public previousItem(objParam: Paragraph): Adobe.Indesign.Paragraph;
		}
	}
}