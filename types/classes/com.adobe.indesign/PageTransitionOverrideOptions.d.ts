/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PageTransitionOverrideOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * The Blinds page transition.
			 * @type {Adobe.Indesign.PageTransitionOverrideOptions}
			 * @readonly
			 */
			public static readonly BLINDS_TRANSITION: Adobe.Indesign.PageTransitionOverrideOptions;
			/**
			 * Alias for BLINDS_TRANSITION. The Blinds page transition.
			 * @type {Adobe.Indesign.PageTransitionOverrideOptions}
			 * @readonly
			 */
			public static readonly blindsTransition: Adobe.Indesign.PageTransitionOverrideOptions;
			/**
			 * The Blinds page transition.
			 * @type {Adobe.Indesign.PageTransitionOverrideOptions}
			 * @readonly
			 */
			public static readonly BOX_TRANSITION: Adobe.Indesign.PageTransitionOverrideOptions;
			/**
			 * Alias for BOX_TRANSITION. The Blinds page transition.
			 * @type {Adobe.Indesign.PageTransitionOverrideOptions}
			 * @readonly
			 */
			public static readonly boxTransition: Adobe.Indesign.PageTransitionOverrideOptions;
			/**
			 * The Comb page transition.
			 * @type {Adobe.Indesign.PageTransitionOverrideOptions}
			 * @readonly
			 */
			public static readonly COMB_TRANSITION: Adobe.Indesign.PageTransitionOverrideOptions;
			/**
			 * Alias for COMB_TRANSITION. The Comb page transition.
			 * @type {Adobe.Indesign.PageTransitionOverrideOptions}
			 * @readonly
			 */
			public static readonly combTransition: Adobe.Indesign.PageTransitionOverrideOptions;
			/**
			 * The Cover page transition.
			 * @type {Adobe.Indesign.PageTransitionOverrideOptions}
			 * @readonly
			 */
			public static readonly COVER_TRANSITION: Adobe.Indesign.PageTransitionOverrideOptions;
			/**
			 * Alias for COVER_TRANSITION. The Cover page transition.
			 * @type {Adobe.Indesign.PageTransitionOverrideOptions}
			 * @readonly
			 */
			public static readonly coverTransition: Adobe.Indesign.PageTransitionOverrideOptions;
			/**
			 * The Dissolve page transition.
			 * @type {Adobe.Indesign.PageTransitionOverrideOptions}
			 * @readonly
			 */
			public static readonly DISSOLVE_TRANSITION: Adobe.Indesign.PageTransitionOverrideOptions;
			/**
			 * Alias for DISSOLVE_TRANSITION. The Dissolve page transition.
			 * @type {Adobe.Indesign.PageTransitionOverrideOptions}
			 * @readonly
			 */
			public static readonly dissolveTransition: Adobe.Indesign.PageTransitionOverrideOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * The Fade page transition.
			 * @type {Adobe.Indesign.PageTransitionOverrideOptions}
			 * @readonly
			 */
			public static readonly FADE_TRANSITION: Adobe.Indesign.PageTransitionOverrideOptions;
			/**
			 * Alias for FADE_TRANSITION. The Fade page transition.
			 * @type {Adobe.Indesign.PageTransitionOverrideOptions}
			 * @readonly
			 */
			public static readonly fadeTransition: Adobe.Indesign.PageTransitionOverrideOptions;
			/**
			 * Use the page transition from the document.
			 * @type {Adobe.Indesign.PageTransitionOverrideOptions}
			 * @readonly
			 */
			public static readonly FROM_DOCUMENT: Adobe.Indesign.PageTransitionOverrideOptions;
			/**
			 * Alias for FROM_DOCUMENT. Use the page transition from the 
			 * document.
			 * @type {Adobe.Indesign.PageTransitionOverrideOptions}
			 * @readonly
			 */
			public static readonly fromDocument: Adobe.Indesign.PageTransitionOverrideOptions;
			/**
			 * Alias for NONE. No page transition applied.
			 * @type {Adobe.Indesign.PageTransitionOverrideOptions}
			 * @readonly
			 */
			public static readonly none: Adobe.Indesign.PageTransitionOverrideOptions;
			/**
			 * No page transition applied.
			 * @type {Adobe.Indesign.PageTransitionOverrideOptions}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Indesign.PageTransitionOverrideOptions;
			/**
			 * The Page Turn page transition (SWF only).
			 * @type {Adobe.Indesign.PageTransitionOverrideOptions}
			 * @readonly
			 */
			public static readonly PAGE_TURN_TRANSITION: Adobe.Indesign.PageTransitionOverrideOptions;
			/**
			 * Alias for PAGE_TURN_TRANSITION. The Page Turn page 
			 * transition (SWF only).
			 * @type {Adobe.Indesign.PageTransitionOverrideOptions}
			 * @readonly
			 */
			public static readonly pageTurnTransition: Adobe.Indesign.PageTransitionOverrideOptions;
			/**
			 * The Push page transition.
			 * @type {Adobe.Indesign.PageTransitionOverrideOptions}
			 * @readonly
			 */
			public static readonly PUSH_TRANSITION: Adobe.Indesign.PageTransitionOverrideOptions;
			/**
			 * Alias for PUSH_TRANSITION. The Push page transition.
			 * @type {Adobe.Indesign.PageTransitionOverrideOptions}
			 * @readonly
			 */
			public static readonly pushTransition: Adobe.Indesign.PageTransitionOverrideOptions;
			/**
			 * The Split page transition.
			 * @type {Adobe.Indesign.PageTransitionOverrideOptions}
			 * @readonly
			 */
			public static readonly SPLIT_TRANSITION: Adobe.Indesign.PageTransitionOverrideOptions;
			/**
			 * Alias for SPLIT_TRANSITION. The Split page transition.
			 * @type {Adobe.Indesign.PageTransitionOverrideOptions}
			 * @readonly
			 */
			public static readonly splitTransition: Adobe.Indesign.PageTransitionOverrideOptions;
			/**
			 * The Uncover page transition.
			 * @type {Adobe.Indesign.PageTransitionOverrideOptions}
			 * @readonly
			 */
			public static readonly UNCOVER_TRANSITION: Adobe.Indesign.PageTransitionOverrideOptions;
			/**
			 * Alias for UNCOVER_TRANSITION. The Uncover page transition.
			 * @type {Adobe.Indesign.PageTransitionOverrideOptions}
			 * @readonly
			 */
			public static readonly uncoverTransition: Adobe.Indesign.PageTransitionOverrideOptions;
			/**
			 * The Wipe page transition.
			 * @type {Adobe.Indesign.PageTransitionOverrideOptions}
			 * @readonly
			 */
			public static readonly WIPE_TRANSITION: Adobe.Indesign.PageTransitionOverrideOptions;
			/**
			 * Alias for WIPE_TRANSITION. The Wipe page transition.
			 * @type {Adobe.Indesign.PageTransitionOverrideOptions}
			 * @readonly
			 */
			public static readonly wipeTransition: Adobe.Indesign.PageTransitionOverrideOptions;
			/**
			 * The Zoom In page transition.
			 * @type {Adobe.Indesign.PageTransitionOverrideOptions}
			 * @readonly
			 */
			public static readonly ZOOM_IN_TRANSITION: Adobe.Indesign.PageTransitionOverrideOptions;
			/**
			 * The Zoom Out page transition.
			 * @type {Adobe.Indesign.PageTransitionOverrideOptions}
			 * @readonly
			 */
			public static readonly ZOOM_OUT_TRANSITION: Adobe.Indesign.PageTransitionOverrideOptions;
			/**
			 * Alias for ZOOM_IN_TRANSITION. The Zoom In page transition.
			 * @type {Adobe.Indesign.PageTransitionOverrideOptions}
			 * @readonly
			 */
			public static readonly zoomInTransition: Adobe.Indesign.PageTransitionOverrideOptions;
			/**
			 * Alias for ZOOM_OUT_TRANSITION. The Zoom Out page transition.
			 * @type {Adobe.Indesign.PageTransitionOverrideOptions}
			 * @readonly
			 */
			public static readonly zoomOutTransition: Adobe.Indesign.PageTransitionOverrideOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}