/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class GoToZoomOptions extends Adobe.Csawlib.CSEnumBase {
			/** Displays the page at 100% magnification. */
			public static readonly ACTUAL_SIZE: Adobe.Indesign.GoToZoomOptions;
			/**
			 * Alias for ACTUAL_SIZE. Displays the page at 100% 
			 * magnification.
			 */
			public static readonly actualSize: Adobe.Indesign.GoToZoomOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Fits the text area of the page to the window width; obscures 
			 * page margins and may obscure the lower portion of the page.
			 */
			public static readonly FIT_VISIBLE: Adobe.Indesign.GoToZoomOptions;
			/**
			 * Fits the page to the width of the window; may obscure the 
			 * lower portion of the page.
			 */
			public static readonly FIT_WIDTH: Adobe.Indesign.GoToZoomOptions;
			/** Fits the page in the display window. */
			public static readonly FIT_WINDOW: Adobe.Indesign.GoToZoomOptions;
			/**
			 * Alias for FIT_VISIBLE. Fits the text area of the page to the 
			 * window width; obscures page margins and may obscure the 
			 * lower portion of the page.
			 */
			public static readonly fitVisible: Adobe.Indesign.GoToZoomOptions;
			/**
			 * Alias for FIT_WIDTH. Fits the page to the width of the 
			 * window; may obscure the lower portion of the page.
			 */
			public static readonly fitWidth: Adobe.Indesign.GoToZoomOptions;
			/** Alias for FIT_WINDOW. Fits the page in the display window. */
			public static readonly fitWindow: Adobe.Indesign.GoToZoomOptions;
			/**
			 * Inherits the zoom setting from the previously displayed 
			 * page.
			 */
			public static readonly INHERIT_ZOOM: Adobe.Indesign.GoToZoomOptions;
			/**
			 * Alias for INHERIT_ZOOM. Inherits the zoom setting from the 
			 * previously displayed page.
			 */
			public static readonly inheritZoom: Adobe.Indesign.GoToZoomOptions;
			/** Constructor */
			public constructor();
		}
	}
}