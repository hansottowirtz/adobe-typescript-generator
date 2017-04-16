/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class AddPageOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Insert pages at end of document.
			 * @type {Adobe.Indesign.AddPageOptions}
			 * @readonly
			 */
			public static readonly END_OF_DOCUMENT: Adobe.Indesign.AddPageOptions;
			/**
			 * Insert pages at end of section.
			 * @type {Adobe.Indesign.AddPageOptions}
			 * @readonly
			 */
			public static readonly END_OF_SECTION: Adobe.Indesign.AddPageOptions;
			/**
			 * Insert pages at end of story.
			 * @type {Adobe.Indesign.AddPageOptions}
			 * @readonly
			 */
			public static readonly END_OF_STORY: Adobe.Indesign.AddPageOptions;
			/**
			 * Alias for END_OF_DOCUMENT. Insert pages at end of document.
			 * @type {Adobe.Indesign.AddPageOptions}
			 * @readonly
			 */
			public static readonly endOfDocument: Adobe.Indesign.AddPageOptions;
			/**
			 * Alias for END_OF_SECTION. Insert pages at end of section.
			 * @type {Adobe.Indesign.AddPageOptions}
			 * @readonly
			 */
			public static readonly endOfSection: Adobe.Indesign.AddPageOptions;
			/**
			 * Alias for END_OF_STORY. Insert pages at end of story.
			 * @type {Adobe.Indesign.AddPageOptions}
			 * @readonly
			 */
			public static readonly endOfStory: Adobe.Indesign.AddPageOptions;
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