/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class GoToZoomOptions extends Adobe.Csawlib.CSEnumBase {
			/** Displays the page at 100% magnification. */
			public static readonly ACTUAL_SIZE: Adobe.Incopy.GoToZoomOptions;
			/**
			 * Alias for ACTUAL_SIZE. Displays the page at 100% 
			 * magnification.
			 */
			public static readonly actualSize: Adobe.Incopy.GoToZoomOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Fits the text area of the page to the window width; obscures 
			 * page margins and may obscure the lower portion of the page.
			 */
			public static readonly FIT_VISIBLE: Adobe.Incopy.GoToZoomOptions;
			/**
			 * Fits the page to the width of the window; may obscure the 
			 * lower portion of the page.
			 */
			public static readonly FIT_WIDTH: Adobe.Incopy.GoToZoomOptions;
			/** Fits the page in the display window. */
			public static readonly FIT_WINDOW: Adobe.Incopy.GoToZoomOptions;
			/**
			 * Alias for FIT_VISIBLE. Fits the text area of the page to the 
			 * window width; obscures page margins and may obscure the 
			 * lower portion of the page.
			 */
			public static readonly fitVisible: Adobe.Incopy.GoToZoomOptions;
			/**
			 * Alias for FIT_WIDTH. Fits the page to the width of the 
			 * window; may obscure the lower portion of the page.
			 */
			public static readonly fitWidth: Adobe.Incopy.GoToZoomOptions;
			/** Alias for FIT_WINDOW. Fits the page in the display window. */
			public static readonly fitWindow: Adobe.Incopy.GoToZoomOptions;
			/**
			 * Inherits the zoom setting from the previously displayed 
			 * page.
			 */
			public static readonly INHERIT_ZOOM: Adobe.Incopy.GoToZoomOptions;
			/**
			 * Alias for INHERIT_ZOOM. Inherits the zoom setting from the 
			 * previously displayed page.
			 */
			public static readonly inheritZoom: Adobe.Incopy.GoToZoomOptions;
			/** Constructor */
			public constructor();
		}
	}
}