/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class SVGDTDVersion extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** SVG 1.0. */
			public static readonly SVG1_0: SVGDTDVersion;
			/** SVG 1.1. */
			public static readonly SVG1_1: SVGDTDVersion;
			/** SVG Basic 1.1. */
			public static readonly SVGBASIC1_1: SVGDTDVersion;
			/** SVG Tiny 1.1. */
			public static readonly SVGTINY1_1: SVGDTDVersion;
			/** SVG Tiny 1.1 Plus. */
			public static readonly SVGTINY1_1PLUS: SVGDTDVersion;
			/** SVG Tiny 1.2. */
			public static readonly SVGTINY1_2: SVGDTDVersion;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}