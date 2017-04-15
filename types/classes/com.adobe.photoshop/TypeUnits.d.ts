/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
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