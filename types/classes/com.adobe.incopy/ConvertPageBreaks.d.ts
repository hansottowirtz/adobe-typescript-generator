/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ConvertPageBreaks extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Converts manual page breaks to column breaks.
			 * @type {Adobe.Incopy.ConvertPageBreaks}
			 * @readonly
			 */
			public static readonly COLUMN_BREAK: Adobe.Incopy.ConvertPageBreaks;
			/**
			 * Alias for COLUMN_BREAK. Converts manual page breaks to 
			 * column breaks.
			 * @type {Adobe.Incopy.ConvertPageBreaks}
			 * @readonly
			 */
			public static readonly columnBreak: Adobe.Incopy.ConvertPageBreaks;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NONE. Does not preserve page breaks; allows text 
			 * to flow.
			 * @type {Adobe.Incopy.ConvertPageBreaks}
			 * @readonly
			 */
			public static readonly none: Adobe.Incopy.ConvertPageBreaks;
			/**
			 * Does not preserve page breaks; allows text to flow.
			 * @type {Adobe.Incopy.ConvertPageBreaks}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Incopy.ConvertPageBreaks;
			/**
			 * Preserves page breaks.
			 * @type {Adobe.Incopy.ConvertPageBreaks}
			 * @readonly
			 */
			public static readonly PAGE_BREAK: Adobe.Incopy.ConvertPageBreaks;
			/**
			 * Alias for PAGE_BREAK. Preserves page breaks.
			 * @type {Adobe.Incopy.ConvertPageBreaks}
			 * @readonly
			 */
			public static readonly pageBreak: Adobe.Incopy.ConvertPageBreaks;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}