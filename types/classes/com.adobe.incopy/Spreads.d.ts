/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Spreads extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Spread in the collection.
			 * @returns {Adobe.Incopy.Spread}
			 */
			public anyItem(): Adobe.Incopy.Spread;
			/**
			 * Displays the number of elements in the Spread.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Spread in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Spread in the collection.
			 * @returns {Adobe.Incopy.Spread}
			 */
			public firstItem(): Adobe.Incopy.Spread;
			/**
			 * Returns the Spread with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.Spread}
			 */
			public item(indexParam: any): Adobe.Incopy.Spread;
			/**
			 * Returns the Spread with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.Spread}
			 */
			public itemByID(idParam: number): Adobe.Incopy.Spread;
			/**
			 * Returns the Spread with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.Spread}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Spread;
			/**
			 * Returns the Spreads within the specified range.
			 * @param {any} fromParam The Spread, index, or name at the 
			 * beginning of the range. Can accept: Spread, Long Integer or 
			 * String.
			 * @param {any} toParam The Spread, index, or name at the end 
			 * of the range. Can accept: Spread, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Spread in the collection.
			 * @returns {Adobe.Incopy.Spread}
			 */
			public lastItem(): Adobe.Incopy.Spread;
			/**
			 * Returns the middle Spread in the collection.
			 * @returns {Adobe.Incopy.Spread}
			 */
			public middleItem(): Adobe.Incopy.Spread;
			/**
			 * Returns the Spread whose index follows the specified Spread 
			 * in the collection.
			 * @param {Spread} objParam The Spread whose index comes before 
			 * the desired Spread. 
			 * @returns {Adobe.Incopy.Spread}
			 */
			public nextItem(objParam: Spread): Adobe.Incopy.Spread;
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
			 * Returns the Spread with the index previous to the specified 
			 * index.
			 * @param {Spread} objParam The index of the Spread that 
			 * follows the desired Spread.
			 * @returns {Adobe.Incopy.Spread}
			 */
			public previousItem(objParam: Spread): Adobe.Incopy.Spread;
		}
	}
}