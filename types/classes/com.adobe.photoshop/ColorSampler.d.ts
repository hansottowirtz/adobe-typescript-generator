/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** A color sampler in a document. See the color sampler tool. */
		class ColorSampler extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** color of the color sampler */
			public readonly color: Adobe.Photoshop.SolidColor;
			/** position of the color sampler (unit value) */
			public readonly position: any[];
			/**
			 * move the color sampler to a new location
			 * @param {any[]} position position of destination (unit value)
			 */
			public move(position: any[]): void;
			/** delete the object */
			public remove(): void;
		}
	}
}