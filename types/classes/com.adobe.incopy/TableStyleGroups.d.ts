/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TableStyleGroups extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new TableStyleGroup.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new TableStyleGroup (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.TableStyleGroup;
			/** Returns any TableStyleGroup in the collection. */
			public anyItem(): Adobe.Incopy.TableStyleGroup;
			/** Displays the number of elements in the TableStyleGroup. */
			public count(): number;
			/** Returns every TableStyleGroup in the collection. */
			public everyItem(): any;
			/** Returns the first TableStyleGroup in the collection. */
			public firstItem(): Adobe.Incopy.TableStyleGroup;
			/**
			 * Returns the TableStyleGroup with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.TableStyleGroup;
			/**
			 * Returns the TableStyleGroup with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.TableStyleGroup;
			/**
			 * Returns the TableStyleGroup with the specified name.
			 * @param {string} nameParam The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.TableStyleGroup;
			/**
			 * Returns the TableStyleGroups within the specified range.
			 * @param {any} fromParam The TableStyleGroup, index, or name 
			 * at the beginning of the range. Can accept: TableStyleGroup, 
			 * Long Integer or String.
			 * @param {any} toParam The TableStyleGroup, index, or name at 
			 * the end of the range. Can accept: TableStyleGroup, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last TableStyleGroup in the collection. */
			public lastItem(): Adobe.Incopy.TableStyleGroup;
			/** Returns the middle TableStyleGroup in the collection. */
			public middleItem(): Adobe.Incopy.TableStyleGroup;
			/**
			 * Returns the TableStyleGroup whose index follows the 
			 * specified TableStyleGroup in the collection.
			 * @param {TableStyleGroup} objParam The TableStyleGroup whose 
			 * index comes before the desired TableStyleGroup. 
			 */
			public nextItem(objParam: TableStyleGroup): Adobe.Incopy.TableStyleGroup;
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
			 * Returns the TableStyleGroup with the index previous to the 
			 * specified index.
			 * @param {TableStyleGroup} objParam The index of the 
			 * TableStyleGroup that follows the desired TableStyleGroup.
			 */
			public previousItem(objParam: TableStyleGroup): Adobe.Incopy.TableStyleGroup;
		}
	}
}