/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class TextCase extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly ALLCAPS: Adobe.Photoshop.TextCase;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly NORMAL: Adobe.Photoshop.TextCase;
			public static readonly SMALLCAPS: Adobe.Photoshop.TextCase;
			/** Constructor */
			public constructor();
		}
	}
}