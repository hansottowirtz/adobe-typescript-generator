/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ConditionIndicatorMethod extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Highlights conditional text. */
			public static readonly USE_HIGHLIGHT: Adobe.Indesign.ConditionIndicatorMethod;
			/** Underlines conditional text. */
			public static readonly USE_UNDERLINE: Adobe.Indesign.ConditionIndicatorMethod;
			/** Alias for USE_HIGHLIGHT. Highlights conditional text. */
			public static readonly useHighlight: Adobe.Indesign.ConditionIndicatorMethod;
			/** Alias for USE_UNDERLINE. Underlines conditional text. */
			public static readonly useUnderline: Adobe.Indesign.ConditionIndicatorMethod;
			/** Constructor */
			public constructor();
		}
	}
}