/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class SnapshotBlendingModes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Use up to three nearest snapshots even if a snapshot is in a 
			 * different class that the new layout.
			 * @type {Adobe.Incopy.SnapshotBlendingModes}
			 * @readonly
			 */
			public static readonly FULL_SNAPSHOT_BLENDING: Adobe.Incopy.SnapshotBlendingModes;
			/**
			 * Alias for FULL_SNAPSHOT_BLENDING. Use up to three nearest 
			 * snapshots even if a snapshot is in a different class that 
			 * the new layout.
			 * @type {Adobe.Incopy.SnapshotBlendingModes}
			 * @readonly
			 */
			public static readonly fullSnapshotBlending: Adobe.Incopy.SnapshotBlendingModes;
			/**
			 * Turns off the influence of layout snapshots completely.
			 * @type {Adobe.Incopy.SnapshotBlendingModes}
			 * @readonly
			 */
			public static readonly IGNORE_LAYOUT_SNAPSHOTS: Adobe.Incopy.SnapshotBlendingModes;
			/**
			 * Alias for IGNORE_LAYOUT_SNAPSHOTS. Turns off the influence 
			 * of layout snapshots completely.
			 * @type {Adobe.Incopy.SnapshotBlendingModes}
			 * @readonly
			 */
			public static readonly ignoreLayoutSnapshots: Adobe.Incopy.SnapshotBlendingModes;
			/**
			 * Use only layout snapshots within the same class as the new 
			 * layout.
			 * @type {Adobe.Incopy.SnapshotBlendingModes}
			 * @readonly
			 */
			public static readonly LIMITED_SNAPSHOT_BLENDING: Adobe.Incopy.SnapshotBlendingModes;
			/**
			 * Alias for LIMITED_SNAPSHOT_BLENDING. Use only layout 
			 * snapshots within the same class as the new layout.
			 * @type {Adobe.Incopy.SnapshotBlendingModes}
			 * @readonly
			 */
			public static readonly limitedSnapshotBlending: Adobe.Incopy.SnapshotBlendingModes;
			/**
			 * Use the layout snapshot nearest in size and shape to the new 
			 * layout.
			 * @type {Adobe.Incopy.SnapshotBlendingModes}
			 * @readonly
			 */
			public static readonly USE_NEAREST_SNAPSHOT: Adobe.Incopy.SnapshotBlendingModes;
			/**
			 * Alias for USE_NEAREST_SNAPSHOT. Use the layout snapshot 
			 * nearest in size and shape to the new layout.
			 * @type {Adobe.Incopy.SnapshotBlendingModes}
			 * @readonly
			 */
			public static readonly useNearestSnapshot: Adobe.Incopy.SnapshotBlendingModes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}