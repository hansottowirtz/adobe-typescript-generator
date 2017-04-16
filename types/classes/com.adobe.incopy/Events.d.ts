/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Events extends Adobe.Csawlib.CSHostObject {
			/**
			 * The number of objects in the collection.
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Returns any Event in the collection.
			 * @returns {Adobe.Incopy.Event}
			 */
			public anyItem(): Adobe.Incopy.Event;
			/**
			 * Displays the number of elements in the Event.
			 * @returns {number}
			 */
			public count(): number;
			/**
			 * Returns every Event in the collection.
			 * @returns {any}
			 */
			public everyItem(): any;
			/**
			 * Returns the first Event in the collection.
			 * @returns {Adobe.Incopy.Event}
			 */
			public firstItem(): Adobe.Incopy.Event;
			/**
			 * Returns the Event with the specified index or name.
			 * @param {any} indexParam The index or name. Can accept: Long 
			 * Integer or String.
			 * @returns {Adobe.Incopy.Event}
			 */
			public item(indexParam: any): Adobe.Incopy.Event;
			/**
			 * Returns the Event with the specified ID.
			 * @param {number} idParam The ID.
			 * @returns {Adobe.Incopy.Event}
			 */
			public itemByID(idParam: number): Adobe.Incopy.Event;
			/**
			 * Returns the Events within the specified range.
			 * @param {any} fromParam The Event, index, or name at the 
			 * beginning of the range. Can accept: Event, Long Integer or 
			 * String.
			 * @param {any} toParam The Event, index, or name at the end of 
			 * the range. Can accept: Event, Long Integer or String.
			 * @returns {any}
			 */
			public itemByRange(fromParam: any, toParam: any): any;
			/**
			 * Returns the last Event in the collection.
			 * @returns {Adobe.Incopy.Event}
			 */
			public lastItem(): Adobe.Incopy.Event;
			/**
			 * Returns the middle Event in the collection.
			 * @returns {Adobe.Incopy.Event}
			 */
			public middleItem(): Adobe.Incopy.Event;
			/**
			 * Returns the Event whose index follows the specified Event in 
			 * the collection.
			 * @param {Event} objParam The Event whose index comes before 
			 * the desired Event. 
			 * @returns {Adobe.Incopy.Event}
			 */
			public nextItem(objParam: Event): Adobe.Incopy.Event;
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
			 * Returns the Event with the index previous to the specified 
			 * index.
			 * @param {Event} objParam The index of the Event that follows 
			 * the desired Event.
			 * @returns {Adobe.Incopy.Event}
			 */
			public previousItem(objParam: Event): Adobe.Incopy.Event;
		}
	}
}