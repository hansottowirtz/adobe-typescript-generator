/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ScreenModeOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Normal view; displays guides and frame edges.
			 * @type {Adobe.Incopy.ScreenModeOptions}
			 * @readonly
			 */
			public static readonly PREVIEW_OFF: Adobe.Incopy.ScreenModeOptions;
			/**
			 * Preview mode; displays the document as it will be printed 
			 * (hides guides and frame edges).
			 * @type {Adobe.Incopy.ScreenModeOptions}
			 * @readonly
			 */
			public static readonly PREVIEW_TO_PAGE: Adobe.Incopy.ScreenModeOptions;
			/**
			 * Alias for PREVIEW_OFF. Normal view; displays guides and 
			 * frame edges.
			 * @type {Adobe.Incopy.ScreenModeOptions}
			 * @readonly
			 */
			public static readonly previewOff: Adobe.Incopy.ScreenModeOptions;
			/**
			 * Alias for PREVIEW_TO_PAGE. Preview mode; displays the 
			 * document as it will be printed (hides guides and frame 
			 * edges).
			 * @type {Adobe.Incopy.ScreenModeOptions}
			 * @readonly
			 */
			public static readonly previewToPage: Adobe.Incopy.ScreenModeOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}