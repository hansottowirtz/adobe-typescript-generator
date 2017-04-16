/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class AddPageOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Insert pages at end of document.
			 * @type {Adobe.Incopy.AddPageOptions}
			 * @readonly
			 */
			public static readonly END_OF_DOCUMENT: Adobe.Incopy.AddPageOptions;
			/**
			 * Insert pages at end of section.
			 * @type {Adobe.Incopy.AddPageOptions}
			 * @readonly
			 */
			public static readonly END_OF_SECTION: Adobe.Incopy.AddPageOptions;
			/**
			 * Insert pages at end of story.
			 * @type {Adobe.Incopy.AddPageOptions}
			 * @readonly
			 */
			public static readonly END_OF_STORY: Adobe.Incopy.AddPageOptions;
			/**
			 * Alias for END_OF_DOCUMENT. Insert pages at end of document.
			 * @type {Adobe.Incopy.AddPageOptions}
			 * @readonly
			 */
			public static readonly endOfDocument: Adobe.Incopy.AddPageOptions;
			/**
			 * Alias for END_OF_SECTION. Insert pages at end of section.
			 * @type {Adobe.Incopy.AddPageOptions}
			 * @readonly
			 */
			public static readonly endOfSection: Adobe.Incopy.AddPageOptions;
			/**
			 * Alias for END_OF_STORY. Insert pages at end of story.
			 * @type {Adobe.Incopy.AddPageOptions}
			 * @readonly
			 */
			public static readonly endOfStory: Adobe.Incopy.AddPageOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}