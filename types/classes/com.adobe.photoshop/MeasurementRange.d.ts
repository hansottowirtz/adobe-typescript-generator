/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class MeasurementRange extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Only active measurements. */
			public static readonly ACTIVEMEASUREMENTS: Adobe.Photoshop.MeasurementRange;
			/** All measurements. */
			public static readonly ALLMEASUREMENTS: Adobe.Photoshop.MeasurementRange;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}