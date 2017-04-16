/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class FontDownloading extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for COMPLETE. Downloads all fonts once per page.
			 * @type {Adobe.Incopy.FontDownloading}
			 * @readonly
			 */
			public static readonly complete: Adobe.Incopy.FontDownloading;
			/**
			 * Downloads all fonts once per page.
			 * @type {Adobe.Incopy.FontDownloading}
			 * @readonly
			 */
			public static readonly COMPLETE: Adobe.Incopy.FontDownloading;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NONE. Downloads only references to fonts. Note: 
			 * Use when fonts reside in the printer.
			 * @type {Adobe.Incopy.FontDownloading}
			 * @readonly
			 */
			public static readonly none: Adobe.Incopy.FontDownloading;
			/**
			 * Downloads only references to fonts. Note: Use when fonts 
			 * reside in the printer.
			 * @type {Adobe.Incopy.FontDownloading}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Incopy.FontDownloading;
			/**
			 * Alias for SUBSET. Downloads only the characters (glyphs) 
			 * used in the document. Glyphs are downloaded once per page.
			 * @type {Adobe.Incopy.FontDownloading}
			 * @readonly
			 */
			public static readonly subset: Adobe.Incopy.FontDownloading;
			/**
			 * Downloads only the characters (glyphs) used in the document. 
			 * Glyphs are downloaded once per page.
			 * @type {Adobe.Incopy.FontDownloading}
			 * @readonly
			 */
			public static readonly SUBSET: Adobe.Incopy.FontDownloading;
			/**
			 * Downloads only the characters (glyphs) used in the document. 
			 * Glyphs are downloaded once per page. Note: Use when the 
			 * number of glyphs exceeds 350.
			 * @type {Adobe.Incopy.FontDownloading}
			 * @readonly
			 */
			public static readonly SUBSET_LARGE: Adobe.Incopy.FontDownloading;
			/**
			 * Alias for SUBSET_LARGE. Downloads only the characters 
			 * (glyphs) used in the document. Glyphs are downloaded once 
			 * per page. Note: Use when the number of glyphs exceeds 350.
			 * @type {Adobe.Incopy.FontDownloading}
			 * @readonly
			 */
			public static readonly subsetLarge: Adobe.Incopy.FontDownloading;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}