/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PageColorOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for NOTHING. No color. */
			public static readonly nothing: Adobe.Indesign.PageColorOptions;
			/** No color. */
			public static readonly NOTHING: Adobe.Indesign.PageColorOptions;
			/** Uses the color label of the page's master page. */
			public static readonly USE_MASTER_COLOR: Adobe.Indesign.PageColorOptions;
			/**
			 * Alias for USE_MASTER_COLOR. Uses the color label of the 
			 * page's master page.
			 */
			public static readonly useMasterColor: Adobe.Indesign.PageColorOptions;
			/** Constructor */
			public constructor();
		}
	}
}