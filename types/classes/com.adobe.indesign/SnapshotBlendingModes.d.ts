/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SnapshotBlendingModes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Use up to three nearest snapshots even if a snapshot is in a 
			 * different class that the new layout.
			 * @type {Adobe.Indesign.SnapshotBlendingModes}
			 * @readonly
			 */
			public static readonly FULL_SNAPSHOT_BLENDING: Adobe.Indesign.SnapshotBlendingModes;
			/**
			 * Alias for FULL_SNAPSHOT_BLENDING. Use up to three nearest 
			 * snapshots even if a snapshot is in a different class that 
			 * the new layout.
			 * @type {Adobe.Indesign.SnapshotBlendingModes}
			 * @readonly
			 */
			public static readonly fullSnapshotBlending: Adobe.Indesign.SnapshotBlendingModes;
			/**
			 * Turns off the influence of layout snapshots completely.
			 * @type {Adobe.Indesign.SnapshotBlendingModes}
			 * @readonly
			 */
			public static readonly IGNORE_LAYOUT_SNAPSHOTS: Adobe.Indesign.SnapshotBlendingModes;
			/**
			 * Alias for IGNORE_LAYOUT_SNAPSHOTS. Turns off the influence 
			 * of layout snapshots completely.
			 * @type {Adobe.Indesign.SnapshotBlendingModes}
			 * @readonly
			 */
			public static readonly ignoreLayoutSnapshots: Adobe.Indesign.SnapshotBlendingModes;
			/**
			 * Use only layout snapshots within the same class as the new 
			 * layout.
			 * @type {Adobe.Indesign.SnapshotBlendingModes}
			 * @readonly
			 */
			public static readonly LIMITED_SNAPSHOT_BLENDING: Adobe.Indesign.SnapshotBlendingModes;
			/**
			 * Alias for LIMITED_SNAPSHOT_BLENDING. Use only layout 
			 * snapshots within the same class as the new layout.
			 * @type {Adobe.Indesign.SnapshotBlendingModes}
			 * @readonly
			 */
			public static readonly limitedSnapshotBlending: Adobe.Indesign.SnapshotBlendingModes;
			/**
			 * Use the layout snapshot nearest in size and shape to the new 
			 * layout.
			 * @type {Adobe.Indesign.SnapshotBlendingModes}
			 * @readonly
			 */
			public static readonly USE_NEAREST_SNAPSHOT: Adobe.Indesign.SnapshotBlendingModes;
			/**
			 * Alias for USE_NEAREST_SNAPSHOT. Use the layout snapshot 
			 * nearest in size and shape to the new layout.
			 * @type {Adobe.Indesign.SnapshotBlendingModes}
			 * @readonly
			 */
			public static readonly useNearestSnapshot: Adobe.Indesign.SnapshotBlendingModes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}