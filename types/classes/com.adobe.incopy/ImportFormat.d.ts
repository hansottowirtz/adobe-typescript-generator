/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ImportFormat extends Adobe.Csawlib.CSEnumBase {
			/** Imports cell styles. */
			public static readonly CELL_STYLES_FORMAT: Adobe.Incopy.ImportFormat;
			/** Alias for CELL_STYLES_FORMAT. Imports cell styles. */
			public static readonly cellStylesFormat: Adobe.Incopy.ImportFormat;
			/** Imports character styles. */
			public static readonly CHARACTER_STYLES_FORMAT: Adobe.Incopy.ImportFormat;
			/**
			 * Alias for CHARACTER_STYLES_FORMAT. Imports character styles.
			 */
			public static readonly characterStylesFormat: Adobe.Incopy.ImportFormat;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Imports paragraph styles. */
			public static readonly PARAGRAPH_STYLES_FORMAT: Adobe.Incopy.ImportFormat;
			/**
			 * Alias for PARAGRAPH_STYLES_FORMAT. Imports paragraph styles.
			 */
			public static readonly paragraphStylesFormat: Adobe.Incopy.ImportFormat;
			/** Imports table and cell styles. */
			public static readonly TABLE_AND_CELL_STYLES_FORMAT: Adobe.Incopy.ImportFormat;
			/** Imports table styles. */
			public static readonly TABLE_STYLES_FORMAT: Adobe.Incopy.ImportFormat;
			/**
			 * Alias for TABLE_AND_CELL_STYLES_FORMAT. Imports table and 
			 * cell styles.
			 */
			public static readonly tableAndCellStylesFormat: Adobe.Incopy.ImportFormat;
			/** Alias for TABLE_STYLES_FORMAT. Imports table styles. */
			public static readonly tableStylesFormat: Adobe.Incopy.ImportFormat;
			/** Imports character and paragraph styles. */
			public static readonly TEXT_STYLES_FORMAT: Adobe.Incopy.ImportFormat;
			/**
			 * Alias for TEXT_STYLES_FORMAT. Imports character and 
			 * paragraph styles.
			 */
			public static readonly textStylesFormat: Adobe.Incopy.ImportFormat;
			/** Constructor */
			public constructor();
		}
	}
}