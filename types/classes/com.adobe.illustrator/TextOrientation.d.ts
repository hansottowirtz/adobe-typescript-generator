/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** The orientation. */
		class TextOrientation extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Horizontal orientation. */
			public static readonly HORIZONTAL: Adobe.Illustrator.TextOrientation;
			/** Vertical orientation. */
			public static readonly VERTICAL: Adobe.Illustrator.TextOrientation;
			/** Constructor */
			public constructor();
		}
	}
}