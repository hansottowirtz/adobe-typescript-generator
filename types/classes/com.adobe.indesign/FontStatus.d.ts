/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class FontStatus extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for FAUXED. The font has been fauxed. */
			public static readonly fauxed: Adobe.Indesign.FontStatus;
			/** The font has been fauxed. */
			public static readonly FAUXED: Adobe.Indesign.FontStatus;
			/** Alias for INSTALLED. The font is installed. */
			public static readonly installed: Adobe.Indesign.FontStatus;
			/** The font is installed. */
			public static readonly INSTALLED: Adobe.Indesign.FontStatus;
			/** The font is not available. */
			public static readonly NOT_AVAILABLE: Adobe.Indesign.FontStatus;
			/** Alias for NOT_AVAILABLE. The font is not available. */
			public static readonly notAvailable: Adobe.Indesign.FontStatus;
			/** Alias for SUBSTITUTED. The font is a substitute. */
			public static readonly substituted: Adobe.Indesign.FontStatus;
			/** The font is a substitute. */
			public static readonly SUBSTITUTED: Adobe.Indesign.FontStatus;
			/** Alias for UNKNOWN. The font's status is unknown. */
			public static readonly unknown: Adobe.Indesign.FontStatus;
			/** The font's status is unknown. */
			public static readonly UNKNOWN: Adobe.Indesign.FontStatus;
			/** Constructor */
			public constructor();
		}
	}
}