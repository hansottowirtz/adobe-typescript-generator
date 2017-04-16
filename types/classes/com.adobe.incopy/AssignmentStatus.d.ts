/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class AssignmentStatus extends Adobe.Csawlib.CSEnumBase {
			/**
			 * The assignment file is missing.
			 * @type {Adobe.Incopy.AssignmentStatus}
			 * @readonly
			 */
			public static readonly ASSIGNMENT_FILE_MISSING: Adobe.Incopy.AssignmentStatus;
			/**
			 * The assignment has been modified and needs to be updated.
			 * @type {Adobe.Incopy.AssignmentStatus}
			 * @readonly
			 */
			public static readonly ASSIGNMENT_OUT_OF_DATE: Adobe.Incopy.AssignmentStatus;
			/**
			 * The assignment has not been modified.
			 * @type {Adobe.Incopy.AssignmentStatus}
			 * @readonly
			 */
			public static readonly ASSIGNMENT_UP_TO_DATE: Adobe.Incopy.AssignmentStatus;
			/**
			 * Alias for ASSIGNMENT_FILE_MISSING. The assignment file is 
			 * missing.
			 * @type {Adobe.Incopy.AssignmentStatus}
			 * @readonly
			 */
			public static readonly assignmentFileMissing: Adobe.Incopy.AssignmentStatus;
			/**
			 * Alias for ASSIGNMENT_OUT_OF_DATE. The assignment has been 
			 * modified and needs to be updated.
			 * @type {Adobe.Incopy.AssignmentStatus}
			 * @readonly
			 */
			public static readonly assignmentOutOfDate: Adobe.Incopy.AssignmentStatus;
			/**
			 * Alias for ASSIGNMENT_UP_TO_DATE. The assignment has not been 
			 * modified.
			 * @type {Adobe.Incopy.AssignmentStatus}
			 * @readonly
			 */
			public static readonly assignmentUpToDate: Adobe.Incopy.AssignmentStatus;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}