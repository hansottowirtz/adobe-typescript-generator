/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class ImageColorSpace extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** CMYK color space. */
			public static readonly CMYK: Adobe.Illustrator.ImageColorSpace;
			/** DeviceN color space. */
			public static readonly DeviceN: Adobe.Illustrator.ImageColorSpace;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Gray color space. */
			public static readonly GrayScale: Adobe.Illustrator.ImageColorSpace;
			/** Indexed color space. */
			public static readonly Indexed: Adobe.Illustrator.ImageColorSpace;
			/** LAB color space. */
			public static readonly LAB: Adobe.Illustrator.ImageColorSpace;
			/** RGB color space. */
			public static readonly RGB: Adobe.Illustrator.ImageColorSpace;
			/** Separation color space. */
			public static readonly Separation: Adobe.Illustrator.ImageColorSpace;
			/** Constructor */
			public constructor();
		}
	}
}