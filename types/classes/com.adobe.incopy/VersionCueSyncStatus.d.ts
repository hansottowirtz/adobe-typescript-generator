/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class VersionCueSyncStatus extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The project version of the file was downloaded to the local 
			 * workspace.
			 */
			public static readonly FILE_DOWNLOADED: Adobe.Incopy.VersionCueSyncStatus;
			/**
			 * The synchronization resulted in no change because the local 
			 * and project versions were identical.
			 */
			public static readonly FILE_NO_CHANGE: Adobe.Incopy.VersionCueSyncStatus;
			/** The file was not synchronized. */
			public static readonly FILE_SKIPPED: Adobe.Incopy.VersionCueSyncStatus;
			/** The file was unlocked locally. */
			public static readonly FILE_UNLOCKED: Adobe.Incopy.VersionCueSyncStatus;
			/** The local version of the file was uploaded to the project. */
			public static readonly FILE_UPLOADED: Adobe.Incopy.VersionCueSyncStatus;
			/**
			 * Alias for FILE_DOWNLOADED. The project version of the file 
			 * was downloaded to the local workspace.
			 */
			public static readonly fileDownloaded: Adobe.Incopy.VersionCueSyncStatus;
			/**
			 * Alias for FILE_NO_CHANGE. The synchronization resulted in no 
			 * change because the local and project versions were 
			 * identical.
			 */
			public static readonly fileNoChange: Adobe.Incopy.VersionCueSyncStatus;
			/** Alias for FILE_SKIPPED. The file was not synchronized. */
			public static readonly fileSkipped: Adobe.Incopy.VersionCueSyncStatus;
			/** Alias for FILE_UNLOCKED. The file was unlocked locally. */
			public static readonly fileUnlocked: Adobe.Incopy.VersionCueSyncStatus;
			/**
			 * Alias for FILE_UPLOADED. The local version of the file was 
			 * uploaded to the project.
			 */
			public static readonly fileUploaded: Adobe.Incopy.VersionCueSyncStatus;
			/** Constructor */
			public constructor();
		}
	}
}