/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The measurement upon which to take action. */
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