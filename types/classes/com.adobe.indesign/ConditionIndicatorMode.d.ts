/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ConditionIndicatorMode extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Conditions indicators hide. */
			public static readonly HIDE_INDICATORS: Adobe.Indesign.ConditionIndicatorMode;
			/** Alias for HIDE_INDICATORS. Conditions indicators hide. */
			public static readonly hideIndicators: Adobe.Indesign.ConditionIndicatorMode;
			/** Conditions indicators show and print. */
			public static readonly SHOW_AND_PRINT_INDICATORS: Adobe.Indesign.ConditionIndicatorMode;
			/** Condition indicators show only. */
			public static readonly SHOW_INDICATORS: Adobe.Indesign.ConditionIndicatorMode;
			/**
			 * Alias for SHOW_AND_PRINT_INDICATORS. Conditions indicators 
			 * show and print.
			 */
			public static readonly showAndPrintIndicators: Adobe.Indesign.ConditionIndicatorMode;
			/** Alias for SHOW_INDICATORS. Condition indicators show only. */
			public static readonly showIndicators: Adobe.Indesign.ConditionIndicatorMode;
			/** Constructor */
			public constructor();
		}
	}
}