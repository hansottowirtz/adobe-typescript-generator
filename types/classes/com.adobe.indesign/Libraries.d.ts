/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Libraries extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new object libary.
			 * @param {File} fullNameParam - The library's path and file 
			 * name.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new Library (Optional)
			 */
			public add(fullNameParam: File, withPropertiesParam: any): Adobe.Indesign.Library;
			/** Returns any Library in the collection. */
			public anyItem(): Adobe.Indesign.Library;
			/** Displays the number of elements in the Library. */
			public count(): number;
			/** Returns every Library in the collection. */
			public everyItem(): any;
			/** Returns the first Library in the collection. */
			public firstItem(): Adobe.Indesign.Library;
			/**
			 * Returns the Library with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.Library;
			/**
			 * Returns the Library with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Library;
			/**
			 * Returns the Libraries within the specified range.
			 * @param {any} fromParam - The Library, index, or name at the 
			 * beginning of the range. Can accept: Library, Long Integer or 
			 * String.
			 * @param {any} toParam - The Library, index, or name at the 
			 * end of the range. Can accept: Library, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Library in the collection. */
			public lastItem(): Adobe.Indesign.Library;
			/** Returns the middle Library in the collection. */
			public middleItem(): Adobe.Indesign.Library;
			/**
			 * Returns the Library whose index follows the specified 
			 * Library in the collection.
			 * @param {Library} objParam - The Library whose index comes 
			 * before the desired Library. 
			 */
			public nextItem(objParam: Library): Adobe.Indesign.Library;
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
			 * Returns the Library with the index previous to the specified 
			 * index.
			 * @param {Library} objParam - The index of the Library that 
			 * follows the desired Library.
			 */
			public previousItem(objParam: Library): Adobe.Indesign.Library;
		}
	}
}