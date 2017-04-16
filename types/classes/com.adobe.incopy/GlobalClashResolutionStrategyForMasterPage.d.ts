/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class GlobalClashResolutionStrategyForMasterPage extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Overwrites the existing master page.
			 * @type 
			 * {Adobe.Incopy.GlobalClashResolutionStrategyForMasterPage}
			 * @readonly
			 */
			public static readonly LOAD_ALL_WITH_OVERWRITE: Adobe.Incopy.GlobalClashResolutionStrategyForMasterPage;
			/**
			 * Renames the new master page.
			 * @type 
			 * {Adobe.Incopy.GlobalClashResolutionStrategyForMasterPage}
			 * @readonly
			 */
			public static readonly LOAD_ALL_WITH_RENAME: Adobe.Incopy.GlobalClashResolutionStrategyForMasterPage;
			/**
			 * Alias for LOAD_ALL_WITH_OVERWRITE. Overwrites the existing 
			 * master page.
			 * @type 
			 * {Adobe.Incopy.GlobalClashResolutionStrategyForMasterPage}
			 * @readonly
			 */
			public static readonly loadAllWithOverwrite: Adobe.Incopy.GlobalClashResolutionStrategyForMasterPage;
			/**
			 * Alias for LOAD_ALL_WITH_RENAME. Renames the new master page.
			 * @type 
			 * {Adobe.Incopy.GlobalClashResolutionStrategyForMasterPage}
			 * @readonly
			 */
			public static readonly loadAllWithRename: Adobe.Incopy.GlobalClashResolutionStrategyForMasterPage;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}