/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SoundPosterTypes extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for NONE. No sound poster. */
			public static readonly none: Adobe.Indesign.SoundPosterTypes;
			/** No sound poster. */
			public static readonly NONE: Adobe.Indesign.SoundPosterTypes;
			/** Proxy image sound poster. */
			public static readonly PROXY_IMAGE: Adobe.Indesign.SoundPosterTypes;
			/** Alias for PROXY_IMAGE. Proxy image sound poster. */
			public static readonly proxyImage: Adobe.Indesign.SoundPosterTypes;
			/** Alias for STANDARD. Generic sound poster. */
			public static readonly standard: Adobe.Indesign.SoundPosterTypes;
			/** Generic sound poster. */
			public static readonly STANDARD: Adobe.Indesign.SoundPosterTypes;
			/** Constructor */
			public constructor();
		}
	}
}