/// <reference path="../../packages/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class InteractiveElementsOptions extends Adobe.Csawlib.CSEnumBase {
			/** Draw interactive elements appearance only. */
			public static readonly APPEARANCE_ONLY: Adobe.Incopy.InteractiveElementsOptions;
			/**
			 * Alias for APPEARANCE_ONLY. Draw interactive elements 
			 * appearance only.
			 */
			public static readonly appearanceOnly: Adobe.Incopy.InteractiveElementsOptions;
			/** Do not include interactive elements. */
			public static readonly DO_NOT_INCLUDE: Adobe.Incopy.InteractiveElementsOptions;
			/**
			 * Alias for DO_NOT_INCLUDE. Do not include interactive 
			 * elements.
			 */
			public static readonly doNotInclude: Adobe.Incopy.InteractiveElementsOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Constructor */
			public constructor();
		}
	}
}