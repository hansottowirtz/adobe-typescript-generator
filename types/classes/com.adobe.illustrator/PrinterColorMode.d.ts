/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PrinterColorMode extends IllustratorEnumBase {
			/** Black and white printer. */
			public static readonly BLACKANDWHITEPRINTER: PrinterColorMode;
			/** Color printer. */
			public static readonly COLORPRINTER: PrinterColorMode;
			public static readonly enumCache: CSEnumSharedCache;
			/** Grayscale printer. */
			public static readonly GRAYSCALEPRINTER: PrinterColorMode;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}