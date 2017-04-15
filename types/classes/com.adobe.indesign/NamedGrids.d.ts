/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class NamedGrids extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new NamedGrid.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new NamedGrid (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.NamedGrid;
			/** Returns any NamedGrid in the collection. */
			public anyItem(): Adobe.Indesign.NamedGrid;
			/** Displays the number of elements in the NamedGrid. */
			public count(): number;
			/** Returns every NamedGrid in the collection. */
			public everyItem(): any;
			/** Returns the first NamedGrid in the collection. */
			public firstItem(): Adobe.Indesign.NamedGrid;
			/**
			 * Returns the NamedGrid with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.NamedGrid;
			/**
			 * Returns the NamedGrid with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.NamedGrid;
			/**
			 * Returns the NamedGrid with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.NamedGrid;
			/**
			 * Returns the NamedGrids within the specified range.
			 * @param {any} fromParam - The NamedGrid, index, or name at 
			 * the beginning of the range. Can accept: NamedGrid, Long 
			 * Integer or String.
			 * @param {any} toParam - The NamedGrid, index, or name at the 
			 * end of the range. Can accept: NamedGrid, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last NamedGrid in the collection. */
			public lastItem(): Adobe.Indesign.NamedGrid;
			/** Returns the middle NamedGrid in the collection. */
			public middleItem(): Adobe.Indesign.NamedGrid;
			/**
			 * Returns the NamedGrid whose index follows the specified 
			 * NamedGrid in the collection.
			 * @param {NamedGrid} objParam - The NamedGrid whose index 
			 * comes before the desired NamedGrid. 
			 */
			public nextItem(objParam: NamedGrid): Adobe.Indesign.NamedGrid;
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
			 * Returns the NamedGrid with the index previous to the 
			 * specified index.
			 * @param {NamedGrid} objParam - The index of the NamedGrid 
			 * that follows the desired NamedGrid.
			 */
			public previousItem(objParam: NamedGrid): Adobe.Indesign.NamedGrid;
		}
	}
}