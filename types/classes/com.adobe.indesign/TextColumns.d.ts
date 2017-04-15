/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TextColumns extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any TextColumn in the collection. */
			public anyItem(): Adobe.Indesign.TextColumn;
			/** Displays the number of elements in the TextColumn. */
			public count(): number;
			/** Returns every TextColumn in the collection. */
			public everyItem(): any;
			/** Returns the first TextColumn in the collection. */
			public firstItem(): Adobe.Indesign.TextColumn;
			/**
			 * Returns the TextColumn with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.TextColumn;
			/**
			 * Returns the TextColumns within the specified range.
			 * @param {any} fromParam - The TextColumn, index, or name at 
			 * the beginning of the range. Can accept: TextColumn, Long 
			 * Integer or String.
			 * @param {any} toParam - The TextColumn, index, or name at the 
			 * end of the range. Can accept: TextColumn, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last TextColumn in the collection. */
			public lastItem(): Adobe.Indesign.TextColumn;
			/** Returns the middle TextColumn in the collection. */
			public middleItem(): Adobe.Indesign.TextColumn;
			/**
			 * Returns the TextColumn whose index follows the specified 
			 * TextColumn in the collection.
			 * @param {TextColumn} objParam - The TextColumn whose index 
			 * comes before the desired TextColumn. 
			 */
			public nextItem(objParam: TextColumn): Adobe.Indesign.TextColumn;
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
			 * Returns the TextColumn with the index previous to the 
			 * specified index.
			 * @param {TextColumn} objParam - The index of the TextColumn 
			 * that follows the desired TextColumn.
			 */
			public previousItem(objParam: TextColumn): Adobe.Indesign.TextColumn;
		}
	}
}