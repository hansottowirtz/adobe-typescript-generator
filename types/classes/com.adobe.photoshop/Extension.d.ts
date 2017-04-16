/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class Extension extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly LOWERCASE: Adobe.Photoshop.Extension;
			public static readonly NONE: Adobe.Photoshop.Extension;
			public static readonly UPPERCASE: Adobe.Photoshop.Extension;
			/** Constructor */
			public constructor();
		}
	}
}