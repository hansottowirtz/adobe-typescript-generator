/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Preferences extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any Preference in the collection. */
			public anyItem(): Adobe.Incopy.Preference;
			/** Displays the number of elements in the Preference. */
			public count(): number;
			/** Returns every Preference in the collection. */
			public everyItem(): any;
			/** Returns the first Preference in the collection. */
			public firstItem(): Adobe.Incopy.Preference;
			/**
			 * Returns the Preference with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.Preference;
			/**
			 * Returns the Preferences within the specified range.
			 * @param {any} fromParam - The Preference, index, or name at 
			 * the beginning of the range. Can accept: Preference, Long 
			 * Integer or String.
			 * @param {any} toParam - The Preference, index, or name at the 
			 * end of the range. Can accept: Preference, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Preference in the collection. */
			public lastItem(): Adobe.Incopy.Preference;
			/** Returns the middle Preference in the collection. */
			public middleItem(): Adobe.Incopy.Preference;
			/**
			 * Returns the Preference whose index follows the specified 
			 * Preference in the collection.
			 * @param {Preference} objParam - The Preference whose index 
			 * comes before the desired Preference. 
			 */
			public nextItem(objParam: Preference): Adobe.Incopy.Preference;
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
			 * Returns the Preference with the index previous to the 
			 * specified index.
			 * @param {Preference} objParam - The index of the Preference 
			 * that follows the desired Preference.
			 */
			public previousItem(objParam: Preference): Adobe.Incopy.Preference;
		}
	}
}