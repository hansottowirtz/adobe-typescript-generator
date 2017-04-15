/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TextPaths extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new TextPath.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new TextPath (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.TextPath;
			/** Returns any TextPath in the collection. */
			public anyItem(): Adobe.Indesign.TextPath;
			/** Displays the number of elements in the TextPath. */
			public count(): number;
			/** Returns every TextPath in the collection. */
			public everyItem(): any;
			/** Returns the first TextPath in the collection. */
			public firstItem(): Adobe.Indesign.TextPath;
			/**
			 * Returns the TextPath with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.TextPath;
			/**
			 * Returns the TextPath with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.TextPath;
			/**
			 * Returns the TextPath with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.TextPath;
			/**
			 * Returns the TextPaths within the specified range.
			 * @param {any} fromParam - The TextPath, index, or name at the 
			 * beginning of the range. Can accept: TextPath, Long Integer 
			 * or String.
			 * @param {any} toParam - The TextPath, index, or name at the 
			 * end of the range. Can accept: TextPath, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last TextPath in the collection. */
			public lastItem(): Adobe.Indesign.TextPath;
			/** Returns the middle TextPath in the collection. */
			public middleItem(): Adobe.Indesign.TextPath;
			/**
			 * Returns the TextPath whose index follows the specified 
			 * TextPath in the collection.
			 * @param {TextPath} objParam - The TextPath whose index comes 
			 * before the desired TextPath. 
			 */
			public nextItem(objParam: TextPath): Adobe.Indesign.TextPath;
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
			 * Returns the TextPath with the index previous to the 
			 * specified index.
			 * @param {TextPath} objParam - The index of the TextPath that 
			 * follows the desired TextPath.
			 */
			public previousItem(objParam: TextPath): Adobe.Indesign.TextPath;
		}
	}
}