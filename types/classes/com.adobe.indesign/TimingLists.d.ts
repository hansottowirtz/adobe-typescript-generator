/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TimingLists extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/**
			 * Adds a new event-triggered timing list object.
			 * @param {DynamicTriggerEvents} triggerEventParam Trigger 
			 * Event
			 * @param {any} withPropertiesParam Initial values for 
			 * properties of the new TimingList (Optional)
			 */
			public add(triggerEventParam: DynamicTriggerEvents, withPropertiesParam: any): Adobe.Indesign.TimingList;
			/** Returns any TimingList in the collection. */
			public anyItem(): Adobe.Indesign.TimingList;
			/** Displays the number of elements in the TimingList. */
			public count(): number;
			/** Returns every TimingList in the collection. */
			public everyItem(): any;
			/** Returns the first TimingList in the collection. */
			public firstItem(): Adobe.Indesign.TimingList;
			/**
			 * Returns the TimingList with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Indesign.TimingList;
			/**
			 * Returns the TimingLists within the specified range.
			 * @param {any} fromParam The TimingList, index, or name at the 
			 * beginning of the range. Can accept: TimingList, Long Integer 
			 * or String.
			 * @param {any} toParam The TimingList, index, or name at the 
			 * end of the range. Can accept: TimingList, Long Integer or 
			 * String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last TimingList in the collection. */
			public lastItem(): Adobe.Indesign.TimingList;
			/** Returns the middle TimingList in the collection. */
			public middleItem(): Adobe.Indesign.TimingList;
			/**
			 * Returns the TimingList whose index follows the specified 
			 * TimingList in the collection.
			 * @param {TimingList} objParam The TimingList whose index 
			 * comes before the desired TimingList. 
			 */
			public nextItem(objParam: TimingList): Adobe.Indesign.TimingList;
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
			 * Returns the TimingList with the index previous to the 
			 * specified index.
			 * @param {TimingList} objParam The index of the TimingList 
			 * that follows the desired TimingList.
			 */
			public previousItem(objParam: TimingList): Adobe.Indesign.TimingList;
		}
	}
}