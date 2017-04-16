/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TaskAlertType extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** error message */
			public static readonly TASK_ERROR: Adobe.Incopy.TaskAlertType;
			/** Information message */
			public static readonly TASK_INFORMATION: Adobe.Incopy.TaskAlertType;
			/** Warning message */
			public static readonly TASK_WARNING: Adobe.Incopy.TaskAlertType;
			/** Alias for TASK_ERROR. error message */
			public static readonly taskError: Adobe.Incopy.TaskAlertType;
			/** Alias for TASK_INFORMATION. Information message */
			public static readonly taskInformation: Adobe.Incopy.TaskAlertType;
			/** Alias for TASK_WARNING. Warning message */
			public static readonly taskWarning: Adobe.Incopy.TaskAlertType;
			/** Constructor */
			public constructor();
		}
	}
}