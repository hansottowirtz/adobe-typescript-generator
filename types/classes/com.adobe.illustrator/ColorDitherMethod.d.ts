/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/**
		 * Method used to dither colors for PNG8 and GIF export 
		 * formats.
		 */
		class ColorDitherMethod extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly DIFFUSION: Adobe.Illustrator.ColorDitherMethod;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly NOISE: Adobe.Illustrator.ColorDitherMethod;
			/** No dithering. */
			public static readonly NOREDUCTION: Adobe.Illustrator.ColorDitherMethod;
			public static readonly PATTERNDITHER: Adobe.Illustrator.ColorDitherMethod;
			/** Constructor */
			public constructor();
		}
	}
}