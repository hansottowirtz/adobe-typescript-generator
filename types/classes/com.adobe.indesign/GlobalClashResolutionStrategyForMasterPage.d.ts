/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class GlobalClashResolutionStrategyForMasterPage extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Overwrites the existing master page. */
			public static readonly LOAD_ALL_WITH_OVERWRITE: Adobe.Indesign.GlobalClashResolutionStrategyForMasterPage;
			/** Renames the new master page. */
			public static readonly LOAD_ALL_WITH_RENAME: Adobe.Indesign.GlobalClashResolutionStrategyForMasterPage;
			/**
			 * Alias for LOAD_ALL_WITH_OVERWRITE. Overwrites the existing 
			 * master page.
			 */
			public static readonly loadAllWithOverwrite: Adobe.Indesign.GlobalClashResolutionStrategyForMasterPage;
			/**
			 * Alias for LOAD_ALL_WITH_RENAME. Renames the new master page.
			 */
			public static readonly loadAllWithRename: Adobe.Indesign.GlobalClashResolutionStrategyForMasterPage;
			/** Constructor */
			public constructor();
		}
	}
}