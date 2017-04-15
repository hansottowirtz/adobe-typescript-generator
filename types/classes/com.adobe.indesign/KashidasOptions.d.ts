/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class KashidasOptions extends Adobe.Csawlib.CSEnumBase {
			/** Default kashidas */
			public static readonly DEFAULT_KASHIDAS: Adobe.Indesign.KashidasOptions;
			/** Alias for DEFAULT_KASHIDAS. Default kashidas */
			public static readonly defaultKashidas: Adobe.Indesign.KashidasOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Kashidas off */
			public static readonly KASHIDAS_OFF: Adobe.Indesign.KashidasOptions;
			/** Alias for KASHIDAS_OFF. Kashidas off */
			public static readonly kashidasOff: Adobe.Indesign.KashidasOptions;
			/** Constructor */
			public constructor();
		}
	}
}