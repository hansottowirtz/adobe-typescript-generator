/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class GraphicLayers extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any GraphicLayer in the collection. */
			public anyItem(): Adobe.Incopy.GraphicLayer;
			/** Displays the number of elements in the GraphicLayer. */
			public count(): number;
			/** Returns every GraphicLayer in the collection. */
			public everyItem(): any;
			/** Returns the first GraphicLayer in the collection. */
			public firstItem(): Adobe.Incopy.GraphicLayer;
			/**
			 * Returns the GraphicLayer with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.GraphicLayer;
			/**
			 * Returns the GraphicLayer with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.GraphicLayer;
			/**
			 * Returns the GraphicLayer with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.GraphicLayer;
			/**
			 * Returns the GraphicLayers within the specified range.
			 * @param {any} fromParam - The GraphicLayer, index, or name at 
			 * the beginning of the range. Can accept: GraphicLayer, Long 
			 * Integer or String.
			 * @param {any} toParam - The GraphicLayer, index, or name at 
			 * the end of the range. Can accept: GraphicLayer, Long Integer 
			 * or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last GraphicLayer in the collection. */
			public lastItem(): Adobe.Incopy.GraphicLayer;
			/** Returns the middle GraphicLayer in the collection. */
			public middleItem(): Adobe.Incopy.GraphicLayer;
			/**
			 * Returns the GraphicLayer whose index follows the specified 
			 * GraphicLayer in the collection.
			 * @param {GraphicLayer} objParam - The GraphicLayer whose 
			 * index comes before the desired GraphicLayer. 
			 */
			public nextItem(objParam: GraphicLayer): Adobe.Incopy.GraphicLayer;
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
			 * Returns the GraphicLayer with the index previous to the 
			 * specified index.
			 * @param {GraphicLayer} objParam - The index of the 
			 * GraphicLayer that follows the desired GraphicLayer.
			 */
			public previousItem(objParam: GraphicLayer): Adobe.Incopy.GraphicLayer;
		}
	}
}