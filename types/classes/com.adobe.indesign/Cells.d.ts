/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Cells extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Cell in the collection.
			 * @returns {Adobe.Indesign.Cell}
			 */
			public anyItem(): Adobe.Indesign.Cell;
			/**
			 * Displays the number of elements in the Cell.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Cell in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Cell in the collection.
			 * @returns {Adobe.Indesign.Cell}
			 */
			public firstItem(): Adobe.Indesign.Cell;
			/**
			 * Returns the Cell with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Cell}
			 */
			public item(indexParam: any): Adobe.Indesign.Cell;
			/**
			 * Returns the Cell with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.Cell}
			 */
			public itemByID(idParam: number): Adobe.Indesign.Cell;
			/**
			 * Returns the Cell with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.Cell}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Cell;
			/**
			 * Returns the Cells within the specified range.
			 * @param {any} fromParam The Cell, index, or name at the 
			 * beginning of the range. Can accept: Cell, Long Integer or 
			 * String.
			 * @param {any} toParam The Cell, index, or name at the end of 
			 * the range. Can accept: Cell, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Cell in the collection.
			 * @returns {Adobe.Indesign.Cell}
			 */
			public lastItem(): Adobe.Indesign.Cell;
			/**
			 * Returns the middle Cell in the collection.
			 * @returns {Adobe.Indesign.Cell}
			 */
			public middleItem(): Adobe.Indesign.Cell;
			/**
			 * Returns the Cell whose index follows the specified Cell in 
			 * the collection.
			 * @param {Cell} objParam The Cell whose index comes before the 
			 * desired Cell. 
			 * @returns {Adobe.Indesign.Cell}
			 */
			public nextItem(objParam: Cell): Adobe.Indesign.Cell;
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
			 * Returns the Cell with the index previous to the specified 
			 * index.
			 * @param {Cell} objParam The index of the Cell that follows 
			 * the desired Cell.
			 * @returns {Adobe.Indesign.Cell}
			 */
			public previousItem(objParam: Cell): Adobe.Indesign.Cell;
		}
	}
}