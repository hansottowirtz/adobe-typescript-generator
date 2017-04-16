/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class DisplaySettings extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any DisplaySetting in the collection.
			 * @returns {Adobe.Indesign.DisplaySetting}
			 */
			public anyItem(): Adobe.Indesign.DisplaySetting;
			/**
			 * Displays the number of elements in the DisplaySetting.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every DisplaySetting in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first DisplaySetting in the collection.
			 * @returns {Adobe.Indesign.DisplaySetting}
			 */
			public firstItem(): Adobe.Indesign.DisplaySetting;
			/**
			 * Returns the DisplaySetting with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.DisplaySetting}
			 */
			public item(indexParam: any): Adobe.Indesign.DisplaySetting;
			/**
			 * Returns the DisplaySettings within the specified range.
			 * @param {any} fromParam The DisplaySetting, index, or name at 
			 * the beginning of the range. Can accept: DisplaySetting, Long 
			 * Integer or String.
			 * @param {any} toParam The DisplaySetting, index, or name at 
			 * the end of the range. Can accept: DisplaySetting, Long 
			 * Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last DisplaySetting in the collection.
			 * @returns {Adobe.Indesign.DisplaySetting}
			 */
			public lastItem(): Adobe.Indesign.DisplaySetting;
			/**
			 * Returns the middle DisplaySetting in the collection.
			 * @returns {Adobe.Indesign.DisplaySetting}
			 */
			public middleItem(): Adobe.Indesign.DisplaySetting;
			/**
			 * Returns the DisplaySetting whose index follows the specified 
			 * DisplaySetting in the collection.
			 * @param {DisplaySetting} objParam The DisplaySetting whose 
			 * index comes before the desired DisplaySetting. 
			 * @returns {Adobe.Indesign.DisplaySetting}
			 */
			public nextItem(objParam: DisplaySetting): Adobe.Indesign.DisplaySetting;
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
			 * Returns the DisplaySetting with the index previous to the 
			 * specified index.
			 * @param {DisplaySetting} objParam The index of the 
			 * DisplaySetting that follows the desired DisplaySetting.
			 * @returns {Adobe.Indesign.DisplaySetting}
			 */
			public previousItem(objParam: DisplaySetting): Adobe.Indesign.DisplaySetting;
		}
	}
}