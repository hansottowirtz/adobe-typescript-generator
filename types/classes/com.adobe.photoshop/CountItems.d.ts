/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** A collection of count items */
		class CountItems extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * a count item
			 * @param {any[]} position position of origin (unit value)
			 * @returns {Adobe.Photoshop.CountItem}
			 */
			public add(position: any[]): Adobe.Photoshop.CountItem;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Photoshop.CountItem}
			 */
			[idx: number]: Adobe.Photoshop.CountItem;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}