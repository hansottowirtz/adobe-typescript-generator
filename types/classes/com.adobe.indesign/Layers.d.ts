/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Layers extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new Layer.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Layer (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.Layer;
			/** Returns any Layer in the collection. */
			public anyItem(): Adobe.Indesign.Layer;
			/** Displays the number of elements in the Layer. */
			public count(): number;
			/** Returns every Layer in the collection. */
			public everyItem(): any;
			/** Returns the first Layer in the collection. */
			public firstItem(): Adobe.Indesign.Layer;
			/**
			 * Returns the Layer with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.Layer;
			/**
			 * Returns the Layer with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.Layer;
			/**
			 * Returns the Layer with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Layer;
			/**
			 * Returns the Layers within the specified range.
			 * @param {any} fromParam The Layer, index, or name at the 
			 * beginning of the range. Can accept: Layer, Long Integer or 
			 * String.
			 * @param {any} toParam The Layer, index, or name at the end of 
			 * the range. Can accept: Layer, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Layer in the collection. */
			public lastItem(): Adobe.Indesign.Layer;
			/** Returns the middle Layer in the collection. */
			public middleItem(): Adobe.Indesign.Layer;
			/**
			 * Returns the Layer whose index follows the specified Layer in 
			 * the collection.
			 * @param {Layer} objParam The Layer whose index comes before 
			 * the desired Layer. 
			 */
			public nextItem(objParam: Layer): Adobe.Indesign.Layer;
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
			 * @param {Layer} objParam The index of the Layer that follows 
			 * the desired Layer.
			 */
			public previousItem(objParam: Layer): Adobe.Indesign.Layer;
		}
	}
}