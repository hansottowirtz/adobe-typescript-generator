/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ToolTipOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for FAST. Displays tool tips more quickly than normal.
			 */
			public static readonly fast: Adobe.Incopy.ToolTipOptions;
			/** Displays tool tips more quickly than normal. */
			public static readonly FAST: Adobe.Incopy.ToolTipOptions;
			/** Alias for NONE. Turns off tool tips. */
			public static readonly none: Adobe.Incopy.ToolTipOptions;
			/** Turns off tool tips. */
			public static readonly NONE: Adobe.Incopy.ToolTipOptions;
			/** Alias for NORMAL. Displays tool tips. */
			public static readonly normal: Adobe.Incopy.ToolTipOptions;
			/** Displays tool tips. */
			public static readonly NORMAL: Adobe.Incopy.ToolTipOptions;
			/** Constructor */
			public constructor();
		}
	}
}