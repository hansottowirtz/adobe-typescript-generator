/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** A collection of notifiers */
		class Notifiers extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** number of elements in the collection */
			public readonly length: number;
			/**
			 * a notifier
			 * @param {string} event id of the event, four characters or a 
			 * unique string
			 * @param {File} eventFile file to execute when the event 
			 * occurs
			 * @param {string} eventClass class id of the event, four 
			 * characters or a unique string
			 */
			public add(event: string, eventFile: File, eventClass: string): Adobe.Photoshop.Notifier;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 */
			public index(idx: number): Adobe.Photoshop.Notifier;
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
			public removeAll(): void;
		}
	}
}