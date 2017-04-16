/// <reference path="../../packages/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PDFCompatibility extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			public static readonly ACROBAT4: Adobe.Illustrator.PDFCompatibility;
			public static readonly ACROBAT5: Adobe.Illustrator.PDFCompatibility;
			public static readonly ACROBAT6: Adobe.Illustrator.PDFCompatibility;
			public static readonly ACROBAT7: Adobe.Illustrator.PDFCompatibility;
			public static readonly ACROBAT8: Adobe.Illustrator.PDFCompatibility;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}