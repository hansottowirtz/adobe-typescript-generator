/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class VersionState extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The version has modifications that make it newer than the 
			 * project.
			 */
			public static readonly LOCAL_NEWER: Adobe.Indesign.VersionState;
			/** The version is identical to the project. */
			public static readonly LOCAL_PROJECT_MATCH: Adobe.Indesign.VersionState;
			/**
			 * Alias for LOCAL_NEWER. The version has modifications that 
			 * make it newer than the project.
			 */
			public static readonly localNewer: Adobe.Indesign.VersionState;
			/**
			 * Alias for LOCAL_PROJECT_MATCH. The version is identical to 
			 * the project.
			 */
			public static readonly localProjectMatch: Adobe.Indesign.VersionState;
			/** No resource and no local file. */
			public static readonly NO_RESOURCE: Adobe.Indesign.VersionState;
			/** Alias for NO_RESOURCE. No resource and no local file. */
			public static readonly noResource: Adobe.Indesign.VersionState;
			/** The project has a newer file. */
			public static readonly PROJECT_FILE_NEWER: Adobe.Indesign.VersionState;
			/** Alias for PROJECT_FILE_NEWER. The project has a newer file. */
			public static readonly projectFileNewer: Adobe.Indesign.VersionState;
			/**
			 * The version contains local edits but the project file is 
			 * newer.
			 */
			public static readonly VERSION_CONFLICT: Adobe.Indesign.VersionState;
			/** The version is not known. */
			public static readonly VERSION_UNKNOWN: Adobe.Indesign.VersionState;
			/**
			 * Alias for VERSION_CONFLICT. The version contains local edits 
			 * but the project file is newer.
			 */
			public static readonly versionConflict: Adobe.Indesign.VersionState;
			/** Alias for VERSION_UNKNOWN. The version is not known. */
			public static readonly versionUnknown: Adobe.Indesign.VersionState;
			/** Constructor */
			public constructor();
		}
	}
}