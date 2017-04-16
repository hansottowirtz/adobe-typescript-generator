/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class OpenFileBehaviors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any OpenFileBehavior in the collection.
			 * @returns {Adobe.Incopy.OpenFileBehavior}
			 */
			public anyItem(): Adobe.Incopy.OpenFileBehavior;
			/**
			 * Displays the number of elements in the OpenFileBehavior.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every OpenFileBehavior in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first OpenFileBehavior in the collection.
			 * @returns {Adobe.Incopy.OpenFileBehavior}
			 */
			public firstItem(): Adobe.Incopy.OpenFileBehavior;
			/**
			 * Returns the OpenFileBehavior with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.OpenFileBehavior}
			 */
			public item(indexParam: any): Adobe.Incopy.OpenFileBehavior;
			/**
			 * Returns the OpenFileBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.OpenFileBehavior}
			 */
			public itemByID(idParam: number): Adobe.Incopy.OpenFileBehavior;
			/**
			 * Returns the OpenFileBehavior with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.OpenFileBehavior}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.OpenFileBehavior;
			/**
			 * Returns the OpenFileBehaviors within the specified range.
			 * @param {any} fromParam The OpenFileBehavior, index, or name 
			 * at the beginning of the range. Can accept: OpenFileBehavior, 
			 * Long Integer or String.
			 * @param {any} toParam The OpenFileBehavior, index, or name at 
			 * the end of the range. Can accept: OpenFileBehavior, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last OpenFileBehavior in the collection.
			 * @returns {Adobe.Incopy.OpenFileBehavior}
			 */
			public lastItem(): Adobe.Incopy.OpenFileBehavior;
			/**
			 * Returns the middle OpenFileBehavior in the collection.
			 * @returns {Adobe.Incopy.OpenFileBehavior}
			 */
			public middleItem(): Adobe.Incopy.OpenFileBehavior;
			/**
			 * Returns the OpenFileBehavior whose index follows the 
			 * specified OpenFileBehavior in the collection.
			 * @param {OpenFileBehavior} objParam The OpenFileBehavior 
			 * whose index comes before the desired OpenFileBehavior. 
			 * @returns {Adobe.Incopy.OpenFileBehavior}
			 */
			public nextItem(objParam: OpenFileBehavior): Adobe.Incopy.OpenFileBehavior;
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
			 * Returns the OpenFileBehavior with the index previous to the 
			 * specified index.
			 * @param {OpenFileBehavior} objParam The index of the 
			 * OpenFileBehavior that follows the desired OpenFileBehavior.
			 * @returns {Adobe.Incopy.OpenFileBehavior}
			 */
			public previousItem(objParam: OpenFileBehavior): Adobe.Incopy.OpenFileBehavior;
		}
	}
}