/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class AutoKernType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly MANUAL: Adobe.Photoshop.AutoKernType;
			public static readonly METRICS: Adobe.Photoshop.AutoKernType;
			public static readonly OPTICAL: Adobe.Photoshop.AutoKernType;
			/** Constructor */
			public constructor();
		}
	}
}