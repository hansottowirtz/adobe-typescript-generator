/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class VersionState extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The version has modifications that make it newer than the 
			 * project.
			 */
			public static readonly LOCAL_NEWER: Adobe.Incopy.VersionState;
			/** The version is identical to the project. */
			public static readonly LOCAL_PROJECT_MATCH: Adobe.Incopy.VersionState;
			/**
			 * Alias for LOCAL_NEWER. The version has modifications that 
			 * make it newer than the project.
			 */
			public static readonly localNewer: Adobe.Incopy.VersionState;
			/**
			 * Alias for LOCAL_PROJECT_MATCH. The version is identical to 
			 * the project.
			 */
			public static readonly localProjectMatch: Adobe.Incopy.VersionState;
			/** No resource and no local file. */
			public static readonly NO_RESOURCE: Adobe.Incopy.VersionState;
			/** Alias for NO_RESOURCE. No resource and no local file. */
			public static readonly noResource: Adobe.Incopy.VersionState;
			/** The project has a newer file. */
			public static readonly PROJECT_FILE_NEWER: Adobe.Incopy.VersionState;
			/** Alias for PROJECT_FILE_NEWER. The project has a newer file. */
			public static readonly projectFileNewer: Adobe.Incopy.VersionState;
			/**
			 * The version contains local edits but the project file is 
			 * newer.
			 */
			public static readonly VERSION_CONFLICT: Adobe.Incopy.VersionState;
			/** The version is not known. */
			public static readonly VERSION_UNKNOWN: Adobe.Incopy.VersionState;
			/**
			 * Alias for VERSION_CONFLICT. The version contains local edits 
			 * but the project file is newer.
			 */
			public static readonly versionConflict: Adobe.Incopy.VersionState;
			/** Alias for VERSION_UNKNOWN. The version is not known. */
			public static readonly versionUnknown: Adobe.Incopy.VersionState;
			/** Constructor */
			public constructor();
		}
	}
}