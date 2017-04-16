/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class EditingState extends Adobe.Csawlib.CSEnumBase {
			/**
			 * The file was modified locally or remotely while it was 
			 * locked and therefore two versions exist.
			 */
			public static readonly EDITING_CONFLICT: Adobe.Indesign.EditingState;
			/** The file has been modified locally and not locked. */
			public static readonly EDITING_LOCALLY: Adobe.Indesign.EditingState;
			/** The file has been locked locally and may be modified. */
			public static readonly EDITING_LOCALLY_LOCKED: Adobe.Indesign.EditingState;
			/** The file is not currently in use and is not locked. */
			public static readonly EDITING_NOWHERE: Adobe.Indesign.EditingState;
			/** Lock held but not usable. */
			public static readonly EDITING_REMOTELY: Adobe.Indesign.EditingState;
			/** The editing status is not known. */
			public static readonly EDITING_UNKNOWN: Adobe.Indesign.EditingState;
			/**
			 * Alias for EDITING_CONFLICT. The file was modified locally or 
			 * remotely while it was locked and therefore two versions 
			 * exist.
			 */
			public static readonly editingConflict: Adobe.Indesign.EditingState;
			/**
			 * Alias for EDITING_LOCALLY. The file has been modified 
			 * locally and not locked.
			 */
			public static readonly editingLocally: Adobe.Indesign.EditingState;
			/**
			 * Alias for EDITING_LOCALLY_LOCKED. The file has been locked 
			 * locally and may be modified.
			 */
			public static readonly editingLocallyLocked: Adobe.Indesign.EditingState;
			/**
			 * Alias for EDITING_NOWHERE. The file is not currently in use 
			 * and is not locked.
			 */
			public static readonly editingNowhere: Adobe.Indesign.EditingState;
			/** Alias for EDITING_REMOTELY. Lock held but not usable. */
			public static readonly editingRemotely: Adobe.Indesign.EditingState;
			/** Alias for EDITING_UNKNOWN. The editing status is not known. */
			public static readonly editingUnknown: Adobe.Indesign.EditingState;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}