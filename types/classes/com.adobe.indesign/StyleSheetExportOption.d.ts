/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class StyleSheetExportOption extends Adobe.Csawlib.CSEnumBase {
			/** embed style sheet. */
			public static readonly EMBEDDED_CSS: Adobe.Indesign.StyleSheetExportOption;
			/** Alias for EMBEDDED_CSS. embed style sheet. */
			public static readonly embeddedCss: Adobe.Indesign.StyleSheetExportOption;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for NONE. no style sheet. */
			public static readonly none: Adobe.Indesign.StyleSheetExportOption;
			/** no style sheet. */
			public static readonly NONE: Adobe.Indesign.StyleSheetExportOption;
			/** Constructor */
			public constructor();
		}
	}
}