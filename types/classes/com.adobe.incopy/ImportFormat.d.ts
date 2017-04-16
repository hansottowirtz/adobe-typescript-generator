/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ImportFormat extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Imports cell styles.
			 * @type {Adobe.Incopy.ImportFormat}
			 * @readonly
			 */
			public static readonly CELL_STYLES_FORMAT: Adobe.Incopy.ImportFormat;
			/**
			 * Alias for CELL_STYLES_FORMAT. Imports cell styles.
			 * @type {Adobe.Incopy.ImportFormat}
			 * @readonly
			 */
			public static readonly cellStylesFormat: Adobe.Incopy.ImportFormat;
			/**
			 * Imports character styles.
			 * @type {Adobe.Incopy.ImportFormat}
			 * @readonly
			 */
			public static readonly CHARACTER_STYLES_FORMAT: Adobe.Incopy.ImportFormat;
			/**
			 * Alias for CHARACTER_STYLES_FORMAT. Imports character styles.
			 * @type {Adobe.Incopy.ImportFormat}
			 * @readonly
			 */
			public static readonly characterStylesFormat: Adobe.Incopy.ImportFormat;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Imports paragraph styles.
			 * @type {Adobe.Incopy.ImportFormat}
			 * @readonly
			 */
			public static readonly PARAGRAPH_STYLES_FORMAT: Adobe.Incopy.ImportFormat;
			/**
			 * Alias for PARAGRAPH_STYLES_FORMAT. Imports paragraph styles.
			 * @type {Adobe.Incopy.ImportFormat}
			 * @readonly
			 */
			public static readonly paragraphStylesFormat: Adobe.Incopy.ImportFormat;
			/**
			 * Imports table and cell styles.
			 * @type {Adobe.Incopy.ImportFormat}
			 * @readonly
			 */
			public static readonly TABLE_AND_CELL_STYLES_FORMAT: Adobe.Incopy.ImportFormat;
			/**
			 * Imports table styles.
			 * @type {Adobe.Incopy.ImportFormat}
			 * @readonly
			 */
			public static readonly TABLE_STYLES_FORMAT: Adobe.Incopy.ImportFormat;
			/**
			 * Alias for TABLE_AND_CELL_STYLES_FORMAT. Imports table and 
			 * cell styles.
			 * @type {Adobe.Incopy.ImportFormat}
			 * @readonly
			 */
			public static readonly tableAndCellStylesFormat: Adobe.Incopy.ImportFormat;
			/**
			 * Alias for TABLE_STYLES_FORMAT. Imports table styles.
			 * @type {Adobe.Incopy.ImportFormat}
			 * @readonly
			 */
			public static readonly tableStylesFormat: Adobe.Incopy.ImportFormat;
			/**
			 * Imports character and paragraph styles.
			 * @type {Adobe.Incopy.ImportFormat}
			 * @readonly
			 */
			public static readonly TEXT_STYLES_FORMAT: Adobe.Incopy.ImportFormat;
			/**
			 * Alias for TEXT_STYLES_FORMAT. Imports character and 
			 * paragraph styles.
			 * @type {Adobe.Incopy.ImportFormat}
			 * @readonly
			 */
			public static readonly textStylesFormat: Adobe.Incopy.ImportFormat;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}