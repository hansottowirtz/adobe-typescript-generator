/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class RadiobuttonGroups extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new RadiobuttonGroup.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new RadiobuttonGroup (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.RadiobuttonGroup;
			/** Returns any RadiobuttonGroup in the collection. */
			public anyItem(): Adobe.Incopy.RadiobuttonGroup;
			/** Displays the number of elements in the RadiobuttonGroup. */
			public count(): number;
			/** Returns every RadiobuttonGroup in the collection. */
			public everyItem(): any;
			/** Returns the first RadiobuttonGroup in the collection. */
			public firstItem(): Adobe.Incopy.RadiobuttonGroup;
			/**
			 * Returns the RadiobuttonGroup with the specified index or 
			 * name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.RadiobuttonGroup;
			/**
			 * Returns the RadiobuttonGroup with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.RadiobuttonGroup;
			/**
			 * Returns the RadiobuttonGroups within the specified range.
			 * @param {any} fromParam - The RadiobuttonGroup, index, or 
			 * name at the beginning of the range. Can accept: 
			 * RadiobuttonGroup, Long Integer or String.
			 * @param {any} toParam - The RadiobuttonGroup, index, or name 
			 * at the end of the range. Can accept: RadiobuttonGroup, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last RadiobuttonGroup in the collection. */
			public lastItem(): Adobe.Incopy.RadiobuttonGroup;
			/** Returns the middle RadiobuttonGroup in the collection. */
			public middleItem(): Adobe.Incopy.RadiobuttonGroup;
			/**
			 * Returns the RadiobuttonGroup whose index follows the 
			 * specified RadiobuttonGroup in the collection.
			 * @param {RadiobuttonGroup} objParam - The RadiobuttonGroup 
			 * whose index comes before the desired RadiobuttonGroup. 
			 */
			public nextItem(objParam: RadiobuttonGroup): Adobe.Incopy.RadiobuttonGroup;
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
			 * Returns the RadiobuttonGroup with the index previous to the 
			 * specified index.
			 * @param {RadiobuttonGroup} objParam - The index of the 
			 * RadiobuttonGroup that follows the desired RadiobuttonGroup.
			 */
			public previousItem(objParam: RadiobuttonGroup): Adobe.Incopy.RadiobuttonGroup;
		}
	}
}