/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TimingTargets extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Adds a new target item.
			 * @param {any} dynamicTargetParam - A page item target that is 
			 * an animation, media, or mso. Can accept: PageItem, Graphic, 
			 * Behavior or MediaItem.
			 * @param {number} delaySecondsParam - The time delay in 
			 * seconds for a target. (Optional)
			 * @param {any} withPropertiesParam - Initial values for 
			 * properties of the new TimingTarget (Optional)
			 */
			public add(dynamicTargetParam: any, delaySecondsParam: number, withPropertiesParam: any): Adobe.Indesign.TimingTarget;
			/** Returns any TimingTarget in the collection. */
			public anyItem(): Adobe.Indesign.TimingTarget;
			/** Displays the number of elements in the TimingTarget. */
			public count(): number;
			/** Returns every TimingTarget in the collection. */
			public everyItem(): any;
			/** Returns the first TimingTarget in the collection. */
			public firstItem(): Adobe.Indesign.TimingTarget;
			/**
			 * Returns the TimingTarget with the specified index or name.
			 * @param {any} indexParam - The index or name. Can accept: 
			 * Long Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.TimingTarget;
			/**
			 * Returns the TimingTargets within the specified range.
			 * @param {any} fromParam - The TimingTarget, index, or name at 
			 * the beginning of the range. Can accept: TimingTarget, Long 
			 * Integer or String.
			 * @param {any} toParam - The TimingTarget, index, or name at 
			 * the end of the range. Can accept: TimingTarget, Long Integer 
			 * or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last TimingTarget in the collection. */
			public lastItem(): Adobe.Indesign.TimingTarget;
			/** Returns the middle TimingTarget in the collection. */
			public middleItem(): Adobe.Indesign.TimingTarget;
			/**
			 * Returns the TimingTarget whose index follows the specified 
			 * TimingTarget in the collection.
			 * @param {TimingTarget} objParam - The TimingTarget whose 
			 * index comes before the desired TimingTarget. 
			 */
			public nextItem(objParam: TimingTarget): Adobe.Indesign.TimingTarget;
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
			 * Returns the TimingTarget with the index previous to the 
			 * specified index.
			 * @param {TimingTarget} objParam - The index of the 
			 * TimingTarget that follows the desired TimingTarget.
			 */
			public previousItem(objParam: TimingTarget): Adobe.Indesign.TimingTarget;
		}
	}
}