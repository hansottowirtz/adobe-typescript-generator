/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Languages extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Language in the collection.
			 * @returns {Adobe.Incopy.Language}
			 */
			public anyItem(): Adobe.Incopy.Language;
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
			 * @returns {Adobe.Incopy.Language}
			 */
			public firstItem(): Adobe.Incopy.Language;
			/**
			 * Returns the Language with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.Language}
			 */
			public item(indexParam: any): Adobe.Incopy.Language;
			/**
			 * Returns the Language with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.Language}
			 */
			public itemByID(idParam: number): Adobe.Incopy.Language;
			/**
			 * Returns the Language with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.Language}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Language;
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
			 * @returns {Adobe.Incopy.Language}
			 */
			public lastItem(): Adobe.Incopy.Language;
			/**
			 * Returns the middle Language in the collection.
			 * @returns {Adobe.Incopy.Language}
			 */
			public middleItem(): Adobe.Incopy.Language;
			/**
			 * Returns the Language whose index follows the specified 
			 * Language in the collection.
			 * @param {Language} objParam The Language whose index comes 
			 * before the desired Language. 
			 * @returns {Adobe.Incopy.Language}
			 */
			public nextItem(objParam: Language): Adobe.Incopy.Language;
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
			 * @returns {Adobe.Incopy.Language}
			 */
			public previousItem(objParam: Language): Adobe.Incopy.Language;
		}
	}
}