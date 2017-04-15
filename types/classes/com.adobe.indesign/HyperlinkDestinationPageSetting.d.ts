/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class HyperlinkDestinationPageSetting extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Fits the destination page to the window height; may obscure 
			 * the right side the page. Note: The magnification changes 
			 * automatically when the window is resized vertically.
			 */
			public static readonly FIT_HEIGHT: Adobe.Indesign.HyperlinkDestinationPageSetting;
			/**
			 * Displays the visible portion of the destination page as the 
			 * destination.
			 */
			public static readonly FIT_VIEW: Adobe.Indesign.HyperlinkDestinationPageSetting;
			/**
			 * Fits the the text area of the destination page to the window 
			 * width; obscures page margins and may obscure the lower 
			 * portion of the page. Note: The magnification changes 
			 * automatically when the window is resized horizontally.
			 */
			public static readonly FIT_VISIBLE: Adobe.Indesign.HyperlinkDestinationPageSetting;
			/**
			 * Fits the destination page to the width of the window; may 
			 * obscure the lower portion of the page. Note: The 
			 * magnification changes automatically when the window is 
			 * resized horizontally.
			 */
			public static readonly FIT_WIDTH: Adobe.Indesign.HyperlinkDestinationPageSetting;
			/**
			 * Fits the entire destination page in the document window. 
			 * Note: The magnification changes automatically when the 
			 * window is resized.
			 */
			public static readonly FIT_WINDOW: Adobe.Indesign.HyperlinkDestinationPageSetting;
			/**
			 * Alias for FIT_HEIGHT. Fits the destination page to the 
			 * window height; may obscure the right side the page. Note: 
			 * The magnification changes automatically when the window is 
			 * resized vertically.
			 */
			public static readonly fitHeight: Adobe.Indesign.HyperlinkDestinationPageSetting;
			/**
			 * Alias for FIT_VIEW. Displays the visible portion of the 
			 * destination page as the destination.
			 */
			public static readonly fitView: Adobe.Indesign.HyperlinkDestinationPageSetting;
			/**
			 * Alias for FIT_VISIBLE. Fits the the text area of the 
			 * destination page to the window width; obscures page margins 
			 * and may obscure the lower portion of the page. Note: The 
			 * magnification changes automatically when the window is 
			 * resized horizontally.
			 */
			public static readonly fitVisible: Adobe.Indesign.HyperlinkDestinationPageSetting;
			/**
			 * Alias for FIT_WIDTH. Fits the destination page to the width 
			 * of the window; may obscure the lower portion of the page. 
			 * Note: The magnification changes automatically when the 
			 * window is resized horizontally.
			 */
			public static readonly fitWidth: Adobe.Indesign.HyperlinkDestinationPageSetting;
			/**
			 * Alias for FIT_WINDOW. Fits the entire destination page in 
			 * the document window. Note: The magnification changes 
			 * automatically when the window is resized.
			 */
			public static readonly fitWindow: Adobe.Indesign.HyperlinkDestinationPageSetting;
			/**
			 * Alias for FIXED. Fits the destination page within the 
			 * specified rectangle. For information on specifying the 
			 * rectangle size and position, see the entry for view bounds.
			 */
			public static readonly fixed: Adobe.Indesign.HyperlinkDestinationPageSetting;
			/**
			 * Fits the destination page within the specified rectangle. 
			 * For information on specifying the rectangle size and 
			 * position, see the entry for view bounds.
			 */
			public static readonly FIXED: Adobe.Indesign.HyperlinkDestinationPageSetting;
			/**
			 * The destination page is displayed at the same zoom percent 
			 * as the previously displayed page. Note: The magnification 
			 * changes automatically when the window is resized.
			 */
			public static readonly INHERIT_ZOOM: Adobe.Indesign.HyperlinkDestinationPageSetting;
			/**
			 * Alias for INHERIT_ZOOM. The destination page is displayed at 
			 * the same zoom percent as the previously displayed page. 
			 * Note: The magnification changes automatically when the 
			 * window is resized.
			 */
			public static readonly inheritZoom: Adobe.Indesign.HyperlinkDestinationPageSetting;
			/** Constructor */
			public constructor();
		}
	}
}