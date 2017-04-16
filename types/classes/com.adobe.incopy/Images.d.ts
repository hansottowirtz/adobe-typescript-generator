/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Images extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Image in the collection.
			 * @returns {Adobe.Incopy.Image}
			 */
			public anyItem(): Adobe.Incopy.Image;
			/**
			 * Displays the number of elements in the Image.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Image in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Image in the collection.
			 * @returns {Adobe.Incopy.Image}
			 */
			public firstItem(): Adobe.Incopy.Image;
			/**
			 * Returns the Image with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.Image}
			 */
			public item(indexParam: any): Adobe.Incopy.Image;
			/**
			 * Returns the Image with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.Image}
			 */
			public itemByID(idParam: number): Adobe.Incopy.Image;
			/**
			 * Returns the Image with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.Image}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Image;
			/**
			 * Returns the Images within the specified range.
			 * @param {any} fromParam The Image, index, or name at the 
			 * beginning of the range. Can accept: Image, Long Integer or 
			 * String.
			 * @param {any} toParam The Image, index, or name at the end of 
			 * the range. Can accept: Image, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Image in the collection.
			 * @returns {Adobe.Incopy.Image}
			 */
			public lastItem(): Adobe.Incopy.Image;
			/**
			 * Returns the middle Image in the collection.
			 * @returns {Adobe.Incopy.Image}
			 */
			public middleItem(): Adobe.Incopy.Image;
			/**
			 * Returns the Image whose index follows the specified Image in 
			 * the collection.
			 * @param {Image} objParam The Image whose index comes before 
			 * the desired Image. 
			 * @returns {Adobe.Incopy.Image}
			 */
			public nextItem(objParam: Image): Adobe.Incopy.Image;
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
			 * Returns the Image with the index previous to the specified 
			 * index.
			 * @param {Image} objParam The index of the Image that follows 
			 * the desired Image.
			 * @returns {Adobe.Incopy.Image}
			 */
			public previousItem(objParam: Image): Adobe.Incopy.Image;
		}
	}
}