/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Fonts extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any Font in the collection. */
			public anyItem(): Adobe.Incopy.Font;
			/** Displays the number of elements in the Font. */
			public count(): number;
			/** Returns every Font in the collection. */
			public everyItem(): any;
			/** Returns the first Font in the collection. */
			public firstItem(): Adobe.Incopy.Font;
			/**
			 * Returns the Font with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.Font;
			/**
			 * Returns the Font with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Font;
			/**
			 * Returns the Fonts within the specified range.
			 * @param {any} fromParam The Font, index, or name at the 
			 * beginning of the range. Can accept: Font, Long Integer or 
			 * String.
			 * @param {any} toParam The Font, index, or name at the end of 
			 * the range. Can accept: Font, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Font in the collection. */
			public lastItem(): Adobe.Incopy.Font;
			/** Returns the middle Font in the collection. */
			public middleItem(): Adobe.Incopy.Font;
			/**
			 * Returns the Font whose index follows the specified Font in 
			 * the collection.
			 * @param {Font} objParam The Font whose index comes before the 
			 * desired Font. 
			 */
			public nextItem(objParam: Font): Adobe.Incopy.Font;
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
			 * Returns the Font with the index previous to the specified 
			 * index.
			 * @param {Font} objParam The index of the Font that follows 
			 * the desired Font.
			 */
			public previousItem(objParam: Font): Adobe.Incopy.Font;
		}
	}
}