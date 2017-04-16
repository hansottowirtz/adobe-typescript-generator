/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class NestedStyles extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new NestedStyle.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new NestedStyle (Optional)
			 * @returns {Adobe.Indesign.NestedStyle}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.NestedStyle;
			/**
			 * Returns any NestedStyle in the collection.
			 * @returns {Adobe.Indesign.NestedStyle}
			 */
			public anyItem(): Adobe.Indesign.NestedStyle;
			/**
			 * Displays the number of elements in the NestedStyle.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every NestedStyle in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first NestedStyle in the collection.
			 * @returns {Adobe.Indesign.NestedStyle}
			 */
			public firstItem(): Adobe.Indesign.NestedStyle;
			/**
			 * Returns the NestedStyle with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.NestedStyle}
			 */
			public item(indexParam: any): Adobe.Indesign.NestedStyle;
			/**
			 * Returns the NestedStyles within the specified range.
			 * @param {any} fromParam The NestedStyle, index, or name at 
			 * the beginning of the range. Can accept: NestedStyle, Long 
			 * Integer or String.
			 * @param {any} toParam The NestedStyle, index, or name at the 
			 * end of the range. Can accept: NestedStyle, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last NestedStyle in the collection.
			 * @returns {Adobe.Indesign.NestedStyle}
			 */
			public lastItem(): Adobe.Indesign.NestedStyle;
			/**
			 * Returns the middle NestedStyle in the collection.
			 * @returns {Adobe.Indesign.NestedStyle}
			 */
			public middleItem(): Adobe.Indesign.NestedStyle;
			/**
			 * Returns the NestedStyle whose index follows the specified 
			 * NestedStyle in the collection.
			 * @param {NestedStyle} objParam The NestedStyle whose index 
			 * comes before the desired NestedStyle. 
			 * @returns {Adobe.Indesign.NestedStyle}
			 */
			public nextItem(objParam: NestedStyle): Adobe.Indesign.NestedStyle;
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
			 * Returns the NestedStyle with the index previous to the 
			 * specified index.
			 * @param {NestedStyle} objParam The index of the NestedStyle 
			 * that follows the desired NestedStyle.
			 * @returns {Adobe.Indesign.NestedStyle}
			 */
			public previousItem(objParam: NestedStyle): Adobe.Indesign.NestedStyle;
		}
	}
}