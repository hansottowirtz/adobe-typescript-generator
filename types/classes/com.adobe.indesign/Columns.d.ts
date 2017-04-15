/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Columns extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new Column.
			 * @param {LocationOptions} atParam - The Column's location 
			 * relative to the reference object or within the table.  
			 * (Optional)
			 * @param {any} referenceParam - The reference object. Note: 
			 * The reference object must be within the table. Required only 
			 * when the at value contains before or after. Can accept: Row, 
			 * Column, Cell or Table. (Optional)
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new Column (Optional)
			 */
			public add(atParam: LocationOptions, referenceParam: any, withPropertiesParam: any): any;
			/** Returns any Column in the collection. */
			public anyItem(): Adobe.Indesign.Column;
			/** Displays the number of elements in the Column. */
			public count(): number;
			/** Returns every Column in the collection. */
			public everyItem(): any;
			/** Returns the first Column in the collection. */
			public firstItem(): Adobe.Indesign.Column;
			/**
			 * Returns the Column with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.Column;
			/**
			 * Returns the Column with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Column;
			/**
			 * Returns the Columns within the specified range.
			 * @param {any} fromParam - The Column, index, or name at the 
			 * beginning of the range. Can accept: Column, Long Integer or 
			 * String.
			 * @param {any} toParam - The Column, index, or name at the end 
			 * of the range. Can accept: Column, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Column in the collection. */
			public lastItem(): Adobe.Indesign.Column;
			/** Returns the middle Column in the collection. */
			public middleItem(): Adobe.Indesign.Column;
			/**
			 * Returns the Column whose index follows the specified Column 
			 * in the collection.
			 * @param {Column} objParam - The Column whose index comes 
			 * before the desired Column. 
			 */
			public nextItem(objParam: Column): Adobe.Indesign.Column;
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
			 * Returns the Column with the index previous to the specified 
			 * index.
			 * @param {Column} objParam - The index of the Column that 
			 * follows the desired Column.
			 */
			public previousItem(objParam: Column): Adobe.Indesign.Column;
		}
	}
}