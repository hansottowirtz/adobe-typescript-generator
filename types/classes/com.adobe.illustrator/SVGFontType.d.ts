/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** What font type to include with the file? */
		class SVGFontType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Adobe Compact Embedded Font (CEF) */
			public static readonly CEFFONT: Adobe.Illustrator.SVGFontType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly OUTLINEFONT: Adobe.Illustrator.SVGFontType;
			public static readonly SVGFONT: Adobe.Illustrator.SVGFontType;
			/** Constructor */
			public constructor();
		}
	}
}