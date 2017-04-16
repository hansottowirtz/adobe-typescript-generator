/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class GlobalClashResolutionStrategyForMasterPage extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Overwrites the existing master page.
			 * @type 
			 * {Adobe.Indesign.GlobalClashResolutionStrategyForMasterPage}
			 * @readonly
			 */
			public static readonly LOAD_ALL_WITH_OVERWRITE: Adobe.Indesign.GlobalClashResolutionStrategyForMasterPage;
			/**
			 * Renames the new master page.
			 * @type 
			 * {Adobe.Indesign.GlobalClashResolutionStrategyForMasterPage}
			 * @readonly
			 */
			public static readonly LOAD_ALL_WITH_RENAME: Adobe.Indesign.GlobalClashResolutionStrategyForMasterPage;
			/**
			 * Alias for LOAD_ALL_WITH_OVERWRITE. Overwrites the existing 
			 * master page.
			 * @type 
			 * {Adobe.Indesign.GlobalClashResolutionStrategyForMasterPage}
			 * @readonly
			 */
			public static readonly loadAllWithOverwrite: Adobe.Indesign.GlobalClashResolutionStrategyForMasterPage;
			/**
			 * Alias for LOAD_ALL_WITH_RENAME. Renames the new master page.
			 * @type 
			 * {Adobe.Indesign.GlobalClashResolutionStrategyForMasterPage}
			 * @readonly
			 */
			public static readonly loadAllWithRename: Adobe.Indesign.GlobalClashResolutionStrategyForMasterPage;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}