/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Languages extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any Language in the collection. */
			public anyItem(): Adobe.Incopy.Language;
			/** Displays the number of elements in the Language. */
			public count(): number;
			/** Returns every Language in the collection. */
			public everyItem(): any;
			/** Returns the first Language in the collection. */
			public firstItem(): Adobe.Incopy.Language;
			/**
			 * Returns the Language with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.Language;
			/**
			 * Returns the Language with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.Language;
			/**
			 * Returns the Language with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Language;
			/**
			 * Returns the Languages within the specified range.
			 * @param {any} fromParam - The Language, index, or name at the 
			 * beginning of the range. Can accept: Language, Long Integer 
			 * or String.
			 * @param {any} toParam - The Language, index, or name at the 
			 * end of the range. Can accept: Language, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Language in the collection. */
			public lastItem(): Adobe.Incopy.Language;
			/** Returns the middle Language in the collection. */
			public middleItem(): Adobe.Incopy.Language;
			/**
			 * Returns the Language whose index follows the specified 
			 * Language in the collection.
			 * @param {Language} objParam - The Language whose index comes 
			 * before the desired Language. 
			 */
			public nextItem(objParam: Language): Adobe.Incopy.Language;
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
			 * Returns the Language with the index previous to the 
			 * specified index.
			 * @param {Language} objParam - The index of the Language that 
			 * follows the desired Language.
			 */
			public previousItem(objParam: Language): Adobe.Incopy.Language;
		}
	}
}