/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ParagraphJustificationOptions extends Adobe.Csawlib.CSEnumBase {
			/** Arabic justification */
			public static readonly ARABIC_JUSTIFICATION: Adobe.Indesign.ParagraphJustificationOptions;
			/** Alias for ARABIC_JUSTIFICATION. Arabic justification */
			public static readonly arabicJustification: Adobe.Indesign.ParagraphJustificationOptions;
			/** Default justification */
			public static readonly DEFAULT_JUSTIFICATION: Adobe.Indesign.ParagraphJustificationOptions;
			/** Alias for DEFAULT_JUSTIFICATION. Default justification */
			public static readonly defaultJustification: Adobe.Indesign.ParagraphJustificationOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Naskh justification */
			public static readonly NASKH_JUSTIFICATION: Adobe.Indesign.ParagraphJustificationOptions;
			/**
			 * Kashidas. Use naskh justification if you want to also use 
			 * Justifcation Alternates.
			 */
			public static readonly NASKH_KASHIDA_JUSTIFICATION: Adobe.Indesign.ParagraphJustificationOptions;
			/**
			 * Fractional Kashidas. Use naskh justification if you want to 
			 * also use Justifcation Alternates.
			 */
			public static readonly NASKH_KASHIDA_JUSTIFICATION_FRAC: Adobe.Indesign.ParagraphJustificationOptions;
			/** Kashidas without Stretched Connections. */
			public static readonly NASKH_TATWEEL_JUSTIFICATION: Adobe.Indesign.ParagraphJustificationOptions;
			/** Fractional Kashidas without Stretched Connections. */
			public static readonly NASKH_TATWEEL_JUSTIFICATION_FRAC: Adobe.Indesign.ParagraphJustificationOptions;
			/** Alias for NASKH_JUSTIFICATION. Naskh justification */
			public static readonly naskhJustification: Adobe.Indesign.ParagraphJustificationOptions;
			/**
			 * Alias for NASKH_KASHIDA_JUSTIFICATION. Kashidas. Use naskh 
			 * justification if you want to also use Justifcation 
			 * Alternates.
			 */
			public static readonly naskhKashidaJustification: Adobe.Indesign.ParagraphJustificationOptions;
			/**
			 * Alias for NASKH_KASHIDA_JUSTIFICATION_FRAC. Fractional 
			 * Kashidas. Use naskh justification if you want to also use 
			 * Justifcation Alternates.
			 */
			public static readonly naskhKashidaJustificationFrac: Adobe.Indesign.ParagraphJustificationOptions;
			/**
			 * Alias for NASKH_TATWEEL_JUSTIFICATION. Kashidas without 
			 * Stretched Connections.
			 */
			public static readonly naskhTatweelJustification: Adobe.Indesign.ParagraphJustificationOptions;
			/**
			 * Alias for NASKH_TATWEEL_JUSTIFICATION_FRAC. Fractional 
			 * Kashidas without Stretched Connections.
			 */
			public static readonly naskhTatweelJustificationFrac: Adobe.Indesign.ParagraphJustificationOptions;
			/** Constructor */
			public constructor();
		}
	}
}