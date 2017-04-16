/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class SubmitFormBehaviors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any SubmitFormBehavior in the collection.
			 * @returns {Adobe.Incopy.SubmitFormBehavior}
			 */
			public anyItem(): Adobe.Incopy.SubmitFormBehavior;
			/**
			 * Displays the number of elements in the SubmitFormBehavior.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every SubmitFormBehavior in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first SubmitFormBehavior in the collection.
			 * @returns {Adobe.Incopy.SubmitFormBehavior}
			 */
			public firstItem(): Adobe.Incopy.SubmitFormBehavior;
			/**
			 * Returns the SubmitFormBehavior with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.SubmitFormBehavior}
			 */
			public item(indexParam: any): Adobe.Incopy.SubmitFormBehavior;
			/**
			 * Returns the SubmitFormBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.SubmitFormBehavior}
			 */
			public itemByID(idParam: number): Adobe.Incopy.SubmitFormBehavior;
			/**
			 * Returns the SubmitFormBehavior with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.SubmitFormBehavior}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.SubmitFormBehavior;
			/**
			 * Returns the SubmitFormBehaviors within the specified range.
			 * @param {any} fromParam The SubmitFormBehavior, index, or 
			 * name at the beginning of the range. Can accept: 
			 * SubmitFormBehavior, Long Integer or String.
			 * @param {any} toParam The SubmitFormBehavior, index, or name 
			 * at the end of the range. Can accept: SubmitFormBehavior, 
			 * Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last SubmitFormBehavior in the collection.
			 * @returns {Adobe.Incopy.SubmitFormBehavior}
			 */
			public lastItem(): Adobe.Incopy.SubmitFormBehavior;
			/**
			 * Returns the middle SubmitFormBehavior in the collection.
			 * @returns {Adobe.Incopy.SubmitFormBehavior}
			 */
			public middleItem(): Adobe.Incopy.SubmitFormBehavior;
			/**
			 * Returns the SubmitFormBehavior whose index follows the 
			 * specified SubmitFormBehavior in the collection.
			 * @param {SubmitFormBehavior} objParam The SubmitFormBehavior 
			 * whose index comes before the desired SubmitFormBehavior. 
			 * @returns {Adobe.Incopy.SubmitFormBehavior}
			 */
			public nextItem(objParam: SubmitFormBehavior): Adobe.Incopy.SubmitFormBehavior;
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
			 * Returns the SubmitFormBehavior with the index previous to 
			 * the specified index.
			 * @param {SubmitFormBehavior} objParam The index of the 
			 * SubmitFormBehavior that follows the desired 
			 * SubmitFormBehavior.
			 * @returns {Adobe.Incopy.SubmitFormBehavior}
			 */
			public previousItem(objParam: SubmitFormBehavior): Adobe.Incopy.SubmitFormBehavior;
		}
	}
}