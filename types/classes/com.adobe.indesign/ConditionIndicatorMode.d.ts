/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ConditionIndicatorMode extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Conditions indicators hide.
			 * @type {Adobe.Indesign.ConditionIndicatorMode}
			 * @readonly
			 */
			public static readonly HIDE_INDICATORS: Adobe.Indesign.ConditionIndicatorMode;
			/**
			 * Alias for HIDE_INDICATORS. Conditions indicators hide.
			 * @type {Adobe.Indesign.ConditionIndicatorMode}
			 * @readonly
			 */
			public static readonly hideIndicators: Adobe.Indesign.ConditionIndicatorMode;
			/**
			 * Conditions indicators show and print.
			 * @type {Adobe.Indesign.ConditionIndicatorMode}
			 * @readonly
			 */
			public static readonly SHOW_AND_PRINT_INDICATORS: Adobe.Indesign.ConditionIndicatorMode;
			/**
			 * Condition indicators show only.
			 * @type {Adobe.Indesign.ConditionIndicatorMode}
			 * @readonly
			 */
			public static readonly SHOW_INDICATORS: Adobe.Indesign.ConditionIndicatorMode;
			/**
			 * Alias for SHOW_AND_PRINT_INDICATORS. Conditions indicators 
			 * show and print.
			 * @type {Adobe.Indesign.ConditionIndicatorMode}
			 * @readonly
			 */
			public static readonly showAndPrintIndicators: Adobe.Indesign.ConditionIndicatorMode;
			/**
			 * Alias for SHOW_INDICATORS. Condition indicators show only.
			 * @type {Adobe.Indesign.ConditionIndicatorMode}
			 * @readonly
			 */
			public static readonly showIndicators: Adobe.Indesign.ConditionIndicatorMode;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}