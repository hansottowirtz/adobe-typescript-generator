/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SortAssets extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Sort by name
			 * @type {Adobe.Indesign.SortAssets}
			 * @readonly
			 */
			public static readonly BY_NAME: Adobe.Indesign.SortAssets;
			/**
			 * Sort newest first
			 * @type {Adobe.Indesign.SortAssets}
			 * @readonly
			 */
			public static readonly BY_NEWEST: Adobe.Indesign.SortAssets;
			/**
			 * Sort oldest first
			 * @type {Adobe.Indesign.SortAssets}
			 * @readonly
			 */
			public static readonly BY_OLDEST: Adobe.Indesign.SortAssets;
			/**
			 * Sort by type
			 * @type {Adobe.Indesign.SortAssets}
			 * @readonly
			 */
			public static readonly BY_TYPE: Adobe.Indesign.SortAssets;
			/**
			 * Alias for BY_NAME. Sort by name
			 * @type {Adobe.Indesign.SortAssets}
			 * @readonly
			 */
			public static readonly byName: Adobe.Indesign.SortAssets;
			/**
			 * Alias for BY_NEWEST. Sort newest first
			 * @type {Adobe.Indesign.SortAssets}
			 * @readonly
			 */
			public static readonly byNewest: Adobe.Indesign.SortAssets;
			/**
			 * Alias for BY_OLDEST. Sort oldest first
			 * @type {Adobe.Indesign.SortAssets}
			 * @readonly
			 */
			public static readonly byOldest: Adobe.Indesign.SortAssets;
			/**
			 * Alias for BY_TYPE. Sort by type
			 * @type {Adobe.Indesign.SortAssets}
			 * @readonly
			 */
			public static readonly byType: Adobe.Indesign.SortAssets;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}