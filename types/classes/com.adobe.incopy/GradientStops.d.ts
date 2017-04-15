/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class GradientStops extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any GradientStop in the collection. */
			public anyItem(): Adobe.Incopy.GradientStop;
			/** Displays the number of elements in the GradientStop. */
			public count(): number;
			/** Returns every GradientStop in the collection. */
			public everyItem(): any;
			/** Returns the first GradientStop in the collection. */
			public firstItem(): Adobe.Incopy.GradientStop;
			/**
			 * Returns the GradientStop with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.GradientStop;
			/**
			 * Returns the GradientStops within the specified range.
			 * @param {any} fromParam - The GradientStop, index, or name at 
			 * the beginning of the range. Can accept: GradientStop, Long 
			 * Integer or String.
			 * @param {any} toParam - The GradientStop, index, or name at 
			 * the end of the range. Can accept: GradientStop, Long Integer 
			 * or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last GradientStop in the collection. */
			public lastItem(): Adobe.Incopy.GradientStop;
			/** Returns the middle GradientStop in the collection. */
			public middleItem(): Adobe.Incopy.GradientStop;
			/**
			 * Returns the GradientStop whose index follows the specified 
			 * GradientStop in the collection.
			 * @param {GradientStop} objParam - The GradientStop whose 
			 * index comes before the desired GradientStop. 
			 */
			public nextItem(objParam: GradientStop): Adobe.Incopy.GradientStop;
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
			 * Returns the GradientStop with the index previous to the 
			 * specified index.
			 * @param {GradientStop} objParam - The index of the 
			 * GradientStop that follows the desired GradientStop.
			 */
			public previousItem(objParam: GradientStop): Adobe.Incopy.GradientStop;
		}
	}
}