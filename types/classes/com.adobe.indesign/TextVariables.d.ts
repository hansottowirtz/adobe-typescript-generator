/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
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
			 * @returns {Adobe.Indesign.TextVariable}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.TextVariable;
			/**
			 * Returns any TextVariable in the collection.
			 * @returns {Adobe.Indesign.TextVariable}
			 */
			public anyItem(): Adobe.Indesign.TextVariable;
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
			 * @returns {Adobe.Indesign.TextVariable}
			 */
			public firstItem(): Adobe.Indesign.TextVariable;
			/**
			 * Returns the TextVariable with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.TextVariable}
			 */
			public item(indexParam: any): Adobe.Indesign.TextVariable;
			/**
			 * Returns the TextVariable with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.TextVariable}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.TextVariable;
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
			 * @returns {Adobe.Indesign.TextVariable}
			 */
			public lastItem(): Adobe.Indesign.TextVariable;
			/**
			 * Returns the middle TextVariable in the collection.
			 * @returns {Adobe.Indesign.TextVariable}
			 */
			public middleItem(): Adobe.Indesign.TextVariable;
			/**
			 * Returns the TextVariable whose index follows the specified 
			 * TextVariable in the collection.
			 * @param {TextVariable} objParam The TextVariable whose index 
			 * comes before the desired TextVariable. 
			 * @returns {Adobe.Indesign.TextVariable}
			 */
			public nextItem(objParam: TextVariable): Adobe.Indesign.TextVariable;
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
			 * @returns {Adobe.Indesign.TextVariable}
			 */
			public previousItem(objParam: TextVariable): Adobe.Indesign.TextVariable;
		}
	}
}