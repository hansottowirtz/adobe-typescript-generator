/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class NestedGrepStyles extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new NestedGrepStyle.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new NestedGrepStyle (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.NestedGrepStyle;
			/** Returns any NestedGrepStyle in the collection. */
			public anyItem(): Adobe.Indesign.NestedGrepStyle;
			/** Displays the number of elements in the NestedGrepStyle. */
			public count(): number;
			/** Returns every NestedGrepStyle in the collection. */
			public everyItem(): any;
			/** Returns the first NestedGrepStyle in the collection. */
			public firstItem(): Adobe.Indesign.NestedGrepStyle;
			/**
			 * Returns the NestedGrepStyle with the specified index or 
			 * name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.NestedGrepStyle;
			/**
			 * Returns the NestedGrepStyles within the specified range.
			 * @param {any} fromParam - The NestedGrepStyle, index, or name 
			 * at the beginning of the range. Can accept: NestedGrepStyle, 
			 * Long Integer or String.
			 * @param {any} toParam - The NestedGrepStyle, index, or name 
			 * at the end of the range. Can accept: NestedGrepStyle, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last NestedGrepStyle in the collection. */
			public lastItem(): Adobe.Indesign.NestedGrepStyle;
			/** Returns the middle NestedGrepStyle in the collection. */
			public middleItem(): Adobe.Indesign.NestedGrepStyle;
			/**
			 * Returns the NestedGrepStyle whose index follows the 
			 * specified NestedGrepStyle in the collection.
			 * @param {NestedGrepStyle} objParam - The NestedGrepStyle 
			 * whose index comes before the desired NestedGrepStyle. 
			 */
			public nextItem(objParam: NestedGrepStyle): Adobe.Indesign.NestedGrepStyle;
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
			 * Returns the NestedGrepStyle with the index previous to the 
			 * specified index.
			 * @param {NestedGrepStyle} objParam - The index of the 
			 * NestedGrepStyle that follows the desired NestedGrepStyle.
			 */
			public previousItem(objParam: NestedGrepStyle): Adobe.Indesign.NestedGrepStyle;
		}
	}
}