/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Gradients extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new Gradient.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Gradient (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.Gradient;
			/** Returns any Gradient in the collection. */
			public anyItem(): Adobe.Incopy.Gradient;
			/** Displays the number of elements in the Gradient. */
			public count(): number;
			/** Returns every Gradient in the collection. */
			public everyItem(): any;
			/** Returns the first Gradient in the collection. */
			public firstItem(): Adobe.Incopy.Gradient;
			/**
			 * Returns the Gradient with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.Gradient;
			/**
			 * Returns the Gradient with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.Gradient;
			/**
			 * Returns the Gradient with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Gradient;
			/**
			 * Returns the Gradients within the specified range.
			 * @param {any} fromParam The Gradient, index, or name at the 
			 * beginning of the range. Can accept: Gradient, Long Integer 
			 * or String.
			 * @param {any} toParam The Gradient, index, or name at the end 
			 * of the range. Can accept: Gradient, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Gradient in the collection. */
			public lastItem(): Adobe.Incopy.Gradient;
			/** Returns the middle Gradient in the collection. */
			public middleItem(): Adobe.Incopy.Gradient;
			/**
			 * Returns the Gradient whose index follows the specified 
			 * Gradient in the collection.
			 * @param {Gradient} objParam The Gradient whose index comes 
			 * before the desired Gradient. 
			 */
			public nextItem(objParam: Gradient): Adobe.Incopy.Gradient;
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
			 * Returns the Gradient with the index previous to the 
			 * specified index.
			 * @param {Gradient} objParam The index of the Gradient that 
			 * follows the desired Gradient.
			 */
			public previousItem(objParam: Gradient): Adobe.Incopy.Gradient;
		}
	}
}