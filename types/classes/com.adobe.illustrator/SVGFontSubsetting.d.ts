/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class SVGFontSubsetting extends IllustratorEnumBase {
			public static readonly ALLGLYPHS: SVGFontSubsetting;
			public static readonly COMMONENGLISH: SVGFontSubsetting;
			public static readonly COMMONROMAN: SVGFontSubsetting;
			public static readonly enumCache: CSEnumSharedCache;
			public static readonly GLYPHSUSED: SVGFontSubsetting;
			public static readonly GLYPHSUSEDPLUSENGLISH: SVGFontSubsetting;
			public static readonly GLYPHSUSEDPLUSROMAN: SVGFontSubsetting;
			/** Use system fonts. */
			public static readonly None: SVGFontSubsetting;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}