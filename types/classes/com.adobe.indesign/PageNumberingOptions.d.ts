/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PageNumberingOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for ABSOLUTE. Numbers all pages in the document 
			 * sequentially.
			 * @type {Adobe.Indesign.PageNumberingOptions}
			 * @readonly
			 */
			public static readonly absolute: Adobe.Indesign.PageNumberingOptions;
			/**
			 * Numbers all pages in the document sequentially.
			 * @type {Adobe.Indesign.PageNumberingOptions}
			 * @readonly
			 */
			public static readonly ABSOLUTE: Adobe.Indesign.PageNumberingOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for SECTION. Numbers pages according to page numbering 
			 * specifications of the section.
			 * @type {Adobe.Indesign.PageNumberingOptions}
			 * @readonly
			 */
			public static readonly section: Adobe.Indesign.PageNumberingOptions;
			/**
			 * Numbers pages according to page numbering specifications of 
			 * the section.
			 * @type {Adobe.Indesign.PageNumberingOptions}
			 * @readonly
			 */
			public static readonly SECTION: Adobe.Indesign.PageNumberingOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}