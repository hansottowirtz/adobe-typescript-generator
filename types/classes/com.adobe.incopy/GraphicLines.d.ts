/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class GraphicLines extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any GraphicLine in the collection. */
			public anyItem(): Adobe.Incopy.GraphicLine;
			/** Displays the number of elements in the GraphicLine. */
			public count(): number;
			/** Returns every GraphicLine in the collection. */
			public everyItem(): any;
			/** Returns the first GraphicLine in the collection. */
			public firstItem(): Adobe.Incopy.GraphicLine;
			/**
			 * Returns the GraphicLine with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.GraphicLine;
			/**
			 * Returns the GraphicLine with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.GraphicLine;
			/**
			 * Returns the GraphicLine with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.GraphicLine;
			/**
			 * Returns the GraphicLines within the specified range.
			 * @param {any} fromParam - The GraphicLine, index, or name at 
			 * the beginning of the range. Can accept: GraphicLine, Long 
			 * Integer or String.
			 * @param {any} toParam - The GraphicLine, index, or name at 
			 * the end of the range. Can accept: GraphicLine, Long Integer 
			 * or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last GraphicLine in the collection. */
			public lastItem(): Adobe.Incopy.GraphicLine;
			/** Returns the middle GraphicLine in the collection. */
			public middleItem(): Adobe.Incopy.GraphicLine;
			/**
			 * Returns the GraphicLine whose index follows the specified 
			 * GraphicLine in the collection.
			 * @param {GraphicLine} objParam - The GraphicLine whose index 
			 * comes before the desired GraphicLine. 
			 */
			public nextItem(objParam: GraphicLine): Adobe.Incopy.GraphicLine;
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
			 * Returns the GraphicLine with the index previous to the 
			 * specified index.
			 * @param {GraphicLine} objParam - The index of the GraphicLine 
			 * that follows the desired GraphicLine.
			 */
			public previousItem(objParam: GraphicLine): Adobe.Incopy.GraphicLine;
		}
	}
}