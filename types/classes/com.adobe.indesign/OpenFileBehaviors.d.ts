/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class OpenFileBehaviors extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new OpenFileBehavior.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new OpenFileBehavior (Optional)
			 * @returns {Adobe.Indesign.OpenFileBehavior}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.OpenFileBehavior;
			/**
			 * Returns any OpenFileBehavior in the collection.
			 * @returns {Adobe.Indesign.OpenFileBehavior}
			 */
			public anyItem(): Adobe.Indesign.OpenFileBehavior;
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
			 * @returns {Adobe.Indesign.OpenFileBehavior}
			 */
			public firstItem(): Adobe.Indesign.OpenFileBehavior;
			/**
			 * Returns the OpenFileBehavior with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.OpenFileBehavior}
			 */
			public item(indexParam: any): Adobe.Indesign.OpenFileBehavior;
			/**
			 * Returns the OpenFileBehavior with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.OpenFileBehavior}
			 */
			public itemByID(idParam: number): Adobe.Indesign.OpenFileBehavior;
			/**
			 * Returns the OpenFileBehavior with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.OpenFileBehavior}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.OpenFileBehavior;
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
			 * @returns {Adobe.Indesign.OpenFileBehavior}
			 */
			public lastItem(): Adobe.Indesign.OpenFileBehavior;
			/**
			 * Returns the middle OpenFileBehavior in the collection.
			 * @returns {Adobe.Indesign.OpenFileBehavior}
			 */
			public middleItem(): Adobe.Indesign.OpenFileBehavior;
			/**
			 * Returns the OpenFileBehavior whose index follows the 
			 * specified OpenFileBehavior in the collection.
			 * @param {OpenFileBehavior} objParam The OpenFileBehavior 
			 * whose index comes before the desired OpenFileBehavior. 
			 * @returns {Adobe.Indesign.OpenFileBehavior}
			 */
			public nextItem(objParam: OpenFileBehavior): Adobe.Indesign.OpenFileBehavior;
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
			 * @returns {Adobe.Indesign.OpenFileBehavior}
			 */
			public previousItem(objParam: OpenFileBehavior): Adobe.Indesign.OpenFileBehavior;
		}
	}
}