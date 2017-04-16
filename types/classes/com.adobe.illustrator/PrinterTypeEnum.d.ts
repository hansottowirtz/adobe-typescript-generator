/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PrinterTypeEnum extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			public static readonly NONPOSTSCRIPTPRINTER: Adobe.Illustrator.PrinterTypeEnum;
			public static readonly POSTSCRIPTPRINTER: Adobe.Illustrator.PrinterTypeEnum;
			public static readonly Unknown: Adobe.Illustrator.PrinterTypeEnum;
			/** Constructor */
			public constructor();
		}
	}
}