/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Images extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any Image in the collection. */
			public anyItem(): Adobe.Indesign.Image;
			/** Displays the number of elements in the Image. */
			public count(): number;
			/** Returns every Image in the collection. */
			public everyItem(): any;
			/** Returns the first Image in the collection. */
			public firstItem(): Adobe.Indesign.Image;
			/**
			 * Returns the Image with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.Image;
			/**
			 * Returns the Image with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.Image;
			/**
			 * Returns the Image with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Image;
			/**
			 * Returns the Images within the specified range.
			 * @param {any} fromParam - The Image, index, or name at the 
			 * beginning of the range. Can accept: Image, Long Integer or 
			 * String.
			 * @param {any} toParam - The Image, index, or name at the end 
			 * of the range. Can accept: Image, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Image in the collection. */
			public lastItem(): Adobe.Indesign.Image;
			/** Returns the middle Image in the collection. */
			public middleItem(): Adobe.Indesign.Image;
			/**
			 * Returns the Image whose index follows the specified Image in 
			 * the collection.
			 * @param {Image} objParam - The Image whose index comes before 
			 * the desired Image. 
			 */
			public nextItem(objParam: Image): Adobe.Indesign.Image;
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
			 * Returns the Image with the index previous to the specified 
			 * index.
			 * @param {Image} objParam - The index of the Image that 
			 * follows the desired Image.
			 */
			public previousItem(objParam: Image): Adobe.Indesign.Image;
		}
	}
}