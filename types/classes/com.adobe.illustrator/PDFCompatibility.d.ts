/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PDFCompatibility extends IllustratorEnumBase {
			/** Acrobat version 4. */
			public static readonly ACROBAT4: PDFCompatibility;
			/** Acrobat version 5. */
			public static readonly ACROBAT5: PDFCompatibility;
			/** Acrobat version 6. */
			public static readonly ACROBAT6: PDFCompatibility;
			/** Acrobat version 7. */
			public static readonly ACROBAT7: PDFCompatibility;
			/** Acrobat version 8. */
			public static readonly ACROBAT8: PDFCompatibility;
			public static readonly enumCache: CSEnumSharedCache;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}