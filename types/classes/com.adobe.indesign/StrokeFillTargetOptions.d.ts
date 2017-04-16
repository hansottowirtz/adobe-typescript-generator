/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class StrokeFillTargetOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Formatting affects the container. */
			public static readonly FORMATTING_AFFECTS_CONTAINER: Adobe.Indesign.StrokeFillTargetOptions;
			/** Formatting affects the text. */
			public static readonly FORMATTING_AFFECTS_TEXT: Adobe.Indesign.StrokeFillTargetOptions;
			/**
			 * Alias for FORMATTING_AFFECTS_CONTAINER. Formatting affects 
			 * the container.
			 */
			public static readonly formattingAffectsContainer: Adobe.Indesign.StrokeFillTargetOptions;
			/**
			 * Alias for FORMATTING_AFFECTS_TEXT. Formatting affects the 
			 * text.
			 */
			public static readonly formattingAffectsText: Adobe.Indesign.StrokeFillTargetOptions;
			/** Constructor */
			public constructor();
		}
	}
}