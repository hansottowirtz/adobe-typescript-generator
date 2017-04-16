/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ViewTabs extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Displays the document in galley view. */
			public static readonly GALLEY_VIEW: Adobe.Incopy.ViewTabs;
			/**
			 * Alias for GALLEY_VIEW. Displays the document in galley view.
			 */
			public static readonly galleyView: Adobe.Incopy.ViewTabs;
			/** Displays the document in layout view. */
			public static readonly LAYOUT_VIEW: Adobe.Incopy.ViewTabs;
			/**
			 * Alias for LAYOUT_VIEW. Displays the document in layout view.
			 */
			public static readonly layoutView: Adobe.Incopy.ViewTabs;
			/** Displays the document in story view. */
			public static readonly STORY_VIEW: Adobe.Incopy.ViewTabs;
			/** Alias for STORY_VIEW. Displays the document in story view. */
			public static readonly storyView: Adobe.Incopy.ViewTabs;
			/** Constructor */
			public constructor();
		}
	}
}