/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TaskAlertType extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** error message */
			public static readonly TASK_ERROR: Adobe.Indesign.TaskAlertType;
			/** Information message */
			public static readonly TASK_INFORMATION: Adobe.Indesign.TaskAlertType;
			/** Warning message */
			public static readonly TASK_WARNING: Adobe.Indesign.TaskAlertType;
			/** Alias for TASK_ERROR. error message */
			public static readonly taskError: Adobe.Indesign.TaskAlertType;
			/** Alias for TASK_INFORMATION. Information message */
			public static readonly taskInformation: Adobe.Indesign.TaskAlertType;
			/** Alias for TASK_WARNING. Warning message */
			public static readonly taskWarning: Adobe.Indesign.TaskAlertType;
			/** Constructor */
			public constructor();
		}
	}
}