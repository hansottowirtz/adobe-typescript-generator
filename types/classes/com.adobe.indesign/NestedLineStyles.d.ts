/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class NestedLineStyles extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new NestedLineStyle.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new NestedLineStyle (Optional)
			 * @returns {Adobe.Indesign.NestedLineStyle}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.NestedLineStyle;
			/**
			 * Returns any NestedLineStyle in the collection.
			 * @returns {Adobe.Indesign.NestedLineStyle}
			 */
			public anyItem(): Adobe.Indesign.NestedLineStyle;
			/**
			 * Displays the number of elements in the NestedLineStyle.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every NestedLineStyle in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first NestedLineStyle in the collection.
			 * @returns {Adobe.Indesign.NestedLineStyle}
			 */
			public firstItem(): Adobe.Indesign.NestedLineStyle;
			/**
			 * Returns the NestedLineStyle with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.NestedLineStyle}
			 */
			public item(indexParam: any): Adobe.Indesign.NestedLineStyle;
			/**
			 * Returns the NestedLineStyles within the specified range.
			 * @param {any} fromParam The NestedLineStyle, index, or name 
			 * at the beginning of the range. Can accept: NestedLineStyle, 
			 * Long Integer or String.
			 * @param {any} toParam The NestedLineStyle, index, or name at 
			 * the end of the range. Can accept: NestedLineStyle, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last NestedLineStyle in the collection.
			 * @returns {Adobe.Indesign.NestedLineStyle}
			 */
			public lastItem(): Adobe.Indesign.NestedLineStyle;
			/**
			 * Returns the middle NestedLineStyle in the collection.
			 * @returns {Adobe.Indesign.NestedLineStyle}
			 */
			public middleItem(): Adobe.Indesign.NestedLineStyle;
			/**
			 * Returns the NestedLineStyle whose index follows the 
			 * specified NestedLineStyle in the collection.
			 * @param {NestedLineStyle} objParam The NestedLineStyle whose 
			 * index comes before the desired NestedLineStyle. 
			 * @returns {Adobe.Indesign.NestedLineStyle}
			 */
			public nextItem(objParam: NestedLineStyle): Adobe.Indesign.NestedLineStyle;
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
			 * Returns the NestedLineStyle with the index previous to the 
			 * specified index.
			 * @param {NestedLineStyle} objParam The index of the 
			 * NestedLineStyle that follows the desired NestedLineStyle.
			 * @returns {Adobe.Indesign.NestedLineStyle}
			 */
			public previousItem(objParam: NestedLineStyle): Adobe.Indesign.NestedLineStyle;
		}
	}
}