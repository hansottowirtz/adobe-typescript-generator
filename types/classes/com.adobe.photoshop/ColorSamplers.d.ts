/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** A collection of color samplers */
		class ColorSamplers extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * number of elements in the collection
			 * @type {number}
			 * @readonly
			 */
			public readonly length: number;
			/**
			 * a color sampler
			 * @param {any[]} position position of origin (unit value)
			 * @returns {Adobe.Photoshop.ColorSampler}
			 */
			public add(position: any[]): Adobe.Photoshop.ColorSampler;
			/**
			 * Get the element in the collection at the provided index.
			 * @param {number} idx
			 * @returns {Adobe.Photoshop.ColorSampler}
			 */
			[idx: number]: Adobe.Photoshop.ColorSampler;
			/**
			 * @returns {void}
			 */
			public removeAll(): void;
		}
	}
}