/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class MarkTypes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Uses the default format.
			 * @type {Adobe.Indesign.MarkTypes}
			 * @readonly
			 */
			public static readonly DEFAULT_VALUE: Adobe.Indesign.MarkTypes;
			/**
			 * Alias for DEFAULT_VALUE. Uses the default format.
			 * @type {Adobe.Indesign.MarkTypes}
			 * @readonly
			 */
			public static readonly defaultValue: Adobe.Indesign.MarkTypes;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses J marks with a circle.
			 * @type {Adobe.Indesign.MarkTypes}
			 * @readonly
			 */
			public static readonly J_MARK_WITH_CIRCLE: Adobe.Indesign.MarkTypes;
			/**
			 * Uses J marks without a circle.
			 * @type {Adobe.Indesign.MarkTypes}
			 * @readonly
			 */
			public static readonly J_MARK_WITHOUT_CIRCLE: Adobe.Indesign.MarkTypes;
			/**
			 * Alias for J_MARK_WITH_CIRCLE. Uses J marks with a circle.
			 * @type {Adobe.Indesign.MarkTypes}
			 * @readonly
			 */
			public static readonly jMarkWithCircle: Adobe.Indesign.MarkTypes;
			/**
			 * Alias for J_MARK_WITHOUT_CIRCLE. Uses J marks without a 
			 * circle.
			 * @type {Adobe.Indesign.MarkTypes}
			 * @readonly
			 */
			public static readonly jMarkWithoutCircle: Adobe.Indesign.MarkTypes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}