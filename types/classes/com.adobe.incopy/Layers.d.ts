/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Layers extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any Layer in the collection. */
			public anyItem(): Adobe.Incopy.Layer;
			/** Displays the number of elements in the Layer. */
			public count(): number;
			/** Returns every Layer in the collection. */
			public everyItem(): any;
			/** Returns the first Layer in the collection. */
			public firstItem(): Adobe.Incopy.Layer;
			/**
			 * Returns the Layer with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.Layer;
			/**
			 * Returns the Layer with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.Layer;
			/**
			 * Returns the Layer with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Layer;
			/**
			 * Returns the Layers within the specified range.
			 * @param {any} fromParam - The Layer, index, or name at the 
			 * beginning of the range. Can accept: Layer, Long Integer or 
			 * String.
			 * @param {any} toParam - The Layer, index, or name at the end 
			 * of the range. Can accept: Layer, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Layer in the collection. */
			public lastItem(): Adobe.Incopy.Layer;
			/** Returns the middle Layer in the collection. */
			public middleItem(): Adobe.Incopy.Layer;
			/**
			 * Returns the Layer whose index follows the specified Layer in 
			 * the collection.
			 * @param {Layer} objParam - The Layer whose index comes before 
			 * the desired Layer. 
			 */
			public nextItem(objParam: Layer): Adobe.Incopy.Layer;
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
			 * Returns the Layer with the index previous to the specified 
			 * index.
			 * @param {Layer} objParam - The index of the Layer that 
			 * follows the desired Layer.
			 */
			public previousItem(objParam: Layer): Adobe.Incopy.Layer;
		}
	}
}