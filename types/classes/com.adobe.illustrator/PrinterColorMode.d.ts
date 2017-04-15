/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** The printer color mode. */
		class PrinterColorMode extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Black and white printer. */
			public static readonly BLACKANDWHITEPRINTER: Adobe.Illustrator.PrinterColorMode;
			/** Color printer. */
			public static readonly COLORPRINTER: Adobe.Illustrator.PrinterColorMode;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Grayscale printer. */
			public static readonly GRAYSCALEPRINTER: Adobe.Illustrator.PrinterColorMode;
			/** Constructor */
			public constructor();
		}
	}
}