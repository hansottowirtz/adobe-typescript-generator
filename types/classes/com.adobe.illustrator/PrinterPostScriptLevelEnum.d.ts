/// <reference path="../../namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		/** The PostScript levels supported by various printers. */
		class PrinterPostScriptLevelEnum extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** PostScript Level 1. */
			public static readonly PSLEVEL1: Adobe.Illustrator.PrinterPostScriptLevelEnum;
			/** PostScript Level 2. */
			public static readonly PSLEVEL2: Adobe.Illustrator.PrinterPostScriptLevelEnum;
			/** PostScript Level 3. */
			public static readonly PSLEVEL3: Adobe.Illustrator.PrinterPostScriptLevelEnum;
			/** Constructor */
			public constructor();
		}
	}
}