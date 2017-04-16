/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Assets extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Asset in the collection.
			 * @returns {Adobe.Indesign.Asset}
			 */
			public anyItem(): Adobe.Indesign.Asset;
			/**
			 * Displays the number of elements in the Asset.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Asset in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Asset in the collection.
			 * @returns {Adobe.Indesign.Asset}
			 */
			public firstItem(): Adobe.Indesign.Asset;
			/**
			 * Returns the Asset with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Asset}
			 */
			public item(indexParam: any): Adobe.Indesign.Asset;
			/**
			 * Returns the Asset with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.Asset}
			 */
			public itemByID(idParam: number): Adobe.Indesign.Asset;
			/**
			 * Returns the Asset with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.Asset}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Asset;
			/**
			 * Returns the Assets within the specified range.
			 * @param {any} fromParam The Asset, index, or name at the 
			 * beginning of the range. Can accept: Asset, Long Integer or 
			 * String.
			 * @param {any} toParam The Asset, index, or name at the end of 
			 * the range. Can accept: Asset, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Asset in the collection.
			 * @returns {Adobe.Indesign.Asset}
			 */
			public lastItem(): Adobe.Indesign.Asset;
			/**
			 * Returns the middle Asset in the collection.
			 * @returns {Adobe.Indesign.Asset}
			 */
			public middleItem(): Adobe.Indesign.Asset;
			/**
			 * Returns the Asset whose index follows the specified Asset in 
			 * the collection.
			 * @param {Asset} objParam The Asset whose index comes before 
			 * the desired Asset. 
			 * @returns {Adobe.Indesign.Asset}
			 */
			public nextItem(objParam: Asset): Adobe.Indesign.Asset;
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
			 * Returns the Asset with the index previous to the specified 
			 * index.
			 * @param {Asset} objParam The index of the Asset that follows 
			 * the desired Asset.
			 * @returns {Adobe.Indesign.Asset}
			 */
			public previousItem(objParam: Asset): Adobe.Indesign.Asset;
		}
	}
}