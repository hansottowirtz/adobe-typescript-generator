/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class MarkTypes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Uses the default format.
			 * @type {Adobe.Incopy.MarkTypes}
			 * @readonly
			 */
			public static readonly DEFAULT_VALUE: Adobe.Incopy.MarkTypes;
			/**
			 * Alias for DEFAULT_VALUE. Uses the default format.
			 * @type {Adobe.Incopy.MarkTypes}
			 * @readonly
			 */
			public static readonly defaultValue: Adobe.Incopy.MarkTypes;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses J marks with a circle.
			 * @type {Adobe.Incopy.MarkTypes}
			 * @readonly
			 */
			public static readonly J_MARK_WITH_CIRCLE: Adobe.Incopy.MarkTypes;
			/**
			 * Uses J marks without a circle.
			 * @type {Adobe.Incopy.MarkTypes}
			 * @readonly
			 */
			public static readonly J_MARK_WITHOUT_CIRCLE: Adobe.Incopy.MarkTypes;
			/**
			 * Alias for J_MARK_WITH_CIRCLE. Uses J marks with a circle.
			 * @type {Adobe.Incopy.MarkTypes}
			 * @readonly
			 */
			public static readonly jMarkWithCircle: Adobe.Incopy.MarkTypes;
			/**
			 * Alias for J_MARK_WITHOUT_CIRCLE. Uses J marks without a 
			 * circle.
			 * @type {Adobe.Incopy.MarkTypes}
			 * @readonly
			 */
			public static readonly jMarkWithoutCircle: Adobe.Incopy.MarkTypes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}