/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class BlendingSpace extends Adobe.Csawlib.CSEnumBase {
			/** Alias for CMYK. Uses the CMYK profile. */
			public static readonly cmyk: Adobe.Indesign.BlendingSpace;
			/** Uses the CMYK profile. */
			public static readonly CMYK: Adobe.Indesign.BlendingSpace;
			/** Defaults to the current color profile. */
			public static readonly DEFAULT_VALUE: Adobe.Indesign.BlendingSpace;
			/**
			 * Alias for DEFAULT_VALUE. Defaults to the current color 
			 * profile.
			 */
			public static readonly defaultValue: Adobe.Indesign.BlendingSpace;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for RGB. Uses the RGB color profile. */
			public static readonly rgb: Adobe.Indesign.BlendingSpace;
			/** Uses the RGB color profile. */
			public static readonly RGB: Adobe.Indesign.BlendingSpace;
			/** Constructor */
			public constructor();
		}
	}
}