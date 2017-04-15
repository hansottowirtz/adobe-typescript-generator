/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class OpacityGradientStops extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Creates a new OpacityGradientStop.
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new OpacityGradientStop (Optional)
			 */
			public add(withPropertiesParam: any): Adobe.Indesign.OpacityGradientStop;
			/** Returns any OpacityGradientStop in the collection. */
			public anyItem(): Adobe.Indesign.OpacityGradientStop;
			/** Displays the number of elements in the OpacityGradientStop. */
			public count(): number;
			/** Returns every OpacityGradientStop in the collection. */
			public everyItem(): any;
			/** Returns the first OpacityGradientStop in the collection. */
			public firstItem(): Adobe.Indesign.OpacityGradientStop;
			/**
			 * Returns the OpacityGradientStop with the specified index or 
			 * name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.OpacityGradientStop;
			/**
			 * Returns the OpacityGradientStops within the specified range.
			 * @param {any} fromParam - The OpacityGradientStop, index, or 
			 * name at the beginning of the range. Can accept: 
			 * OpacityGradientStop, Long Integer or String.
			 * @param {any} toParam - The OpacityGradientStop, index, or 
			 * name at the end of the range. Can accept: 
			 * OpacityGradientStop, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last OpacityGradientStop in the collection. */
			public lastItem(): Adobe.Indesign.OpacityGradientStop;
			/** Returns the middle OpacityGradientStop in the collection. */
			public middleItem(): Adobe.Indesign.OpacityGradientStop;
			/**
			 * Returns the OpacityGradientStop whose index follows the 
			 * specified OpacityGradientStop in the collection.
			 * @param {OpacityGradientStop} objParam - The 
			 * OpacityGradientStop whose index comes before the desired 
			 * OpacityGradientStop. 
			 */
			public nextItem(objParam: OpacityGradientStop): Adobe.Indesign.OpacityGradientStop;
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
			 * Returns the OpacityGradientStop with the index previous to 
			 * the specified index.
			 * @param {OpacityGradientStop} objParam - The index of the 
			 * OpacityGradientStop that follows the desired 
			 * OpacityGradientStop.
			 */
			public previousItem(objParam: OpacityGradientStop): Adobe.Indesign.OpacityGradientStop;
		}
	}
}