/// <reference path="../../packages/com.adobe.photoshop/index.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class ColorSpaceType extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			public static readonly ADOBERGB: Adobe.Photoshop.ColorSpaceType;
			public static readonly COLORMATCHRGB: Adobe.Photoshop.ColorSpaceType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly PROPHOTORGB: Adobe.Photoshop.ColorSpaceType;
			public static readonly SRGB: Adobe.Photoshop.ColorSpaceType;
			/** Constructor */
			public constructor();
		}
	}
}