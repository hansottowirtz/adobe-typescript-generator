/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ConditionIndicatorMode extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Conditions indicators hide.
			 * @type {Adobe.Incopy.ConditionIndicatorMode}
			 * @readonly
			 */
			public static readonly HIDE_INDICATORS: Adobe.Incopy.ConditionIndicatorMode;
			/**
			 * Alias for HIDE_INDICATORS. Conditions indicators hide.
			 * @type {Adobe.Incopy.ConditionIndicatorMode}
			 * @readonly
			 */
			public static readonly hideIndicators: Adobe.Incopy.ConditionIndicatorMode;
			/**
			 * Conditions indicators show and print.
			 * @type {Adobe.Incopy.ConditionIndicatorMode}
			 * @readonly
			 */
			public static readonly SHOW_AND_PRINT_INDICATORS: Adobe.Incopy.ConditionIndicatorMode;
			/**
			 * Condition indicators show only.
			 * @type {Adobe.Incopy.ConditionIndicatorMode}
			 * @readonly
			 */
			public static readonly SHOW_INDICATORS: Adobe.Incopy.ConditionIndicatorMode;
			/**
			 * Alias for SHOW_AND_PRINT_INDICATORS. Conditions indicators 
			 * show and print.
			 * @type {Adobe.Incopy.ConditionIndicatorMode}
			 * @readonly
			 */
			public static readonly showAndPrintIndicators: Adobe.Incopy.ConditionIndicatorMode;
			/**
			 * Alias for SHOW_INDICATORS. Condition indicators show only.
			 * @type {Adobe.Incopy.ConditionIndicatorMode}
			 * @readonly
			 */
			public static readonly showIndicators: Adobe.Incopy.ConditionIndicatorMode;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}