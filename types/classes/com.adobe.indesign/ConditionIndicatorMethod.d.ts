/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ConditionIndicatorMethod extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Highlights conditional text.
			 * @type {Adobe.Indesign.ConditionIndicatorMethod}
			 * @readonly
			 */
			public static readonly USE_HIGHLIGHT: Adobe.Indesign.ConditionIndicatorMethod;
			/**
			 * Underlines conditional text.
			 * @type {Adobe.Indesign.ConditionIndicatorMethod}
			 * @readonly
			 */
			public static readonly USE_UNDERLINE: Adobe.Indesign.ConditionIndicatorMethod;
			/**
			 * Alias for USE_HIGHLIGHT. Highlights conditional text.
			 * @type {Adobe.Indesign.ConditionIndicatorMethod}
			 * @readonly
			 */
			public static readonly useHighlight: Adobe.Indesign.ConditionIndicatorMethod;
			/**
			 * Alias for USE_UNDERLINE. Underlines conditional text.
			 * @type {Adobe.Indesign.ConditionIndicatorMethod}
			 * @readonly
			 */
			public static readonly useUnderline: Adobe.Indesign.ConditionIndicatorMethod;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}