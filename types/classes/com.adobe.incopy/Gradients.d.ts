/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Gradients extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new Gradient.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new Gradient (Optional)
			 * @returns {Adobe.Incopy.Gradient}
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.Gradient;
			/**
			 * Returns any Gradient in the collection.
			 * @returns {Adobe.Incopy.Gradient}
			 */
			public anyItem(): Adobe.Incopy.Gradient;
			/**
			 * Displays the number of elements in the Gradient.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Gradient in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Gradient in the collection.
			 * @returns {Adobe.Incopy.Gradient}
			 */
			public firstItem(): Adobe.Incopy.Gradient;
			/**
			 * Returns the Gradient with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.Gradient}
			 */
			public item(indexParam: any): Adobe.Incopy.Gradient;
			/**
			 * Returns the Gradient with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.Gradient}
			 */
			public itemByID(idParam: number): Adobe.Incopy.Gradient;
			/**
			 * Returns the Gradient with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.Gradient}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.Gradient;
			/**
			 * Returns the Gradients within the specified range.
			 * @param {any} fromParam The Gradient, index, or name at the 
			 * beginning of the range. Can accept: Gradient, Long Integer 
			 * or String.
			 * @param {any} toParam The Gradient, index, or name at the end 
			 * of the range. Can accept: Gradient, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Gradient in the collection.
			 * @returns {Adobe.Incopy.Gradient}
			 */
			public lastItem(): Adobe.Incopy.Gradient;
			/**
			 * Returns the middle Gradient in the collection.
			 * @returns {Adobe.Incopy.Gradient}
			 */
			public middleItem(): Adobe.Incopy.Gradient;
			/**
			 * Returns the Gradient whose index follows the specified 
			 * Gradient in the collection.
			 * @param {Gradient} objParam The Gradient whose index comes 
			 * before the desired Gradient. 
			 * @returns {Adobe.Incopy.Gradient}
			 */
			public nextItem(objParam: Gradient): Adobe.Incopy.Gradient;
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
			 * Returns the Gradient with the index previous to the 
			 * specified index.
			 * @param {Gradient} objParam The index of the Gradient that 
			 * follows the desired Gradient.
			 * @returns {Adobe.Incopy.Gradient}
			 */
			public previousItem(objParam: Gradient): Adobe.Incopy.Gradient;
		}
	}
}