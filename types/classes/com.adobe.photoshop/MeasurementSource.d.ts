/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The source for recording measurements. */
		class MeasurementSource extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The measure count tool. */
			public static readonly MEASURECOUNTTOOL: Adobe.Photoshop.MeasurementSource;
			/** The measure ruler tool. */
			public static readonly MEASURERULERTOOL: Adobe.Photoshop.MeasurementSource;
			/** The measure selection. */
			public static readonly MEASURESELECTION: Adobe.Photoshop.MeasurementSource;
			/** Constructor */
			public constructor();
		}
	}
}