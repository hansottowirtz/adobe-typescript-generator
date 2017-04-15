/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

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
			/** Alias for NASKH_JUSTIFICATION. Naskh justification */
			public static readonly naskhJustification: Adobe.Indesign.ParagraphJustificationOptions;
			/** Constructor */
			public constructor();
		}
	}
}