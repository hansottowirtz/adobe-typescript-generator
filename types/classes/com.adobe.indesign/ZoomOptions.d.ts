/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ZoomOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Zooms to 100%.
			 * @type {Adobe.Indesign.ZoomOptions}
			 * @readonly
			 */
			public static readonly ACTUAL_SIZE: Adobe.Indesign.ZoomOptions;
			/**
			 * Alias for ACTUAL_SIZE. Zooms to 100%.
			 * @type {Adobe.Indesign.ZoomOptions}
			 * @readonly
			 */
			public static readonly actualSize: Adobe.Indesign.ZoomOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Centers the active page in the window.
			 * @type {Adobe.Indesign.ZoomOptions}
			 * @readonly
			 */
			public static readonly FIT_PAGE: Adobe.Indesign.ZoomOptions;
			/**
			 * Centers the active spread in the window.
			 * @type {Adobe.Indesign.ZoomOptions}
			 * @readonly
			 */
			public static readonly FIT_SPREAD: Adobe.Indesign.ZoomOptions;
			/**
			 * Alias for FIT_PAGE. Centers the active page in the window.
			 * @type {Adobe.Indesign.ZoomOptions}
			 * @readonly
			 */
			public static readonly fitPage: Adobe.Indesign.ZoomOptions;
			/**
			 * Alias for FIT_SPREAD. Centers the active spread in the 
			 * window.
			 * @type {Adobe.Indesign.ZoomOptions}
			 * @readonly
			 */
			public static readonly fitSpread: Adobe.Indesign.ZoomOptions;
			/**
			 * Fits the entire pasteboard in the window.
			 * @type {Adobe.Indesign.ZoomOptions}
			 * @readonly
			 */
			public static readonly SHOW_PASTEBOARD: Adobe.Indesign.ZoomOptions;
			/**
			 * Alias for SHOW_PASTEBOARD. Fits the entire pasteboard in the 
			 * window.
			 * @type {Adobe.Indesign.ZoomOptions}
			 * @readonly
			 */
			public static readonly showPasteboard: Adobe.Indesign.ZoomOptions;
			/**
			 * Magnifies the view to the next preset percentage.
			 * @type {Adobe.Indesign.ZoomOptions}
			 * @readonly
			 */
			public static readonly ZOOM_IN: Adobe.Indesign.ZoomOptions;
			/**
			 * Reduces the view to the next preset percentage.
			 * @type {Adobe.Indesign.ZoomOptions}
			 * @readonly
			 */
			public static readonly ZOOM_OUT: Adobe.Indesign.ZoomOptions;
			/**
			 * Alias for ZOOM_IN. Magnifies the view to the next preset 
			 * percentage.
			 * @type {Adobe.Indesign.ZoomOptions}
			 * @readonly
			 */
			public static readonly zoomIn: Adobe.Indesign.ZoomOptions;
			/**
			 * Alias for ZOOM_OUT. Reduces the view to the next preset 
			 * percentage.
			 * @type {Adobe.Indesign.ZoomOptions}
			 * @readonly
			 */
			public static readonly zoomOut: Adobe.Indesign.ZoomOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}