/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class FontDownloading extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for COMPLETE. Downloads all fonts once per page.
			 * @type {Adobe.Indesign.FontDownloading}
			 * @readonly
			 */
			public static readonly complete: Adobe.Indesign.FontDownloading;
			/**
			 * Downloads all fonts once per page.
			 * @type {Adobe.Indesign.FontDownloading}
			 * @readonly
			 */
			public static readonly COMPLETE: Adobe.Indesign.FontDownloading;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NONE. Downloads only references to fonts. Note: 
			 * Use when fonts reside in the printer.
			 * @type {Adobe.Indesign.FontDownloading}
			 * @readonly
			 */
			public static readonly none: Adobe.Indesign.FontDownloading;
			/**
			 * Downloads only references to fonts. Note: Use when fonts 
			 * reside in the printer.
			 * @type {Adobe.Indesign.FontDownloading}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Indesign.FontDownloading;
			/**
			 * Alias for SUBSET. Downloads only the characters (glyphs) 
			 * used in the document. Glyphs are downloaded once per page.
			 * @type {Adobe.Indesign.FontDownloading}
			 * @readonly
			 */
			public static readonly subset: Adobe.Indesign.FontDownloading;
			/**
			 * Downloads only the characters (glyphs) used in the document. 
			 * Glyphs are downloaded once per page.
			 * @type {Adobe.Indesign.FontDownloading}
			 * @readonly
			 */
			public static readonly SUBSET: Adobe.Indesign.FontDownloading;
			/**
			 * Downloads only the characters (glyphs) used in the document. 
			 * Glyphs are downloaded once per page. Note: Use when the 
			 * number of glyphs exceeds 350.
			 * @type {Adobe.Indesign.FontDownloading}
			 * @readonly
			 */
			public static readonly SUBSET_LARGE: Adobe.Indesign.FontDownloading;
			/**
			 * Alias for SUBSET_LARGE. Downloads only the characters 
			 * (glyphs) used in the document. Glyphs are downloaded once 
			 * per page. Note: Use when the number of glyphs exceeds 350.
			 * @type {Adobe.Indesign.FontDownloading}
			 * @readonly
			 */
			public static readonly subsetLarge: Adobe.Indesign.FontDownloading;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}