/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TaskAlertType extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * error message
			 * @type {Adobe.Incopy.TaskAlertType}
			 * @readonly
			 */
			public static readonly TASK_ERROR: Adobe.Incopy.TaskAlertType;
			/**
			 * Information message
			 * @type {Adobe.Incopy.TaskAlertType}
			 * @readonly
			 */
			public static readonly TASK_INFORMATION: Adobe.Incopy.TaskAlertType;
			/**
			 * Warning message
			 * @type {Adobe.Incopy.TaskAlertType}
			 * @readonly
			 */
			public static readonly TASK_WARNING: Adobe.Incopy.TaskAlertType;
			/**
			 * Alias for TASK_ERROR. error message
			 * @type {Adobe.Incopy.TaskAlertType}
			 * @readonly
			 */
			public static readonly taskError: Adobe.Incopy.TaskAlertType;
			/**
			 * Alias for TASK_INFORMATION. Information message
			 * @type {Adobe.Incopy.TaskAlertType}
			 * @readonly
			 */
			public static readonly taskInformation: Adobe.Incopy.TaskAlertType;
			/**
			 * Alias for TASK_WARNING. Warning message
			 * @type {Adobe.Incopy.TaskAlertType}
			 * @readonly
			 */
			public static readonly taskWarning: Adobe.Incopy.TaskAlertType;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}