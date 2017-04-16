/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ConditionIndicatorMode extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Conditions indicators hide. */
			public static readonly HIDE_INDICATORS: Adobe.Incopy.ConditionIndicatorMode;
			/** Alias for HIDE_INDICATORS. Conditions indicators hide. */
			public static readonly hideIndicators: Adobe.Incopy.ConditionIndicatorMode;
			/** Conditions indicators show and print. */
			public static readonly SHOW_AND_PRINT_INDICATORS: Adobe.Incopy.ConditionIndicatorMode;
			/** Condition indicators show only. */
			public static readonly SHOW_INDICATORS: Adobe.Incopy.ConditionIndicatorMode;
			/**
			 * Alias for SHOW_AND_PRINT_INDICATORS. Conditions indicators 
			 * show and print.
			 */
			public static readonly showAndPrintIndicators: Adobe.Incopy.ConditionIndicatorMode;
			/** Alias for SHOW_INDICATORS. Condition indicators show only. */
			public static readonly showIndicators: Adobe.Incopy.ConditionIndicatorMode;
			/** Constructor */
			public constructor();
		}
	}
}