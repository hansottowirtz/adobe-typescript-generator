/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PrintFormBehaviors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new PrintFormBehavior.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new PrintFormBehavior (Optional)
			 * @returns {Adobe.Indesign.PrintFormBehavior}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.PrintFormBehavior;
			/**
			 * Returns any PrintFormBehavior in the collection.
			 * @returns {Adobe.Indesign.PrintFormBehavior}
			 */
			public anyItem(): Adobe.Indesign.PrintFormBehavior;
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
			 * @returns {Adobe.Indesign.PrintFormBehavior}
			 */
			public firstItem(): Adobe.Indesign.PrintFormBehavior;
			/**
			 * Returns the PrintFormBehavior with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.PrintFormBehavior}
			 */
			public item(indexParam: any): Adobe.Indesign.PrintFormBehavior;
			/**
			 * Returns the PrintFormBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.PrintFormBehavior}
			 */
			public itemByID(idParam: number): Adobe.Indesign.PrintFormBehavior;
			/**
			 * Returns the PrintFormBehavior with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.PrintFormBehavior}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.PrintFormBehavior;
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
			 * @returns {Adobe.Indesign.PrintFormBehavior}
			 */
			public lastItem(): Adobe.Indesign.PrintFormBehavior;
			/**
			 * Returns the middle PrintFormBehavior in the collection.
			 * @returns {Adobe.Indesign.PrintFormBehavior}
			 */
			public middleItem(): Adobe.Indesign.PrintFormBehavior;
			/**
			 * Returns the PrintFormBehavior whose index follows the 
			 * specified PrintFormBehavior in the collection.
			 * @param {PrintFormBehavior} objParam The PrintFormBehavior 
			 * whose index comes before the desired PrintFormBehavior. 
			 * @returns {Adobe.Indesign.PrintFormBehavior}
			 */
			public nextItem(objParam: PrintFormBehavior): Adobe.Indesign.PrintFormBehavior;
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
			 * @returns {Adobe.Indesign.PrintFormBehavior}
			 */
			public previousItem(objParam: PrintFormBehavior): Adobe.Indesign.PrintFormBehavior;
		}
	}
}