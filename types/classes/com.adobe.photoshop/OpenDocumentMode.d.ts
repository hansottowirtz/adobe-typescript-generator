/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class OpenDocumentMode extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly CMYK: Adobe.Photoshop.OpenDocumentMode;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly GRAYSCALE: Adobe.Photoshop.OpenDocumentMode;
			public static readonly LAB: Adobe.Photoshop.OpenDocumentMode;
			public static readonly RGB: Adobe.Photoshop.OpenDocumentMode;
			/** Constructor */
			public constructor();
		}
	}
}