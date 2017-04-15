/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The image orientation on the media. */
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