/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ObjectStyleGroups extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new ObjectStyleGroup.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new ObjectStyleGroup (Optional)
			 * @returns {Adobe.Indesign.ObjectStyleGroup}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.ObjectStyleGroup;
			/**
			 * Returns any ObjectStyleGroup in the collection.
			 * @returns {Adobe.Indesign.ObjectStyleGroup}
			 */
			public anyItem(): Adobe.Indesign.ObjectStyleGroup;
			/**
			 * Displays the number of elements in the ObjectStyleGroup.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every ObjectStyleGroup in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first ObjectStyleGroup in the collection.
			 * @returns {Adobe.Indesign.ObjectStyleGroup}
			 */
			public firstItem(): Adobe.Indesign.ObjectStyleGroup;
			/**
			 * Returns the ObjectStyleGroup with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.ObjectStyleGroup}
			 */
			public item(indexParam: any): Adobe.Indesign.ObjectStyleGroup;
			/**
			 * Returns the ObjectStyleGroup with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Indesign.ObjectStyleGroup}
			 */
			public itemByID(idParam: number): Adobe.Indesign.ObjectStyleGroup;
			/**
			 * Returns the ObjectStyleGroup with the specified name.
			 * @param {string} nameParam The name.
			 * @returns {Adobe.Indesign.ObjectStyleGroup}
			 */
			public itemByName(nameParam: string): Adobe.Indesign.ObjectStyleGroup;
			/**
			 * Returns the ObjectStyleGroups within the specified range.
			 * @param {any} fromParam The ObjectStyleGroup, index, or name 
			 * at the beginning of the range. Can accept: ObjectStyleGroup, 
			 * Long Integer or String.
			 * @param {any} toParam The ObjectStyleGroup, index, or name at 
			 * the end of the range. Can accept: ObjectStyleGroup, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last ObjectStyleGroup in the collection.
			 * @returns {Adobe.Indesign.ObjectStyleGroup}
			 */
			public lastItem(): Adobe.Indesign.ObjectStyleGroup;
			/**
			 * Returns the middle ObjectStyleGroup in the collection.
			 * @returns {Adobe.Indesign.ObjectStyleGroup}
			 */
			public middleItem(): Adobe.Indesign.ObjectStyleGroup;
			/**
			 * Returns the ObjectStyleGroup whose index follows the 
			 * specified ObjectStyleGroup in the collection.
			 * @param {ObjectStyleGroup} objParam The ObjectStyleGroup 
			 * whose index comes before the desired ObjectStyleGroup. 
			 * @returns {Adobe.Indesign.ObjectStyleGroup}
			 */
			public nextItem(objParam: ObjectStyleGroup): Adobe.Indesign.ObjectStyleGroup;
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
			 * Returns the ObjectStyleGroup with the index previous to the 
			 * specified index.
			 * @param {ObjectStyleGroup} objParam The index of the 
			 * ObjectStyleGroup that follows the desired ObjectStyleGroup.
			 * @returns {Adobe.Indesign.ObjectStyleGroup}
			 */
			public previousItem(objParam: ObjectStyleGroup): Adobe.Indesign.ObjectStyleGroup;
		}
	}
}