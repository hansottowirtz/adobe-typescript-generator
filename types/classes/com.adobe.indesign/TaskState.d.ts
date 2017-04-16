/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TaskState extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for CANCELLED. Task was cancelled (either before it 
			 * ran or during execution
			 * @type {Adobe.Indesign.TaskState}
			 * @readonly
			 */
			public static readonly cancelled: Adobe.Indesign.TaskState;
			/**
			 * Task was cancelled (either before it ran or during execution
			 * @type {Adobe.Indesign.TaskState}
			 * @readonly
			 */
			public static readonly CANCELLED: Adobe.Indesign.TaskState;
			/**
			 * Alias for CANCELLING. Task was signalled to cancel but did 
			 * not stop yet
			 * @type {Adobe.Indesign.TaskState}
			 * @readonly
			 */
			public static readonly cancelling: Adobe.Indesign.TaskState;
			/**
			 * Task was signalled to cancel but did not stop yet
			 * @type {Adobe.Indesign.TaskState}
			 * @readonly
			 */
			public static readonly CANCELLING: Adobe.Indesign.TaskState;
			/**
			 * Alias for COMPLETED. Task completed execution (successfully 
			 * or with errors)
			 * @type {Adobe.Indesign.TaskState}
			 * @readonly
			 */
			public static readonly completed: Adobe.Indesign.TaskState;
			/**
			 * Task completed execution (successfully or with errors)
			 * @type {Adobe.Indesign.TaskState}
			 * @readonly
			 */
			public static readonly COMPLETED: Adobe.Indesign.TaskState;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for QUEUED. Task was queued and is waiting to be 
			 * scheduled for execution
			 * @type {Adobe.Indesign.TaskState}
			 * @readonly
			 */
			public static readonly queued: Adobe.Indesign.TaskState;
			/**
			 * Task was queued and is waiting to be scheduled for execution
			 * @type {Adobe.Indesign.TaskState}
			 * @readonly
			 */
			public static readonly QUEUED: Adobe.Indesign.TaskState;
			/**
			 * Alias for RUNNING. Task is running
			 * @type {Adobe.Indesign.TaskState}
			 * @readonly
			 */
			public static readonly running: Adobe.Indesign.TaskState;
			/**
			 * Task is running
			 * @type {Adobe.Indesign.TaskState}
			 * @readonly
			 */
			public static readonly RUNNING: Adobe.Indesign.TaskState;
			/**
			 * Alias for WAITING. Task is waiting
			 * @type {Adobe.Indesign.TaskState}
			 * @readonly
			 */
			public static readonly waiting: Adobe.Indesign.TaskState;
			/**
			 * Task is waiting
			 * @type {Adobe.Indesign.TaskState}
			 * @readonly
			 */
			public static readonly WAITING: Adobe.Indesign.TaskState;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}