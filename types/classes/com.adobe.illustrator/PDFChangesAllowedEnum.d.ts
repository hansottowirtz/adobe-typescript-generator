/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class PDFChangesAllowedEnum extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/** Any changes allowed except extracting of pages- 128bit. */
			public static readonly CHANGE128ANYCHANGES: Adobe.Illustrator.PDFChangesAllowedEnum;
			/** Comment allowed - 128bit. */
			public static readonly CHANGE128COMMENTING: Adobe.Illustrator.PDFChangesAllowedEnum;
			/** Editing page allowed - 128bit. */
			public static readonly CHANGE128EDITPAGE: Adobe.Illustrator.PDFChangesAllowedEnum;
			/** Filling in of form field and signing allowed - 128bit. */
			public static readonly CHANGE128FILLFORM: Adobe.Illustrator.PDFChangesAllowedEnum;
			/** No changes allowed - 128bit. */
			public static readonly CHANGE128NONE: Adobe.Illustrator.PDFChangesAllowedEnum;
			/** Any changes allowed except extracting of pages- 40bit. */
			public static readonly CHANGE40ANYCHANGES: Adobe.Illustrator.PDFChangesAllowedEnum;
			/** Comment allowed - 40bit. */
			public static readonly CHANGE40COMMENTING: Adobe.Illustrator.PDFChangesAllowedEnum;
			/** No changes allowed - 40bit. */
			public static readonly CHANGE40NONE: Adobe.Illustrator.PDFChangesAllowedEnum;
			/** Page layout allowed - 40bit. */
			public static readonly CHANGE40PAGELAYOUT: Adobe.Illustrator.PDFChangesAllowedEnum;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}