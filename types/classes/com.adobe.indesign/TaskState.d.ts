/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TaskState extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for CANCELLED. Task was cancelled (either before it 
			 * ran or during execution
			 */
			public static readonly cancelled: Adobe.Indesign.TaskState;
			/**
			 * Task was cancelled (either before it ran or during execution
			 */
			public static readonly CANCELLED: Adobe.Indesign.TaskState;
			/**
			 * Alias for CANCELLING. Task was signalled to cancel but did 
			 * not stop yet
			 */
			public static readonly cancelling: Adobe.Indesign.TaskState;
			/** Task was signalled to cancel but did not stop yet */
			public static readonly CANCELLING: Adobe.Indesign.TaskState;
			/**
			 * Alias for COMPLETED. Task completed execution (successfully 
			 * or with errors)
			 */
			public static readonly completed: Adobe.Indesign.TaskState;
			/** Task completed execution (successfully or with errors) */
			public static readonly COMPLETED: Adobe.Indesign.TaskState;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for QUEUED. Task was queued and is waiting to be 
			 * scheduled for execution
			 */
			public static readonly queued: Adobe.Indesign.TaskState;
			/**
			 * Task was queued and is waiting to be scheduled for execution
			 */
			public static readonly QUEUED: Adobe.Indesign.TaskState;
			/** Alias for RUNNING. Task is running */
			public static readonly running: Adobe.Indesign.TaskState;
			/** Task is running */
			public static readonly RUNNING: Adobe.Indesign.TaskState;
			/** Alias for WAITING. Task is waiting */
			public static readonly waiting: Adobe.Indesign.TaskState;
			/** Task is waiting */
			public static readonly WAITING: Adobe.Indesign.TaskState;
			/** Constructor */
			public constructor();
		}
	}
}