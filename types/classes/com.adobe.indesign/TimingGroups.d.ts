/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TimingGroups extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Adds a new timing group.
			 * @param {any} dynamicTargetParam A page item target that is 
			 * an animation, media, or mso. Can accept: PageItem, Graphic, 
			 * Behavior or MediaItem.
			 * @param {number} delaySecondsParam The time delay in seconds 
			 * for a target. (Optional)
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new TimingGroup (Optional)
			 * @returns {Adobe.Indesign.TimingGroup}
			 */
			public add(dynamicTargetParam: any, delaySecondsParam: number, withPropertiesParam: any): Adobe.Indesign.TimingGroup;
			/**
			 * Returns any TimingGroup in the collection.
			 * @returns {Adobe.Indesign.TimingGroup}
			 */
			public anyItem(): Adobe.Indesign.TimingGroup;
			/**
			 * Displays the number of elements in the TimingGroup.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every TimingGroup in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first TimingGroup in the collection.
			 * @returns {Adobe.Indesign.TimingGroup}
			 */
			public firstItem(): Adobe.Indesign.TimingGroup;
			/**
			 * Returns the TimingGroup with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Indesign.TimingGroup}
			 */
			public item(indexParam: any): Adobe.Indesign.TimingGroup;
			/**
			 * Returns the TimingGroups within the specified range.
			 * @param {any} fromParam The TimingGroup, index, or name at 
			 * the beginning of the range. Can accept: TimingGroup, Long 
			 * Integer or String.
			 * @param {any} toParam The TimingGroup, index, or name at the 
			 * end of the range. Can accept: TimingGroup, Long Integer or 
			 * String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last TimingGroup in the collection.
			 * @returns {Adobe.Indesign.TimingGroup}
			 */
			public lastItem(): Adobe.Indesign.TimingGroup;
			/**
			 * Returns the middle TimingGroup in the collection.
			 * @returns {Adobe.Indesign.TimingGroup}
			 */
			public middleItem(): Adobe.Indesign.TimingGroup;
			/**
			 * Returns the TimingGroup whose index follows the specified 
			 * TimingGroup in the collection.
			 * @param {TimingGroup} objParam The TimingGroup whose index 
			 * comes before the desired TimingGroup. 
			 * @returns {Adobe.Indesign.TimingGroup}
			 */
			public nextItem(objParam: TimingGroup): Adobe.Indesign.TimingGroup;
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
			 * Returns the TimingGroup with the index previous to the 
			 * specified index.
			 * @param {TimingGroup} objParam The index of the TimingGroup 
			 * that follows the desired TimingGroup.
			 * @returns {Adobe.Indesign.TimingGroup}
			 */
			public previousItem(objParam: TimingGroup): Adobe.Indesign.TimingGroup;
		}
	}
}