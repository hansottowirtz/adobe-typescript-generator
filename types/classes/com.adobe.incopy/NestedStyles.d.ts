/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class NestedStyles extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new NestedStyle.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new NestedStyle (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.NestedStyle;
			/** Returns any NestedStyle in the collection. */
			public anyItem(): Adobe.Incopy.NestedStyle;
			/** Displays the number of elements in the NestedStyle. */
			public count(): number;
			/** Returns every NestedStyle in the collection. */
			public everyItem(): any;
			/** Returns the first NestedStyle in the collection. */
			public firstItem(): Adobe.Incopy.NestedStyle;
			/**
			 * Returns the NestedStyle with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.NestedStyle;
			/**
			 * Returns the NestedStyles within the specified range.
			 * @param {any} fromParam The NestedStyle, index, or name at 
			 * the beginning of the range. Can accept: NestedStyle, Long 
			 * Integer or String.
			 * @param {any} toParam The NestedStyle, index, or name at the 
			 * end of the range. Can accept: NestedStyle, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last NestedStyle in the collection. */
			public lastItem(): Adobe.Incopy.NestedStyle;
			/** Returns the middle NestedStyle in the collection. */
			public middleItem(): Adobe.Incopy.NestedStyle;
			/**
			 * Returns the NestedStyle whose index follows the specified 
			 * NestedStyle in the collection.
			 * @param {NestedStyle} objParam The NestedStyle whose index 
			 * comes before the desired NestedStyle. 
			 */
			public nextItem(objParam: NestedStyle): Adobe.Incopy.NestedStyle;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the NestedStyle with the index previous to the 
			 * specified index.
			 * @param {NestedStyle} objParam The index of the NestedStyle 
			 * that follows the desired NestedStyle.
			 */
			public previousItem(objParam: NestedStyle): Adobe.Incopy.NestedStyle;
		}
	}
}