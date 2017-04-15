/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class KashidasOptions extends Adobe.Csawlib.CSEnumBase {
			/** Default kashidas */
			public static readonly DEFAULT_KASHIDAS: Adobe.Incopy.KashidasOptions;
			/** Alias for DEFAULT_KASHIDAS. Default kashidas */
			public static readonly defaultKashidas: Adobe.Incopy.KashidasOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Kashidas off */
			public static readonly KASHIDAS_OFF: Adobe.Incopy.KashidasOptions;
			/** Alias for KASHIDAS_OFF. Kashidas off */
			public static readonly kashidasOff: Adobe.Incopy.KashidasOptions;
			/** Constructor */
			public constructor();
		}
	}
}