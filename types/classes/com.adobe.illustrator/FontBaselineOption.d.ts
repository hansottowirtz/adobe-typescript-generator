/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class FontBaselineOption extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.FontBaselineOption}
			 * @readonly
			 */
			public static readonly NORMALBASELINE: Adobe.Illustrator.FontBaselineOption;
			/**
			 * @type {Adobe.Illustrator.FontBaselineOption}
			 * @readonly
			 */
			public static readonly SUBSCRIPT: Adobe.Illustrator.FontBaselineOption;
			/**
			 * @type {Adobe.Illustrator.FontBaselineOption}
			 * @readonly
			 */
			public static readonly SUPERSCRIPT: Adobe.Illustrator.FontBaselineOption;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}