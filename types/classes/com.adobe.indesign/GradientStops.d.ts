/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class GradientStops extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new GradientStop.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new GradientStop (Optional)
			 * @returns {Adobe.Indesign.GradientStop}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.GradientStop;
			/**
			 * Returns any GradientStop in the collection.
			 * @returns {Adobe.Indesign.GradientStop}
			 */
			public anyItem(): Adobe.Indesign.GradientStop;
			/**
			 * Displays the number of elements in the GradientStop.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every GradientStop in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first GradientStop in the collection.
			 * @returns {Adobe.Indesign.GradientStop}
			 */
			public firstItem(): Adobe.Indesign.GradientStop;
			/**
			 * Returns the GradientStop with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.GradientStop}
			 */
			public item(indexParam: any): Adobe.Indesign.GradientStop;
			/**
			 * Returns the GradientStops within the specified range.
			 * @param {any} fromParam The GradientStop, index, or name at 
			 * the beginning of the range. Can accept: GradientStop, Long 
			 * Integer or String.
			 * @param {any} toParam The GradientStop, index, or name at the 
			 * end of the range. Can accept: GradientStop, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last GradientStop in the collection.
			 * @returns {Adobe.Indesign.GradientStop}
			 */
			public lastItem(): Adobe.Indesign.GradientStop;
			/**
			 * Returns the middle GradientStop in the collection.
			 * @returns {Adobe.Indesign.GradientStop}
			 */
			public middleItem(): Adobe.Indesign.GradientStop;
			/**
			 * Returns the GradientStop whose index follows the specified 
			 * GradientStop in the collection.
			 * @param {GradientStop} objParam The GradientStop whose index 
			 * comes before the desired GradientStop. 
			 * @returns {Adobe.Indesign.GradientStop}
			 */
			public nextItem(objParam: GradientStop): Adobe.Indesign.GradientStop;
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
			 * Returns the GradientStop with the index previous to the 
			 * specified index.
			 * @param {GradientStop} objParam The index of the GradientStop 
			 * that follows the desired GradientStop.
			 * @returns {Adobe.Indesign.GradientStop}
			 */
			public previousItem(objParam: GradientStop): Adobe.Indesign.GradientStop;
		}
	}
}