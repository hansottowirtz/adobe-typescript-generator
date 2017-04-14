/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class ColorDitherMethod extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly DIFFUSION: Adobe.Illustrator.ColorDitherMethod;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly NOISE: Adobe.Illustrator.ColorDitherMethod;
			/** No dithering. */
			public static readonly NOREDUCTION: Adobe.Illustrator.ColorDitherMethod;
			public static readonly PATTERNDITHER: Adobe.Illustrator.ColorDitherMethod;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}