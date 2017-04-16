/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ResampleMethod extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly BICUBIC: Adobe.Photoshop.ResampleMethod;
			public static readonly BICUBICSHARPER: Adobe.Photoshop.ResampleMethod;
			public static readonly BICUBICSMOOTHER: Adobe.Photoshop.ResampleMethod;
			public static readonly BILINEAR: Adobe.Photoshop.ResampleMethod;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly NEARESTNEIGHBOR: Adobe.Photoshop.ResampleMethod;
			public static readonly NONE: Adobe.Photoshop.ResampleMethod;
			/** Constructor */
			public constructor();
		}
	}
}