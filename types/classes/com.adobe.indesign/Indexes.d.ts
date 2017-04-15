/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Indexes extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new Index.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new Index (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.Index;
			/** Returns any Index in the collection. */
			public anyItem(): Adobe.Indesign.Index;
			/** Displays the number of elements in the Index. */
			public count(): number;
			/** Returns every Index in the collection. */
			public everyItem(): any;
			/** Returns the first Index in the collection. */
			public firstItem(): Adobe.Indesign.Index;
			/**
			 * Returns the Index with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.Index;
			/**
			 * Returns the Index with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.Index;
			/**
			 * Returns the Index with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Index;
			/**
			 * Returns the Indexes within the specified range.
			 * @param {any} fromParam - The Index, index, or name at the 
			 * beginning of the range. Can accept: Index, Long Integer or 
			 * String.
			 * @param {any} toParam - The Index, index, or name at the end 
			 * of the range. Can accept: Index, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Index in the collection. */
			public lastItem(): Adobe.Indesign.Index;
			/** Returns the middle Index in the collection. */
			public middleItem(): Adobe.Indesign.Index;
			/**
			 * Returns the Index whose index follows the specified Index in 
			 * the collection.
			 * @param {Index} objParam - The Index whose index comes before 
			 * the desired Index. 
			 */
			public nextItem(objParam: Index): Adobe.Indesign.Index;
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
			 * Returns the Index with the index previous to the specified 
			 * index.
			 * @param {Index} objParam - The index of the Index that 
			 * follows the desired Index.
			 */
			public previousItem(objParam: Index): Adobe.Indesign.Index;
		}
	}
}