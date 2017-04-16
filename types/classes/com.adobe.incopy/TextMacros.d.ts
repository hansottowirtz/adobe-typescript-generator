/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TextMacros extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new text macro.
			 * @param {string} nameParam The name of the macro.
			 * @param {string} expansionParam The expansion text to 
			 * substitute for the text macro.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new TextMacro (Optional)
			 */
			public add(nameParam: string, expansionParam: string, withPropertiesParam: any): Adobe.Incopy.TextMacro;
			/** Returns any TextMacro in the collection. */
			public anyItem(): Adobe.Incopy.TextMacro;
			/** Displays the number of elements in the TextMacro. */
			public count(): number;
			/** Returns every TextMacro in the collection. */
			public everyItem(): any;
			/** Returns the first TextMacro in the collection. */
			public firstItem(): Adobe.Incopy.TextMacro;
			/**
			 * Returns the TextMacro with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.TextMacro;
			/**
			 * Returns the TextMacro with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.TextMacro;
			/**
			 * Returns the TextMacros within the specified range.
			 * @param {any} fromParam The TextMacro, index, or name at the 
			 * beginning of the range. Can accept: TextMacro, Long Integer 
			 * or String.
			 * @param {any} toParam The TextMacro, index, or name at the 
			 * end of the range. Can accept: TextMacro, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last TextMacro in the collection. */
			public lastItem(): Adobe.Incopy.TextMacro;
			/** Returns the middle TextMacro in the collection. */
			public middleItem(): Adobe.Incopy.TextMacro;
			/**
			 * Returns the TextMacro whose index follows the specified 
			 * TextMacro in the collection.
			 * @param {TextMacro} objParam The TextMacro whose index comes 
			 * before the desired TextMacro. 
			 */
			public nextItem(objParam: TextMacro): Adobe.Incopy.TextMacro;
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
			 * Returns the TextMacro with the index previous to the 
			 * specified index.
			 * @param {TextMacro} objParam The index of the TextMacro that 
			 * follows the desired TextMacro.
			 */
			public previousItem(objParam: TextMacro): Adobe.Incopy.TextMacro;
		}
	}
}