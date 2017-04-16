/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ZoomOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Zooms to 100%.
			 * @type {Adobe.Incopy.ZoomOptions}
			 * @readonly
			 */
			public static readonly ACTUAL_SIZE: Adobe.Incopy.ZoomOptions;
			/**
			 * Alias for ACTUAL_SIZE. Zooms to 100%.
			 * @type {Adobe.Incopy.ZoomOptions}
			 * @readonly
			 */
			public static readonly actualSize: Adobe.Incopy.ZoomOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Centers the active page in the window.
			 * @type {Adobe.Incopy.ZoomOptions}
			 * @readonly
			 */
			public static readonly FIT_PAGE: Adobe.Incopy.ZoomOptions;
			/**
			 * Centers the active spread in the window.
			 * @type {Adobe.Incopy.ZoomOptions}
			 * @readonly
			 */
			public static readonly FIT_SPREAD: Adobe.Incopy.ZoomOptions;
			/**
			 * Alias for FIT_PAGE. Centers the active page in the window.
			 * @type {Adobe.Incopy.ZoomOptions}
			 * @readonly
			 */
			public static readonly fitPage: Adobe.Incopy.ZoomOptions;
			/**
			 * Alias for FIT_SPREAD. Centers the active spread in the 
			 * window.
			 * @type {Adobe.Incopy.ZoomOptions}
			 * @readonly
			 */
			public static readonly fitSpread: Adobe.Incopy.ZoomOptions;
			/**
			 * Fits the entire pasteboard in the window.
			 * @type {Adobe.Incopy.ZoomOptions}
			 * @readonly
			 */
			public static readonly SHOW_PASTEBOARD: Adobe.Incopy.ZoomOptions;
			/**
			 * Alias for SHOW_PASTEBOARD. Fits the entire pasteboard in the 
			 * window.
			 * @type {Adobe.Incopy.ZoomOptions}
			 * @readonly
			 */
			public static readonly showPasteboard: Adobe.Incopy.ZoomOptions;
			/**
			 * Magnifies the view to the next preset percentage.
			 * @type {Adobe.Incopy.ZoomOptions}
			 * @readonly
			 */
			public static readonly ZOOM_IN: Adobe.Incopy.ZoomOptions;
			/**
			 * Reduces the view to the next preset percentage.
			 * @type {Adobe.Incopy.ZoomOptions}
			 * @readonly
			 */
			public static readonly ZOOM_OUT: Adobe.Incopy.ZoomOptions;
			/**
			 * Alias for ZOOM_IN. Magnifies the view to the next preset 
			 * percentage.
			 * @type {Adobe.Incopy.ZoomOptions}
			 * @readonly
			 */
			public static readonly zoomIn: Adobe.Incopy.ZoomOptions;
			/**
			 * Alias for ZOOM_OUT. Reduces the view to the next preset 
			 * percentage.
			 * @type {Adobe.Incopy.ZoomOptions}
			 * @readonly
			 */
			public static readonly zoomOut: Adobe.Incopy.ZoomOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}