/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class ImageColorSpace extends IllustratorEnumBase {
			/** CMYK color space. */
			public static readonly CMYK: ImageColorSpace;
			/** DeviceN color space. */
			public static readonly DeviceN: ImageColorSpace;
			public static readonly enumCache: CSEnumSharedCache;
			/** Gray color space. */
			public static readonly GrayScale: ImageColorSpace;
			/** Indexed color space. */
			public static readonly Indexed: ImageColorSpace;
			/** LAB color space. */
			public static readonly LAB: ImageColorSpace;
			/** RGB color space. */
			public static readonly RGB: ImageColorSpace;
			/** Separation color space. */
			public static readonly Separation: ImageColorSpace;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}