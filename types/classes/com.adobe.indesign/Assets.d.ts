/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Assets extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any Asset in the collection. */
			public anyItem(): Adobe.Indesign.Asset;
			/** Displays the number of elements in the Asset. */
			public count(): number;
			/** Returns every Asset in the collection. */
			public everyItem(): any;
			/** Returns the first Asset in the collection. */
			public firstItem(): Adobe.Indesign.Asset;
			/**
			 * Returns the Asset with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.Asset;
			/**
			 * Returns the Asset with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.Asset;
			/**
			 * Returns the Asset with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Asset;
			/**
			 * Returns the Assets within the specified range.
			 * @param {any} fromParam The Asset, index, or name at the 
			 * beginning of the range. Can accept: Asset, Long Integer or 
			 * String.
			 * @param {any} toParam The Asset, index, or name at the end of 
			 * the range. Can accept: Asset, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Asset in the collection. */
			public lastItem(): Adobe.Indesign.Asset;
			/** Returns the middle Asset in the collection. */
			public middleItem(): Adobe.Indesign.Asset;
			/**
			 * Returns the Asset whose index follows the specified Asset in 
			 * the collection.
			 * @param {Asset} objParam The Asset whose index comes before 
			 * the desired Asset. 
			 */
			public nextItem(objParam: Asset): Adobe.Indesign.Asset;
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
			 * Returns the Asset with the index previous to the specified 
			 * index.
			 * @param {Asset} objParam The index of the Asset that follows 
			 * the desired Asset.
			 */
			public previousItem(objParam: Asset): Adobe.Indesign.Asset;
		}
	}
}