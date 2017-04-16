/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class FormatOptions extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly OPTIMIZEDBASELINE: Adobe.Photoshop.FormatOptions;
			public static readonly PROGRESSIVE: Adobe.Photoshop.FormatOptions;
			public static readonly STANDARDBASELINE: Adobe.Photoshop.FormatOptions;
			/** Constructor */
			public constructor();
		}
	}
}