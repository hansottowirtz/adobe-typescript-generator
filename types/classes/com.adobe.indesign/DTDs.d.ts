/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DTDs extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any DTD in the collection. */
			public anyItem(): Adobe.Indesign.DTD;
			/** Displays the number of elements in the DTD. */
			public count(): number;
			/** Returns every DTD in the collection. */
			public everyItem(): any;
			/** Returns the first DTD in the collection. */
			public firstItem(): Adobe.Indesign.DTD;
			/**
			 * Returns the DTD with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.DTD;
			/**
			 * Returns the DTD with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.DTD;
			/**
			 * Returns the DTDs within the specified range.
			 * @param {any} fromParam - The DTD, index, or name at the 
			 * beginning of the range. Can accept: DTD, Long Integer or 
			 * String.
			 * @param {any} toParam - The DTD, index, or name at the end of 
			 * the range. Can accept: DTD, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last DTD in the collection. */
			public lastItem(): Adobe.Indesign.DTD;
			/** Returns the middle DTD in the collection. */
			public middleItem(): Adobe.Indesign.DTD;
			/**
			 * Returns the DTD whose index follows the specified DTD in the 
			 * collection.
			 * @param {DTD} objParam - The DTD whose index comes before the 
			 * desired DTD. 
			 */
			public nextItem(objParam: DTD): Adobe.Indesign.DTD;
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
			 * Returns the DTD with the index previous to the specified 
			 * index.
			 * @param {DTD} objParam - The index of the DTD that follows 
			 * the desired DTD.
			 */
			public previousItem(objParam: DTD): Adobe.Indesign.DTD;
		}
	}
}