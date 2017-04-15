/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** The printing bounds type. */
		class PrintingBounds extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Use artboard bounds. */
			public static readonly ARTBOARDBOUNDS: Adobe.Illustrator.PrintingBounds;
			/** Use artwork bounds. */
			public static readonly ARTWORKBOUNDS: Adobe.Illustrator.PrintingBounds;
			/** Use crop bounds. */
			public static readonly CROPBOUNDS: Adobe.Illustrator.PrintingBounds;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}