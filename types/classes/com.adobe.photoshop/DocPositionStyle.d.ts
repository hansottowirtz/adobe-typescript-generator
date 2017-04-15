/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class DocPositionStyle extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Print image centered on page. */
			public static readonly PRINTCENTERED: Adobe.Photoshop.DocPositionStyle;
			/** Resize image to fit on page when printing. */
			public static readonly SIZETOFIT: Adobe.Photoshop.DocPositionStyle;
			/** Print using user defined spacing. */
			public static readonly USERDEFINED: Adobe.Photoshop.DocPositionStyle;
			/** Constructor */
			public constructor();
		}
	}
}