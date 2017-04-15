/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** The FXG file format version. */
		class FXGVersion extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** FXG version 1.0. */
			public static readonly VERSION1PT0: Adobe.Illustrator.FXGVersion;
			/** Constructor */
			public constructor();
		}
	}
}