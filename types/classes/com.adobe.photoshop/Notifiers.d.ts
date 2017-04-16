/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** A collection of notifiers */
		class Notifiers extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * a notifier
			 * @param {string} event id of the event, four characters or a 
			 * unique string
			 * @param {File} eventFile file to execute when the event 
			 * occurs
			 * @param {string} eventClass class id of the event, four 
			 * characters or a unique string
			 * @returns {Adobe.Photoshop.Notifier}
			 */
			public add(event: string, eventFile: File, eventClass: string): Adobe.Photoshop.Notifier;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Photoshop.Notifier}
			 */
			[idx: number]: Adobe.Photoshop.Notifier;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}