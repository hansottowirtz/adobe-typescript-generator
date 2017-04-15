/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class Units extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Centimeters. */
			public static readonly CM: Adobe.Photoshop.Units;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Inches. */
			public static readonly INCHES: Adobe.Photoshop.Units;
			/** Millimeters. */
			public static readonly MM: Adobe.Photoshop.Units;
			/** Percent. */
			public static readonly PERCENT: Adobe.Photoshop.Units;
			/** Picas. */
			public static readonly PICAS: Adobe.Photoshop.Units;
			/** Pixels. */
			public static readonly PIXELS: Adobe.Photoshop.Units;
			/** Points. */
			public static readonly POINTS: Adobe.Photoshop.Units;
			/** Constructor */
			public constructor();
		}
	}
}