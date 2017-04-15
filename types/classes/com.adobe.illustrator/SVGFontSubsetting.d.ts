/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** What fonts to include with the file? */
		class SVGFontSubsetting extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly ALLGLYPHS: Adobe.Illustrator.SVGFontSubsetting;
			public static readonly COMMONENGLISH: Adobe.Illustrator.SVGFontSubsetting;
			public static readonly COMMONROMAN: Adobe.Illustrator.SVGFontSubsetting;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly GLYPHSUSED: Adobe.Illustrator.SVGFontSubsetting;
			public static readonly GLYPHSUSEDPLUSENGLISH: Adobe.Illustrator.SVGFontSubsetting;
			public static readonly GLYPHSUSEDPLUSROMAN: Adobe.Illustrator.SVGFontSubsetting;
			/** Use system fonts. */
			public static readonly None: Adobe.Illustrator.SVGFontSubsetting;
			/** Constructor */
			public constructor();
		}
	}
}