/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Polygons extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Polygon in the collection.
			 * @returns {Adobe.Incopy.Polygon}
			 */
			public anyItem(): Adobe.Incopy.Polygon;
			/**
			 * Displays the number of elements in the Polygon.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Polygon in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Polygon in the collection.
			 * @returns {Adobe.Incopy.Polygon}
			 */
			public firstItem(): Adobe.Incopy.Polygon;
			/**
			 * Returns the Polygon with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.Polygon}
			 */
			public item(indexParam: any): Adobe.Incopy.Polygon;
			/**
			 * Returns the Polygon with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.Polygon}
			 */
			public itemByID(idParam: number): Adobe.Incopy.Polygon;
			/**
			 * Returns the Polygon with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.Polygon}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Polygon;
			/**
			 * Returns the Polygons within the specified range.
			 * @param {any} fromParam The Polygon, index, or name at the 
			 * beginning of the range. Can accept: Polygon, Long Integer or 
			 * String.
			 * @param {any} toParam The Polygon, index, or name at the end 
			 * of the range. Can accept: Polygon, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Polygon in the collection.
			 * @returns {Adobe.Incopy.Polygon}
			 */
			public lastItem(): Adobe.Incopy.Polygon;
			/**
			 * Returns the middle Polygon in the collection.
			 * @returns {Adobe.Incopy.Polygon}
			 */
			public middleItem(): Adobe.Incopy.Polygon;
			/**
			 * Returns the Polygon whose index follows the specified 
			 * Polygon in the collection.
			 * @param {Polygon} objParam The Polygon whose index comes 
			 * before the desired Polygon. 
			 * @returns {Adobe.Incopy.Polygon}
			 */
			public nextItem(objParam: Polygon): Adobe.Incopy.Polygon;
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
			 * Returns the Polygon with the index previous to the specified 
			 * index.
			 * @param {Polygon} objParam The index of the Polygon that 
			 * follows the desired Polygon.
			 * @returns {Adobe.Incopy.Polygon}
			 */
			public previousItem(objParam: Polygon): Adobe.Incopy.Polygon;
		}
	}
}