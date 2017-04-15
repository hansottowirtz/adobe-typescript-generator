/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class GradientStops extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new GradientStop.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new GradientStop (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.GradientStop;
			/** Returns any GradientStop in the collection. */
			public anyItem(): Adobe.Indesign.GradientStop;
			/** Displays the number of elements in the GradientStop. */
			public count(): number;
			/** Returns every GradientStop in the collection. */
			public everyItem(): any;
			/** Returns the first GradientStop in the collection. */
			public firstItem(): Adobe.Indesign.GradientStop;
			/**
			 * Returns the GradientStop with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.GradientStop;
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
			public lastItem(): Adobe.Indesign.GradientStop;
			/** Returns the middle GradientStop in the collection. */
			public middleItem(): Adobe.Indesign.GradientStop;
			/**
			 * Returns the GradientStop whose index follows the specified 
			 * GradientStop in the collection.
			 * @param {GradientStop} objParam - The GradientStop whose 
			 * index comes before the desired GradientStop. 
			 */
			public nextItem(objParam: GradientStop): Adobe.Indesign.GradientStop;
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
			public previousItem(objParam: GradientStop): Adobe.Indesign.GradientStop;
		}
	}
}