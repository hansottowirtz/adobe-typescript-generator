/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Links extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Link in the collection.
			 * @returns {Adobe.Incopy.Link}
			 */
			public anyItem(): Adobe.Incopy.Link;
			/**
			 * Displays the number of elements in the Link.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Link in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Link in the collection.
			 * @returns {Adobe.Incopy.Link}
			 */
			public firstItem(): Adobe.Incopy.Link;
			/**
			 * Returns the Link with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.Link}
			 */
			public item(indexParam: any): Adobe.Incopy.Link;
			/**
			 * Returns the Link with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.Link}
			 */
			public itemByID(idParam: number): Adobe.Incopy.Link;
			/**
			 * Returns the Link with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.Link}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Link;
			/**
			 * Returns the Links within the specified range.
			 * @param {any} fromParam The Link, index, or name at the 
			 * beginning of the range. Can accept: Link, Long Integer or 
			 * String.
			 * @param {any} toParam The Link, index, or name at the end of 
			 * the range. Can accept: Link, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Link in the collection.
			 * @returns {Adobe.Incopy.Link}
			 */
			public lastItem(): Adobe.Incopy.Link;
			/**
			 * Returns the middle Link in the collection.
			 * @returns {Adobe.Incopy.Link}
			 */
			public middleItem(): Adobe.Incopy.Link;
			/**
			 * Returns the Link whose index follows the specified Link in 
			 * the collection.
			 * @param {Link} objParam The Link whose index comes before the 
			 * desired Link. 
			 * @returns {Adobe.Incopy.Link}
			 */
			public nextItem(objParam: Link): Adobe.Incopy.Link;
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
			 * Returns the Link with the index previous to the specified 
			 * index.
			 * @param {Link} objParam The index of the Link that follows 
			 * the desired Link.
			 * @returns {Adobe.Incopy.Link}
			 */
			public previousItem(objParam: Link): Adobe.Incopy.Link;
		}
	}
}