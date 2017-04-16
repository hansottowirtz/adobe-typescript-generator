/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PrinterColorMode extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly BLACKANDWHITEPRINTER: Adobe.Illustrator.PrinterColorMode;
			public static readonly COLORPRINTER: Adobe.Illustrator.PrinterColorMode;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly GRAYSCALEPRINTER: Adobe.Illustrator.PrinterColorMode;
			/** Constructor */
			public constructor();
		}
	}
}