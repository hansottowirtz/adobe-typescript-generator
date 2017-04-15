/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class GlobalClashResolutionStrategyForMasterPage extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Overwrites the existing master page. */
			public static readonly LOAD_ALL_WITH_OVERWRITE: Adobe.Incopy.GlobalClashResolutionStrategyForMasterPage;
			/** Renames the new master page. */
			public static readonly LOAD_ALL_WITH_RENAME: Adobe.Incopy.GlobalClashResolutionStrategyForMasterPage;
			/**
			 * Alias for LOAD_ALL_WITH_OVERWRITE. Overwrites the existing 
			 * master page.
			 */
			public static readonly loadAllWithOverwrite: Adobe.Incopy.GlobalClashResolutionStrategyForMasterPage;
			/**
			 * Alias for LOAD_ALL_WITH_RENAME. Renames the new master page.
			 */
			public static readonly loadAllWithRename: Adobe.Incopy.GlobalClashResolutionStrategyForMasterPage;
			/** Constructor */
			public constructor();
		}
	}
}