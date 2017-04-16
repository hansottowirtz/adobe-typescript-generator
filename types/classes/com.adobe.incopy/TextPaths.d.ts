/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TextPaths extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new TextPath.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new TextPath (Optional)
			 * @returns {Adobe.Incopy.TextPath}
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.TextPath;
			/**
			 * Returns any TextPath in the collection.
			 * @returns {Adobe.Incopy.TextPath}
			 */
			public anyItem(): Adobe.Incopy.TextPath;
			/**
			 * Displays the number of elements in the TextPath.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every TextPath in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first TextPath in the collection.
			 * @returns {Adobe.Incopy.TextPath}
			 */
			public firstItem(): Adobe.Incopy.TextPath;
			/**
			 * Returns the TextPath with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.TextPath}
			 */
			public item(indexParam: any): Adobe.Incopy.TextPath;
			/**
			 * Returns the TextPath with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.TextPath}
			 */
			public itemByID(idParam: number): Adobe.Incopy.TextPath;
			/**
			 * Returns the TextPath with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.TextPath}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.TextPath;
			/**
			 * Returns the TextPaths within the specified range.
			 * @param {any} fromParam The TextPath, index, or name at the 
			 * beginning of the range. Can accept: TextPath, Long Integer 
			 * or String.
			 * @param {any} toParam The TextPath, index, or name at the end 
			 * of the range. Can accept: TextPath, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last TextPath in the collection.
			 * @returns {Adobe.Incopy.TextPath}
			 */
			public lastItem(): Adobe.Incopy.TextPath;
			/**
			 * Returns the middle TextPath in the collection.
			 * @returns {Adobe.Incopy.TextPath}
			 */
			public middleItem(): Adobe.Incopy.TextPath;
			/**
			 * Returns the TextPath whose index follows the specified 
			 * TextPath in the collection.
			 * @param {TextPath} objParam The TextPath whose index comes 
			 * before the desired TextPath. 
			 * @returns {Adobe.Incopy.TextPath}
			 */
			public nextItem(objParam: TextPath): Adobe.Incopy.TextPath;
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
			 * Returns the TextPath with the index previous to the 
			 * specified index.
			 * @param {TextPath} objParam The index of the TextPath that 
			 * follows the desired TextPath.
			 * @returns {Adobe.Incopy.TextPath}
			 */
			public previousItem(objParam: TextPath): Adobe.Incopy.TextPath;
		}
	}
}