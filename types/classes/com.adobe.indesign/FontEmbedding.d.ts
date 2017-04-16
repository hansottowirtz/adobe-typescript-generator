/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class FontEmbedding extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for COMPLETE. Embeds all fonts once per page.
			 * @type {Adobe.Indesign.FontEmbedding}
			 * @readonly
			 */
			public static readonly complete: Adobe.Indesign.FontEmbedding;
			/**
			 * Embeds all fonts once per page.
			 * @type {Adobe.Indesign.FontEmbedding}
			 * @readonly
			 */
			public static readonly COMPLETE: Adobe.Indesign.FontEmbedding;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NONE. Embeds only references to fonts.
			 * @type {Adobe.Indesign.FontEmbedding}
			 * @readonly
			 */
			public static readonly none: Adobe.Indesign.FontEmbedding;
			/**
			 * Embeds only references to fonts.
			 * @type {Adobe.Indesign.FontEmbedding}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Indesign.FontEmbedding;
			/**
			 * Alias for SUBSET. Embeds only the characters (glyphs) used 
			 * in the document. Glyphs are downloaded once per page.
			 * @type {Adobe.Indesign.FontEmbedding}
			 * @readonly
			 */
			public static readonly subset: Adobe.Indesign.FontEmbedding;
			/**
			 * Embeds only the characters (glyphs) used in the document. 
			 * Glyphs are downloaded once per page.
			 * @type {Adobe.Indesign.FontEmbedding}
			 * @readonly
			 */
			public static readonly SUBSET: Adobe.Indesign.FontEmbedding;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}