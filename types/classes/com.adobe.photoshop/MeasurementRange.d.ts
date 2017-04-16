/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class MeasurementRange extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly ACTIVEMEASUREMENTS: Adobe.Photoshop.MeasurementRange;
			public static readonly ALLMEASUREMENTS: Adobe.Photoshop.MeasurementRange;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}