/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class Intent extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly ABSOLUTECOLORIMETRIC: Adobe.Photoshop.Intent;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly PERCEPTUAL: Adobe.Photoshop.Intent;
			public static readonly RELATIVECOLORIMETRIC: Adobe.Photoshop.Intent;
			public static readonly SATURATION: Adobe.Photoshop.Intent;
			/** Constructor */
			public constructor();
		}
	}
}