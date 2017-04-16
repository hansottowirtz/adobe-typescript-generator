/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class StrokeFillTargetOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Formatting affects the container.
			 * @type {Adobe.Indesign.StrokeFillTargetOptions}
			 * @readonly
			 */
			public static readonly FORMATTING_AFFECTS_CONTAINER: Adobe.Indesign.StrokeFillTargetOptions;
			/**
			 * Formatting affects the text.
			 * @type {Adobe.Indesign.StrokeFillTargetOptions}
			 * @readonly
			 */
			public static readonly FORMATTING_AFFECTS_TEXT: Adobe.Indesign.StrokeFillTargetOptions;
			/**
			 * Alias for FORMATTING_AFFECTS_CONTAINER. Formatting affects 
			 * the container.
			 * @type {Adobe.Indesign.StrokeFillTargetOptions}
			 * @readonly
			 */
			public static readonly formattingAffectsContainer: Adobe.Indesign.StrokeFillTargetOptions;
			/**
			 * Alias for FORMATTING_AFFECTS_TEXT. Formatting affects the 
			 * text.
			 * @type {Adobe.Indesign.StrokeFillTargetOptions}
			 * @readonly
			 */
			public static readonly formattingAffectsText: Adobe.Indesign.StrokeFillTargetOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}