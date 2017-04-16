/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class IndexingSortOptions extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any IndexingSortOption in the collection.
			 * @returns {Adobe.Incopy.IndexingSortOption}
			 */
			public anyItem(): Adobe.Incopy.IndexingSortOption;
			/**
			 * Displays the number of elements in the IndexingSortOption.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every IndexingSortOption in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first IndexingSortOption in the collection.
			 * @returns {Adobe.Incopy.IndexingSortOption}
			 */
			public firstItem(): Adobe.Incopy.IndexingSortOption;
			/**
			 * Returns the IndexingSortOption with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.IndexingSortOption}
			 */
			public item(indexParam: any): Adobe.Incopy.IndexingSortOption;
			/**
			 * Returns the IndexingSortOption with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.IndexingSortOption}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.IndexingSortOption;
			/**
			 * Returns the IndexingSortOptions within the specified range.
			 * @param {any} fromParam The IndexingSortOption, index, or 
			 * name at the beginning of the range. Can accept: 
			 * IndexingSortOption, Long Integer or String.
			 * @param {any} toParam The IndexingSortOption, index, or name 
			 * at the end of the range. Can accept: IndexingSortOption, 
			 * Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last IndexingSortOption in the collection.
			 * @returns {Adobe.Incopy.IndexingSortOption}
			 */
			public lastItem(): Adobe.Incopy.IndexingSortOption;
			/**
			 * Returns the middle IndexingSortOption in the collection.
			 * @returns {Adobe.Incopy.IndexingSortOption}
			 */
			public middleItem(): Adobe.Incopy.IndexingSortOption;
			/**
			 * Returns the IndexingSortOption whose index follows the 
			 * specified IndexingSortOption in the collection.
			 * @param {IndexingSortOption} objParam The IndexingSortOption 
			 * whose index comes before the desired IndexingSortOption. 
			 * @returns {Adobe.Incopy.IndexingSortOption}
			 */
			public nextItem(objParam: IndexingSortOption): Adobe.Incopy.IndexingSortOption;
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
			 * Returns the IndexingSortOption with the index previous to 
			 * the specified index.
			 * @param {IndexingSortOption} objParam The index of the 
			 * IndexingSortOption that follows the desired 
			 * IndexingSortOption.
			 * @returns {Adobe.Incopy.IndexingSortOption}
			 */
			public previousItem(objParam: IndexingSortOption): Adobe.Incopy.IndexingSortOption;
		}
	}
}