/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TaskState extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for CANCELLED. Task was cancelled (either before it 
			 * ran or during execution
			 * @type {Adobe.Incopy.TaskState}
			 * @readonly
			 */
			public static readonly cancelled: Adobe.Incopy.TaskState;
			/**
			 * Task was cancelled (either before it ran or during execution
			 * @type {Adobe.Incopy.TaskState}
			 * @readonly
			 */
			public static readonly CANCELLED: Adobe.Incopy.TaskState;
			/**
			 * Alias for CANCELLING. Task was signalled to cancel but did 
			 * not stop yet
			 * @type {Adobe.Incopy.TaskState}
			 * @readonly
			 */
			public static readonly cancelling: Adobe.Incopy.TaskState;
			/**
			 * Task was signalled to cancel but did not stop yet
			 * @type {Adobe.Incopy.TaskState}
			 * @readonly
			 */
			public static readonly CANCELLING: Adobe.Incopy.TaskState;
			/**
			 * Alias for COMPLETED. Task completed execution (successfully 
			 * or with errors)
			 * @type {Adobe.Incopy.TaskState}
			 * @readonly
			 */
			public static readonly completed: Adobe.Incopy.TaskState;
			/**
			 * Task completed execution (successfully or with errors)
			 * @type {Adobe.Incopy.TaskState}
			 * @readonly
			 */
			public static readonly COMPLETED: Adobe.Incopy.TaskState;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for QUEUED. Task was queued and is waiting to be 
			 * scheduled for execution
			 * @type {Adobe.Incopy.TaskState}
			 * @readonly
			 */
			public static readonly queued: Adobe.Incopy.TaskState;
			/**
			 * Task was queued and is waiting to be scheduled for execution
			 * @type {Adobe.Incopy.TaskState}
			 * @readonly
			 */
			public static readonly QUEUED: Adobe.Incopy.TaskState;
			/**
			 * Alias for RUNNING. Task is running
			 * @type {Adobe.Incopy.TaskState}
			 * @readonly
			 */
			public static readonly running: Adobe.Incopy.TaskState;
			/**
			 * Task is running
			 * @type {Adobe.Incopy.TaskState}
			 * @readonly
			 */
			public static readonly RUNNING: Adobe.Incopy.TaskState;
			/**
			 * Alias for WAITING. Task is waiting
			 * @type {Adobe.Incopy.TaskState}
			 * @readonly
			 */
			public static readonly waiting: Adobe.Incopy.TaskState;
			/**
			 * Task is waiting
			 * @type {Adobe.Incopy.TaskState}
			 * @readonly
			 */
			public static readonly WAITING: Adobe.Incopy.TaskState;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}