/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PDFPrintAllowedEnum extends IllustratorEnumBase {
			public static readonly enumCache: CSEnumSharedCache;
			/** Print high resolution allowed - 128bit. */
			public static readonly PRINT128HIGHRESOLUTION: PDFPrintAllowedEnum;
			/** Print allowed only in low resolution - 128bit. */
			public static readonly PRINT128LOWRESOLUTION: PDFPrintAllowedEnum;
			/** Printing allowed none - 128bit. */
			public static readonly PRINT128NONE: PDFPrintAllowedEnum;
			/** Print high resolution allowed - 40bit. */
			public static readonly PRINT40HIGHRESOLUTION: PDFPrintAllowedEnum;
			/** Printing allowed none - 40bit. */
			public static readonly PRINT40NONE: PDFPrintAllowedEnum;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}