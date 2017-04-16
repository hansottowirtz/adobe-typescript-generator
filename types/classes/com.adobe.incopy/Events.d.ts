/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Events extends Adobe.Csawlib.CSHostObject {
			/** The number of objects in the collection. */
			public readonly length: number;
			/** Returns any Event in the collection. */
			public anyItem(): Adobe.Incopy.Event;
			/** Displays the number of elements in the Event. */
			public count(): number;
			/** Returns every Event in the collection. */
			public everyItem(): any;
			/** Returns the first Event in the collection. */
			public firstItem(): Adobe.Incopy.Event;
			/**
			 * Returns the Event with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 */
			public item(indexParam: any): Adobe.Incopy.Event;
			/**
			 * Returns the Event with the specified ID.
			 * @param {number} idParam The ID.
			 */
			public itemByID(idParam: number): Adobe.Incopy.Event;
			/**
			 * Returns the Events within the specified range.
			 * @param {any} fromParam The Event, index, or name at the 
			 * beginning of the range. Can accept: Event, Long Integer or 
			 * String.
			 * @param {any} toParam The Event, index, or name at the end of 
			 * the range. Can accept: Event, Long Integer or String.
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/** Returns the last Event in the collection. */
			public lastItem(): Adobe.Incopy.Event;
			/** Returns the middle Event in the collection. */
			public middleItem(): Adobe.Incopy.Event;
			/**
			 * Returns the Event whose index follows the specified Event in 
			 * the collection.
			 * @param {Event} objParam The Event whose index comes before 
			 * the desired Event. 
			 */
			public nextItem(objParam: Event): Adobe.Incopy.Event;
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
			 * Returns the Event with the index previous to the specified 
			 * index.
			 * @param {Event} objParam The index of the Event that follows 
			 * the desired Event.
			 */
			public previousItem(objParam: Event): Adobe.Incopy.Event;
		}
	}
}