/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class SyncConflictResolution extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Asks the user how to resolve conflicts.
			 * @type {Adobe.Incopy.SyncConflictResolution}
			 * @readonly
			 */
			public static readonly ASK_ABOUT_CONFLICTS: Adobe.Incopy.SyncConflictResolution;
			/**
			 * Alias for ASK_ABOUT_CONFLICTS. Asks the user how to resolve 
			 * conflicts.
			 * @type {Adobe.Incopy.SyncConflictResolution}
			 * @readonly
			 */
			public static readonly askAboutConflicts: Adobe.Incopy.SyncConflictResolution;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Uses the local version.
			 * @type {Adobe.Incopy.SyncConflictResolution}
			 * @readonly
			 */
			public static readonly PREFER_LOCAL: Adobe.Incopy.SyncConflictResolution;
			/**
			 * Uses the project version.
			 * @type {Adobe.Incopy.SyncConflictResolution}
			 * @readonly
			 */
			public static readonly PREFER_PROJECT: Adobe.Incopy.SyncConflictResolution;
			/**
			 * Alias for PREFER_LOCAL. Uses the local version.
			 * @type {Adobe.Incopy.SyncConflictResolution}
			 * @readonly
			 */
			public static readonly preferLocal: Adobe.Incopy.SyncConflictResolution;
			/**
			 * Alias for PREFER_PROJECT. Uses the project version.
			 * @type {Adobe.Incopy.SyncConflictResolution}
			 * @readonly
			 */
			public static readonly preferProject: Adobe.Incopy.SyncConflictResolution;
			/**
			 * Skips conflicting files.
			 * @type {Adobe.Incopy.SyncConflictResolution}
			 * @readonly
			 */
			public static readonly SKIP_CONFLICTS: Adobe.Incopy.SyncConflictResolution;
			/**
			 * Alias for SKIP_CONFLICTS. Skips conflicting files.
			 * @type {Adobe.Incopy.SyncConflictResolution}
			 * @readonly
			 */
			public static readonly skipConflicts: Adobe.Incopy.SyncConflictResolution;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}