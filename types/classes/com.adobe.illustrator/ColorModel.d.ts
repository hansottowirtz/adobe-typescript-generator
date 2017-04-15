/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** Color model of the custom color. */
		class ColorModel extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Process color (mixed ink) */
			public static readonly PROCESS: Adobe.Illustrator.ColorModel;
			/** Registration color (prints on in all separations) */
			public static readonly REGISTRATION: Adobe.Illustrator.ColorModel;
			/** Spot color (separate ink) */
			public static readonly SPOT: Adobe.Illustrator.ColorModel;
			/** Constructor */
			public constructor();
		}
	}
}