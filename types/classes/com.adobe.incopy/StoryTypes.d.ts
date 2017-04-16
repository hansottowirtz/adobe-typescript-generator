/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class StoryTypes extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The story is an index. */
			public static readonly INDEXING_STORY: Adobe.Incopy.StoryTypes;
			/** Alias for INDEXING_STORY. The story is an index. */
			public static readonly indexingStory: Adobe.Incopy.StoryTypes;
			/** The story is a regular text story. */
			public static readonly REGULAR_STORY: Adobe.Incopy.StoryTypes;
			/** Alias for REGULAR_STORY. The story is a regular text story. */
			public static readonly regularStory: Adobe.Incopy.StoryTypes;
			/** The story is a table of contents. */
			public static readonly TOC_STORY: Adobe.Incopy.StoryTypes;
			/** Alias for TOC_STORY. The story is a table of contents. */
			public static readonly tocStory: Adobe.Incopy.StoryTypes;
			/** Constructor */
			public constructor();
		}
	}
}