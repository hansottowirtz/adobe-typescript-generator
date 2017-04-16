/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class VersionCueSyncStatus extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The project version of the file was downloaded to the local 
			 * workspace.
			 * @type {Adobe.Indesign.VersionCueSyncStatus}
			 * @readonly
			 */
			public static readonly FILE_DOWNLOADED: Adobe.Indesign.VersionCueSyncStatus;
			/**
			 * The synchronization resulted in no change because the local 
			 * and project versions were identical.
			 * @type {Adobe.Indesign.VersionCueSyncStatus}
			 * @readonly
			 */
			public static readonly FILE_NO_CHANGE: Adobe.Indesign.VersionCueSyncStatus;
			/**
			 * The file was not synchronized.
			 * @type {Adobe.Indesign.VersionCueSyncStatus}
			 * @readonly
			 */
			public static readonly FILE_SKIPPED: Adobe.Indesign.VersionCueSyncStatus;
			/**
			 * The file was unlocked locally.
			 * @type {Adobe.Indesign.VersionCueSyncStatus}
			 * @readonly
			 */
			public static readonly FILE_UNLOCKED: Adobe.Indesign.VersionCueSyncStatus;
			/**
			 * The local version of the file was uploaded to the project.
			 * @type {Adobe.Indesign.VersionCueSyncStatus}
			 * @readonly
			 */
			public static readonly FILE_UPLOADED: Adobe.Indesign.VersionCueSyncStatus;
			/**
			 * Alias for FILE_DOWNLOADED. The project version of the file 
			 * was downloaded to the local workspace.
			 * @type {Adobe.Indesign.VersionCueSyncStatus}
			 * @readonly
			 */
			public static readonly fileDownloaded: Adobe.Indesign.VersionCueSyncStatus;
			/**
			 * Alias for FILE_NO_CHANGE. The synchronization resulted in no 
			 * change because the local and project versions were 
			 * identical.
			 * @type {Adobe.Indesign.VersionCueSyncStatus}
			 * @readonly
			 */
			public static readonly fileNoChange: Adobe.Indesign.VersionCueSyncStatus;
			/**
			 * Alias for FILE_SKIPPED. The file was not synchronized.
			 * @type {Adobe.Indesign.VersionCueSyncStatus}
			 * @readonly
			 */
			public static readonly fileSkipped: Adobe.Indesign.VersionCueSyncStatus;
			/**
			 * Alias for FILE_UNLOCKED. The file was unlocked locally.
			 * @type {Adobe.Indesign.VersionCueSyncStatus}
			 * @readonly
			 */
			public static readonly fileUnlocked: Adobe.Indesign.VersionCueSyncStatus;
			/**
			 * Alias for FILE_UPLOADED. The local version of the file was 
			 * uploaded to the project.
			 * @type {Adobe.Indesign.VersionCueSyncStatus}
			 * @readonly
			 */
			public static readonly fileUploaded: Adobe.Indesign.VersionCueSyncStatus;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}