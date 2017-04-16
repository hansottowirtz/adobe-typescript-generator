/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class StoryTypes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The story is an index.
			 * @type {Adobe.Incopy.StoryTypes}
			 * @readonly
			 */
			public static readonly INDEXING_STORY: Adobe.Incopy.StoryTypes;
			/**
			 * Alias for INDEXING_STORY. The story is an index.
			 * @type {Adobe.Incopy.StoryTypes}
			 * @readonly
			 */
			public static readonly indexingStory: Adobe.Incopy.StoryTypes;
			/**
			 * The story is a regular text story.
			 * @type {Adobe.Incopy.StoryTypes}
			 * @readonly
			 */
			public static readonly REGULAR_STORY: Adobe.Incopy.StoryTypes;
			/**
			 * Alias for REGULAR_STORY. The story is a regular text story.
			 * @type {Adobe.Incopy.StoryTypes}
			 * @readonly
			 */
			public static readonly regularStory: Adobe.Incopy.StoryTypes;
			/**
			 * The story is a table of contents.
			 * @type {Adobe.Incopy.StoryTypes}
			 * @readonly
			 */
			public static readonly TOC_STORY: Adobe.Incopy.StoryTypes;
			/**
			 * Alias for TOC_STORY. The story is a table of contents.
			 * @type {Adobe.Incopy.StoryTypes}
			 * @readonly
			 */
			public static readonly tocStory: Adobe.Incopy.StoryTypes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}