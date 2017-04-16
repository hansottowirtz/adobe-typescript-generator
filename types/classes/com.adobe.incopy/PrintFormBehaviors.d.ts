/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class PrintFormBehaviors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any PrintFormBehavior in the collection.
			 * @returns {Adobe.Incopy.PrintFormBehavior}
			 */
			public anyItem(): Adobe.Incopy.PrintFormBehavior;
			/**
			 * Displays the number of elements in the PrintFormBehavior.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every PrintFormBehavior in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first PrintFormBehavior in the collection.
			 * @returns {Adobe.Incopy.PrintFormBehavior}
			 */
			public firstItem(): Adobe.Incopy.PrintFormBehavior;
			/**
			 * Returns the PrintFormBehavior with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.PrintFormBehavior}
			 */
			public item(indexParam: any): Adobe.Incopy.PrintFormBehavior;
			/**
			 * Returns the PrintFormBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.PrintFormBehavior}
			 */
			public itemByID(idParam: number): Adobe.Incopy.PrintFormBehavior;
			/**
			 * Returns the PrintFormBehavior with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.PrintFormBehavior}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.PrintFormBehavior;
			/**
			 * Returns the PrintFormBehaviors within the specified range.
			 * @param {any} fromParam The PrintFormBehavior, index, or name 
			 * at the beginning of the range. Can accept: 
			 * PrintFormBehavior, Long Integer or String.
			 * @param {any} toParam The PrintFormBehavior, index, or name 
			 * at the end of the range. Can accept: PrintFormBehavior, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last PrintFormBehavior in the collection.
			 * @returns {Adobe.Incopy.PrintFormBehavior}
			 */
			public lastItem(): Adobe.Incopy.PrintFormBehavior;
			/**
			 * Returns the middle PrintFormBehavior in the collection.
			 * @returns {Adobe.Incopy.PrintFormBehavior}
			 */
			public middleItem(): Adobe.Incopy.PrintFormBehavior;
			/**
			 * Returns the PrintFormBehavior whose index follows the 
			 * specified PrintFormBehavior in the collection.
			 * @param {PrintFormBehavior} objParam The PrintFormBehavior 
			 * whose index comes before the desired PrintFormBehavior. 
			 * @returns {Adobe.Incopy.PrintFormBehavior}
			 */
			public nextItem(objParam: PrintFormBehavior): Adobe.Incopy.PrintFormBehavior;
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
			 * Returns the PrintFormBehavior with the index previous to the 
			 * specified index.
			 * @param {PrintFormBehavior} objParam The index of the 
			 * PrintFormBehavior that follows the desired 
			 * PrintFormBehavior.
			 * @returns {Adobe.Incopy.PrintFormBehavior}
			 */
			public previousItem(objParam: PrintFormBehavior): Adobe.Incopy.PrintFormBehavior;
		}
	}
}