/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class FontOpenTypePositionOption extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** OpenType denominator position. */
			public static readonly DENOMINATOR: Adobe.Illustrator.FontOpenTypePositionOption;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** OpenType numerator position. */
			public static readonly NUMERATOR: Adobe.Illustrator.FontOpenTypePositionOption;
			/** Default position. */
			public static readonly OPENTYPEDEFAULT: Adobe.Illustrator.FontOpenTypePositionOption;
			/** OpenType subscript position. */
			public static readonly OPENTYPESUBSCRIPT: Adobe.Illustrator.FontOpenTypePositionOption;
			/** OpenType superscript position. */
			public static readonly OPENTYPESUPERSCRIPT: Adobe.Illustrator.FontOpenTypePositionOption;
			/** Constructor */
			public constructor();
		}
	}
}