/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class IndexingSortOptions extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any IndexingSortOption in the collection. */
			public anyItem(): Adobe.Incopy.IndexingSortOption;
			/** Displays the number of elements in the IndexingSortOption. */
			public count(): number;
			/** Returns every IndexingSortOption in the collection. */
			public everyItem(): any;
			/** Returns the first IndexingSortOption in the collection. */
			public firstItem(): Adobe.Incopy.IndexingSortOption;
			/**
			 * Returns the IndexingSortOption with the specified index or 
			 * name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.IndexingSortOption;
			/**
			 * Returns the IndexingSortOption with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.IndexingSortOption;
			/**
			 * Returns the IndexingSortOptions within the specified range.
			 * @param {any} fromParam - The IndexingSortOption, index, or 
			 * name at the beginning of the range. Can accept: 
			 * IndexingSortOption, Long Integer or String.
			 * @param {any} toParam - The IndexingSortOption, index, or 
			 * name at the end of the range. Can accept: 
			 * IndexingSortOption, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last IndexingSortOption in the collection. */
			public lastItem(): Adobe.Incopy.IndexingSortOption;
			/** Returns the middle IndexingSortOption in the collection. */
			public middleItem(): Adobe.Incopy.IndexingSortOption;
			/**
			 * Returns the IndexingSortOption whose index follows the 
			 * specified IndexingSortOption in the collection.
			 * @param {IndexingSortOption} objParam - The 
			 * IndexingSortOption whose index comes before the desired 
			 * IndexingSortOption. 
			 */
			public nextItem(objParam: IndexingSortOption): Adobe.Incopy.IndexingSortOption;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx - 
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index - 
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the IndexingSortOption with the index previous to 
			 * the specified index.
			 * @param {IndexingSortOption} objParam - The index of the 
			 * IndexingSortOption that follows the desired 
			 * IndexingSortOption.
			 */
			public previousItem(objParam: IndexingSortOption): Adobe.Incopy.IndexingSortOption;
		}
	}
}