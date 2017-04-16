/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class WMFs extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any WMF in the collection.
			 * @returns {Adobe.Incopy.WMF}
			 */
			public anyItem(): Adobe.Incopy.WMF;
			/**
			 * Displays the number of elements in the WMF.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every WMF in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first WMF in the collection.
			 * @returns {Adobe.Incopy.WMF}
			 */
			public firstItem(): Adobe.Incopy.WMF;
			/**
			 * Returns the WMF with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.WMF}
			 */
			public item(indexParam: any): Adobe.Incopy.WMF;
			/**
			 * Returns the WMF with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.WMF}
			 */
			public itemByID(idParam: number): Adobe.Incopy.WMF;
			/**
			 * Returns the WMF with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.WMF}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.WMF;
			/**
			 * Returns the WMFs within the specified range.
			 * @param {any} fromParam The WMF, index, or name at the 
			 * beginning of the range. Can accept: WMF, Long Integer or 
			 * String.
			 * @param {any} toParam The WMF, index, or name at the end of 
			 * the range. Can accept: WMF, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last WMF in the collection.
			 * @returns {Adobe.Incopy.WMF}
			 */
			public lastItem(): Adobe.Incopy.WMF;
			/**
			 * Returns the middle WMF in the collection.
			 * @returns {Adobe.Incopy.WMF}
			 */
			public middleItem(): Adobe.Incopy.WMF;
			/**
			 * Returns the WMF whose index follows the specified WMF in the 
			 * collection.
			 * @param {WMF} objParam The WMF whose index comes before the 
			 * desired WMF. 
			 * @returns {Adobe.Incopy.WMF}
			 */
			public nextItem(objParam: WMF): Adobe.Incopy.WMF;
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
			 * Returns the WMF with the index previous to the specified 
			 * index.
			 * @param {WMF} objParam The index of the WMF that follows the 
			 * desired WMF.
			 * @returns {Adobe.Incopy.WMF}
			 */
			public previousItem(objParam: WMF): Adobe.Incopy.WMF;
		}
	}
}