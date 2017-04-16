/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Languages extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Language in the collection.
			 * @returns {Adobe.Indesign.Language}
			 */
			public anyItem(): Adobe.Indesign.Language;
			/**
			 * Displays the number of elements in the Language.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Language in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Language in the collection.
			 * @returns {Adobe.Indesign.Language}
			 */
			public firstItem(): Adobe.Indesign.Language;
			/**
			 * Returns the Language with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Language}
			 */
			public item(indexParam: any): Adobe.Indesign.Language;
			/**
			 * Returns the Language with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.Language}
			 */
			public itemByID(idParam: number): Adobe.Indesign.Language;
			/**
			 * Returns the Language with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.Language}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Language;
			/**
			 * Returns the Languages within the specified range.
			 * @param {any} fromParam The Language, index, or name at the 
			 * beginning of the range. Can accept: Language, Long Integer 
			 * or String.
			 * @param {any} toParam The Language, index, or name at the end 
			 * of the range. Can accept: Language, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Language in the collection.
			 * @returns {Adobe.Indesign.Language}
			 */
			public lastItem(): Adobe.Indesign.Language;
			/**
			 * Returns the middle Language in the collection.
			 * @returns {Adobe.Indesign.Language}
			 */
			public middleItem(): Adobe.Indesign.Language;
			/**
			 * Returns the Language whose index follows the specified 
			 * Language in the collection.
			 * @param {Language} objParam The Language whose index comes 
			 * before the desired Language. 
			 * @returns {Adobe.Indesign.Language}
			 */
			public nextItem(objParam: Language): Adobe.Indesign.Language;
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
			 * Returns the Language with the index previous to the 
			 * specified index.
			 * @param {Language} objParam The index of the Language that 
			 * follows the desired Language.
			 * @returns {Adobe.Indesign.Language}
			 */
			public previousItem(objParam: Language): Adobe.Indesign.Language;
		}
	}
}