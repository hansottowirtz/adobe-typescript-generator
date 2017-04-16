/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class FitOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Applies the current frame fitting options to the frame and 
			 * content.
			 * @type {Adobe.Incopy.FitOptions}
			 * @readonly
			 */
			public static readonly APPLY_FRAME_FITTING_OPTIONS: Adobe.Incopy.FitOptions;
			/**
			 * Alias for APPLY_FRAME_FITTING_OPTIONS. Applies the current 
			 * frame fitting options to the frame and content.
			 * @type {Adobe.Incopy.FitOptions}
			 * @readonly
			 */
			public static readonly applyFrameFittingOptions: Adobe.Incopy.FitOptions;
			/**
			 * Centers content in the frame; preserves the frame size as 
			 * well as content size and proportions. Note: If the content 
			 * is larger than the frame, content around the edges is 
			 * obscured.
			 * @type {Adobe.Incopy.FitOptions}
			 * @readonly
			 */
			public static readonly CENTER_CONTENT: Adobe.Incopy.FitOptions;
			/**
			 * Alias for CENTER_CONTENT. Centers content in the frame; 
			 * preserves the frame size as well as content size and 
			 * proportions. Note: If the content is larger than the frame, 
			 * content around the edges is obscured.
			 * @type {Adobe.Incopy.FitOptions}
			 * @readonly
			 */
			public static readonly centerContent: Adobe.Incopy.FitOptions;
			/**
			 * Resizes content to fit the frame. Note: Content that is a 
			 * different size than the frame appears stretched or squeezed.
			 * @type {Adobe.Incopy.FitOptions}
			 * @readonly
			 */
			public static readonly CONTENT_TO_FRAME: Adobe.Incopy.FitOptions;
			/**
			 * Alias for CONTENT_TO_FRAME. Resizes content to fit the 
			 * frame. Note: Content that is a different size than the frame 
			 * appears stretched or squeezed.
			 * @type {Adobe.Incopy.FitOptions}
			 * @readonly
			 */
			public static readonly contentToFrame: Adobe.Incopy.FitOptions;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Resizes content to fill the frame while perserving the 
			 * proportions of the content. If the content and frame have 
			 * different proportions, some of the content is obscured by 
			 * the bounding box of the frame.
			 * @type {Adobe.Incopy.FitOptions}
			 * @readonly
			 */
			public static readonly FILL_PROPORTIONALLY: Adobe.Incopy.FitOptions;
			/**
			 * Alias for FILL_PROPORTIONALLY. Resizes content to fill the 
			 * frame while perserving the proportions of the content. If 
			 * the content and frame have different proportions, some of 
			 * the content is obscured by the bounding box of the frame.
			 * @type {Adobe.Incopy.FitOptions}
			 * @readonly
			 */
			public static readonly fillProportionally: Adobe.Incopy.FitOptions;
			/**
			 * Alias for PROPORTIONALLY. Resizes content to fit the frame 
			 * while preserving content proportions. If the content and 
			 * frame have different proportions, some empty space appears 
			 * in the frame.
			 * @type {Adobe.Incopy.FitOptions}
			 * @readonly
			 */
			public static readonly proportionally: Adobe.Incopy.FitOptions;
			/**
			 * Resizes content to fit the frame while preserving content 
			 * proportions. If the content and frame have different 
			 * proportions, some empty space appears in the frame.
			 * @type {Adobe.Incopy.FitOptions}
			 * @readonly
			 */
			public static readonly PROPORTIONALLY: Adobe.Incopy.FitOptions;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}