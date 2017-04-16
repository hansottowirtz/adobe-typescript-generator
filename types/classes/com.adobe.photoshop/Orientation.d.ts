/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class Orientation extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly LANDSCAPE: Adobe.Photoshop.Orientation;
			public static readonly PORTRAIT: Adobe.Photoshop.Orientation;
			/** Constructor */
			public constructor();
		}
	}
}