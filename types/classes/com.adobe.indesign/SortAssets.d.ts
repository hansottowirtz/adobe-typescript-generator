/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SortAssets extends Adobe.Csawlib.CSEnumBase {
			/** Sort by name */
			public static readonly BY_NAME: Adobe.Indesign.SortAssets;
			/** Sort newest first */
			public static readonly BY_NEWEST: Adobe.Indesign.SortAssets;
			/** Sort oldest first */
			public static readonly BY_OLDEST: Adobe.Indesign.SortAssets;
			/** Sort by type */
			public static readonly BY_TYPE: Adobe.Indesign.SortAssets;
			/** Alias for BY_NAME. Sort by name */
			public static readonly byName: Adobe.Indesign.SortAssets;
			/** Alias for BY_NEWEST. Sort newest first */
			public static readonly byNewest: Adobe.Indesign.SortAssets;
			/** Alias for BY_OLDEST. Sort oldest first */
			public static readonly byOldest: Adobe.Indesign.SortAssets;
			/** Alias for BY_TYPE. Sort by type */
			public static readonly byType: Adobe.Indesign.SortAssets;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}