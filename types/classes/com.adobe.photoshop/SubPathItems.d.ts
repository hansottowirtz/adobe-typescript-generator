/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** art sub paths associated with the path item */
		class SubPathItems extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Photoshop.SubPathItem}
			 */
			[idx: number]: Adobe.Photoshop.SubPathItem;
		}
	}
}