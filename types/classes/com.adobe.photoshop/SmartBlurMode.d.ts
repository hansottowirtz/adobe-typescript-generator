/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class SmartBlurMode extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly EDGEONLY: Adobe.Photoshop.SmartBlurMode;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly NORMAL: Adobe.Photoshop.SmartBlurMode;
			public static readonly OVERLAYEDGE: Adobe.Photoshop.SmartBlurMode;
			/** Constructor */
			public constructor();
		}
	}
}