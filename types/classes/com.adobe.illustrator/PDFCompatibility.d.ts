/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PDFCompatibility extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Acrobat version 4. */
			public static readonly ACROBAT4: Adobe.Illustrator.PDFCompatibility;
			/** Acrobat version 5. */
			public static readonly ACROBAT5: Adobe.Illustrator.PDFCompatibility;
			/** Acrobat version 6. */
			public static readonly ACROBAT6: Adobe.Illustrator.PDFCompatibility;
			/** Acrobat version 7. */
			public static readonly ACROBAT7: Adobe.Illustrator.PDFCompatibility;
			/** Acrobat version 8. */
			public static readonly ACROBAT8: Adobe.Illustrator.PDFCompatibility;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}