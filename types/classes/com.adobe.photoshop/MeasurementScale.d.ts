/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class MeasurementScale extends Adobe.CsawlibPhotoshop.PhotoshopHostObject {
			/** The logical length this scale equates to. */
			public logicalLength: number;
			/** The logical units for this scale. */
			public logicalUnits: string;
			/** The name of the scale. */
			public name: string;
			/** The length (in pixels) to which this scale equates. */
			public pixelLength: number;
		}
	}
}