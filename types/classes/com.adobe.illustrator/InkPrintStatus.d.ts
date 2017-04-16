/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class InkPrintStatus extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly CONVERTINK: Adobe.Illustrator.InkPrintStatus;
			public static readonly DISABLEINK: Adobe.Illustrator.InkPrintStatus;
			public static readonly ENABLEINK: Adobe.Illustrator.InkPrintStatus;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}