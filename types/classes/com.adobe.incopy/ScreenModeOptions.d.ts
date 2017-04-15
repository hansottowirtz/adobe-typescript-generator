/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ScreenModeOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Normal view; displays guides and frame edges. */
			public static readonly PREVIEW_OFF: Adobe.Incopy.ScreenModeOptions;
			/**
			 * Preview mode; displays the document as it will be printed 
			 * (hides guides and frame edges).
			 */
			public static readonly PREVIEW_TO_PAGE: Adobe.Incopy.ScreenModeOptions;
			/**
			 * Alias for PREVIEW_OFF. Normal view; displays guides and 
			 * frame edges.
			 */
			public static readonly previewOff: Adobe.Incopy.ScreenModeOptions;
			/**
			 * Alias for PREVIEW_TO_PAGE. Preview mode; displays the 
			 * document as it will be printed (hides guides and frame 
			 * edges).
			 */
			public static readonly previewToPage: Adobe.Incopy.ScreenModeOptions;
			/** Constructor */
			public constructor();
		}
	}
}