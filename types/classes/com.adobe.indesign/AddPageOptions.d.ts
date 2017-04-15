/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class AddPageOptions extends Adobe.Csawlib.CSEnumBase {
			/** Insert pages at end of document. */
			public static readonly END_OF_DOCUMENT: Adobe.Indesign.AddPageOptions;
			/** Insert pages at end of section. */
			public static readonly END_OF_SECTION: Adobe.Indesign.AddPageOptions;
			/** Insert pages at end of story. */
			public static readonly END_OF_STORY: Adobe.Indesign.AddPageOptions;
			/** Alias for END_OF_DOCUMENT. Insert pages at end of document. */
			public static readonly endOfDocument: Adobe.Indesign.AddPageOptions;
			/** Alias for END_OF_SECTION. Insert pages at end of section. */
			public static readonly endOfSection: Adobe.Indesign.AddPageOptions;
			/** Alias for END_OF_STORY. Insert pages at end of story. */
			public static readonly endOfStory: Adobe.Indesign.AddPageOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}