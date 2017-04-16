/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Document Measurement Scale */
		class MeasurementScale extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** the logical length this scale equates to */
			public logicalLength: number;
			/** the logical units for this scale */
			public logicalUnits: string;
			/** the name of this scale */
			public name: string;
			/** the length in pixels this scale equates to */
			public pixelLength: number;
		}
	}
}