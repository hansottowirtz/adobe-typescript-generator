/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ParagraphJustificationOptions extends Adobe.Csawlib.CSEnumBase {
			/** Arabic justification */
			public static readonly ARABIC_JUSTIFICATION: Adobe.Incopy.ParagraphJustificationOptions;
			/** Alias for ARABIC_JUSTIFICATION. Arabic justification */
			public static readonly arabicJustification: Adobe.Incopy.ParagraphJustificationOptions;
			/** Default justification */
			public static readonly DEFAULT_JUSTIFICATION: Adobe.Incopy.ParagraphJustificationOptions;
			/** Alias for DEFAULT_JUSTIFICATION. Default justification */
			public static readonly defaultJustification: Adobe.Incopy.ParagraphJustificationOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Naskh justification */
			public static readonly NASKH_JUSTIFICATION: Adobe.Incopy.ParagraphJustificationOptions;
			/**
			 * Kashidas. Use naskh justification if you want to also use 
			 * Justifcation Alternates.
			 */
			public static readonly NASKH_KASHIDA_JUSTIFICATION: Adobe.Incopy.ParagraphJustificationOptions;
			/**
			 * Fractional Kashidas. Use naskh justification if you want to 
			 * also use Justifcation Alternates.
			 */
			public static readonly NASKH_KASHIDA_JUSTIFICATION_FRAC: Adobe.Incopy.ParagraphJustificationOptions;
			/** Kashidas without Stretched Connections. */
			public static readonly NASKH_TATWEEL_JUSTIFICATION: Adobe.Incopy.ParagraphJustificationOptions;
			/** Fractional Kashidas without Stretched Connections. */
			public static readonly NASKH_TATWEEL_JUSTIFICATION_FRAC: Adobe.Incopy.ParagraphJustificationOptions;
			/** Alias for NASKH_JUSTIFICATION. Naskh justification */
			public static readonly naskhJustification: Adobe.Incopy.ParagraphJustificationOptions;
			/**
			 * Alias for NASKH_KASHIDA_JUSTIFICATION. Kashidas. Use naskh 
			 * justification if you want to also use Justifcation 
			 * Alternates.
			 */
			public static readonly naskhKashidaJustification: Adobe.Incopy.ParagraphJustificationOptions;
			/**
			 * Alias for NASKH_KASHIDA_JUSTIFICATION_FRAC. Fractional 
			 * Kashidas. Use naskh justification if you want to also use 
			 * Justifcation Alternates.
			 */
			public static readonly naskhKashidaJustificationFrac: Adobe.Incopy.ParagraphJustificationOptions;
			/**
			 * Alias for NASKH_TATWEEL_JUSTIFICATION. Kashidas without 
			 * Stretched Connections.
			 */
			public static readonly naskhTatweelJustification: Adobe.Incopy.ParagraphJustificationOptions;
			/**
			 * Alias for NASKH_TATWEEL_JUSTIFICATION_FRAC. Fractional 
			 * Kashidas without Stretched Connections.
			 */
			public static readonly naskhTatweelJustificationFrac: Adobe.Incopy.ParagraphJustificationOptions;
			/** Constructor */
			public constructor();
		}
	}
}