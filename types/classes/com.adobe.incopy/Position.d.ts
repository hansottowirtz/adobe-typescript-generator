/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class Position extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NORMAL. Normal position
			 * @type {Adobe.Incopy.Position}
			 * @readonly
			 */
			public static readonly normal: Adobe.Incopy.Position;
			/**
			 * Normal position
			 * @type {Adobe.Incopy.Position}
			 * @readonly
			 */
			public static readonly NORMAL: Adobe.Incopy.Position;
			/**
			 * For OpenType fonts, shrinks the text but keeps text on the 
			 * main text baseline. Note: Valid only for numeric characters.
			 * @type {Adobe.Incopy.Position}
			 * @readonly
			 */
			public static readonly OT_DENOMINATOR: Adobe.Incopy.Position;
			/**
			 * For OpenType fonts, shrinks the text but keeps the top of 
			 * the characters aligned with the top of the main text. Note: 
			 * Valid only for numeric characters.
			 * @type {Adobe.Incopy.Position}
			 * @readonly
			 */
			public static readonly OT_NUMERATOR: Adobe.Incopy.Position;
			/**
			 * For OpenType fonts, uses--if available--lowered glyphs that 
			 * are sized correctly relative to the surrounding characters.
			 * @type {Adobe.Incopy.Position}
			 * @readonly
			 */
			public static readonly OT_SUBSCRIPT: Adobe.Incopy.Position;
			/**
			 * For OpenType fonts, uses--if available--raised glyphs that 
			 * are sized correctly relative to the surrounding characters.
			 * @type {Adobe.Incopy.Position}
			 * @readonly
			 */
			public static readonly OT_SUPERSCRIPT: Adobe.Incopy.Position;
			/**
			 * Alias for OT_DENOMINATOR. For OpenType fonts, shrinks the 
			 * text but keeps text on the main text baseline. Note: Valid 
			 * only for numeric characters.
			 * @type {Adobe.Incopy.Position}
			 * @readonly
			 */
			public static readonly otDenominator: Adobe.Incopy.Position;
			/**
			 * Alias for OT_NUMERATOR. For OpenType fonts, shrinks the text 
			 * but keeps the top of the characters aligned with the top of 
			 * the main text. Note: Valid only for numeric characters.
			 * @type {Adobe.Incopy.Position}
			 * @readonly
			 */
			public static readonly otNumerator: Adobe.Incopy.Position;
			/**
			 * Alias for OT_SUBSCRIPT. For OpenType fonts, uses--if 
			 * available--lowered glyphs that are sized correctly relative 
			 * to the surrounding characters.
			 * @type {Adobe.Incopy.Position}
			 * @readonly
			 */
			public static readonly otSubscript: Adobe.Incopy.Position;
			/**
			 * Alias for OT_SUPERSCRIPT. For OpenType fonts, uses--if 
			 * available--raised glyphs that are sized correctly relative 
			 * to the surrounding characters.
			 * @type {Adobe.Incopy.Position}
			 * @readonly
			 */
			public static readonly otSuperscript: Adobe.Incopy.Position;
			/**
			 * Alias for SUBSCRIPT. Subscripts the text.
			 * @type {Adobe.Incopy.Position}
			 * @readonly
			 */
			public static readonly subscript: Adobe.Incopy.Position;
			/**
			 * Subscripts the text.
			 * @type {Adobe.Incopy.Position}
			 * @readonly
			 */
			public static readonly SUBSCRIPT: Adobe.Incopy.Position;
			/**
			 * Alias for SUPERSCRIPT. Superscripts the text.
			 * @type {Adobe.Incopy.Position}
			 * @readonly
			 */
			public static readonly superscript: Adobe.Incopy.Position;
			/**
			 * Superscripts the text.
			 * @type {Adobe.Incopy.Position}
			 * @readonly
			 */
			public static readonly SUPERSCRIPT: Adobe.Incopy.Position;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}