/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class FlashPlaybackSecurity extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly PlaybackLocal: Adobe.Illustrator.FlashPlaybackSecurity;
			public static readonly PlaybackNetwork: Adobe.Illustrator.FlashPlaybackSecurity;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}