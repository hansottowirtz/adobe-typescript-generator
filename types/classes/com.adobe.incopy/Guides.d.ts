/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Guides extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Guide in the collection.
			 * @returns {Adobe.Incopy.Guide}
			 */
			public anyItem(): Adobe.Incopy.Guide;
			/**
			 * Displays the number of elements in the Guide.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Guide in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Guide in the collection.
			 * @returns {Adobe.Incopy.Guide}
			 */
			public firstItem(): Adobe.Incopy.Guide;
			/**
			 * Returns the Guide with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.Guide}
			 */
			public item(indexParam: any): Adobe.Incopy.Guide;
			/**
			 * Returns the Guide with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.Guide}
			 */
			public itemByID(idParam: number): Adobe.Incopy.Guide;
			/**
			 * Returns the Guide with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.Guide}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Guide;
			/**
			 * Returns the Guides within the specified range.
			 * @param {any} fromParam The Guide, index, or name at the 
			 * beginning of the range. Can accept: Guide, Long Integer or 
			 * String.
			 * @param {any} toParam The Guide, index, or name at the end of 
			 * the range. Can accept: Guide, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Guide in the collection.
			 * @returns {Adobe.Incopy.Guide}
			 */
			public lastItem(): Adobe.Incopy.Guide;
			/**
			 * Returns the middle Guide in the collection.
			 * @returns {Adobe.Incopy.Guide}
			 */
			public middleItem(): Adobe.Incopy.Guide;
			/**
			 * Returns the Guide whose index follows the specified Guide in 
			 * the collection.
			 * @param {Guide} objParam The Guide whose index comes before 
			 * the desired Guide. 
			 * @returns {Adobe.Incopy.Guide}
			 */
			public nextItem(objParam: Guide): Adobe.Incopy.Guide;
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
			 * Returns the Guide with the index previous to the specified 
			 * index.
			 * @param {Guide} objParam The index of the Guide that follows 
			 * the desired Guide.
			 * @returns {Adobe.Incopy.Guide}
			 */
			public previousItem(objParam: Guide): Adobe.Incopy.Guide;
		}
	}
}