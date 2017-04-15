/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PageNumberingOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for ABSOLUTE. Numbers all pages in the document 
			 * sequentially.
			 */
			public static readonly absolute: Adobe.Indesign.PageNumberingOptions;
			/** Numbers all pages in the document sequentially. */
			public static readonly ABSOLUTE: Adobe.Indesign.PageNumberingOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for SECTION. Numbers pages according to page numbering 
			 * specifications of the section.
			 */
			public static readonly section: Adobe.Indesign.PageNumberingOptions;
			/**
			 * Numbers pages according to page numbering specifications of 
			 * the section.
			 */
			public static readonly SECTION: Adobe.Indesign.PageNumberingOptions;
			/** Constructor */
			public constructor();
		}
	}
}