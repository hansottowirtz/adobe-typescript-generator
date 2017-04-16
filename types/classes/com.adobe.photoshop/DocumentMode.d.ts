/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class DocumentMode extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly BITMAP: Adobe.Photoshop.DocumentMode;
			public static readonly CMYK: Adobe.Photoshop.DocumentMode;
			public static readonly DUOTONE: Adobe.Photoshop.DocumentMode;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly GRAYSCALE: Adobe.Photoshop.DocumentMode;
			public static readonly INDEXEDCOLOR: Adobe.Photoshop.DocumentMode;
			public static readonly LAB: Adobe.Photoshop.DocumentMode;
			public static readonly MULTICHANNEL: Adobe.Photoshop.DocumentMode;
			public static readonly RGB: Adobe.Photoshop.DocumentMode;
			/** Constructor */
			public constructor();
		}
	}
}