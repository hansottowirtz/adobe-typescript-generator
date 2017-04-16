/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TaskState extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for CANCELLED. Task was cancelled (either before it 
			 * ran or during execution
			 */
			public static readonly cancelled: Adobe.Incopy.TaskState;
			/**
			 * Task was cancelled (either before it ran or during execution
			 */
			public static readonly CANCELLED: Adobe.Incopy.TaskState;
			/**
			 * Alias for CANCELLING. Task was signalled to cancel but did 
			 * not stop yet
			 */
			public static readonly cancelling: Adobe.Incopy.TaskState;
			/** Task was signalled to cancel but did not stop yet */
			public static readonly CANCELLING: Adobe.Incopy.TaskState;
			/**
			 * Alias for COMPLETED. Task completed execution (successfully 
			 * or with errors)
			 */
			public static readonly completed: Adobe.Incopy.TaskState;
			/** Task completed execution (successfully or with errors) */
			public static readonly COMPLETED: Adobe.Incopy.TaskState;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for QUEUED. Task was queued and is waiting to be 
			 * scheduled for execution
			 */
			public static readonly queued: Adobe.Incopy.TaskState;
			/**
			 * Task was queued and is waiting to be scheduled for execution
			 */
			public static readonly QUEUED: Adobe.Incopy.TaskState;
			/** Alias for RUNNING. Task is running */
			public static readonly running: Adobe.Incopy.TaskState;
			/** Task is running */
			public static readonly RUNNING: Adobe.Incopy.TaskState;
			/** Alias for WAITING. Task is waiting */
			public static readonly waiting: Adobe.Incopy.TaskState;
			/** Task is waiting */
			public static readonly WAITING: Adobe.Incopy.TaskState;
			/** Constructor */
			public constructor();
		}
	}
}