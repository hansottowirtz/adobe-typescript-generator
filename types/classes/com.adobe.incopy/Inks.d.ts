/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Inks extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Ink in the collection.
			 * @returns {Adobe.Incopy.Ink}
			 */
			public anyItem(): Adobe.Incopy.Ink;
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
			 * @returns {Adobe.Incopy.Ink}
			 */
			public firstItem(): Adobe.Incopy.Ink;
			/**
			 * Returns the Ink with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.Ink}
			 */
			public item(indexParam: any): Adobe.Incopy.Ink;
			/**
			 * Returns the Ink with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.Ink}
			 */
			public itemByID(idParam: number): Adobe.Incopy.Ink;
			/**
			 * Returns the Ink with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.Ink}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Ink;
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
			 * @returns {Adobe.Incopy.Ink}
			 */
			public lastItem(): Adobe.Incopy.Ink;
			/**
			 * Returns the middle Ink in the collection.
			 * @returns {Adobe.Incopy.Ink}
			 */
			public middleItem(): Adobe.Incopy.Ink;
			/**
			 * Returns the Ink whose index follows the specified Ink in the 
			 * collection.
			 * @param {Ink} objParam The Ink whose index comes before the 
			 * desired Ink. 
			 * @returns {Adobe.Incopy.Ink}
			 */
			public nextItem(objParam: Ink): Adobe.Incopy.Ink;
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
			 * @returns {Adobe.Incopy.Ink}
			 */
			public previousItem(objParam: Ink): Adobe.Incopy.Ink;
		}
	}
}