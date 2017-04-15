/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ResizeConstraints extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Keep current proportions */
			public static readonly KEEP_CURRENT_PROPORTIONS: Adobe.Incopy.ResizeConstraints;
			/** Keep current value */
			public static readonly KEEP_CURRENT_VALUE: Adobe.Incopy.ResizeConstraints;
			/**
			 * Alias for KEEP_CURRENT_PROPORTIONS. Keep current proportions
			 */
			public static readonly keepCurrentProportions: Adobe.Incopy.ResizeConstraints;
			/** Alias for KEEP_CURRENT_VALUE. Keep current value */
			public static readonly keepCurrentValue: Adobe.Incopy.ResizeConstraints;
			/** Constructor */
			public constructor();
		}
	}
}