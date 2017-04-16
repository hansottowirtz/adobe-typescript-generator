/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TextVariables extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new TextVariable.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new TextVariable (Optional)
			 * @returns {Adobe.Incopy.TextVariable}
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.TextVariable;
			/**
			 * Returns any TextVariable in the collection.
			 * @returns {Adobe.Incopy.TextVariable}
			 */
			public anyItem(): Adobe.Incopy.TextVariable;
			/**
			 * Displays the number of elements in the TextVariable.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every TextVariable in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first TextVariable in the collection.
			 * @returns {Adobe.Incopy.TextVariable}
			 */
			public firstItem(): Adobe.Incopy.TextVariable;
			/**
			 * Returns the TextVariable with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.TextVariable}
			 */
			public item(indexParam: any): Adobe.Incopy.TextVariable;
			/**
			 * Returns the TextVariable with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Incopy.TextVariable}
			 */
			public itemByName(nameParam: string): Adobe.Incopy.TextVariable;
			/**
			 * Returns the TextVariables within the specified range.
			 * @param {any} fromParam The TextVariable, index, or name at 
			 * the beginning of the range. Can accept: TextVariable, Long 
			 * Integer or String.
			 * @param {any} toParam The TextVariable, index, or name at the 
			 * end of the range. Can accept: TextVariable, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last TextVariable in the collection.
			 * @returns {Adobe.Incopy.TextVariable}
			 */
			public lastItem(): Adobe.Incopy.TextVariable;
			/**
			 * Returns the middle TextVariable in the collection.
			 * @returns {Adobe.Incopy.TextVariable}
			 */
			public middleItem(): Adobe.Incopy.TextVariable;
			/**
			 * Returns the TextVariable whose index follows the specified 
			 * TextVariable in the collection.
			 * @param {TextVariable} objParam The TextVariable whose index 
			 * comes before the desired TextVariable. 
			 * @returns {Adobe.Incopy.TextVariable}
			 */
			public nextItem(objParam: TextVariable): Adobe.Incopy.TextVariable;
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
			 * Returns the TextVariable with the index previous to the 
			 * specified index.
			 * @param {TextVariable} objParam The index of the TextVariable 
			 * that follows the desired TextVariable.
			 * @returns {Adobe.Incopy.TextVariable}
			 */
			public previousItem(objParam: TextVariable): Adobe.Incopy.TextVariable;
		}
	}
}