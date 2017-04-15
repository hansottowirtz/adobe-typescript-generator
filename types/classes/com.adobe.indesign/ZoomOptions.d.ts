/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ZoomOptions extends Adobe.Csawlib.CSEnumBase {
			/** Zooms to 100%. */
			public static readonly ACTUAL_SIZE: Adobe.Indesign.ZoomOptions;
			/** Alias for ACTUAL_SIZE. Zooms to 100%. */
			public static readonly actualSize: Adobe.Indesign.ZoomOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Centers the active page in the window. */
			public static readonly FIT_PAGE: Adobe.Indesign.ZoomOptions;
			/** Centers the active spread in the window. */
			public static readonly FIT_SPREAD: Adobe.Indesign.ZoomOptions;
			/** Alias for FIT_PAGE. Centers the active page in the window. */
			public static readonly fitPage: Adobe.Indesign.ZoomOptions;
			/**
			 * Alias for FIT_SPREAD. Centers the active spread in the 
			 * window.
			 */
			public static readonly fitSpread: Adobe.Indesign.ZoomOptions;
			/** Fits the entire pasteboard in the window. */
			public static readonly SHOW_PASTEBOARD: Adobe.Indesign.ZoomOptions;
			/**
			 * Alias for SHOW_PASTEBOARD. Fits the entire pasteboard in the 
			 * window.
			 */
			public static readonly showPasteboard: Adobe.Indesign.ZoomOptions;
			/** Magnifies the view to the next preset percentage. */
			public static readonly ZOOM_IN: Adobe.Indesign.ZoomOptions;
			/** Reduces the view to the next preset percentage. */
			public static readonly ZOOM_OUT: Adobe.Indesign.ZoomOptions;
			/**
			 * Alias for ZOOM_IN. Magnifies the view to the next preset 
			 * percentage.
			 */
			public static readonly zoomIn: Adobe.Indesign.ZoomOptions;
			/**
			 * Alias for ZOOM_OUT. Reduces the view to the next preset 
			 * percentage.
			 */
			public static readonly zoomOut: Adobe.Indesign.ZoomOptions;
			/** Constructor */
			public constructor();
		}
	}
}