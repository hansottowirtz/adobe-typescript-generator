/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class DocumentPresets extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new DocumentPreset.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new DocumentPreset (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.DocumentPreset;
			/** Returns any DocumentPreset in the collection. */
			public anyItem(): Adobe.Incopy.DocumentPreset;
			/** Displays the number of elements in the DocumentPreset. */
			public count(): number;
			/** Returns every DocumentPreset in the collection. */
			public everyItem(): any;
			/** Returns the first DocumentPreset in the collection. */
			public firstItem(): Adobe.Incopy.DocumentPreset;
			/**
			 * Returns the DocumentPreset with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.DocumentPreset;
			/**
			 * Returns the DocumentPreset with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.DocumentPreset;
			/**
			 * Returns the DocumentPreset with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.DocumentPreset;
			/**
			 * Returns the DocumentPresets within the specified range.
			 * @param {any} fromParam - The DocumentPreset, index, or name 
			 * at the beginning of the range. Can accept: DocumentPreset, 
			 * Long Integer or String.
			 * @param {any} toParam - The DocumentPreset, index, or name at 
			 * the end of the range. Can accept: DocumentPreset, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last DocumentPreset in the collection. */
			public lastItem(): Adobe.Incopy.DocumentPreset;
			/** Returns the middle DocumentPreset in the collection. */
			public middleItem(): Adobe.Incopy.DocumentPreset;
			/**
			 * Returns the DocumentPreset whose index follows the specified 
			 * DocumentPreset in the collection.
			 * @param {DocumentPreset} objParam - The DocumentPreset whose 
			 * index comes before the desired DocumentPreset. 
			 */
			public nextItem(objParam: DocumentPreset): Adobe.Incopy.DocumentPreset;
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
			 * Returns the DocumentPreset with the index previous to the 
			 * specified index.
			 * @param {DocumentPreset} objParam - The index of the 
			 * DocumentPreset that follows the desired DocumentPreset.
			 */
			public previousItem(objParam: DocumentPreset): Adobe.Incopy.DocumentPreset;
		}
	}
}