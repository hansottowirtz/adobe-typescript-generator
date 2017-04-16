/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class PathKind extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly CLIPPINGPATH: Adobe.Photoshop.PathKind;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly NORMALPATH: Adobe.Photoshop.PathKind;
			public static readonly TEXTMASK: Adobe.Photoshop.PathKind;
			public static readonly VECTORMASK: Adobe.Photoshop.PathKind;
			public static readonly WORKPATH: Adobe.Photoshop.PathKind;
			/** Constructor */
			public constructor();
		}
	}
}