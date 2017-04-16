/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class HiddenTexts extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any HiddenText in the collection. */
			public anyItem(): Adobe.Incopy.HiddenText;
			/** Displays the number of elements in the HiddenText. */
			public count(): number;
			/** Returns every HiddenText in the collection. */
			public everyItem(): any;
			/** Returns the first HiddenText in the collection. */
			public firstItem(): Adobe.Incopy.HiddenText;
			/**
			 * Returns the HiddenText with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.HiddenText;
			/**
			 * Returns the HiddenText with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.HiddenText;
			/**
			 * Returns the HiddenText with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.HiddenText;
			/**
			 * Returns the HiddenTexts within the specified range.
			 * @param {any} fromParam The HiddenText, index, or name at the 
			 * beginning of the range. Can accept: HiddenText, Long Integer 
			 * or String.
			 * @param {any} toParam The HiddenText, index, or name at the 
			 * end of the range. Can accept: HiddenText, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last HiddenText in the collection. */
			public lastItem(): Adobe.Incopy.HiddenText;
			/** Returns the middle HiddenText in the collection. */
			public middleItem(): Adobe.Incopy.HiddenText;
			/**
			 * Returns the HiddenText whose index follows the specified 
			 * HiddenText in the collection.
			 * @param {HiddenText} objParam The HiddenText whose index 
			 * comes before the desired HiddenText. 
			 */
			public nextItem(objParam: HiddenText): Adobe.Incopy.HiddenText;
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
			 * Returns the HiddenText with the index previous to the 
			 * specified index.
			 * @param {HiddenText} objParam The index of the HiddenText 
			 * that follows the desired HiddenText.
			 */
			public previousItem(objParam: HiddenText): Adobe.Incopy.HiddenText;
		}
	}
}