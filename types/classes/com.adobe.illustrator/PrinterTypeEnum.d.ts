/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PrinterTypeEnum extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Non PostScript printer. */
			public static readonly NONPOSTSCRIPTPRINTER: Adobe.Illustrator.PrinterTypeEnum;
			/** PostScript printer. */
			public static readonly POSTSCRIPTPRINTER: Adobe.Illustrator.PrinterTypeEnum;
			/** Unknown printer type. */
			public static readonly Unknown: Adobe.Illustrator.PrinterTypeEnum;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}