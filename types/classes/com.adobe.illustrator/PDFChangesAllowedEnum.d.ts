/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.illustrator/index.d.ts"/>
declare namespace Adobe {
	namespace Illustrator {
		class PDFChangesAllowedEnum extends IllustratorEnumBase {
			/** Any changes allowed except extracting of pages- 128bit. */
			public static readonly CHANGE128ANYCHANGES: PDFChangesAllowedEnum;
			/** Comment allowed - 128bit. */
			public static readonly CHANGE128COMMENTING: PDFChangesAllowedEnum;
			/** Editing page allowed - 128bit. */
			public static readonly CHANGE128EDITPAGE: PDFChangesAllowedEnum;
			/** Filling in of form field and signing allowed - 128bit. */
			public static readonly CHANGE128FILLFORM: PDFChangesAllowedEnum;
			/** No changes allowed - 128bit. */
			public static readonly CHANGE128NONE: PDFChangesAllowedEnum;
			/** Any changes allowed except extracting of pages- 40bit. */
			public static readonly CHANGE40ANYCHANGES: PDFChangesAllowedEnum;
			/** Comment allowed - 40bit. */
			public static readonly CHANGE40COMMENTING: PDFChangesAllowedEnum;
			/** No changes allowed - 40bit. */
			public static readonly CHANGE40NONE: PDFChangesAllowedEnum;
			/** Page layout allowed - 40bit. */
			public static readonly CHANGE40PAGELAYOUT: PDFChangesAllowedEnum;
			public static readonly enumCache: CSEnumSharedCache;
			/** Constructor */
			public constructor(ho: HostObject, _enum: number);
		}
	}
}