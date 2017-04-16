/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class GraphicLines extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any GraphicLine in the collection.
			 * @returns {Adobe.Incopy.GraphicLine}
			 */
			public anyItem(): Adobe.Incopy.GraphicLine;
			/**
			 * Displays the number of elements in the GraphicLine.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every GraphicLine in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first GraphicLine in the collection.
			 * @returns {Adobe.Incopy.GraphicLine}
			 */
			public firstItem(): Adobe.Incopy.GraphicLine;
			/**
			 * Returns the GraphicLine with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.GraphicLine}
			 */
			public item(indexParam: any): Adobe.Incopy.GraphicLine;
			/**
			 * Returns the GraphicLine with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.GraphicLine}
			 */
			public itemByID(idParam: number): Adobe.Incopy.GraphicLine;
			/**
			 * Returns the GraphicLine with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.GraphicLine}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.GraphicLine;
			/**
			 * Returns the GraphicLines within the specified range.
			 * @param {any} fromParam The GraphicLine, index, or name at 
			 * the beginning of the range. Can accept: GraphicLine, Long 
			 * Integer or String.
			 * @param {any} toParam The GraphicLine, index, or name at the 
			 * end of the range. Can accept: GraphicLine, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last GraphicLine in the collection.
			 * @returns {Adobe.Incopy.GraphicLine}
			 */
			public lastItem(): Adobe.Incopy.GraphicLine;
			/**
			 * Returns the middle GraphicLine in the collection.
			 * @returns {Adobe.Incopy.GraphicLine}
			 */
			public middleItem(): Adobe.Incopy.GraphicLine;
			/**
			 * Returns the GraphicLine whose index follows the specified 
			 * GraphicLine in the collection.
			 * @param {GraphicLine} objParam The GraphicLine whose index 
			 * comes before the desired GraphicLine. 
			 * @returns {Adobe.Incopy.GraphicLine}
			 */
			public nextItem(objParam: GraphicLine): Adobe.Incopy.GraphicLine;
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
			 * Returns the GraphicLine with the index previous to the 
			 * specified index.
			 * @param {GraphicLine} objParam The index of the GraphicLine 
			 * that follows the desired GraphicLine.
			 * @returns {Adobe.Incopy.GraphicLine}
			 */
			public previousItem(objParam: GraphicLine): Adobe.Incopy.GraphicLine;
		}
	}
}