/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ParagraphJustificationOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Arabic justification
			 * @type {Adobe.Indesign.ParagraphJustificationOptions}
			 * @readonly
			 */
			public static readonly ARABIC_JUSTIFICATION: Adobe.Indesign.ParagraphJustificationOptions;
			/**
			 * Alias for ARABIC_JUSTIFICATION. Arabic justification
			 * @type {Adobe.Indesign.ParagraphJustificationOptions}
			 * @readonly
			 */
			public static readonly arabicJustification: Adobe.Indesign.ParagraphJustificationOptions;
			/**
			 * Default justification
			 * @type {Adobe.Indesign.ParagraphJustificationOptions}
			 * @readonly
			 */
			public static readonly DEFAULT_JUSTIFICATION: Adobe.Indesign.ParagraphJustificationOptions;
			/**
			 * Alias for DEFAULT_JUSTIFICATION. Default justification
			 * @type {Adobe.Indesign.ParagraphJustificationOptions}
			 * @readonly
			 */
			public static readonly defaultJustification: Adobe.Indesign.ParagraphJustificationOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Naskh justification
			 * @type {Adobe.Indesign.ParagraphJustificationOptions}
			 * @readonly
			 */
			public static readonly NASKH_JUSTIFICATION: Adobe.Indesign.ParagraphJustificationOptions;
			/**
			 * Kashidas. Use naskh justification if you want to also use 
			 * Justifcation Alternates.
			 * @type {Adobe.Indesign.ParagraphJustificationOptions}
			 * @readonly
			 */
			public static readonly NASKH_KASHIDA_JUSTIFICATION: Adobe.Indesign.ParagraphJustificationOptions;
			/**
			 * Fractional Kashidas. Use naskh justification if you want to 
			 * also use Justifcation Alternates.
			 * @type {Adobe.Indesign.ParagraphJustificationOptions}
			 * @readonly
			 */
			public static readonly NASKH_KASHIDA_JUSTIFICATION_FRAC: Adobe.Indesign.ParagraphJustificationOptions;
			/**
			 * Kashidas without Stretched Connections.
			 * @type {Adobe.Indesign.ParagraphJustificationOptions}
			 * @readonly
			 */
			public static readonly NASKH_TATWEEL_JUSTIFICATION: Adobe.Indesign.ParagraphJustificationOptions;
			/**
			 * Fractional Kashidas without Stretched Connections.
			 * @type {Adobe.Indesign.ParagraphJustificationOptions}
			 * @readonly
			 */
			public static readonly NASKH_TATWEEL_JUSTIFICATION_FRAC: Adobe.Indesign.ParagraphJustificationOptions;
			/**
			 * Alias for NASKH_JUSTIFICATION. Naskh justification
			 * @type {Adobe.Indesign.ParagraphJustificationOptions}
			 * @readonly
			 */
			public static readonly naskhJustification: Adobe.Indesign.ParagraphJustificationOptions;
			/**
			 * Alias for NASKH_KASHIDA_JUSTIFICATION. Kashidas. Use naskh 
			 * justification if you want to also use Justifcation 
			 * Alternates.
			 * @type {Adobe.Indesign.ParagraphJustificationOptions}
			 * @readonly
			 */
			public static readonly naskhKashidaJustification: Adobe.Indesign.ParagraphJustificationOptions;
			/**
			 * Alias for NASKH_KASHIDA_JUSTIFICATION_FRAC. Fractional 
			 * Kashidas. Use naskh justification if you want to also use 
			 * Justifcation Alternates.
			 * @type {Adobe.Indesign.ParagraphJustificationOptions}
			 * @readonly
			 */
			public static readonly naskhKashidaJustificationFrac: Adobe.Indesign.ParagraphJustificationOptions;
			/**
			 * Alias for NASKH_TATWEEL_JUSTIFICATION. Kashidas without 
			 * Stretched Connections.
			 * @type {Adobe.Indesign.ParagraphJustificationOptions}
			 * @readonly
			 */
			public static readonly naskhTatweelJustification: Adobe.Indesign.ParagraphJustificationOptions;
			/**
			 * Alias for NASKH_TATWEEL_JUSTIFICATION_FRAC. Fractional 
			 * Kashidas without Stretched Connections.
			 * @type {Adobe.Indesign.ParagraphJustificationOptions}
			 * @readonly
			 */
			public static readonly naskhTatweelJustificationFrac: Adobe.Indesign.ParagraphJustificationOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}