/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ToolTipOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for FAST. Displays tool tips more quickly than normal.
			 */
			public static readonly fast: Adobe.Indesign.ToolTipOptions;
			/** Displays tool tips more quickly than normal. */
			public static readonly FAST: Adobe.Indesign.ToolTipOptions;
			/** Alias for NONE. Turns off tool tips. */
			public static readonly none: Adobe.Indesign.ToolTipOptions;
			/** Turns off tool tips. */
			public static readonly NONE: Adobe.Indesign.ToolTipOptions;
			/** Alias for NORMAL. Displays tool tips. */
			public static readonly normal: Adobe.Indesign.ToolTipOptions;
			/** Displays tool tips. */
			public static readonly NORMAL: Adobe.Indesign.ToolTipOptions;
			/** Constructor */
			public constructor();
		}
	}
}