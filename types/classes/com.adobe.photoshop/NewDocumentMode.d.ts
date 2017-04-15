/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class NewDocumentMode extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Bitmap. */
			public static readonly BITMAP: Adobe.Photoshop.NewDocumentMode;
			/** CMYK. */
			public static readonly CMYK: Adobe.Photoshop.NewDocumentMode;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Grayscale. */
			public static readonly GRAYSCALE: Adobe.Photoshop.NewDocumentMode;
			/** Lab. */
			public static readonly LAB: Adobe.Photoshop.NewDocumentMode;
			/** RGB. */
			public static readonly RGB: Adobe.Photoshop.NewDocumentMode;
			/** Constructor */
			public constructor();
		}
	}
}