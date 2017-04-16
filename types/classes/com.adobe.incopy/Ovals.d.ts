/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Ovals extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any Oval in the collection. */
			public anyItem(): Adobe.Incopy.Oval;
			/** Displays the number of elements in the Oval. */
			public count(): number;
			/** Returns every Oval in the collection. */
			public everyItem(): any;
			/** Returns the first Oval in the collection. */
			public firstItem(): Adobe.Incopy.Oval;
			/**
			 * Returns the Oval with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.Oval;
			/**
			 * Returns the Oval with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.Oval;
			/**
			 * Returns the Oval with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Oval;
			/**
			 * Returns the Ovals within the specified range.
			 * @param {any} fromParam The Oval, index, or name at the 
			 * beginning of the range. Can accept: Oval, Long Integer or 
			 * String.
			 * @param {any} toParam The Oval, index, or name at the end of 
			 * the range. Can accept: Oval, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Oval in the collection. */
			public lastItem(): Adobe.Incopy.Oval;
			/** Returns the middle Oval in the collection. */
			public middleItem(): Adobe.Incopy.Oval;
			/**
			 * Returns the Oval whose index follows the specified Oval in 
			 * the collection.
			 * @param {Oval} objParam The Oval whose index comes before the 
			 * desired Oval. 
			 */
			public nextItem(objParam: Oval): Adobe.Incopy.Oval;
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
			 * Returns the Oval with the index previous to the specified 
			 * index.
			 * @param {Oval} objParam The index of the Oval that follows 
			 * the desired Oval.
			 */
			public previousItem(objParam: Oval): Adobe.Incopy.Oval;
		}
	}
}