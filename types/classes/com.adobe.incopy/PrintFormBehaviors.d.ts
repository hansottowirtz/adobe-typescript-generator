/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class PrintFormBehaviors extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any PrintFormBehavior in the collection. */
			public anyItem(): Adobe.Incopy.PrintFormBehavior;
			/** Displays the number of elements in the PrintFormBehavior. */
			public count(): number;
			/** Returns every PrintFormBehavior in the collection. */
			public everyItem(): any;
			/** Returns the first PrintFormBehavior in the collection. */
			public firstItem(): Adobe.Incopy.PrintFormBehavior;
			/**
			 * Returns the PrintFormBehavior with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.PrintFormBehavior;
			/**
			 * Returns the PrintFormBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.PrintFormBehavior;
			/**
			 * Returns the PrintFormBehavior with the specified name.
			 * @param {string} nameParam The name.
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
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last PrintFormBehavior in the collection. */
			public lastItem(): Adobe.Incopy.PrintFormBehavior;
			/** Returns the middle PrintFormBehavior in the collection. */
			public middleItem(): Adobe.Incopy.PrintFormBehavior;
			/**
			 * Returns the PrintFormBehavior whose index follows the 
			 * specified PrintFormBehavior in the collection.
			 * @param {PrintFormBehavior} objParam The PrintFormBehavior 
			 * whose index comes before the desired PrintFormBehavior. 
			 */
			public nextItem(objParam: PrintFormBehavior): Adobe.Incopy.PrintFormBehavior;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the PrintFormBehavior with the index previous to the 
			 * specified index.
			 * @param {PrintFormBehavior} objParam The index of the 
			 * PrintFormBehavior that follows the desired 
			 * PrintFormBehavior.
			 */
			public previousItem(objParam: PrintFormBehavior): Adobe.Incopy.PrintFormBehavior;
		}
	}
}