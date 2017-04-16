/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class Palette extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly EXACT: Adobe.Photoshop.Palette;
			public static readonly LOCALADAPTIVE: Adobe.Photoshop.Palette;
			public static readonly LOCALPERCEPTUAL: Adobe.Photoshop.Palette;
			public static readonly LOCALSELECTIVE: Adobe.Photoshop.Palette;
			public static readonly MACOSPALETTE: Adobe.Photoshop.Palette;
			public static readonly MASTERADAPTIVE: Adobe.Photoshop.Palette;
			public static readonly MASTERPERCEPTUAL: Adobe.Photoshop.Palette;
			public static readonly MASTERSELECTIVE: Adobe.Photoshop.Palette;
			public static readonly PREVIOUSPALETTE: Adobe.Photoshop.Palette;
			public static readonly UNIFORM: Adobe.Photoshop.Palette;
			public static readonly WEBPALETTE: Adobe.Photoshop.Palette;
			public static readonly WINDOWSPALETTE: Adobe.Photoshop.Palette;
			/** Constructor */
			public constructor();
		}
	}
}