/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class StrokeFillTargetOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Formatting affects the container. */
			public static readonly FORMATTING_AFFECTS_CONTAINER: Adobe.Incopy.StrokeFillTargetOptions;
			/** Formatting affects the text. */
			public static readonly FORMATTING_AFFECTS_TEXT: Adobe.Incopy.StrokeFillTargetOptions;
			/**
			 * Alias for FORMATTING_AFFECTS_CONTAINER. Formatting affects 
			 * the container.
			 */
			public static readonly formattingAffectsContainer: Adobe.Incopy.StrokeFillTargetOptions;
			/**
			 * Alias for FORMATTING_AFFECTS_TEXT. Formatting affects the 
			 * text.
			 */
			public static readonly formattingAffectsText: Adobe.Incopy.StrokeFillTargetOptions;
			/** Constructor */
			public constructor();
		}
	}
}