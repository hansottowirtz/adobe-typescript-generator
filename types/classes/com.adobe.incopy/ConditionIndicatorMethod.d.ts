/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ConditionIndicatorMethod extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Highlights conditional text.
			 * @type {Adobe.Incopy.ConditionIndicatorMethod}
			 * @readonly
			 */
			public static readonly USE_HIGHLIGHT: Adobe.Incopy.ConditionIndicatorMethod;
			/**
			 * Underlines conditional text.
			 * @type {Adobe.Incopy.ConditionIndicatorMethod}
			 * @readonly
			 */
			public static readonly USE_UNDERLINE: Adobe.Incopy.ConditionIndicatorMethod;
			/**
			 * Alias for USE_HIGHLIGHT. Highlights conditional text.
			 * @type {Adobe.Incopy.ConditionIndicatorMethod}
			 * @readonly
			 */
			public static readonly useHighlight: Adobe.Incopy.ConditionIndicatorMethod;
			/**
			 * Alias for USE_UNDERLINE. Underlines conditional text.
			 * @type {Adobe.Incopy.ConditionIndicatorMethod}
			 * @readonly
			 */
			public static readonly useUnderline: Adobe.Incopy.ConditionIndicatorMethod;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}