/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class MeasurementSource extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly MEASURECOUNTTOOL: Adobe.Photoshop.MeasurementSource;
			public static readonly MEASURERULERTOOL: Adobe.Photoshop.MeasurementSource;
			public static readonly MEASURESELECTION: Adobe.Photoshop.MeasurementSource;
			/** Constructor */
			public constructor();
		}
	}
}