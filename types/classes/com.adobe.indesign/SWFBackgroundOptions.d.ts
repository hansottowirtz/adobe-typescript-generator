/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SWFBackgroundOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Paper color background. */
			public static readonly PAPER_COLOR: Adobe.Indesign.SWFBackgroundOptions;
			/** Alias for PAPER_COLOR. Paper color background. */
			public static readonly paperColor: Adobe.Indesign.SWFBackgroundOptions;
			/** Transparent background. */
			public static readonly TRANSPARENT_SWF_BACKGROUND: Adobe.Indesign.SWFBackgroundOptions;
			/**
			 * Alias for TRANSPARENT_SWF_BACKGROUND. Transparent 
			 * background.
			 */
			public static readonly transparentSwfBackground: Adobe.Indesign.SWFBackgroundOptions;
			/** Constructor */
			public constructor();
		}
	}
}