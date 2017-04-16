/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class NewDocumentMode extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly BITMAP: Adobe.Photoshop.NewDocumentMode;
			public static readonly CMYK: Adobe.Photoshop.NewDocumentMode;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly GRAYSCALE: Adobe.Photoshop.NewDocumentMode;
			public static readonly LAB: Adobe.Photoshop.NewDocumentMode;
			public static readonly RGB: Adobe.Photoshop.NewDocumentMode;
			/** Constructor */
			public constructor();
		}
	}
}