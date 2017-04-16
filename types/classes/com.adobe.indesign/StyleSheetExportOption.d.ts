/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class StyleSheetExportOption extends Adobe.Csawlib.CSEnumBase {
			/**
			 * embed style sheet.
			 * @type {Adobe.Indesign.StyleSheetExportOption}
			 * @readonly
			 */
			public static readonly EMBEDDED_CSS: Adobe.Indesign.StyleSheetExportOption;
			/**
			 * Alias for EMBEDDED_CSS. embed style sheet.
			 * @type {Adobe.Indesign.StyleSheetExportOption}
			 * @readonly
			 */
			public static readonly embeddedCss: Adobe.Indesign.StyleSheetExportOption;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NONE. no style sheet.
			 * @type {Adobe.Indesign.StyleSheetExportOption}
			 * @readonly
			 */
			public static readonly none: Adobe.Indesign.StyleSheetExportOption;
			/**
			 * no style sheet.
			 * @type {Adobe.Indesign.StyleSheetExportOption}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Indesign.StyleSheetExportOption;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}