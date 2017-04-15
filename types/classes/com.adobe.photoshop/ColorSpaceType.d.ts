/// <reference path="../../namespaces/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		/** The type of color space. */
		class ColorSpaceType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/** Use the Adobe RGB color space. */
			public static readonly ADOBERGB: Adobe.Photoshop.ColorSpaceType;
			/** Use the ColorMatch RGB color space. */
			public static readonly COLORMATCHRGB: Adobe.Photoshop.ColorSpaceType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Use the ProPhoto RGB color space. */
			public static readonly PROPHOTORGB: Adobe.Photoshop.ColorSpaceType;
			/** Use the sRGB color space. */
			public static readonly SRGB: Adobe.Photoshop.ColorSpaceType;
			/** Constructor */
			public constructor();
		}
	}
}