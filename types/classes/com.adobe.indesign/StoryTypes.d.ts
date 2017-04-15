/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class StoryTypes extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The story is an index. */
			public static readonly INDEXING_STORY: Adobe.Indesign.StoryTypes;
			/** Alias for INDEXING_STORY. The story is an index. */
			public static readonly indexingStory: Adobe.Indesign.StoryTypes;
			/** The story is a regular text story. */
			public static readonly REGULAR_STORY: Adobe.Indesign.StoryTypes;
			/** Alias for REGULAR_STORY. The story is a regular text story. */
			public static readonly regularStory: Adobe.Indesign.StoryTypes;
			/** The story is a table of contents. */
			public static readonly TOC_STORY: Adobe.Indesign.StoryTypes;
			/** Alias for TOC_STORY. The story is a table of contents. */
			public static readonly tocStory: Adobe.Indesign.StoryTypes;
			/** Constructor */
			public constructor();
		}
	}
}