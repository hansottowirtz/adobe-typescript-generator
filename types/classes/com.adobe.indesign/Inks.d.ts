/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Inks extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Ink in the collection.
			 * @returns {Adobe.Indesign.Ink}
			 */
			public anyItem(): Adobe.Indesign.Ink;
			/**
			 * Displays the number of elements in the Ink.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Ink in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Ink in the collection.
			 * @returns {Adobe.Indesign.Ink}
			 */
			public firstItem(): Adobe.Indesign.Ink;
			/**
			 * Returns the Ink with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Ink}
			 */
			public item(indexParam: any): Adobe.Indesign.Ink;
			/**
			 * Returns the Ink with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.Ink}
			 */
			public itemByID(idParam: number): Adobe.Indesign.Ink;
			/**
			 * Returns the Ink with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.Ink}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Ink;
			/**
			 * Returns the Inks within the specified range.
			 * @param {any} fromParam The Ink, index, or name at the 
			 * beginning of the range. Can accept: Ink, Long Integer or 
			 * String.
			 * @param {any} toParam The Ink, index, or name at the end of 
			 * the range. Can accept: Ink, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Ink in the collection.
			 * @returns {Adobe.Indesign.Ink}
			 */
			public lastItem(): Adobe.Indesign.Ink;
			/**
			 * Returns the middle Ink in the collection.
			 * @returns {Adobe.Indesign.Ink}
			 */
			public middleItem(): Adobe.Indesign.Ink;
			/**
			 * Returns the Ink whose index follows the specified Ink in the 
			 * collection.
			 * @param {Ink} objParam The Ink whose index comes before the 
			 * desired Ink. 
			 * @returns {Adobe.Indesign.Ink}
			 */
			public nextItem(objParam: Ink): Adobe.Indesign.Ink;
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
			 * Returns the Ink with the index previous to the specified 
			 * index.
			 * @param {Ink} objParam The index of the Ink that follows the 
			 * desired Ink.
			 * @returns {Adobe.Indesign.Ink}
			 */
			public previousItem(objParam: Ink): Adobe.Indesign.Ink;
		}
	}
}