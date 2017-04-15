/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TOCStyles extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new TOCStyle.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new TOCStyle (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.TOCStyle;
			/** Returns any TOCStyle in the collection. */
			public anyItem(): Adobe.Indesign.TOCStyle;
			/** Displays the number of elements in the TOCStyle. */
			public count(): number;
			/** Returns every TOCStyle in the collection. */
			public everyItem(): any;
			/** Returns the first TOCStyle in the collection. */
			public firstItem(): Adobe.Indesign.TOCStyle;
			/**
			 * Returns the TOCStyle with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.TOCStyle;
			/**
			 * Returns the TOCStyle with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.TOCStyle;
			/**
			 * Returns the TOCStyle with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.TOCStyle;
			/**
			 * Returns the TOCStyles within the specified range.
			 * @param {any} fromParam - The TOCStyle, index, or name at the 
			 * beginning of the range. Can accept: TOCStyle, Long Integer 
			 * or String.
			 * @param {any} toParam - The TOCStyle, index, or name at the 
			 * end of the range. Can accept: TOCStyle, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last TOCStyle in the collection. */
			public lastItem(): Adobe.Indesign.TOCStyle;
			/** Returns the middle TOCStyle in the collection. */
			public middleItem(): Adobe.Indesign.TOCStyle;
			/**
			 * Returns the TOCStyle whose index follows the specified 
			 * TOCStyle in the collection.
			 * @param {TOCStyle} objParam - The TOCStyle whose index comes 
			 * before the desired TOCStyle. 
			 */
			public nextItem(objParam: TOCStyle): Adobe.Indesign.TOCStyle;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx - 
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index - 
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the TOCStyle with the index previous to the 
			 * specified index.
			 * @param {TOCStyle} objParam - The index of the TOCStyle that 
			 * follows the desired TOCStyle.
			 */
			public previousItem(objParam: TOCStyle): Adobe.Indesign.TOCStyle;
		}
	}
}