/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class StoryTypes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The story is an index.
			 * @type {Adobe.Indesign.StoryTypes}
			 * @readonly
			 */
			public static readonly INDEXING_STORY: Adobe.Indesign.StoryTypes;
			/**
			 * Alias for INDEXING_STORY. The story is an index.
			 * @type {Adobe.Indesign.StoryTypes}
			 * @readonly
			 */
			public static readonly indexingStory: Adobe.Indesign.StoryTypes;
			/**
			 * The story is a regular text story.
			 * @type {Adobe.Indesign.StoryTypes}
			 * @readonly
			 */
			public static readonly REGULAR_STORY: Adobe.Indesign.StoryTypes;
			/**
			 * Alias for REGULAR_STORY. The story is a regular text story.
			 * @type {Adobe.Indesign.StoryTypes}
			 * @readonly
			 */
			public static readonly regularStory: Adobe.Indesign.StoryTypes;
			/**
			 * The story is a table of contents.
			 * @type {Adobe.Indesign.StoryTypes}
			 * @readonly
			 */
			public static readonly TOC_STORY: Adobe.Indesign.StoryTypes;
			/**
			 * Alias for TOC_STORY. The story is a table of contents.
			 * @type {Adobe.Indesign.StoryTypes}
			 * @readonly
			 */
			public static readonly tocStory: Adobe.Indesign.StoryTypes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}