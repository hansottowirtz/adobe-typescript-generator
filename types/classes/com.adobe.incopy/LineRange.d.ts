/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class LineRange extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Exports all lines.
			 * @type {Adobe.Incopy.LineRange}
			 * @readonly
			 */
			public static readonly ALL_LINES: Adobe.Incopy.LineRange;
			/**
			 * Alias for ALL_LINES. Exports all lines.
			 * @type {Adobe.Incopy.LineRange}
			 * @readonly
			 */
			public static readonly allLines: Adobe.Incopy.LineRange;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}