/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class VersionCueSyncStatus extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The project version of the file was downloaded to the local 
			 * workspace.
			 */
			public static readonly FILE_DOWNLOADED: Adobe.Indesign.VersionCueSyncStatus;
			/**
			 * The synchronization resulted in no change because the local 
			 * and project versions were identical.
			 */
			public static readonly FILE_NO_CHANGE: Adobe.Indesign.VersionCueSyncStatus;
			/** The file was not synchronized. */
			public static readonly FILE_SKIPPED: Adobe.Indesign.VersionCueSyncStatus;
			/** The file was unlocked locally. */
			public static readonly FILE_UNLOCKED: Adobe.Indesign.VersionCueSyncStatus;
			/** The local version of the file was uploaded to the project. */
			public static readonly FILE_UPLOADED: Adobe.Indesign.VersionCueSyncStatus;
			/**
			 * Alias for FILE_DOWNLOADED. The project version of the file 
			 * was downloaded to the local workspace.
			 */
			public static readonly fileDownloaded: Adobe.Indesign.VersionCueSyncStatus;
			/**
			 * Alias for FILE_NO_CHANGE. The synchronization resulted in no 
			 * change because the local and project versions were 
			 * identical.
			 */
			public static readonly fileNoChange: Adobe.Indesign.VersionCueSyncStatus;
			/** Alias for FILE_SKIPPED. The file was not synchronized. */
			public static readonly fileSkipped: Adobe.Indesign.VersionCueSyncStatus;
			/** Alias for FILE_UNLOCKED. The file was unlocked locally. */
			public static readonly fileUnlocked: Adobe.Indesign.VersionCueSyncStatus;
			/**
			 * Alias for FILE_UPLOADED. The local version of the file was 
			 * uploaded to the project.
			 */
			public static readonly fileUploaded: Adobe.Indesign.VersionCueSyncStatus;
			/** Constructor */
			public constructor();
		}
	}
}