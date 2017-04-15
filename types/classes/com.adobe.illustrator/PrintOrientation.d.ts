/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** The artwork printing orientation. */
		class PrintOrientation extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Auto Rotate */
			public static readonly AUTOROTATE: Adobe.Illustrator.PrintOrientation;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Landscape. */
			public static readonly LANDSCAPE: Adobe.Illustrator.PrintOrientation;
			/** Portrait. */
			public static readonly PORTRAIT: Adobe.Illustrator.PrintOrientation;
			/** Reverse landscape. */
			public static readonly REVERSELANDSCAPE: Adobe.Illustrator.PrintOrientation;
			/** Reverse portrait. */
			public static readonly REVERSEPORTRAIT: Adobe.Illustrator.PrintOrientation;
			/** Constructor */
			public constructor();
		}
	}
}