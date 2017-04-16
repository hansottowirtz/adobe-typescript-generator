/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Panels extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Panel in the collection.
			 * @returns {Adobe.Indesign.Panel}
			 */
			public anyItem(): Adobe.Indesign.Panel;
			/**
			 * Displays the number of elements in the Panel.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Panel in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Panel in the collection.
			 * @returns {Adobe.Indesign.Panel}
			 */
			public firstItem(): Adobe.Indesign.Panel;
			/**
			 * Returns the Panel with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Panel}
			 */
			public item(indexParam: any): Adobe.Indesign.Panel;
			/**
			 * Returns the Panel with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.Panel}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Panel;
			/**
			 * Returns the Panels within the specified range.
			 * @param {any} fromParam The Panel, index, or name at the 
			 * beginning of the range. Can accept: Panel, Long Integer or 
			 * String.
			 * @param {any} toParam The Panel, index, or name at the end of 
			 * the range. Can accept: Panel, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Panel in the collection.
			 * @returns {Adobe.Indesign.Panel}
			 */
			public lastItem(): Adobe.Indesign.Panel;
			/**
			 * Returns the middle Panel in the collection.
			 * @returns {Adobe.Indesign.Panel}
			 */
			public middleItem(): Adobe.Indesign.Panel;
			/**
			 * Returns the Panel whose index follows the specified Panel in 
			 * the collection.
			 * @param {Panel} objParam The Panel whose index comes before 
			 * the desired Panel. 
			 * @returns {Adobe.Indesign.Panel}
			 */
			public nextItem(objParam: Panel): Adobe.Indesign.Panel;
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
			 * Returns the Panel with the index previous to the specified 
			 * index.
			 * @param {Panel} objParam The index of the Panel that follows 
			 * the desired Panel.
			 * @returns {Adobe.Indesign.Panel}
			 */
			public previousItem(objParam: Panel): Adobe.Indesign.Panel;
		}
	}
}