/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class FontEmbedding extends Adobe.Csawlib.CSEnumBase {
			/** Alias for COMPLETE. Embeds all fonts once per page. */
			public static readonly complete: Adobe.Indesign.FontEmbedding;
			/** Embeds all fonts once per page. */
			public static readonly COMPLETE: Adobe.Indesign.FontEmbedding;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for NONE. Embeds only references to fonts. */
			public static readonly none: Adobe.Indesign.FontEmbedding;
			/** Embeds only references to fonts. */
			public static readonly NONE: Adobe.Indesign.FontEmbedding;
			/**
			 * Alias for SUBSET. Embeds only the characters (glyphs) used 
			 * in the document. Glyphs are downloaded once per page.
			 */
			public static readonly subset: Adobe.Indesign.FontEmbedding;
			/**
			 * Embeds only the characters (glyphs) used in the document. 
			 * Glyphs are downloaded once per page.
			 */
			public static readonly SUBSET: Adobe.Indesign.FontEmbedding;
			/** Constructor */
			public constructor();
		}
	}
}