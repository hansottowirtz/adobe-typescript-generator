/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ColorModel extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for MIXEDINKMODEL. Mixed ink color. */
			public static readonly mixedinkmodel: Adobe.Indesign.ColorModel;
			/** Mixed ink color. */
			public static readonly MIXEDINKMODEL: Adobe.Indesign.ColorModel;
			/** Alias for PROCESS. Process color. */
			public static readonly process: Adobe.Indesign.ColorModel;
			/** Process color. */
			public static readonly PROCESS: Adobe.Indesign.ColorModel;
			/** Alias for REGISTRATION. Registration color. */
			public static readonly registration: Adobe.Indesign.ColorModel;
			/** Registration color. */
			public static readonly REGISTRATION: Adobe.Indesign.ColorModel;
			/** Alias for SPOT. Spot color. */
			public static readonly spot: Adobe.Indesign.ColorModel;
			/** Spot color. */
			public static readonly SPOT: Adobe.Indesign.ColorModel;
			/** Constructor */
			public constructor();
		}
	}
}