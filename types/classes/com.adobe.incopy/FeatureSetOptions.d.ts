/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class FeatureSetOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for JAPANESE. Uses the Japanese feature set and 
			 * defaults.
			 */
			public static readonly japanese: Adobe.Incopy.FeatureSetOptions;
			/** Uses the Japanese feature set and defaults. */
			public static readonly JAPANESE: Adobe.Incopy.FeatureSetOptions;
			/** Alias for RIGHTTOLEFT. Uses the R2L feature set */
			public static readonly righttoleft: Adobe.Incopy.FeatureSetOptions;
			/** Uses the R2L feature set */
			public static readonly RIGHTTOLEFT: Adobe.Incopy.FeatureSetOptions;
			/** Alias for ROMAN. Uses the Roman feature set and defaults. */
			public static readonly roman: Adobe.Incopy.FeatureSetOptions;
			/** Uses the Roman feature set and defaults. */
			public static readonly ROMAN: Adobe.Incopy.FeatureSetOptions;
			/** Constructor */
			public constructor();
		}
	}
}