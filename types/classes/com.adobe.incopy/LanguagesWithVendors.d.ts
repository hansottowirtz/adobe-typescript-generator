/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class LanguagesWithVendors extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any LanguageWithVendors in the collection. */
			public anyItem(): Adobe.Incopy.LanguageWithVendors;
			/** Displays the number of elements in the LanguageWithVendors. */
			public count(): number;
			/** Returns every LanguageWithVendors in the collection. */
			public everyItem(): any;
			/** Returns the first LanguageWithVendors in the collection. */
			public firstItem(): Adobe.Incopy.LanguageWithVendors;
			/**
			 * Returns the LanguageWithVendors with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.LanguageWithVendors;
			/**
			 * Returns the LanguageWithVendors with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.LanguageWithVendors;
			/**
			 * Returns the LanguageWithVendors with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.LanguageWithVendors;
			/**
			 * Returns the LanguagesWithVendors within the specified range.
			 * @param {any} fromParam The LanguageWithVendors, index, or 
			 * name at the beginning of the range. Can accept: 
			 * LanguageWithVendors, Long Integer or String.
			 * @param {any} toParam The LanguageWithVendors, index, or name 
			 * at the end of the range. Can accept: LanguageWithVendors, 
			 * Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last LanguageWithVendors in the collection. */
			public lastItem(): Adobe.Incopy.LanguageWithVendors;
			/** Returns the middle LanguageWithVendors in the collection. */
			public middleItem(): Adobe.Incopy.LanguageWithVendors;
			/**
			 * Returns the LanguageWithVendors whose index follows the 
			 * specified LanguageWithVendors in the collection.
			 * @param {LanguageWithVendors} objParam The 
			 * LanguageWithVendors whose index comes before the desired 
			 * LanguageWithVendors. 
			 */
			public nextItem(objParam: LanguageWithVendors): Adobe.Incopy.LanguageWithVendors;
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
			 * Returns the LanguageWithVendors with the index previous to 
			 * the specified index.
			 * @param {LanguageWithVendors} objParam The index of the 
			 * LanguageWithVendors that follows the desired 
			 * LanguageWithVendors.
			 */
			public previousItem(objParam: LanguageWithVendors): Adobe.Incopy.LanguageWithVendors;
		}
	}
}