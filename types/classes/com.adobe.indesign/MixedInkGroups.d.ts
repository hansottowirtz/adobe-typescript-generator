/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class MixedInkGroups extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new mixed ink group.
			 * @param {any[]} inkListParam - The inks to include in the 
			 * mix.
			 * @param {any[]} inkPercentagesParam - The percent of each ink 
			 * in the ink list. (Range: 0 to 100 for each ink) (Optional)
			 * @param {any[]} repeatValuesParam - The number of repetitions 
			 * for each ink in the ink list. (Range: 0 to 100 for each ink) 
			 * (Optional)
			 * @param {any[]} incrementValuesParam - The increment percent 
			 * per repetition for each ink. (Range: 0 to 100) Note: The 
			 * cumulative ink percentage per ink cannot exceed 100.) 
			 * (Optional)
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new MixedInkGroup (Optional)
			 */
			public add(inkListParam: any[], inkPercentagesParam: any[], repeatValuesParam: any[], incrementValuesParam: any[], withPropertiesParam: any): Adobe.Indesign.MixedInkGroup;
			/** Returns any MixedInkGroup in the collection. */
			public anyItem(): Adobe.Indesign.MixedInkGroup;
			/** Displays the number of elements in the MixedInkGroup. */
			public count(): number;
			/** Returns every MixedInkGroup in the collection. */
			public everyItem(): any;
			/** Returns the first MixedInkGroup in the collection. */
			public firstItem(): Adobe.Indesign.MixedInkGroup;
			/**
			 * Returns the MixedInkGroup with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.MixedInkGroup;
			/**
			 * Returns the MixedInkGroup with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.MixedInkGroup;
			/**
			 * Returns the MixedInkGroup with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.MixedInkGroup;
			/**
			 * Returns the MixedInkGroups within the specified range.
			 * @param {any} fromParam - The MixedInkGroup, index, or name 
			 * at the beginning of the range. Can accept: MixedInkGroup, 
			 * Long Integer or String.
			 * @param {any} toParam - The MixedInkGroup, index, or name at 
			 * the end of the range. Can accept: MixedInkGroup, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last MixedInkGroup in the collection. */
			public lastItem(): Adobe.Indesign.MixedInkGroup;
			/** Returns the middle MixedInkGroup in the collection. */
			public middleItem(): Adobe.Indesign.MixedInkGroup;
			/**
			 * Returns the MixedInkGroup whose index follows the specified 
			 * MixedInkGroup in the collection.
			 * @param {MixedInkGroup} objParam - The MixedInkGroup whose 
			 * index comes before the desired MixedInkGroup. 
			 */
			public nextItem(objParam: MixedInkGroup): Adobe.Indesign.MixedInkGroup;
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
			 * Returns the MixedInkGroup with the index previous to the 
			 * specified index.
			 * @param {MixedInkGroup} objParam - The index of the 
			 * MixedInkGroup that follows the desired MixedInkGroup.
			 */
			public previousItem(objParam: MixedInkGroup): Adobe.Indesign.MixedInkGroup;
		}
	}
}