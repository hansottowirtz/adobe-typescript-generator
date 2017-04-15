/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ObjectStyleGroups extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new ObjectStyleGroup.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new ObjectStyleGroup (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.ObjectStyleGroup;
			/** Returns any ObjectStyleGroup in the collection. */
			public anyItem(): Adobe.Indesign.ObjectStyleGroup;
			/** Displays the number of elements in the ObjectStyleGroup. */
			public count(): number;
			/** Returns every ObjectStyleGroup in the collection. */
			public everyItem(): any;
			/** Returns the first ObjectStyleGroup in the collection. */
			public firstItem(): Adobe.Indesign.ObjectStyleGroup;
			/**
			 * Returns the ObjectStyleGroup with the specified index or 
			 * name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.ObjectStyleGroup;
			/**
			 * Returns the ObjectStyleGroup with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.ObjectStyleGroup;
			/**
			 * Returns the ObjectStyleGroup with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.ObjectStyleGroup;
			/**
			 * Returns the ObjectStyleGroups within the specified range.
			 * @param {any} fromParam - The ObjectStyleGroup, index, or 
			 * name at the beginning of the range. Can accept: 
			 * ObjectStyleGroup, Long Integer or String.
			 * @param {any} toParam - The ObjectStyleGroup, index, or name 
			 * at the end of the range. Can accept: ObjectStyleGroup, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last ObjectStyleGroup in the collection. */
			public lastItem(): Adobe.Indesign.ObjectStyleGroup;
			/** Returns the middle ObjectStyleGroup in the collection. */
			public middleItem(): Adobe.Indesign.ObjectStyleGroup;
			/**
			 * Returns the ObjectStyleGroup whose index follows the 
			 * specified ObjectStyleGroup in the collection.
			 * @param {ObjectStyleGroup} objParam - The ObjectStyleGroup 
			 * whose index comes before the desired ObjectStyleGroup. 
			 */
			public nextItem(objParam: ObjectStyleGroup): Adobe.Indesign.ObjectStyleGroup;
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
			 * Returns the ObjectStyleGroup with the index previous to the 
			 * specified index.
			 * @param {ObjectStyleGroup} objParam - The index of the 
			 * ObjectStyleGroup that follows the desired ObjectStyleGroup.
			 */
			public previousItem(objParam: ObjectStyleGroup): Adobe.Indesign.ObjectStyleGroup;
		}
	}
}