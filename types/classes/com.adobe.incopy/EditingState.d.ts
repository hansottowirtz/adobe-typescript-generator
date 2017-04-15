/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class EditingState extends Adobe.Csawlib.CSEnumBase {
			/**
			 * The file was modified locally or remotely while it was 
			 * locked and therefore two versions exist.
			 */
			public static readonly EDITING_CONFLICT: Adobe.Incopy.EditingState;
			/** The file has been modified locally and not locked. */
			public static readonly EDITING_LOCALLY: Adobe.Incopy.EditingState;
			/** The file has been locked locally and may be modified. */
			public static readonly EDITING_LOCALLY_LOCKED: Adobe.Incopy.EditingState;
			/** The file is not currently in use and is not locked. */
			public static readonly EDITING_NOWHERE: Adobe.Incopy.EditingState;
			/** Lock held but not usable. */
			public static readonly EDITING_REMOTELY: Adobe.Incopy.EditingState;
			/** The editing status is not known. */
			public static readonly EDITING_UNKNOWN: Adobe.Incopy.EditingState;
			/**
			 * Alias for EDITING_CONFLICT. The file was modified locally or 
			 * remotely while it was locked and therefore two versions 
			 * exist.
			 */
			public static readonly editingConflict: Adobe.Incopy.EditingState;
			/**
			 * Alias for EDITING_LOCALLY. The file has been modified 
			 * locally and not locked.
			 */
			public static readonly editingLocally: Adobe.Incopy.EditingState;
			/**
			 * Alias for EDITING_LOCALLY_LOCKED. The file has been locked 
			 * locally and may be modified.
			 */
			public static readonly editingLocallyLocked: Adobe.Incopy.EditingState;
			/**
			 * Alias for EDITING_NOWHERE. The file is not currently in use 
			 * and is not locked.
			 */
			public static readonly editingNowhere: Adobe.Incopy.EditingState;
			/** Alias for EDITING_REMOTELY. Lock held but not usable. */
			public static readonly editingRemotely: Adobe.Incopy.EditingState;
			/** Alias for EDITING_UNKNOWN. The editing status is not known. */
			public static readonly editingUnknown: Adobe.Incopy.EditingState;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}