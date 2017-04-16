/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PageOrientation extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for LANDSCAPE. Landscape. */
			public static readonly landscape: Adobe.Indesign.PageOrientation;
			/** Landscape. */
			public static readonly LANDSCAPE: Adobe.Indesign.PageOrientation;
			/** Alias for PORTRAIT. Portrait. */
			public static readonly portrait: Adobe.Indesign.PageOrientation;
			/** Portrait. */
			public static readonly PORTRAIT: Adobe.Indesign.PageOrientation;
			/** Constructor */
			public constructor();
		}
	}
}