/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class SyncConflictResolution extends Adobe.Csawlib.CSEnumBase {
			/** Asks the user how to resolve conflicts. */
			public static readonly ASK_ABOUT_CONFLICTS: Adobe.Incopy.SyncConflictResolution;
			/**
			 * Alias for ASK_ABOUT_CONFLICTS. Asks the user how to resolve 
			 * conflicts.
			 */
			public static readonly askAboutConflicts: Adobe.Incopy.SyncConflictResolution;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Uses the local version. */
			public static readonly PREFER_LOCAL: Adobe.Incopy.SyncConflictResolution;
			/** Uses the project version. */
			public static readonly PREFER_PROJECT: Adobe.Incopy.SyncConflictResolution;
			/** Alias for PREFER_LOCAL. Uses the local version. */
			public static readonly preferLocal: Adobe.Incopy.SyncConflictResolution;
			/** Alias for PREFER_PROJECT. Uses the project version. */
			public static readonly preferProject: Adobe.Incopy.SyncConflictResolution;
			/** Skips conflicting files. */
			public static readonly SKIP_CONFLICTS: Adobe.Incopy.SyncConflictResolution;
			/** Alias for SKIP_CONFLICTS. Skips conflicting files. */
			public static readonly skipConflicts: Adobe.Incopy.SyncConflictResolution;
			/** Constructor */
			public constructor();
		}
	}
}