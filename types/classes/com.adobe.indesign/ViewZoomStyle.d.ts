/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ViewZoomStyle extends Adobe.Csawlib.CSEnumBase {
			/** Displays the page at 100% magnification. */
			public static readonly ACTUAL_SIZE: Adobe.Indesign.ViewZoomStyle;
			/**
			 * Alias for ACTUAL_SIZE. Displays the page at 100% 
			 * magnification.
			 */
			public static readonly actualSize: Adobe.Indesign.ViewZoomStyle;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Fits the entire page in the window. */
			public static readonly FIT_PAGE: Adobe.Indesign.ViewZoomStyle;
			/**
			 * Fits the the text area of the page to the window width; 
			 * obscures page margins and may obscure the lower portion of 
			 * the page.
			 */
			public static readonly FIT_VISIBLE: Adobe.Indesign.ViewZoomStyle;
			/**
			 * Fits the page to the width of the window; may obscure the 
			 * lower portion of the page.
			 */
			public static readonly FIT_WIDTH: Adobe.Indesign.ViewZoomStyle;
			/** Alias for FIT_PAGE. Fits the entire page in the window. */
			public static readonly fitPage: Adobe.Indesign.ViewZoomStyle;
			/**
			 * Alias for FIT_VISIBLE. Fits the the text area of the page to 
			 * the window width; obscures page margins and may obscure the 
			 * lower portion of the page.
			 */
			public static readonly fitVisible: Adobe.Indesign.ViewZoomStyle;
			/**
			 * Alias for FIT_WIDTH. Fits the page to the width of the 
			 * window; may obscure the lower portion of the page.
			 */
			public static readonly fitWidth: Adobe.Indesign.ViewZoomStyle;
			/**
			 * Fills the screen with the page; hides the toolbar, command 
			 * bar, menu bar, and window controls.
			 */
			public static readonly FULL_SCREEN: Adobe.Indesign.ViewZoomStyle;
			/**
			 * Alias for FULL_SCREEN. Fills the screen with the page; hides 
			 * the toolbar, command bar, menu bar, and window controls.
			 */
			public static readonly fullScreen: Adobe.Indesign.ViewZoomStyle;
			/**
			 * Arranges the pages in a continuous vertical column that is 
			 * one page wide.
			 */
			public static readonly ONE_COLUMN: Adobe.Indesign.ViewZoomStyle;
			/**
			 * Alias for ONE_COLUMN. Arranges the pages in a continuous 
			 * vertical column that is one page wide.
			 */
			public static readonly oneColumn: Adobe.Indesign.ViewZoomStyle;
			/** Displays one page in the document pane at a time. */
			public static readonly SINGLE_PAGE: Adobe.Indesign.ViewZoomStyle;
			/**
			 * Alias for SINGLE_PAGE. Displays one page in the document 
			 * pane at a time.
			 */
			public static readonly singlePage: Adobe.Indesign.ViewZoomStyle;
			/**
			 * Arranges the pages side by side in a continuous vertical 
			 * column that is two pages wide.
			 */
			public static readonly TWO_COLUMN: Adobe.Indesign.ViewZoomStyle;
			/**
			 * Alias for TWO_COLUMN. Arranges the pages side by side in a 
			 * continuous vertical column that is two pages wide.
			 */
			public static readonly twoColumn: Adobe.Indesign.ViewZoomStyle;
			/** Magnifies the view to the next preset percentage. */
			public static readonly ZOOM_IN: Adobe.Indesign.ViewZoomStyle;
			/** Reduces the view to the previous preset percentage. */
			public static readonly ZOOM_OUT: Adobe.Indesign.ViewZoomStyle;
			/**
			 * Alias for ZOOM_IN. Magnifies the view to the next preset 
			 * percentage.
			 */
			public static readonly zoomIn: Adobe.Indesign.ViewZoomStyle;
			/**
			 * Alias for ZOOM_OUT. Reduces the view to the previous preset 
			 * percentage.
			 */
			public static readonly zoomOut: Adobe.Indesign.ViewZoomStyle;
			/** Constructor */
			public constructor();
		}
	}
}