/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** The color separation mode. */
		class PrintColorSeparationMode extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** The composite mode. */
			public static readonly COMPOSITE: Adobe.Illustrator.PrintColorSeparationMode;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The host based color separation mode. */
			public static readonly HOSTBASEDSEPARATION: Adobe.Illustrator.PrintColorSeparationMode;
			/** The InRIP color separation mode. */
			public static readonly INRIPSEPARATION: Adobe.Illustrator.PrintColorSeparationMode;
			/** Constructor */
			public constructor();
		}
	}
}