/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class OpacityGradientStops extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Creates a new OpacityGradientStop.
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new OpacityGradientStop (Optional)
			 * @returns {Adobe.Indesign.OpacityGradientStop}
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.OpacityGradientStop;
			/**
			 * Returns any OpacityGradientStop in the collection.
			 * @returns {Adobe.Indesign.OpacityGradientStop}
			 */
			public anyItem(): Adobe.Indesign.OpacityGradientStop;
			/**
			 * Displays the number of elements in the OpacityGradientStop.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every OpacityGradientStop in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first OpacityGradientStop in the collection.
			 * @returns {Adobe.Indesign.OpacityGradientStop}
			 */
			public firstItem(): Adobe.Indesign.OpacityGradientStop;
			/**
			 * Returns the OpacityGradientStop with the specified index or 
			 * name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.OpacityGradientStop}
			 */
			public item(indexParam: any): Adobe.Indesign.OpacityGradientStop;
			/**
			 * Returns the OpacityGradientStops within the specified range.
			 * @param {any} fromParam The OpacityGradientStop, index, or 
			 * name at the beginning of the range. Can accept: 
			 * OpacityGradientStop, Long Integer or String.
			 * @param {any} toParam The OpacityGradientStop, index, or name 
			 * at the end of the range. Can accept: OpacityGradientStop, 
			 * Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last OpacityGradientStop in the collection.
			 * @returns {Adobe.Indesign.OpacityGradientStop}
			 */
			public lastItem(): Adobe.Indesign.OpacityGradientStop;
			/**
			 * Returns the middle OpacityGradientStop in the collection.
			 * @returns {Adobe.Indesign.OpacityGradientStop}
			 */
			public middleItem(): Adobe.Indesign.OpacityGradientStop;
			/**
			 * Returns the OpacityGradientStop whose index follows the 
			 * specified OpacityGradientStop in the collection.
			 * @param {OpacityGradientStop} objParam The 
			 * OpacityGradientStop whose index comes before the desired 
			 * OpacityGradientStop. 
			 * @returns {Adobe.Indesign.OpacityGradientStop}
			 */
			public nextItem(objParam: OpacityGradientStop): Adobe.Indesign.OpacityGradientStop;
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
			 * Returns the OpacityGradientStop with the index previous to 
			 * the specified index.
			 * @param {OpacityGradientStop} objParam The index of the 
			 * OpacityGradientStop that follows the desired 
			 * OpacityGradientStop.
			 * @returns {Adobe.Indesign.OpacityGradientStop}
			 */
			public previousItem(objParam: OpacityGradientStop): Adobe.Indesign.OpacityGradientStop;
		}
	}
}