/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class MotionPresets extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new MotionPreset.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new MotionPreset (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.MotionPreset;
			/** Returns any MotionPreset in the collection. */
			public anyItem(): Adobe.Indesign.MotionPreset;
			/** Displays the number of elements in the MotionPreset. */
			public count(): number;
			/** Returns every MotionPreset in the collection. */
			public everyItem(): any;
			/** Returns the first MotionPreset in the collection. */
			public firstItem(): Adobe.Indesign.MotionPreset;
			/**
			 * Returns the MotionPreset with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.MotionPreset;
			/**
			 * Returns the MotionPreset with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Indesign.MotionPreset;
			/**
			 * Returns the MotionPreset with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Indesign.MotionPreset;
			/**
			 * Returns the MotionPresets within the specified range.
			 * @param {any} fromParam - The MotionPreset, index, or name at 
			 * the beginning of the range. Can accept: MotionPreset, Long 
			 * Integer or String.
			 * @param {any} toParam - The MotionPreset, index, or name at 
			 * the end of the range. Can accept: MotionPreset, Long Integer 
			 * or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last MotionPreset in the collection. */
			public lastItem(): Adobe.Indesign.MotionPreset;
			/** Returns the middle MotionPreset in the collection. */
			public middleItem(): Adobe.Indesign.MotionPreset;
			/**
			 * Returns the MotionPreset whose index follows the specified 
			 * MotionPreset in the collection.
			 * @param {MotionPreset} objParam - The MotionPreset whose 
			 * index comes before the desired MotionPreset. 
			 */
			public nextItem(objParam: MotionPreset): Adobe.Indesign.MotionPreset;
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
			 * Returns the MotionPreset with the index previous to the 
			 * specified index.
			 * @param {MotionPreset} objParam - The index of the 
			 * MotionPreset that follows the desired MotionPreset.
			 */
			public previousItem(objParam: MotionPreset): Adobe.Indesign.MotionPreset;
		}
	}
}