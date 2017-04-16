/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ScreenModeOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Preview mode with editing turned off. Mouse clicks and arrow 
			 * keys will move to previous or next spread.
			 * @type {Adobe.Indesign.ScreenModeOptions}
			 * @readonly
			 */
			public static readonly PRESENTATION_PREVIEW: Adobe.Indesign.ScreenModeOptions;
			/**
			 * Alias for PRESENTATION_PREVIEW. Preview mode with editing 
			 * turned off. Mouse clicks and arrow keys will move to 
			 * previous or next spread.
			 * @type {Adobe.Indesign.ScreenModeOptions}
			 * @readonly
			 */
			public static readonly presentationPreview: Adobe.Indesign.ScreenModeOptions;
			/**
			 * Normal view; displays guides and frame edges.
			 * @type {Adobe.Indesign.ScreenModeOptions}
			 * @readonly
			 */
			public static readonly PREVIEW_OFF: Adobe.Indesign.ScreenModeOptions;
			/**
			 * Preview mode including the bleed area.
			 * @type {Adobe.Indesign.ScreenModeOptions}
			 * @readonly
			 */
			public static readonly PREVIEW_TO_BLEED: Adobe.Indesign.ScreenModeOptions;
			/**
			 * Preview mode; displays the document as it will be printed 
			 * (hides guides and frame edges).
			 * @type {Adobe.Indesign.ScreenModeOptions}
			 * @readonly
			 */
			public static readonly PREVIEW_TO_PAGE: Adobe.Indesign.ScreenModeOptions;
			/**
			 * Preview mode including the slug area.
			 * @type {Adobe.Indesign.ScreenModeOptions}
			 * @readonly
			 */
			public static readonly PREVIEW_TO_SLUG: Adobe.Indesign.ScreenModeOptions;
			/**
			 * Alias for PREVIEW_OFF. Normal view; displays guides and 
			 * frame edges.
			 * @type {Adobe.Indesign.ScreenModeOptions}
			 * @readonly
			 */
			public static readonly previewOff: Adobe.Indesign.ScreenModeOptions;
			/**
			 * Alias for PREVIEW_TO_BLEED. Preview mode including the bleed 
			 * area.
			 * @type {Adobe.Indesign.ScreenModeOptions}
			 * @readonly
			 */
			public static readonly previewToBleed: Adobe.Indesign.ScreenModeOptions;
			/**
			 * Alias for PREVIEW_TO_PAGE. Preview mode; displays the 
			 * document as it will be printed (hides guides and frame 
			 * edges).
			 * @type {Adobe.Indesign.ScreenModeOptions}
			 * @readonly
			 */
			public static readonly previewToPage: Adobe.Indesign.ScreenModeOptions;
			/**
			 * Alias for PREVIEW_TO_SLUG. Preview mode including the slug 
			 * area.
			 * @type {Adobe.Indesign.ScreenModeOptions}
			 * @readonly
			 */
			public static readonly previewToSlug: Adobe.Indesign.ScreenModeOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}