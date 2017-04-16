/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TaskAlertType extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * error message
			 * @type {Adobe.Indesign.TaskAlertType}
			 * @readonly
			 */
			public static readonly TASK_ERROR: Adobe.Indesign.TaskAlertType;
			/**
			 * Information message
			 * @type {Adobe.Indesign.TaskAlertType}
			 * @readonly
			 */
			public static readonly TASK_INFORMATION: Adobe.Indesign.TaskAlertType;
			/**
			 * Warning message
			 * @type {Adobe.Indesign.TaskAlertType}
			 * @readonly
			 */
			public static readonly TASK_WARNING: Adobe.Indesign.TaskAlertType;
			/**
			 * Alias for TASK_ERROR. error message
			 * @type {Adobe.Indesign.TaskAlertType}
			 * @readonly
			 */
			public static readonly taskError: Adobe.Indesign.TaskAlertType;
			/**
			 * Alias for TASK_INFORMATION. Information message
			 * @type {Adobe.Indesign.TaskAlertType}
			 * @readonly
			 */
			public static readonly taskInformation: Adobe.Indesign.TaskAlertType;
			/**
			 * Alias for TASK_WARNING. Warning message
			 * @type {Adobe.Indesign.TaskAlertType}
			 * @readonly
			 */
			public static readonly taskWarning: Adobe.Indesign.TaskAlertType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}