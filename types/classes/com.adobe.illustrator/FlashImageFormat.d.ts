/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class FlashImageFormat extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly LOSSLESS: Adobe.Illustrator.FlashImageFormat;
			public static readonly LOSSY: Adobe.Illustrator.FlashImageFormat;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}