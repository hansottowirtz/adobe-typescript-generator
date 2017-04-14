/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PrinterPostScriptLevelEnum extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** PostScript Level 1. */
			public static readonly PSLEVEL1: PrinterPostScriptLevelEnum;
			/** PostScript Level 2. */
			public static readonly PSLEVEL2: PrinterPostScriptLevelEnum;
			/** PostScript Level 3. */
			public static readonly PSLEVEL3: PrinterPostScriptLevelEnum;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}