/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ConvertPageBreaks extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Converts manual page breaks to column breaks.
			 * @type {Adobe.Indesign.ConvertPageBreaks}
			 * @readonly
			 */
			public static readonly COLUMN_BREAK: Adobe.Indesign.ConvertPageBreaks;
			/**
			 * Alias for COLUMN_BREAK. Converts manual page breaks to 
			 * column breaks.
			 * @type {Adobe.Indesign.ConvertPageBreaks}
			 * @readonly
			 */
			public static readonly columnBreak: Adobe.Indesign.ConvertPageBreaks;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NONE. Does not preserve page breaks; allows text 
			 * to flow.
			 * @type {Adobe.Indesign.ConvertPageBreaks}
			 * @readonly
			 */
			public static readonly none: Adobe.Indesign.ConvertPageBreaks;
			/**
			 * Does not preserve page breaks; allows text to flow.
			 * @type {Adobe.Indesign.ConvertPageBreaks}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Indesign.ConvertPageBreaks;
			/**
			 * Preserves page breaks.
			 * @type {Adobe.Indesign.ConvertPageBreaks}
			 * @readonly
			 */
			public static readonly PAGE_BREAK: Adobe.Indesign.ConvertPageBreaks;
			/**
			 * Alias for PAGE_BREAK. Preserves page breaks.
			 * @type {Adobe.Indesign.ConvertPageBreaks}
			 * @readonly
			 */
			public static readonly pageBreak: Adobe.Indesign.ConvertPageBreaks;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}