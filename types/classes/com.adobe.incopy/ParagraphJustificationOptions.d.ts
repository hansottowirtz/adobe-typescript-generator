/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

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
			/** Alias for NASKH_JUSTIFICATION. Naskh justification */
			public static readonly naskhJustification: Adobe.Incopy.ParagraphJustificationOptions;
			/** Constructor */
			public constructor();
		}
	}
}