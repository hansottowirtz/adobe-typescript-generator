/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SyncConflictResolution extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Asks the user how to resolve conflicts.
			 * @type {Adobe.Indesign.SyncConflictResolution}
			 * @readonly
			 */
			public static readonly ASK_ABOUT_CONFLICTS: Adobe.Indesign.SyncConflictResolution;
			/**
			 * Alias for ASK_ABOUT_CONFLICTS. Asks the user how to resolve 
			 * conflicts.
			 * @type {Adobe.Indesign.SyncConflictResolution}
			 * @readonly
			 */
			public static readonly askAboutConflicts: Adobe.Indesign.SyncConflictResolution;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses the local version.
			 * @type {Adobe.Indesign.SyncConflictResolution}
			 * @readonly
			 */
			public static readonly PREFER_LOCAL: Adobe.Indesign.SyncConflictResolution;
			/**
			 * Uses the project version.
			 * @type {Adobe.Indesign.SyncConflictResolution}
			 * @readonly
			 */
			public static readonly PREFER_PROJECT: Adobe.Indesign.SyncConflictResolution;
			/**
			 * Alias for PREFER_LOCAL. Uses the local version.
			 * @type {Adobe.Indesign.SyncConflictResolution}
			 * @readonly
			 */
			public static readonly preferLocal: Adobe.Indesign.SyncConflictResolution;
			/**
			 * Alias for PREFER_PROJECT. Uses the project version.
			 * @type {Adobe.Indesign.SyncConflictResolution}
			 * @readonly
			 */
			public static readonly preferProject: Adobe.Indesign.SyncConflictResolution;
			/**
			 * Skips conflicting files.
			 * @type {Adobe.Indesign.SyncConflictResolution}
			 * @readonly
			 */
			public static readonly SKIP_CONFLICTS: Adobe.Indesign.SyncConflictResolution;
			/**
			 * Alias for SKIP_CONFLICTS. Skips conflicting files.
			 * @type {Adobe.Indesign.SyncConflictResolution}
			 * @readonly
			 */
			public static readonly skipConflicts: Adobe.Indesign.SyncConflictResolution;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}