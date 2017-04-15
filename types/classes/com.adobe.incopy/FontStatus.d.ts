/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class FontStatus extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for FAUXED. The font has been fauxed. */
			public static readonly fauxed: Adobe.Incopy.FontStatus;
			/** The font has been fauxed. */
			public static readonly FAUXED: Adobe.Incopy.FontStatus;
			/** Alias for INSTALLED. The font is installed. */
			public static readonly installed: Adobe.Incopy.FontStatus;
			/** The font is installed. */
			public static readonly INSTALLED: Adobe.Incopy.FontStatus;
			/** The font is not available. */
			public static readonly NOT_AVAILABLE: Adobe.Incopy.FontStatus;
			/** Alias for NOT_AVAILABLE. The font is not available. */
			public static readonly notAvailable: Adobe.Incopy.FontStatus;
			/** Alias for SUBSTITUTED. The font is a substitute. */
			public static readonly substituted: Adobe.Incopy.FontStatus;
			/** The font is a substitute. */
			public static readonly SUBSTITUTED: Adobe.Incopy.FontStatus;
			/** Alias for UNKNOWN. The font's status is unknown. */
			public static readonly unknown: Adobe.Incopy.FontStatus;
			/** The font's status is unknown. */
			public static readonly UNKNOWN: Adobe.Incopy.FontStatus;
			/** Constructor */
			public constructor();
		}
	}
}