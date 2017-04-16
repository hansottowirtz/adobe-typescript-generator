/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Links extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any Link in the collection. */
			public anyItem(): Adobe.Indesign.Link;
			/** Displays the number of elements in the Link. */
			public count(): number;
			/** Returns every Link in the collection. */
			public everyItem(): any;
			/** Returns the first Link in the collection. */
			public firstItem(): Adobe.Indesign.Link;
			/**
			 * Returns the Link with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.Link;
			/**
			 * Returns the Link with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.Link;
			/**
			 * Returns the Link with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Link;
			/**
			 * Returns the Links within the specified range.
			 * @param {any} fromParam The Link, index, or name at the 
			 * beginning of the range. Can accept: Link, Long Integer or 
			 * String.
			 * @param {any} toParam The Link, index, or name at the end of 
			 * the range. Can accept: Link, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Link in the collection. */
			public lastItem(): Adobe.Indesign.Link;
			/** Returns the middle Link in the collection. */
			public middleItem(): Adobe.Indesign.Link;
			/**
			 * Returns the Link whose index follows the specified Link in 
			 * the collection.
			 * @param {Link} objParam The Link whose index comes before the 
			 * desired Link. 
			 */
			public nextItem(objParam: Link): Adobe.Indesign.Link;
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
			 * Returns the Link with the index previous to the specified 
			 * index.
			 * @param {Link} objParam The index of the Link that follows 
			 * the desired Link.
			 */
			public previousItem(objParam: Link): Adobe.Indesign.Link;
		}
	}
}