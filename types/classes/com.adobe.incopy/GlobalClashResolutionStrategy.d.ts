/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class GlobalClashResolutionStrategy extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Does not import styles whose names clash with existing 
			 * items.
			 */
			public static readonly DO_NOT_LOAD_THE_STYLE: Adobe.Incopy.GlobalClashResolutionStrategy;
			/**
			 * Alias for DO_NOT_LOAD_THE_STYLE. Does not import styles 
			 * whose names clash with existing items.
			 */
			public static readonly doNotLoadTheStyle: Adobe.Incopy.GlobalClashResolutionStrategy;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Overwrites existing styles whose names clash with imported 
			 * items.
			 */
			public static readonly LOAD_ALL_WITH_OVERWRITE: Adobe.Incopy.GlobalClashResolutionStrategy;
			/**
			 * Renames imported styles whose names clash with existing 
			 * items to preserve existing items.
			 */
			public static readonly LOAD_ALL_WITH_RENAME: Adobe.Incopy.GlobalClashResolutionStrategy;
			/**
			 * Alias for LOAD_ALL_WITH_OVERWRITE. Overwrites existing 
			 * styles whose names clash with imported items.
			 */
			public static readonly loadAllWithOverwrite: Adobe.Incopy.GlobalClashResolutionStrategy;
			/**
			 * Alias for LOAD_ALL_WITH_RENAME. Renames imported styles 
			 * whose names clash with existing items to preserve existing 
			 * items.
			 */
			public static readonly loadAllWithRename: Adobe.Incopy.GlobalClashResolutionStrategy;
			/** Constructor */
			public constructor();
		}
	}
}