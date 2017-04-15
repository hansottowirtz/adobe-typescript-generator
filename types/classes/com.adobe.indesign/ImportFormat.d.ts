/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ImportFormat extends Adobe.Csawlib.CSEnumBase {
			/** Imports cell styles. */
			public static readonly CELL_STYLES_FORMAT: Adobe.Indesign.ImportFormat;
			/** Alias for CELL_STYLES_FORMAT. Imports cell styles. */
			public static readonly cellStylesFormat: Adobe.Indesign.ImportFormat;
			/** Imports character styles. */
			public static readonly CHARACTER_STYLES_FORMAT: Adobe.Indesign.ImportFormat;
			/**
			 * Alias for CHARACTER_STYLES_FORMAT. Imports character styles.
			 */
			public static readonly characterStylesFormat: Adobe.Indesign.ImportFormat;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Imports object styles. */
			public static readonly OBJECT_STYLES_FORMAT: Adobe.Indesign.ImportFormat;
			/** Alias for OBJECT_STYLES_FORMAT. Imports object styles. */
			public static readonly objectStylesFormat: Adobe.Indesign.ImportFormat;
			/** Imports paragraph styles. */
			public static readonly PARAGRAPH_STYLES_FORMAT: Adobe.Indesign.ImportFormat;
			/**
			 * Alias for PARAGRAPH_STYLES_FORMAT. Imports paragraph styles.
			 */
			public static readonly paragraphStylesFormat: Adobe.Indesign.ImportFormat;
			/** Imports stroke styles. */
			public static readonly STROKE_STYLES_FORMAT: Adobe.Indesign.ImportFormat;
			/** Alias for STROKE_STYLES_FORMAT. Imports stroke styles. */
			public static readonly strokeStylesFormat: Adobe.Indesign.ImportFormat;
			/** Imports table and cell styles. */
			public static readonly TABLE_AND_CELL_STYLES_FORMAT: Adobe.Indesign.ImportFormat;
			/** Imports table styles. */
			public static readonly TABLE_STYLES_FORMAT: Adobe.Indesign.ImportFormat;
			/**
			 * Alias for TABLE_AND_CELL_STYLES_FORMAT. Imports table and 
			 * cell styles.
			 */
			public static readonly tableAndCellStylesFormat: Adobe.Indesign.ImportFormat;
			/** Alias for TABLE_STYLES_FORMAT. Imports table styles. */
			public static readonly tableStylesFormat: Adobe.Indesign.ImportFormat;
			/** Imports character and paragraph styles. */
			public static readonly TEXT_STYLES_FORMAT: Adobe.Indesign.ImportFormat;
			/**
			 * Alias for TEXT_STYLES_FORMAT. Imports character and 
			 * paragraph styles.
			 */
			public static readonly textStylesFormat: Adobe.Indesign.ImportFormat;
			/** Imports table of contents styles. */
			public static readonly TOC_STYLES_FORMAT: Adobe.Indesign.ImportFormat;
			/**
			 * Alias for TOC_STYLES_FORMAT. Imports table of contents 
			 * styles.
			 */
			public static readonly tocStylesFormat: Adobe.Indesign.ImportFormat;
			/** Constructor */
			public constructor();
		}
	}
}