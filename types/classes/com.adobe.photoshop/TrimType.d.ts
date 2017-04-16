/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class TrimType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly BOTTOMRIGHT: Adobe.Photoshop.TrimType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly TOPLEFT: Adobe.Photoshop.TrimType;
			public static readonly TRANSPARENT: Adobe.Photoshop.TrimType;
			/** Constructor */
			public constructor();
		}
	}
}