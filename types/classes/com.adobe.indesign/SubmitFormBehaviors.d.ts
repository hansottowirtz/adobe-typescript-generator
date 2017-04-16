/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SubmitFormBehaviors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new SubmitFormBehavior.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new SubmitFormBehavior (Optional)
			 * @returns {Adobe.Indesign.SubmitFormBehavior}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.SubmitFormBehavior;
			/**
			 * Returns any SubmitFormBehavior in the collection.
			 * @returns {Adobe.Indesign.SubmitFormBehavior}
			 */
			public anyItem(): Adobe.Indesign.SubmitFormBehavior;
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
			 * @returns {Adobe.Indesign.SubmitFormBehavior}
			 */
			public firstItem(): Adobe.Indesign.SubmitFormBehavior;
			/**
			 * Returns the SubmitFormBehavior with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.SubmitFormBehavior}
			 */
			public item(indexParam: any): Adobe.Indesign.SubmitFormBehavior;
			/**
			 * Returns the SubmitFormBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.SubmitFormBehavior}
			 */
			public itemByID(idParam: number): Adobe.Indesign.SubmitFormBehavior;
			/**
			 * Returns the SubmitFormBehavior with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.SubmitFormBehavior}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.SubmitFormBehavior;
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
			 * @returns {Adobe.Indesign.SubmitFormBehavior}
			 */
			public lastItem(): Adobe.Indesign.SubmitFormBehavior;
			/**
			 * Returns the middle SubmitFormBehavior in the collection.
			 * @returns {Adobe.Indesign.SubmitFormBehavior}
			 */
			public middleItem(): Adobe.Indesign.SubmitFormBehavior;
			/**
			 * Returns the SubmitFormBehavior whose index follows the 
			 * specified SubmitFormBehavior in the collection.
			 * @param {SubmitFormBehavior} objParam The SubmitFormBehavior 
			 * whose index comes before the desired SubmitFormBehavior. 
			 * @returns {Adobe.Indesign.SubmitFormBehavior}
			 */
			public nextItem(objParam: SubmitFormBehavior): Adobe.Indesign.SubmitFormBehavior;
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
			 * @returns {Adobe.Indesign.SubmitFormBehavior}
			 */
			public previousItem(objParam: SubmitFormBehavior): Adobe.Indesign.SubmitFormBehavior;
		}
	}
}