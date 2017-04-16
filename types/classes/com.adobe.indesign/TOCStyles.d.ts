/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TOCStyles extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new TOCStyle.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new TOCStyle (Optional)
			 * @returns {Adobe.Indesign.TOCStyle}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.TOCStyle;
			/**
			 * Returns any TOCStyle in the collection.
			 * @returns {Adobe.Indesign.TOCStyle}
			 */
			public anyItem(): Adobe.Indesign.TOCStyle;
			/**
			 * Displays the number of elements in the TOCStyle.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every TOCStyle in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first TOCStyle in the collection.
			 * @returns {Adobe.Indesign.TOCStyle}
			 */
			public firstItem(): Adobe.Indesign.TOCStyle;
			/**
			 * Returns the TOCStyle with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.TOCStyle}
			 */
			public item(indexParam: any): Adobe.Indesign.TOCStyle;
			/**
			 * Returns the TOCStyle with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.TOCStyle}
			 */
			public itemByID(idParam: number): Adobe.Indesign.TOCStyle;
			/**
			 * Returns the TOCStyle with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.TOCStyle}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.TOCStyle;
			/**
			 * Returns the TOCStyles within the specified range.
			 * @param {any} fromParam The TOCStyle, index, or name at the 
			 * beginning of the range. Can accept: TOCStyle, Long Integer 
			 * or String.
			 * @param {any} toParam The TOCStyle, index, or name at the end 
			 * of the range. Can accept: TOCStyle, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last TOCStyle in the collection.
			 * @returns {Adobe.Indesign.TOCStyle}
			 */
			public lastItem(): Adobe.Indesign.TOCStyle;
			/**
			 * Returns the middle TOCStyle in the collection.
			 * @returns {Adobe.Indesign.TOCStyle}
			 */
			public middleItem(): Adobe.Indesign.TOCStyle;
			/**
			 * Returns the TOCStyle whose index follows the specified 
			 * TOCStyle in the collection.
			 * @param {TOCStyle} objParam The TOCStyle whose index comes 
			 * before the desired TOCStyle. 
			 * @returns {Adobe.Indesign.TOCStyle}
			 */
			public nextItem(objParam: TOCStyle): Adobe.Indesign.TOCStyle;
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
			 * Returns the TOCStyle with the index previous to the 
			 * specified index.
			 * @param {TOCStyle} objParam The index of the TOCStyle that 
			 * follows the desired TOCStyle.
			 * @returns {Adobe.Indesign.TOCStyle}
			 */
			public previousItem(objParam: TOCStyle): Adobe.Indesign.TOCStyle;
		}
	}
}