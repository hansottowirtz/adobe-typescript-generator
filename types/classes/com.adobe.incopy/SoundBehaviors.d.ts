/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class SoundBehaviors extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any SoundBehavior in the collection. */
			public anyItem(): Adobe.Incopy.SoundBehavior;
			/** Displays the number of elements in the SoundBehavior. */
			public count(): number;
			/** Returns every SoundBehavior in the collection. */
			public everyItem(): any;
			/** Returns the first SoundBehavior in the collection. */
			public firstItem(): Adobe.Incopy.SoundBehavior;
			/**
			 * Returns the SoundBehavior with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.SoundBehavior;
			/**
			 * Returns the SoundBehavior with the specified ID.
			 * @param {number} idParam - The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.SoundBehavior;
			/**
			 * Returns the SoundBehavior with the specified name.
			 * @param {string} nameParam - The name.
			 */
			public itemByName(nameParam: string): Adobe.Incopy.SoundBehavior;
			/**
			 * Returns the SoundBehaviors within the specified range.
			 * @param {any} fromParam - The SoundBehavior, index, or name 
			 * at the beginning of the range. Can accept: SoundBehavior, 
			 * Long Integer or String.
			 * @param {any} toParam - The SoundBehavior, index, or name at 
			 * the end of the range. Can accept: SoundBehavior, Long 
			 * Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last SoundBehavior in the collection. */
			public lastItem(): Adobe.Incopy.SoundBehavior;
			/** Returns the middle SoundBehavior in the collection. */
			public middleItem(): Adobe.Incopy.SoundBehavior;
			/**
			 * Returns the SoundBehavior whose index follows the specified 
			 * SoundBehavior in the collection.
			 * @param {SoundBehavior} objParam - The SoundBehavior whose 
			 * index comes before the desired SoundBehavior. 
			 */
			public nextItem(objParam: SoundBehavior): Adobe.Incopy.SoundBehavior;
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
			 * Returns the SoundBehavior with the index previous to the 
			 * specified index.
			 * @param {SoundBehavior} objParam - The index of the 
			 * SoundBehavior that follows the desired SoundBehavior.
			 */
			public previousItem(objParam: SoundBehavior): Adobe.Incopy.SoundBehavior;
		}
	}
}