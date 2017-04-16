/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Layers extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Layer in the collection.
			 * @returns {Adobe.Incopy.Layer}
			 */
			public anyItem(): Adobe.Incopy.Layer;
			/**
			 * Displays the number of elements in the Layer.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Layer in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Layer in the collection.
			 * @returns {Adobe.Incopy.Layer}
			 */
			public firstItem(): Adobe.Incopy.Layer;
			/**
			 * Returns the Layer with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.Layer}
			 */
			public item(indexParam: any): Adobe.Incopy.Layer;
			/**
			 * Returns the Layer with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.Layer}
			 */
			public itemByID(idParam: number): Adobe.Incopy.Layer;
			/**
			 * Returns the Layer with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.Layer}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Layer;
			/**
			 * Returns the Layers within the specified range.
			 * @param {any} fromParam The Layer, index, or name at the 
			 * beginning of the range. Can accept: Layer, Long Integer or 
			 * String.
			 * @param {any} toParam The Layer, index, or name at the end of 
			 * the range. Can accept: Layer, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Layer in the collection.
			 * @returns {Adobe.Incopy.Layer}
			 */
			public lastItem(): Adobe.Incopy.Layer;
			/**
			 * Returns the middle Layer in the collection.
			 * @returns {Adobe.Incopy.Layer}
			 */
			public middleItem(): Adobe.Incopy.Layer;
			/**
			 * Returns the Layer whose index follows the specified Layer in 
			 * the collection.
			 * @param {Layer} objParam The Layer whose index comes before 
			 * the desired Layer. 
			 * @returns {Adobe.Incopy.Layer}
			 */
			public nextItem(objParam: Layer): Adobe.Incopy.Layer;
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
			 * Returns the Layer with the index previous to the specified 
			 * index.
			 * @param {Layer} objParam The index of the Layer that follows 
			 * the desired Layer.
			 * @returns {Adobe.Incopy.Layer}
			 */
			public previousItem(objParam: Layer): Adobe.Incopy.Layer;
		}
	}
}