/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TabStops extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new TabStop.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new TabStop (Optional)
			 * @returns {Adobe.Incopy.TabStop}
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.TabStop;
			/**
			 * Returns any TabStop in the collection.
			 * @returns {Adobe.Incopy.TabStop}
			 */
			public anyItem(): Adobe.Incopy.TabStop;
			/**
			 * Displays the number of elements in the TabStop.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every TabStop in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first TabStop in the collection.
			 * @returns {Adobe.Incopy.TabStop}
			 */
			public firstItem(): Adobe.Incopy.TabStop;
			/**
			 * Returns the TabStop with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.TabStop}
			 */
			public item(indexParam: any): Adobe.Incopy.TabStop;
			/**
			 * Returns the TabStops within the specified range.
			 * @param {any} fromParam The TabStop, index, or name at the 
			 * beginning of the range. Can accept: TabStop, Long Integer or 
			 * String.
			 * @param {any} toParam The TabStop, index, or name at the end 
			 * of the range. Can accept: TabStop, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last TabStop in the collection.
			 * @returns {Adobe.Incopy.TabStop}
			 */
			public lastItem(): Adobe.Incopy.TabStop;
			/**
			 * Returns the middle TabStop in the collection.
			 * @returns {Adobe.Incopy.TabStop}
			 */
			public middleItem(): Adobe.Incopy.TabStop;
			/**
			 * Returns the TabStop whose index follows the specified 
			 * TabStop in the collection.
			 * @param {TabStop} objParam The TabStop whose index comes 
			 * before the desired TabStop. 
			 * @returns {Adobe.Incopy.TabStop}
			 */
			public nextItem(objParam: TabStop): Adobe.Incopy.TabStop;
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
			 * Returns the TabStop with the index previous to the specified 
			 * index.
			 * @param {TabStop} objParam The index of the TabStop that 
			 * follows the desired TabStop.
			 * @returns {Adobe.Incopy.TabStop}
			 */
			public previousItem(objParam: TabStop): Adobe.Incopy.TabStop;
		}
	}
}