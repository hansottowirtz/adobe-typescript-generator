/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class FeatureSetOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for JAPANESE. Uses the Japanese feature set and 
			 * defaults.
			 */
			public static readonly japanese: Adobe.Indesign.FeatureSetOptions;
			/** Uses the Japanese feature set and defaults. */
			public static readonly JAPANESE: Adobe.Indesign.FeatureSetOptions;
			/** Alias for RIGHTTOLEFT. Uses the R2L feature set */
			public static readonly righttoleft: Adobe.Indesign.FeatureSetOptions;
			/** Uses the R2L feature set */
			public static readonly RIGHTTOLEFT: Adobe.Indesign.FeatureSetOptions;
			/** Alias for ROMAN. Uses the Roman feature set and defaults. */
			public static readonly roman: Adobe.Indesign.FeatureSetOptions;
			/** Uses the Roman feature set and defaults. */
			public static readonly ROMAN: Adobe.Indesign.FeatureSetOptions;
			/** Constructor */
			public constructor();
		}
	}
}