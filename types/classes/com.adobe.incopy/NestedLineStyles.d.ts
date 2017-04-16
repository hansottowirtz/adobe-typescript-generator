/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
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
			 * @returns {Adobe.Incopy.NestedLineStyle}
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.NestedLineStyle;
			/**
			 * Returns any NestedLineStyle in the collection.
			 * @returns {Adobe.Incopy.NestedLineStyle}
			 */
			public anyItem(): Adobe.Incopy.NestedLineStyle;
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
			 * @returns {Adobe.Incopy.NestedLineStyle}
			 */
			public firstItem(): Adobe.Incopy.NestedLineStyle;
			/**
			 * Returns the NestedLineStyle with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.NestedLineStyle}
			 */
			public item(indexParam: any): Adobe.Incopy.NestedLineStyle;
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
			 * @returns {Adobe.Incopy.NestedLineStyle}
			 */
			public lastItem(): Adobe.Incopy.NestedLineStyle;
			/**
			 * Returns the middle NestedLineStyle in the collection.
			 * @returns {Adobe.Incopy.NestedLineStyle}
			 */
			public middleItem(): Adobe.Incopy.NestedLineStyle;
			/**
			 * Returns the NestedLineStyle whose index follows the 
			 * specified NestedLineStyle in the collection.
			 * @param {NestedLineStyle} objParam The NestedLineStyle whose 
			 * index comes before the desired NestedLineStyle. 
			 * @returns {Adobe.Incopy.NestedLineStyle}
			 */
			public nextItem(objParam: NestedLineStyle): Adobe.Incopy.NestedLineStyle;
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
			 * @returns {Adobe.Incopy.NestedLineStyle}
			 */
			public previousItem(objParam: NestedLineStyle): Adobe.Incopy.NestedLineStyle;
		}
	}
}