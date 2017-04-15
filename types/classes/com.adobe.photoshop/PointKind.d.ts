/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PointKind extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** The point must be a corner. */
			public static readonly CORNERPOINT: Adobe.Photoshop.PointKind;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The point can be a curve. */
			public static readonly SMOOTHPOINT: Adobe.Photoshop.PointKind;
			/** Constructor */
			public constructor();
		}
	}
}