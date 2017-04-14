/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class SVGFontType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Adobe Compact Embedded Font (CEF) */
			public static readonly CEFFONT: Adobe.Illustrator.SVGFontType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly OUTLINEFONT: Adobe.Illustrator.SVGFontType;
			public static readonly SVGFONT: Adobe.Illustrator.SVGFontType;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}