/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class ColorDitherMethod extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly DIFFUSION: Adobe.Illustrator.ColorDitherMethod;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly NOISE: Adobe.Illustrator.ColorDitherMethod;
			public static readonly NOREDUCTION: Adobe.Illustrator.ColorDitherMethod;
			public static readonly PATTERNDITHER: Adobe.Illustrator.ColorDitherMethod;
			/** Constructor */
			public constructor();
		}
	}
}