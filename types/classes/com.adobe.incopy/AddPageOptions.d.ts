/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class AddPageOptions extends Adobe.Csawlib.CSEnumBase {
			/** Insert pages at end of document. */
			public static readonly END_OF_DOCUMENT: Adobe.Incopy.AddPageOptions;
			/** Insert pages at end of section. */
			public static readonly END_OF_SECTION: Adobe.Incopy.AddPageOptions;
			/** Insert pages at end of story. */
			public static readonly END_OF_STORY: Adobe.Incopy.AddPageOptions;
			/** Alias for END_OF_DOCUMENT. Insert pages at end of document. */
			public static readonly endOfDocument: Adobe.Incopy.AddPageOptions;
			/** Alias for END_OF_SECTION. Insert pages at end of section. */
			public static readonly endOfSection: Adobe.Incopy.AddPageOptions;
			/** Alias for END_OF_STORY. Insert pages at end of story. */
			public static readonly endOfStory: Adobe.Incopy.AddPageOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}