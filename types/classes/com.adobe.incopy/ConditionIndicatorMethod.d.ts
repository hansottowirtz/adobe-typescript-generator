/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ConditionIndicatorMethod extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Highlights conditional text. */
			public static readonly USE_HIGHLIGHT: Adobe.Incopy.ConditionIndicatorMethod;
			/** Underlines conditional text. */
			public static readonly USE_UNDERLINE: Adobe.Incopy.ConditionIndicatorMethod;
			/** Alias for USE_HIGHLIGHT. Highlights conditional text. */
			public static readonly useHighlight: Adobe.Incopy.ConditionIndicatorMethod;
			/** Alias for USE_UNDERLINE. Underlines conditional text. */
			public static readonly useUnderline: Adobe.Incopy.ConditionIndicatorMethod;
			/** Constructor */
			public constructor();
		}
	}
}