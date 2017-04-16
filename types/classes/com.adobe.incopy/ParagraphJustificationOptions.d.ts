/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ParagraphJustificationOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Arabic justification
			 * @type {Adobe.Incopy.ParagraphJustificationOptions}
			 * @readonly
			 */
			public static readonly ARABIC_JUSTIFICATION: Adobe.Incopy.ParagraphJustificationOptions;
			/**
			 * Alias for ARABIC_JUSTIFICATION. Arabic justification
			 * @type {Adobe.Incopy.ParagraphJustificationOptions}
			 * @readonly
			 */
			public static readonly arabicJustification: Adobe.Incopy.ParagraphJustificationOptions;
			/**
			 * Default justification
			 * @type {Adobe.Incopy.ParagraphJustificationOptions}
			 * @readonly
			 */
			public static readonly DEFAULT_JUSTIFICATION: Adobe.Incopy.ParagraphJustificationOptions;
			/**
			 * Alias for DEFAULT_JUSTIFICATION. Default justification
			 * @type {Adobe.Incopy.ParagraphJustificationOptions}
			 * @readonly
			 */
			public static readonly defaultJustification: Adobe.Incopy.ParagraphJustificationOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Naskh justification
			 * @type {Adobe.Incopy.ParagraphJustificationOptions}
			 * @readonly
			 */
			public static readonly NASKH_JUSTIFICATION: Adobe.Incopy.ParagraphJustificationOptions;
			/**
			 * Kashidas. Use naskh justification if you want to also use 
			 * Justifcation Alternates.
			 * @type {Adobe.Incopy.ParagraphJustificationOptions}
			 * @readonly
			 */
			public static readonly NASKH_KASHIDA_JUSTIFICATION: Adobe.Incopy.ParagraphJustificationOptions;
			/**
			 * Fractional Kashidas. Use naskh justification if you want to 
			 * also use Justifcation Alternates.
			 * @type {Adobe.Incopy.ParagraphJustificationOptions}
			 * @readonly
			 */
			public static readonly NASKH_KASHIDA_JUSTIFICATION_FRAC: Adobe.Incopy.ParagraphJustificationOptions;
			/**
			 * Kashidas without Stretched Connections.
			 * @type {Adobe.Incopy.ParagraphJustificationOptions}
			 * @readonly
			 */
			public static readonly NASKH_TATWEEL_JUSTIFICATION: Adobe.Incopy.ParagraphJustificationOptions;
			/**
			 * Fractional Kashidas without Stretched Connections.
			 * @type {Adobe.Incopy.ParagraphJustificationOptions}
			 * @readonly
			 */
			public static readonly NASKH_TATWEEL_JUSTIFICATION_FRAC: Adobe.Incopy.ParagraphJustificationOptions;
			/**
			 * Alias for NASKH_JUSTIFICATION. Naskh justification
			 * @type {Adobe.Incopy.ParagraphJustificationOptions}
			 * @readonly
			 */
			public static readonly naskhJustification: Adobe.Incopy.ParagraphJustificationOptions;
			/**
			 * Alias for NASKH_KASHIDA_JUSTIFICATION. Kashidas. Use naskh 
			 * justification if you want to also use Justifcation 
			 * Alternates.
			 * @type {Adobe.Incopy.ParagraphJustificationOptions}
			 * @readonly
			 */
			public static readonly naskhKashidaJustification: Adobe.Incopy.ParagraphJustificationOptions;
			/**
			 * Alias for NASKH_KASHIDA_JUSTIFICATION_FRAC. Fractional 
			 * Kashidas. Use naskh justification if you want to also use 
			 * Justifcation Alternates.
			 * @type {Adobe.Incopy.ParagraphJustificationOptions}
			 * @readonly
			 */
			public static readonly naskhKashidaJustificationFrac: Adobe.Incopy.ParagraphJustificationOptions;
			/**
			 * Alias for NASKH_TATWEEL_JUSTIFICATION. Kashidas without 
			 * Stretched Connections.
			 * @type {Adobe.Incopy.ParagraphJustificationOptions}
			 * @readonly
			 */
			public static readonly naskhTatweelJustification: Adobe.Incopy.ParagraphJustificationOptions;
			/**
			 * Alias for NASKH_TATWEEL_JUSTIFICATION_FRAC. Fractional 
			 * Kashidas without Stretched Connections.
			 * @type {Adobe.Incopy.ParagraphJustificationOptions}
			 * @readonly
			 */
			public static readonly naskhTatweelJustificationFrac: Adobe.Incopy.ParagraphJustificationOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}