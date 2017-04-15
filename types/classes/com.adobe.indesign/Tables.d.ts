/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Tables extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new table.
			 * @param {LocationOptions} toParam - The location of the new 
			 * table relative to the reference object or within the 
			 * container object.  (Optional)
			 * @param {any} referenceParam - The reference object. Note: 
			 * Required when the to value specifies before or after. Can 
			 * accept: Table, XMLElement, XmlStory, TextFrame, Text, 
			 * InsertionPoint, TextStyleRange, Paragraph, TextColumn, Line, 
			 * Word, Character, Story or Cell. (Optional)
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new Table (Optional)
			 */
			public add(toParam: LocationOptions, referenceParam: any, withPropertiesParam: any): Adobe.Indesign.Table;
			/** Returns any Table in the collection. */
			public anyItem(): Adobe.Indesign.Table;
			/** Displays the number of elements in the Table. */
			public count(): number;
			/** Returns every Table in the collection. */
			public everyItem(): any;
			/** Returns the first Table in the collection. */
			public firstItem(): Adobe.Indesign.Table;
			/**
			 * Returns the Table with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.Table;
			/**
			 * Returns the Table with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.Table;
			/**
			 * Returns the Table with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.Table;
			/**
			 * Returns the Tables within the specified range.
			 * @param {any} fromParam - The Table, index, or name at the 
			 * beginning of the range. Can accept: Table, Long Integer or 
			 * String.
			 * @param {any} toParam - The Table, index, or name at the end 
			 * of the range. Can accept: Table, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Table in the collection. */
			public lastItem(): Adobe.Indesign.Table;
			/** Returns the middle Table in the collection. */
			public middleItem(): Adobe.Indesign.Table;
			/**
			 * Returns the Table whose index follows the specified Table in 
			 * the collection.
			 * @param {Table} objParam - The Table whose index comes before 
			 * the desired Table. 
			 */
			public nextItem(objParam: Table): Adobe.Indesign.Table;
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
			 * Returns the Table with the index previous to the specified 
			 * index.
			 * @param {Table} objParam - The index of the Table that 
			 * follows the desired Table.
			 */
			public previousItem(objParam: Table): Adobe.Indesign.Table;
		}
	}
}