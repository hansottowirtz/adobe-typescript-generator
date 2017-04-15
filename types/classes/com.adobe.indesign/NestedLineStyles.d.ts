/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class NestedLineStyles extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new NestedLineStyle.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new NestedLineStyle (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.NestedLineStyle;
			/** Returns any NestedLineStyle in the collection. */
			public anyItem(): Adobe.Indesign.NestedLineStyle;
			/** Displays the number of elements in the NestedLineStyle. */
			public count(): number;
			/** Returns every NestedLineStyle in the collection. */
			public everyItem(): any;
			/** Returns the first NestedLineStyle in the collection. */
			public firstItem(): Adobe.Indesign.NestedLineStyle;
			/**
			 * Returns the NestedLineStyle with the specified index or 
			 * name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.NestedLineStyle;
			/**
			 * Returns the NestedLineStyles within the specified range.
			 * @param {any} fromParam - The NestedLineStyle, index, or name 
			 * at the beginning of the range. Can accept: NestedLineStyle, 
			 * Long Integer or String.
			 * @param {any} toParam - The NestedLineStyle, index, or name 
			 * at the end of the range. Can accept: NestedLineStyle, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last NestedLineStyle in the collection. */
			public lastItem(): Adobe.Indesign.NestedLineStyle;
			/** Returns the middle NestedLineStyle in the collection. */
			public middleItem(): Adobe.Indesign.NestedLineStyle;
			/**
			 * Returns the NestedLineStyle whose index follows the 
			 * specified NestedLineStyle in the collection.
			 * @param {NestedLineStyle} objParam - The NestedLineStyle 
			 * whose index comes before the desired NestedLineStyle. 
			 */
			public nextItem(objParam: NestedLineStyle): Adobe.Indesign.NestedLineStyle;
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
			 * Returns the NestedLineStyle with the index previous to the 
			 * specified index.
			 * @param {NestedLineStyle} objParam - The index of the 
			 * NestedLineStyle that follows the desired NestedLineStyle.
			 */
			public previousItem(objParam: NestedLineStyle): Adobe.Indesign.NestedLineStyle;
		}
	}
}