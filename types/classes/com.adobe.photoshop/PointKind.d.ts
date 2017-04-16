/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PointKind extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly CORNERPOINT: Adobe.Photoshop.PointKind;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly SMOOTHPOINT: Adobe.Photoshop.PointKind;
			/** Constructor */
			public constructor();
		}
	}
}