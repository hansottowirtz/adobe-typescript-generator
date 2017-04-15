/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TabStops extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new TabStop.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new TabStop (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Incopy.TabStop;
			/** Returns any TabStop in the collection. */
			public anyItem(): Adobe.Incopy.TabStop;
			/** Displays the number of elements in the TabStop. */
			public count(): number;
			/** Returns every TabStop in the collection. */
			public everyItem(): any;
			/** Returns the first TabStop in the collection. */
			public firstItem(): Adobe.Incopy.TabStop;
			/**
			 * Returns the TabStop with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.TabStop;
			/**
			 * Returns the TabStops within the specified range.
			 * @param {any} fromParam - The TabStop, index, or name at the 
			 * beginning of the range. Can accept: TabStop, Long Integer or 
			 * String.
			 * @param {any} toParam - The TabStop, index, or name at the 
			 * end of the range. Can accept: TabStop, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last TabStop in the collection. */
			public lastItem(): Adobe.Incopy.TabStop;
			/** Returns the middle TabStop in the collection. */
			public middleItem(): Adobe.Incopy.TabStop;
			/**
			 * Returns the TabStop whose index follows the specified 
			 * TabStop in the collection.
			 * @param {TabStop} objParam - The TabStop whose index comes 
			 * before the desired TabStop. 
			 */
			public nextItem(objParam: TabStop): Adobe.Incopy.TabStop;
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
			 * Returns the TabStop with the index previous to the specified 
			 * index.
			 * @param {TabStop} objParam - The index of the TabStop that 
			 * follows the desired TabStop.
			 */
			public previousItem(objParam: TabStop): Adobe.Incopy.TabStop;
		}
	}
}