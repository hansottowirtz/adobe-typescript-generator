/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Guides associated with the document */
		class Guides extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * a guide
			 * @param {Adobe.Photoshop.Direction} direction indicates 
			 * whether the guide is vertical or horizontal
			 * @param {any} coordinate location of the guide from origin of 
			 * image
			 * @returns {Adobe.Photoshop.Guide}
			 */
			public add(direction: Adobe.Photoshop.Direction, coordinate: any): Adobe.Photoshop.Guide;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Photoshop.Guide}
			 */
			[idx: number]: Adobe.Photoshop.Guide;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}