/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class NestedGrepStyles extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new NestedGrepStyle.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new NestedGrepStyle (Optional)
			 * @returns {Adobe.Incopy.NestedGrepStyle}
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.NestedGrepStyle;
			/**
			 * Returns any NestedGrepStyle in the collection.
			 * @returns {Adobe.Incopy.NestedGrepStyle}
			 */
			public anyItem(): Adobe.Incopy.NestedGrepStyle;
			/**
			 * Displays the number of elements in the NestedGrepStyle.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every NestedGrepStyle in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first NestedGrepStyle in the collection.
			 * @returns {Adobe.Incopy.NestedGrepStyle}
			 */
			public firstItem(): Adobe.Incopy.NestedGrepStyle;
			/**
			 * Returns the NestedGrepStyle with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.NestedGrepStyle}
			 */
			public item(indexParam: any): Adobe.Incopy.NestedGrepStyle;
			/**
			 * Returns the NestedGrepStyles within the specified range.
			 * @param {any} fromParam The NestedGrepStyle, index, or name 
			 * at the beginning of the range. Can accept: NestedGrepStyle, 
			 * Long Integer or String.
			 * @param {any} toParam The NestedGrepStyle, index, or name at 
			 * the end of the range. Can accept: NestedGrepStyle, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last NestedGrepStyle in the collection.
			 * @returns {Adobe.Incopy.NestedGrepStyle}
			 */
			public lastItem(): Adobe.Incopy.NestedGrepStyle;
			/**
			 * Returns the middle NestedGrepStyle in the collection.
			 * @returns {Adobe.Incopy.NestedGrepStyle}
			 */
			public middleItem(): Adobe.Incopy.NestedGrepStyle;
			/**
			 * Returns the NestedGrepStyle whose index follows the 
			 * specified NestedGrepStyle in the collection.
			 * @param {NestedGrepStyle} objParam The NestedGrepStyle whose 
			 * index comes before the desired NestedGrepStyle. 
			 * @returns {Adobe.Incopy.NestedGrepStyle}
			 */
			public nextItem(objParam: NestedGrepStyle): Adobe.Incopy.NestedGrepStyle;
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
			 * Returns the NestedGrepStyle with the index previous to the 
			 * specified index.
			 * @param {NestedGrepStyle} objParam The index of the 
			 * NestedGrepStyle that follows the desired NestedGrepStyle.
			 * @returns {Adobe.Incopy.NestedGrepStyle}
			 */
			public previousItem(objParam: NestedGrepStyle): Adobe.Incopy.NestedGrepStyle;
		}
	}
}