/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PrintFontDownloadMode extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly DOWNLOADCOMPLETE: Adobe.Illustrator.PrintFontDownloadMode;
			public static readonly DOWNLOADNONE: Adobe.Illustrator.PrintFontDownloadMode;
			public static readonly DOWNLOADSUBSET: Adobe.Illustrator.PrintFontDownloadMode;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}