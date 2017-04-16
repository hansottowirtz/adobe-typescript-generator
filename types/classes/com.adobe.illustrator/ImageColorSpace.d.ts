/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class ImageColorSpace extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly CMYK: Adobe.Illustrator.ImageColorSpace;
			public static readonly DeviceN: Adobe.Illustrator.ImageColorSpace;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly GrayScale: Adobe.Illustrator.ImageColorSpace;
			public static readonly Indexed: Adobe.Illustrator.ImageColorSpace;
			public static readonly LAB: Adobe.Illustrator.ImageColorSpace;
			public static readonly RGB: Adobe.Illustrator.ImageColorSpace;
			public static readonly Separation: Adobe.Illustrator.ImageColorSpace;
			/** Constructor */
			public constructor();
		}
	}
}