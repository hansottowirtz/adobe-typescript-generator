/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class SVGFontType extends IllustratorEnumBase {
			/** Adobe Compact Embedded Font (CEF) */
			public static readonly CEFFONT: SVGFontType;
			public static readonly enumCache: CSEnumSharedCache;
			public static readonly OUTLINEFONT: SVGFontType;
			public static readonly SVGFONT: SVGFontType;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}