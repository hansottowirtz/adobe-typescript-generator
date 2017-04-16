/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ColorModel extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly CMYK: Adobe.Photoshop.ColorModel;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly GRAYSCALE: Adobe.Photoshop.ColorModel;
			public static readonly HSB: Adobe.Photoshop.ColorModel;
			public static readonly LAB: Adobe.Photoshop.ColorModel;
			public static readonly NONE: Adobe.Photoshop.ColorModel;
			public static readonly RGB: Adobe.Photoshop.ColorModel;
			/** Constructor */
			public constructor();
		}
	}
}