/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SyncConflictResolution extends Adobe.Csawlib.CSEnumBase {
			/** Asks the user how to resolve conflicts. */
			public static readonly ASK_ABOUT_CONFLICTS: Adobe.Indesign.SyncConflictResolution;
			/**
			 * Alias for ASK_ABOUT_CONFLICTS. Asks the user how to resolve 
			 * conflicts.
			 */
			public static readonly askAboutConflicts: Adobe.Indesign.SyncConflictResolution;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Uses the local version. */
			public static readonly PREFER_LOCAL: Adobe.Indesign.SyncConflictResolution;
			/** Uses the project version. */
			public static readonly PREFER_PROJECT: Adobe.Indesign.SyncConflictResolution;
			/** Alias for PREFER_LOCAL. Uses the local version. */
			public static readonly preferLocal: Adobe.Indesign.SyncConflictResolution;
			/** Alias for PREFER_PROJECT. Uses the project version. */
			public static readonly preferProject: Adobe.Indesign.SyncConflictResolution;
			/** Skips conflicting files. */
			public static readonly SKIP_CONFLICTS: Adobe.Indesign.SyncConflictResolution;
			/** Alias for SKIP_CONFLICTS. Skips conflicting files. */
			public static readonly skipConflicts: Adobe.Indesign.SyncConflictResolution;
			/** Constructor */
			public constructor();
		}
	}
}