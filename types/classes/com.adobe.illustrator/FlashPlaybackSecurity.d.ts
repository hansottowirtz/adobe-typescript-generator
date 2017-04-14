/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class FlashPlaybackSecurity extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			public static readonly PlaybackLocal: FlashPlaybackSecurity;
			public static readonly PlaybackNetwork: FlashPlaybackSecurity;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}