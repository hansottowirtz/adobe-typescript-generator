/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ViewTabs extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Displays the document in galley view.
			 * @type {Adobe.Incopy.ViewTabs}
			 * @readonly
			 */
			public static readonly GALLEY_VIEW: Adobe.Incopy.ViewTabs;
			/**
			 * Alias for GALLEY_VIEW. Displays the document in galley view.
			 * @type {Adobe.Incopy.ViewTabs}
			 * @readonly
			 */
			public static readonly galleyView: Adobe.Incopy.ViewTabs;
			/**
			 * Displays the document in layout view.
			 * @type {Adobe.Incopy.ViewTabs}
			 * @readonly
			 */
			public static readonly LAYOUT_VIEW: Adobe.Incopy.ViewTabs;
			/**
			 * Alias for LAYOUT_VIEW. Displays the document in layout view.
			 * @type {Adobe.Incopy.ViewTabs}
			 * @readonly
			 */
			public static readonly layoutView: Adobe.Incopy.ViewTabs;
			/**
			 * Displays the document in story view.
			 * @type {Adobe.Incopy.ViewTabs}
			 * @readonly
			 */
			public static readonly STORY_VIEW: Adobe.Incopy.ViewTabs;
			/**
			 * Alias for STORY_VIEW. Displays the document in story view.
			 * @type {Adobe.Incopy.ViewTabs}
			 * @readonly
			 */
			public static readonly storyView: Adobe.Incopy.ViewTabs;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}