/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/**
		 * Method used to reduce color for PNG8 and GIF export formats.
		 */
		class ColorReductionMethod extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly ADAPTIVE: Adobe.Illustrator.ColorReductionMethod;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly PERCEPTUAL: Adobe.Illustrator.ColorReductionMethod;
			public static readonly SELECTIVE: Adobe.Illustrator.ColorReductionMethod;
			public static readonly WEB: Adobe.Illustrator.ColorReductionMethod;
			/** Constructor */
			public constructor();
		}
	}
}