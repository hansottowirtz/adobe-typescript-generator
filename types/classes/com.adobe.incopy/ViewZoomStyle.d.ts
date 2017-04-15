/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ViewZoomStyle extends Adobe.Csawlib.CSEnumBase {
			/** Displays the page at 100% magnification. */
			public static readonly ACTUAL_SIZE: Adobe.Incopy.ViewZoomStyle;
			/**
			 * Alias for ACTUAL_SIZE. Displays the page at 100% 
			 * magnification.
			 */
			public static readonly actualSize: Adobe.Incopy.ViewZoomStyle;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Fits the entire page in the window. */
			public static readonly FIT_PAGE: Adobe.Incopy.ViewZoomStyle;
			/**
			 * Fits the the text area of the page to the window width; 
			 * obscures page margins and may obscure the lower portion of 
			 * the page.
			 */
			public static readonly FIT_VISIBLE: Adobe.Incopy.ViewZoomStyle;
			/**
			 * Fits the page to the width of the window; may obscure the 
			 * lower portion of the page.
			 */
			public static readonly FIT_WIDTH: Adobe.Incopy.ViewZoomStyle;
			/** Alias for FIT_PAGE. Fits the entire page in the window. */
			public static readonly fitPage: Adobe.Incopy.ViewZoomStyle;
			/**
			 * Alias for FIT_VISIBLE. Fits the the text area of the page to 
			 * the window width; obscures page margins and may obscure the 
			 * lower portion of the page.
			 */
			public static readonly fitVisible: Adobe.Incopy.ViewZoomStyle;
			/**
			 * Alias for FIT_WIDTH. Fits the page to the width of the 
			 * window; may obscure the lower portion of the page.
			 */
			public static readonly fitWidth: Adobe.Incopy.ViewZoomStyle;
			/**
			 * Fills the screen with the page; hides the toolbar, command 
			 * bar, menu bar, and window controls.
			 */
			public static readonly FULL_SCREEN: Adobe.Incopy.ViewZoomStyle;
			/**
			 * Alias for FULL_SCREEN. Fills the screen with the page; hides 
			 * the toolbar, command bar, menu bar, and window controls.
			 */
			public static readonly fullScreen: Adobe.Incopy.ViewZoomStyle;
			/**
			 * Arranges the pages in a continuous vertical column that is 
			 * one page wide.
			 */
			public static readonly ONE_COLUMN: Adobe.Incopy.ViewZoomStyle;
			/**
			 * Alias for ONE_COLUMN. Arranges the pages in a continuous 
			 * vertical column that is one page wide.
			 */
			public static readonly oneColumn: Adobe.Incopy.ViewZoomStyle;
			/** Displays one page in the document pane at a time. */
			public static readonly SINGLE_PAGE: Adobe.Incopy.ViewZoomStyle;
			/**
			 * Alias for SINGLE_PAGE. Displays one page in the document 
			 * pane at a time.
			 */
			public static readonly singlePage: Adobe.Incopy.ViewZoomStyle;
			/**
			 * Arranges the pages side by side in a continuous vertical 
			 * column that is two pages wide.
			 */
			public static readonly TWO_COLUMN: Adobe.Incopy.ViewZoomStyle;
			/**
			 * Alias for TWO_COLUMN. Arranges the pages side by side in a 
			 * continuous vertical column that is two pages wide.
			 */
			public static readonly twoColumn: Adobe.Incopy.ViewZoomStyle;
			/** Magnifies the view to the next preset percentage. */
			public static readonly ZOOM_IN: Adobe.Incopy.ViewZoomStyle;
			/** Reduces the view to the previous preset percentage. */
			public static readonly ZOOM_OUT: Adobe.Incopy.ViewZoomStyle;
			/**
			 * Alias for ZOOM_IN. Magnifies the view to the next preset 
			 * percentage.
			 */
			public static readonly zoomIn: Adobe.Incopy.ViewZoomStyle;
			/**
			 * Alias for ZOOM_OUT. Reduces the view to the previous preset 
			 * percentage.
			 */
			public static readonly zoomOut: Adobe.Incopy.ViewZoomStyle;
			/** Constructor */
			public constructor();
		}
	}
}