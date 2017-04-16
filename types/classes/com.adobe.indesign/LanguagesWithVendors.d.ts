/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class LanguagesWithVendors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any LanguageWithVendors in the collection.
			 * @returns {Adobe.Indesign.LanguageWithVendors}
			 */
			public anyItem(): Adobe.Indesign.LanguageWithVendors;
			/**
			 * Displays the number of elements in the LanguageWithVendors.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every LanguageWithVendors in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first LanguageWithVendors in the collection.
			 * @returns {Adobe.Indesign.LanguageWithVendors}
			 */
			public firstItem(): Adobe.Indesign.LanguageWithVendors;
			/**
			 * Returns the LanguageWithVendors with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.LanguageWithVendors}
			 */
			public item(indexParam: any): Adobe.Indesign.LanguageWithVendors;
			/**
			 * Returns the LanguageWithVendors with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.LanguageWithVendors}
			 */
			public itemByID(idParam: number): Adobe.Indesign.LanguageWithVendors;
			/**
			 * Returns the LanguageWithVendors with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.LanguageWithVendors}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.LanguageWithVendors;
			/**
			 * Returns the LanguagesWithVendors within the specified range.
			 * @param {any} fromParam The LanguageWithVendors, index, or 
			 * name at the beginning of the range. Can accept: 
			 * LanguageWithVendors, Long Integer or String.
			 * @param {any} toParam The LanguageWithVendors, index, or name 
			 * at the end of the range. Can accept: LanguageWithVendors, 
			 * Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last LanguageWithVendors in the collection.
			 * @returns {Adobe.Indesign.LanguageWithVendors}
			 */
			public lastItem(): Adobe.Indesign.LanguageWithVendors;
			/**
			 * Returns the middle LanguageWithVendors in the collection.
			 * @returns {Adobe.Indesign.LanguageWithVendors}
			 */
			public middleItem(): Adobe.Indesign.LanguageWithVendors;
			/**
			 * Returns the LanguageWithVendors whose index follows the 
			 * specified LanguageWithVendors in the collection.
			 * @param {LanguageWithVendors} objParam The 
			 * LanguageWithVendors whose index comes before the desired 
			 * LanguageWithVendors. 
			 * @returns {Adobe.Indesign.LanguageWithVendors}
			 */
			public nextItem(objParam: LanguageWithVendors): Adobe.Indesign.LanguageWithVendors;
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
			 * Returns the LanguageWithVendors with the index previous to 
			 * the specified index.
			 * @param {LanguageWithVendors} objParam The index of the 
			 * LanguageWithVendors that follows the desired 
			 * LanguageWithVendors.
			 * @returns {Adobe.Indesign.LanguageWithVendors}
			 */
			public previousItem(objParam: LanguageWithVendors): Adobe.Indesign.LanguageWithVendors;
		}
	}
}