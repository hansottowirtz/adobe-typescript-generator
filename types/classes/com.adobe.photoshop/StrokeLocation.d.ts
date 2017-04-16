/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class StrokeLocation extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly CENTER: Adobe.Photoshop.StrokeLocation;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly INSIDE: Adobe.Photoshop.StrokeLocation;
			public static readonly OUTSIDE: Adobe.Photoshop.StrokeLocation;
			/** Constructor */
			public constructor();
		}
	}
}