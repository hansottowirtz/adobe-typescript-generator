/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The measurement unit for type. */
		class TypeUnits extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Millimeters. */
			public static readonly MM: Adobe.Photoshop.TypeUnits;
			/** Pixels. */
			public static readonly PIXELS: Adobe.Photoshop.TypeUnits;
			/** Points. */
			public static readonly POINTS: Adobe.Photoshop.TypeUnits;
			/** Constructor */
			public constructor();
		}
	}
}