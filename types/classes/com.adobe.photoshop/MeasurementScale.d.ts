/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Document Measurement Scale */
		class MeasurementScale extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/**
			 * the logical length this scale equates to
			 * @type {number}
			 */
			public logicalLength: number;
			/**
			 * the logical units for this scale
			 * @type {string}
			 */
			public logicalUnits: string;
			/**
			 * the name of this scale
			 * @type {string}
			 */
			public name: string;
			/**
			 * the length in pixels this scale equates to
			 * @type {number}
			 */
			public pixelLength: number;
		}
	}
}