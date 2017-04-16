/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ImagePageBreakType extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Page break after image.
			 * @type {Adobe.Indesign.ImagePageBreakType}
			 * @readonly
			 */
			public static readonly PAGE_BREAK_AFTER: Adobe.Indesign.ImagePageBreakType;
			/**
			 * Page break before image.
			 * @type {Adobe.Indesign.ImagePageBreakType}
			 * @readonly
			 */
			public static readonly PAGE_BREAK_BEFORE: Adobe.Indesign.ImagePageBreakType;
			/**
			 * Page break before and after image.
			 * @type {Adobe.Indesign.ImagePageBreakType}
			 * @readonly
			 */
			public static readonly PAGE_BREAK_BEFORE_AND_AFTER: Adobe.Indesign.ImagePageBreakType;
			/**
			 * Alias for PAGE_BREAK_AFTER. Page break after image.
			 * @type {Adobe.Indesign.ImagePageBreakType}
			 * @readonly
			 */
			public static readonly pageBreakAfter: Adobe.Indesign.ImagePageBreakType;
			/**
			 * Alias for PAGE_BREAK_BEFORE. Page break before image.
			 * @type {Adobe.Indesign.ImagePageBreakType}
			 * @readonly
			 */
			public static readonly pageBreakBefore: Adobe.Indesign.ImagePageBreakType;
			/**
			 * Alias for PAGE_BREAK_BEFORE_AND_AFTER. Page break before and 
			 * after image.
			 * @type {Adobe.Indesign.ImagePageBreakType}
			 * @readonly
			 */
			public static readonly pageBreakBeforeAndAfter: Adobe.Indesign.ImagePageBreakType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}