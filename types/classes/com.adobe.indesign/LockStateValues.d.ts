/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class LockStateValues extends Adobe.Csawlib.CSEnumBase {
			/** The story has been checked in. */
			public static readonly CHECKED_IN_STORY: Adobe.Indesign.LockStateValues;
			/** The story has been checked out. */
			public static readonly CHECKED_OUT_STORY: Adobe.Indesign.LockStateValues;
			/** Alias for CHECKED_IN_STORY. The story has been checked in. */
			public static readonly checkedInStory: Adobe.Indesign.LockStateValues;
			/**
			 * Alias for CHECKED_OUT_STORY. The story has been checked out.
			 */
			public static readonly checkedOutStory: Adobe.Indesign.LockStateValues;
			/** The story is embedded. */
			public static readonly EMBEDDED_STORY: Adobe.Indesign.LockStateValues;
			/** Alias for EMBEDDED_STORY. The story is embedded. */
			public static readonly embeddedStory: Adobe.Indesign.LockStateValues;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The story is locked. */
			public static readonly LOCKED_STORY: Adobe.Indesign.LockStateValues;
			/** Alias for LOCKED_STORY. The story is locked. */
			public static readonly lockedStory: Adobe.Indesign.LockStateValues;
			/** The story file is missing. */
			public static readonly MISSING_LOCK_STATE: Adobe.Indesign.LockStateValues;
			/** Alias for MISSING_LOCK_STATE. The story file is missing. */
			public static readonly missingLockState: Adobe.Indesign.LockStateValues;
			/** The stories have a mixed lock state. */
			public static readonly MIXED_LOCK_STATE: Adobe.Indesign.LockStateValues;
			/**
			 * Alias for MIXED_LOCK_STATE. The stories have a mixed lock 
			 * state.
			 */
			public static readonly mixedLockState: Adobe.Indesign.LockStateValues;
			/** Alias for NONE. No lock state. */
			public static readonly none: Adobe.Indesign.LockStateValues;
			/** No lock state. */
			public static readonly NONE: Adobe.Indesign.LockStateValues;
			/** The story is unmanaged. */
			public static readonly UNMANAGED_STORY: Adobe.Indesign.LockStateValues;
			/** Alias for UNMANAGED_STORY. The story is unmanaged. */
			public static readonly unmanagedStory: Adobe.Indesign.LockStateValues;
			/** Constructor */
			public constructor();
		}
	}
}