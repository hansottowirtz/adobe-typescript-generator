/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class MasterSpreads extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new master spread.
			 * @param {number} pagesPerSpreadParam - The number of pages to 
			 * include in the master spread. (Optional)
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new MasterSpread (Optional)
			 */
			public add(pagesPerSpreadParam: number, withPropertiesParam: any): Adobe.Indesign.MasterSpread;
			/** Returns any MasterSpread in the collection. */
			public anyItem(): Adobe.Indesign.MasterSpread;
			/** Displays the number of elements in the MasterSpread. */
			public count(): number;
			/** Returns every MasterSpread in the collection. */
			public everyItem(): any;
			/** Returns the first MasterSpread in the collection. */
			public firstItem(): Adobe.Indesign.MasterSpread;
			/**
			 * Returns the MasterSpread with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.MasterSpread;
			/**
			 * Returns the MasterSpread with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.MasterSpread;
			/**
			 * Returns the MasterSpread with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.MasterSpread;
			/**
			 * Returns the MasterSpreads within the specified range.
			 * @param {any} fromParam - The MasterSpread, index, or name at 
			 * the beginning of the range. Can accept: MasterSpread, Long 
			 * Integer or String.
			 * @param {any} toParam - The MasterSpread, index, or name at 
			 * the end of the range. Can accept: MasterSpread, Long Integer 
			 * or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last MasterSpread in the collection. */
			public lastItem(): Adobe.Indesign.MasterSpread;
			/** Returns the middle MasterSpread in the collection. */
			public middleItem(): Adobe.Indesign.MasterSpread;
			/**
			 * Returns the MasterSpread whose index follows the specified 
			 * MasterSpread in the collection.
			 * @param {MasterSpread} objParam - The MasterSpread whose 
			 * index comes before the desired MasterSpread. 
			 */
			public nextItem(objParam: MasterSpread): Adobe.Indesign.MasterSpread;
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
			 * Returns the MasterSpread with the index previous to the 
			 * specified index.
			 * @param {MasterSpread} objParam - The index of the 
			 * MasterSpread that follows the desired MasterSpread.
			 */
			public previousItem(objParam: MasterSpread): Adobe.Indesign.MasterSpread;
		}
	}
}