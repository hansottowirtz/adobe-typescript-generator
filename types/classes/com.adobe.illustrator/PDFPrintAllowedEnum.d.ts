/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PDFPrintAllowedEnum extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Print high resolution allowed - 128bit. */
			public static readonly PRINT128HIGHRESOLUTION: Adobe.Illustrator.PDFPrintAllowedEnum;
			/** Print allowed only in low resolution - 128bit. */
			public static readonly PRINT128LOWRESOLUTION: Adobe.Illustrator.PDFPrintAllowedEnum;
			/** Printing allowed none - 128bit. */
			public static readonly PRINT128NONE: Adobe.Illustrator.PDFPrintAllowedEnum;
			/** Print high resolution allowed - 40bit. */
			public static readonly PRINT40HIGHRESOLUTION: Adobe.Illustrator.PDFPrintAllowedEnum;
			/** Printing allowed none - 40bit. */
			public static readonly PRINT40NONE: Adobe.Illustrator.PDFPrintAllowedEnum;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}