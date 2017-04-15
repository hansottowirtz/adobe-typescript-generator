/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class OpenDocumentMode extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** CMYK. */
			public static readonly CMYK: Adobe.Photoshop.OpenDocumentMode;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Grayscale. */
			public static readonly GRAYSCALE: Adobe.Photoshop.OpenDocumentMode;
			/** Lab. */
			public static readonly LAB: Adobe.Photoshop.OpenDocumentMode;
			/** RGB. */
			public static readonly RGB: Adobe.Photoshop.OpenDocumentMode;
			/** Constructor */
			public constructor();
		}
	}
}