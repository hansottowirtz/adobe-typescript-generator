/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class LockStateValues extends Adobe.Csawlib.CSEnumBase {
			/**
			 * The story has been checked in.
			 * @type {Adobe.Incopy.LockStateValues}
			 * @readonly
			 */
			public static readonly CHECKED_IN_STORY: Adobe.Incopy.LockStateValues;
			/**
			 * The story has been checked out.
			 * @type {Adobe.Incopy.LockStateValues}
			 * @readonly
			 */
			public static readonly CHECKED_OUT_STORY: Adobe.Incopy.LockStateValues;
			/**
			 * Alias for CHECKED_IN_STORY. The story has been checked in.
			 * @type {Adobe.Incopy.LockStateValues}
			 * @readonly
			 */
			public static readonly checkedInStory: Adobe.Incopy.LockStateValues;
			/**
			 * Alias for CHECKED_OUT_STORY. The story has been checked out.
			 * @type {Adobe.Incopy.LockStateValues}
			 * @readonly
			 */
			public static readonly checkedOutStory: Adobe.Incopy.LockStateValues;
			/**
			 * The story is embedded.
			 * @type {Adobe.Incopy.LockStateValues}
			 * @readonly
			 */
			public static readonly EMBEDDED_STORY: Adobe.Incopy.LockStateValues;
			/**
			 * Alias for EMBEDDED_STORY. The story is embedded.
			 * @type {Adobe.Incopy.LockStateValues}
			 * @readonly
			 */
			public static readonly embeddedStory: Adobe.Incopy.LockStateValues;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The story is locked.
			 * @type {Adobe.Incopy.LockStateValues}
			 * @readonly
			 */
			public static readonly LOCKED_STORY: Adobe.Incopy.LockStateValues;
			/**
			 * Alias for LOCKED_STORY. The story is locked.
			 * @type {Adobe.Incopy.LockStateValues}
			 * @readonly
			 */
			public static readonly lockedStory: Adobe.Incopy.LockStateValues;
			/**
			 * The story file is missing.
			 * @type {Adobe.Incopy.LockStateValues}
			 * @readonly
			 */
			public static readonly MISSING_LOCK_STATE: Adobe.Incopy.LockStateValues;
			/**
			 * Alias for MISSING_LOCK_STATE. The story file is missing.
			 * @type {Adobe.Incopy.LockStateValues}
			 * @readonly
			 */
			public static readonly missingLockState: Adobe.Incopy.LockStateValues;
			/**
			 * The stories have a mixed lock state.
			 * @type {Adobe.Incopy.LockStateValues}
			 * @readonly
			 */
			public static readonly MIXED_LOCK_STATE: Adobe.Incopy.LockStateValues;
			/**
			 * Alias for MIXED_LOCK_STATE. The stories have a mixed lock 
			 * state.
			 * @type {Adobe.Incopy.LockStateValues}
			 * @readonly
			 */
			public static readonly mixedLockState: Adobe.Incopy.LockStateValues;
			/**
			 * Alias for NONE. No lock state.
			 * @type {Adobe.Incopy.LockStateValues}
			 * @readonly
			 */
			public static readonly none: Adobe.Incopy.LockStateValues;
			/**
			 * No lock state.
			 * @type {Adobe.Incopy.LockStateValues}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Incopy.LockStateValues;
			/**
			 * The story is unmanaged.
			 * @type {Adobe.Incopy.LockStateValues}
			 * @readonly
			 */
			public static readonly UNMANAGED_STORY: Adobe.Incopy.LockStateValues;
			/**
			 * Alias for UNMANAGED_STORY. The story is unmanaged.
			 * @type {Adobe.Incopy.LockStateValues}
			 * @readonly
			 */
			public static readonly unmanagedStory: Adobe.Incopy.LockStateValues;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}