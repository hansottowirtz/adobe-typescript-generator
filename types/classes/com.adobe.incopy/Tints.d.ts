/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Tints extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new tint swatch.
			 * @param {Color} baseColorParam The color that the tint is 
			 * based upon.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Tint (Optional)
			 * @returns {Adobe.Incopy.Tint}
			 */
			public add(baseColorParam: Color, withPropertiesParam: any): Adobe.Incopy.Tint;
			/**
			 * Returns any Tint in the collection.
			 * @returns {Adobe.Incopy.Tint}
			 */
			public anyItem(): Adobe.Incopy.Tint;
			/**
			 * Displays the number of elements in the Tint.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Tint in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Tint in the collection.
			 * @returns {Adobe.Incopy.Tint}
			 */
			public firstItem(): Adobe.Incopy.Tint;
			/**
			 * Returns the Tint with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.Tint}
			 */
			public item(indexParam: any): Adobe.Incopy.Tint;
			/**
			 * Returns the Tint with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.Tint}
			 */
			public itemByID(idParam: number): Adobe.Incopy.Tint;
			/**
			 * Returns the Tint with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.Tint}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Tint;
			/**
			 * Returns the Tints within the specified range.
			 * @param {any} fromParam The Tint, index, or name at the 
			 * beginning of the range. Can accept: Tint, Long Integer or 
			 * String.
			 * @param {any} toParam The Tint, index, or name at the end of 
			 * the range. Can accept: Tint, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Tint in the collection.
			 * @returns {Adobe.Incopy.Tint}
			 */
			public lastItem(): Adobe.Incopy.Tint;
			/**
			 * Returns the middle Tint in the collection.
			 * @returns {Adobe.Incopy.Tint}
			 */
			public middleItem(): Adobe.Incopy.Tint;
			/**
			 * Returns the Tint whose index follows the specified Tint in 
			 * the collection.
			 * @param {Tint} objParam The Tint whose index comes before the 
			 * desired Tint. 
			 * @returns {Adobe.Incopy.Tint}
			 */
			public nextItem(objParam: Tint): Adobe.Incopy.Tint;
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
			 * Returns the Tint with the index previous to the specified 
			 * index.
			 * @param {Tint} objParam The index of the Tint that follows 
			 * the desired Tint.
			 * @returns {Adobe.Incopy.Tint}
			 */
			public previousItem(objParam: Tint): Adobe.Incopy.Tint;
		}
	}
}