/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class AntiAlias extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly CRISP: Adobe.Photoshop.AntiAlias;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly NONE: Adobe.Photoshop.AntiAlias;
			public static readonly SHARP: Adobe.Photoshop.AntiAlias;
			public static readonly SMOOTH: Adobe.Photoshop.AntiAlias;
			public static readonly STRONG: Adobe.Photoshop.AntiAlias;
			/** Constructor */
			public constructor();
		}
	}
}