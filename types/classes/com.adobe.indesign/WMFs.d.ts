/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class WMFs extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any WMF in the collection.
			 * @returns {Adobe.Indesign.WMF}
			 */
			public anyItem(): Adobe.Indesign.WMF;
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
			 * @returns {Adobe.Indesign.WMF}
			 */
			public firstItem(): Adobe.Indesign.WMF;
			/**
			 * Returns the WMF with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.WMF}
			 */
			public item(indexParam: any): Adobe.Indesign.WMF;
			/**
			 * Returns the WMF with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.WMF}
			 */
			public itemByID(idParam: number): Adobe.Indesign.WMF;
			/**
			 * Returns the WMF with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.WMF}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.WMF;
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
			 * @returns {Adobe.Indesign.WMF}
			 */
			public lastItem(): Adobe.Indesign.WMF;
			/**
			 * Returns the middle WMF in the collection.
			 * @returns {Adobe.Indesign.WMF}
			 */
			public middleItem(): Adobe.Indesign.WMF;
			/**
			 * Returns the WMF whose index follows the specified WMF in the 
			 * collection.
			 * @param {WMF} objParam The WMF whose index comes before the 
			 * desired WMF. 
			 * @returns {Adobe.Indesign.WMF}
			 */
			public nextItem(objParam: WMF): Adobe.Indesign.WMF;
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
			 * @returns {Adobe.Indesign.WMF}
			 */
			public previousItem(objParam: WMF): Adobe.Indesign.WMF;
		}
	}
}