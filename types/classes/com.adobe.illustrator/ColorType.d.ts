/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class ColorType extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly CMYK: Adobe.Illustrator.ColorType;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly GRADIENT: Adobe.Illustrator.ColorType;
			public static readonly GRAY: Adobe.Illustrator.ColorType;
			public static readonly None: Adobe.Illustrator.ColorType;
			public static readonly PATTERN: Adobe.Illustrator.ColorType;
			public static readonly RGB: Adobe.Illustrator.ColorType;
			public static readonly SPOT: Adobe.Illustrator.ColorType;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}