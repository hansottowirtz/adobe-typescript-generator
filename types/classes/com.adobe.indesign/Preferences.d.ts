/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Preferences extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Preference in the collection.
			 * @returns {Adobe.Indesign.Preference}
			 */
			public anyItem(): Adobe.Indesign.Preference;
			/**
			 * Displays the number of elements in the Preference.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Preference in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Preference in the collection.
			 * @returns {Adobe.Indesign.Preference}
			 */
			public firstItem(): Adobe.Indesign.Preference;
			/**
			 * Returns the Preference with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.Preference}
			 */
			public item(indexParam: any): Adobe.Indesign.Preference;
			/**
			 * Returns the Preferences within the specified range.
			 * @param {any} fromParam The Preference, index, or name at the 
			 * beginning of the range. Can accept: Preference, Long Integer 
			 * or String.
			 * @param {any} toParam The Preference, index, or name at the 
			 * end of the range. Can accept: Preference, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Preference in the collection.
			 * @returns {Adobe.Indesign.Preference}
			 */
			public lastItem(): Adobe.Indesign.Preference;
			/**
			 * Returns the middle Preference in the collection.
			 * @returns {Adobe.Indesign.Preference}
			 */
			public middleItem(): Adobe.Indesign.Preference;
			/**
			 * Returns the Preference whose index follows the specified 
			 * Preference in the collection.
			 * @param {Preference} objParam The Preference whose index 
			 * comes before the desired Preference. 
			 * @returns {Adobe.Indesign.Preference}
			 */
			public nextItem(objParam: Preference): Adobe.Indesign.Preference;
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
			 * Returns the Preference with the index previous to the 
			 * specified index.
			 * @param {Preference} objParam The index of the Preference 
			 * that follows the desired Preference.
			 * @returns {Adobe.Indesign.Preference}
			 */
			public previousItem(objParam: Preference): Adobe.Indesign.Preference;
		}
	}
}