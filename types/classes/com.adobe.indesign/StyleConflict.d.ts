/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class StyleConflict extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Uses the publication style. */
			public static readonly PUBLICATION_DEFINITION: Adobe.Indesign.StyleConflict;
			/**
			 * Alias for PUBLICATION_DEFINITION. Uses the publication 
			 * style.
			 */
			public static readonly publicationDefinition: Adobe.Indesign.StyleConflict;
			/** Uses the tag file style. */
			public static readonly TAG_FILE_DEFINITION: Adobe.Indesign.StyleConflict;
			/** Alias for TAG_FILE_DEFINITION. Uses the tag file style. */
			public static readonly tagFileDefinition: Adobe.Indesign.StyleConflict;
			/** Constructor */
			public constructor();
		}
	}
}