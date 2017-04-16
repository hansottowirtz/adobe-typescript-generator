/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TableStyleGroups extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new TableStyleGroup.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new TableStyleGroup (Optional)
			 * @returns {Adobe.Indesign.TableStyleGroup}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.TableStyleGroup;
			/**
			 * Returns any TableStyleGroup in the collection.
			 * @returns {Adobe.Indesign.TableStyleGroup}
			 */
			public anyItem(): Adobe.Indesign.TableStyleGroup;
			/**
			 * Displays the number of elements in the TableStyleGroup.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every TableStyleGroup in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first TableStyleGroup in the collection.
			 * @returns {Adobe.Indesign.TableStyleGroup}
			 */
			public firstItem(): Adobe.Indesign.TableStyleGroup;
			/**
			 * Returns the TableStyleGroup with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.TableStyleGroup}
			 */
			public item(indexParam: any): Adobe.Indesign.TableStyleGroup;
			/**
			 * Returns the TableStyleGroup with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.TableStyleGroup}
			 */
			public itemByID(idParam: number): Adobe.Indesign.TableStyleGroup;
			/**
			 * Returns the TableStyleGroup with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.TableStyleGroup}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.TableStyleGroup;
			/**
			 * Returns the TableStyleGroups within the specified range.
			 * @param {any} fromParam The TableStyleGroup, index, or name 
			 * at the beginning of the range. Can accept: TableStyleGroup, 
			 * Long Integer or String.
			 * @param {any} toParam The TableStyleGroup, index, or name at 
			 * the end of the range. Can accept: TableStyleGroup, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last TableStyleGroup in the collection.
			 * @returns {Adobe.Indesign.TableStyleGroup}
			 */
			public lastItem(): Adobe.Indesign.TableStyleGroup;
			/**
			 * Returns the middle TableStyleGroup in the collection.
			 * @returns {Adobe.Indesign.TableStyleGroup}
			 */
			public middleItem(): Adobe.Indesign.TableStyleGroup;
			/**
			 * Returns the TableStyleGroup whose index follows the 
			 * specified TableStyleGroup in the collection.
			 * @param {TableStyleGroup} objParam The TableStyleGroup whose 
			 * index comes before the desired TableStyleGroup. 
			 * @returns {Adobe.Indesign.TableStyleGroup}
			 */
			public nextItem(objParam: TableStyleGroup): Adobe.Indesign.TableStyleGroup;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} idx
			 * @returns {number}
			 */
			public nextNameIndex(idx: number): number;
			/**
			 * Overriding this allows us to support for each...in
			 * @param {number} index
			 * @returns {any}
			 */
			public nextValue(index: number): any;
			/**
			 * Returns the TableStyleGroup with the index previous to the 
			 * specified index.
			 * @param {TableStyleGroup} objParam The index of the 
			 * TableStyleGroup that follows the desired TableStyleGroup.
			 * @returns {Adobe.Indesign.TableStyleGroup}
			 */
			public previousItem(objParam: TableStyleGroup): Adobe.Indesign.TableStyleGroup;
		}
	}
}