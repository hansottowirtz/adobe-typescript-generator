/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PrintOrientation extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly AUTOROTATE: Adobe.Illustrator.PrintOrientation;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly LANDSCAPE: Adobe.Illustrator.PrintOrientation;
			public static readonly PORTRAIT: Adobe.Illustrator.PrintOrientation;
			public static readonly REVERSELANDSCAPE: Adobe.Illustrator.PrintOrientation;
			public static readonly REVERSEPORTRAIT: Adobe.Illustrator.PrintOrientation;
			/** Constructor */
			public constructor();
		}
	}
}