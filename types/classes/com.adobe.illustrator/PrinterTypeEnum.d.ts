/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PrinterTypeEnum extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** Non PostScript printer. */
			public static readonly NONPOSTSCRIPTPRINTER: PrinterTypeEnum;
			/** PostScript printer. */
			public static readonly POSTSCRIPTPRINTER: PrinterTypeEnum;
			/** Unknown printer type. */
			public static readonly Unknown: PrinterTypeEnum;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}