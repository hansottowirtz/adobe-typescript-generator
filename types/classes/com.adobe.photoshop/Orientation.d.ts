/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class Orientation extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Landscape. */
			public static readonly LANDSCAPE: Adobe.Photoshop.Orientation;
			/** Portrait. */
			public static readonly PORTRAIT: Adobe.Photoshop.Orientation;
			/** Constructor */
			public constructor();
		}
	}
}