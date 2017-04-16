/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ChangeMode extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly BITMAP: Adobe.Photoshop.ChangeMode;
			public static readonly CMYK: Adobe.Photoshop.ChangeMode;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly GRAYSCALE: Adobe.Photoshop.ChangeMode;
			public static readonly INDEXEDCOLOR: Adobe.Photoshop.ChangeMode;
			public static readonly LAB: Adobe.Photoshop.ChangeMode;
			public static readonly MULTICHANNEL: Adobe.Photoshop.ChangeMode;
			public static readonly RGB: Adobe.Photoshop.ChangeMode;
			/** Constructor */
			public constructor();
		}
	}
}