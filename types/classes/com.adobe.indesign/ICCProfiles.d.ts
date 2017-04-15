/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ICCProfiles extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Includes all ICC profiles. */
			public static readonly INCLUDE_ALL: Adobe.Indesign.ICCProfiles;
			/** Does not include ICC profiles. */
			public static readonly INCLUDE_NONE: Adobe.Indesign.ICCProfiles;
			/** Includes RGB and tagged source CMYK profiles. */
			public static readonly INCLUDE_RGB_AND_TAGGED: Adobe.Indesign.ICCProfiles;
			/** Includes tagged source profiles. */
			public static readonly INCLUDE_TAGGED: Adobe.Indesign.ICCProfiles;
			/** Alias for INCLUDE_ALL. Includes all ICC profiles. */
			public static readonly includeAll: Adobe.Indesign.ICCProfiles;
			/** Alias for INCLUDE_NONE. Does not include ICC profiles. */
			public static readonly includeNone: Adobe.Indesign.ICCProfiles;
			/**
			 * Alias for INCLUDE_RGB_AND_TAGGED. Includes RGB and tagged 
			 * source CMYK profiles.
			 */
			public static readonly includeRgbAndTagged: Adobe.Indesign.ICCProfiles;
			/** Alias for INCLUDE_TAGGED. Includes tagged source profiles. */
			public static readonly includeTagged: Adobe.Indesign.ICCProfiles;
			/** Constructor */
			public constructor();
		}
	}
}