/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class FontBaselineOption extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Normal baseline. */
			public static readonly NORMALBASELINE: Adobe.Illustrator.FontBaselineOption;
			/** Fauxed subscript baseline. */
			public static readonly SUBSCRIPT: Adobe.Illustrator.FontBaselineOption;
			/** Fauxed superscript baseline. */
			public static readonly SUPERSCRIPT: Adobe.Illustrator.FontBaselineOption;
			/** Constructor */
			public constructor();
		}
	}
}