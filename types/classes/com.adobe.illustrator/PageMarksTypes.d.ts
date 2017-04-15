/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** The page marks style type. */
		class PageMarksTypes extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Japanese page marks style. */
			public static readonly Japanese: Adobe.Illustrator.PageMarksTypes;
			/** Roman page marks style. */
			public static readonly Roman: Adobe.Illustrator.PageMarksTypes;
			/** Constructor */
			public constructor();
		}
	}
}