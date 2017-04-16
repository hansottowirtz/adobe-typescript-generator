/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ClearFormBehaviors extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any ClearFormBehavior in the collection. */
			public anyItem(): Adobe.Incopy.ClearFormBehavior;
			/** Displays the number of elements in the ClearFormBehavior. */
			public count(): number;
			/** Returns every ClearFormBehavior in the collection. */
			public everyItem(): any;
			/** Returns the first ClearFormBehavior in the collection. */
			public firstItem(): Adobe.Incopy.ClearFormBehavior;
			/**
			 * Returns the ClearFormBehavior with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.ClearFormBehavior;
			/**
			 * Returns the ClearFormBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.ClearFormBehavior;
			/**
			 * Returns the ClearFormBehavior with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.ClearFormBehavior;
			/**
			 * Returns the ClearFormBehaviors within the specified range.
			 * @param {any} fromParam The ClearFormBehavior, index, or name 
			 * at the beginning of the range. Can accept: 
			 * ClearFormBehavior, Long Integer or String.
			 * @param {any} toParam The ClearFormBehavior, index, or name 
			 * at the end of the range. Can accept: ClearFormBehavior, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last ClearFormBehavior in the collection. */
			public lastItem(): Adobe.Incopy.ClearFormBehavior;
			/** Returns the middle ClearFormBehavior in the collection. */
			public middleItem(): Adobe.Incopy.ClearFormBehavior;
			/**
			 * Returns the ClearFormBehavior whose index follows the 
			 * specified ClearFormBehavior in the collection.
			 * @param {ClearFormBehavior} objParam The ClearFormBehavior 
			 * whose index comes before the desired ClearFormBehavior. 
			 */
			public nextItem(objParam: ClearFormBehavior): Adobe.Incopy.ClearFormBehavior;
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
			 * Returns the ClearFormBehavior with the index previous to the 
			 * specified index.
			 * @param {ClearFormBehavior} objParam The index of the 
			 * ClearFormBehavior that follows the desired 
			 * ClearFormBehavior.
			 */
			public previousItem(objParam: ClearFormBehavior): Adobe.Incopy.ClearFormBehavior;
		}
	}
}