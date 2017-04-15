/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class InkPrintStatus extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Convert to process color during print. */
			public static readonly CONVERTINK: Adobe.Illustrator.InkPrintStatus;
			/** Disable the ink during print. */
			public static readonly DISABLEINK: Adobe.Illustrator.InkPrintStatus;
			/** Enable the ink during print. */
			public static readonly ENABLEINK: Adobe.Illustrator.InkPrintStatus;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}