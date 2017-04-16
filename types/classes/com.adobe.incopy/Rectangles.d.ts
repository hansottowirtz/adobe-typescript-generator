/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Rectangles extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Rectangle in the collection.
			 * @returns {Adobe.Incopy.Rectangle}
			 */
			public anyItem(): Adobe.Incopy.Rectangle;
			/**
			 * Displays the number of elements in the Rectangle.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Rectangle in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Rectangle in the collection.
			 * @returns {Adobe.Incopy.Rectangle}
			 */
			public firstItem(): Adobe.Incopy.Rectangle;
			/**
			 * Returns the Rectangle with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.Rectangle}
			 */
			public item(indexParam: any): Adobe.Incopy.Rectangle;
			/**
			 * Returns the Rectangle with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.Rectangle}
			 */
			public itemByID(idParam: number): Adobe.Incopy.Rectangle;
			/**
			 * Returns the Rectangle with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.Rectangle}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Rectangle;
			/**
			 * Returns the Rectangles within the specified range.
			 * @param {any} fromParam The Rectangle, index, or name at the 
			 * beginning of the range. Can accept: Rectangle, Long Integer 
			 * or String.
			 * @param {any} toParam The Rectangle, index, or name at the 
			 * end of the range. Can accept: Rectangle, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Rectangle in the collection.
			 * @returns {Adobe.Incopy.Rectangle}
			 */
			public lastItem(): Adobe.Incopy.Rectangle;
			/**
			 * Returns the middle Rectangle in the collection.
			 * @returns {Adobe.Incopy.Rectangle}
			 */
			public middleItem(): Adobe.Incopy.Rectangle;
			/**
			 * Returns the Rectangle whose index follows the specified 
			 * Rectangle in the collection.
			 * @param {Rectangle} objParam The Rectangle whose index comes 
			 * before the desired Rectangle. 
			 * @returns {Adobe.Incopy.Rectangle}
			 */
			public nextItem(objParam: Rectangle): Adobe.Incopy.Rectangle;
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
			 * Returns the Rectangle with the index previous to the 
			 * specified index.
			 * @param {Rectangle} objParam The index of the Rectangle that 
			 * follows the desired Rectangle.
			 * @returns {Adobe.Incopy.Rectangle}
			 */
			public previousItem(objParam: Rectangle): Adobe.Incopy.Rectangle;
		}
	}
}