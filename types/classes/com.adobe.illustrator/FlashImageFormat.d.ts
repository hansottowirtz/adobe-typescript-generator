/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class FlashImageFormat extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			public static readonly LOSSLESS: FlashImageFormat;
			public static readonly LOSSY: FlashImageFormat;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}