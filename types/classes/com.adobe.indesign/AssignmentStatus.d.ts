/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class AssignmentStatus extends Adobe.Csawlib.CSEnumBase {
			/**
			 * The assignment file is missing.
			 * @type {Adobe.Indesign.AssignmentStatus}
			 * @readonly
			 */
			public static readonly ASSIGNMENT_FILE_MISSING: Adobe.Indesign.AssignmentStatus;
			/**
			 * The assignment has been modified and needs to be updated.
			 * @type {Adobe.Indesign.AssignmentStatus}
			 * @readonly
			 */
			public static readonly ASSIGNMENT_OUT_OF_DATE: Adobe.Indesign.AssignmentStatus;
			/**
			 * The assignment has not been modified.
			 * @type {Adobe.Indesign.AssignmentStatus}
			 * @readonly
			 */
			public static readonly ASSIGNMENT_UP_TO_DATE: Adobe.Indesign.AssignmentStatus;
			/**
			 * Alias for ASSIGNMENT_FILE_MISSING. The assignment file is 
			 * missing.
			 * @type {Adobe.Indesign.AssignmentStatus}
			 * @readonly
			 */
			public static readonly assignmentFileMissing: Adobe.Indesign.AssignmentStatus;
			/**
			 * Alias for ASSIGNMENT_OUT_OF_DATE. The assignment has been 
			 * modified and needs to be updated.
			 * @type {Adobe.Indesign.AssignmentStatus}
			 * @readonly
			 */
			public static readonly assignmentOutOfDate: Adobe.Indesign.AssignmentStatus;
			/**
			 * Alias for ASSIGNMENT_UP_TO_DATE. The assignment has not been 
			 * modified.
			 * @type {Adobe.Indesign.AssignmentStatus}
			 * @readonly
			 */
			public static readonly assignmentUpToDate: Adobe.Indesign.AssignmentStatus;
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