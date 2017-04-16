/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class Dither extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly DIFFUSION: Adobe.Photoshop.Dither;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly NOISE: Adobe.Photoshop.Dither;
			public static readonly NONE: Adobe.Photoshop.Dither;
			public static readonly PATTERN: Adobe.Photoshop.Dither;
			/** Constructor */
			public constructor();
		}
	}
}