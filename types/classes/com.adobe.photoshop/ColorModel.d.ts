/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** Color models. */
		class ColorModel extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** CMYK. */
			public static readonly CMYK: Adobe.Photoshop.ColorModel;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Grayscale. */
			public static readonly GRAYSCALE: Adobe.Photoshop.ColorModel;
			/** HSB. */
			public static readonly HSB: Adobe.Photoshop.ColorModel;
			/** Lab. */
			public static readonly LAB: Adobe.Photoshop.ColorModel;
			/** The color model has not yet been assigned. */
			public static readonly NONE: Adobe.Photoshop.ColorModel;
			/** RGB. */
			public static readonly RGB: Adobe.Photoshop.ColorModel;
			/** Constructor */
			public constructor();
		}
	}
}