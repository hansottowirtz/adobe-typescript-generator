/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** font size in panels and dialogs */
		class FontSize extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** large size */
			public static readonly LARGE: Adobe.Photoshop.FontSize;
			/** medium size */
			public static readonly MEDIUM: Adobe.Photoshop.FontSize;
			/** small size */
			public static readonly SMALL: Adobe.Photoshop.FontSize;
			/** Constructor */
			public constructor();
		}
	}
}