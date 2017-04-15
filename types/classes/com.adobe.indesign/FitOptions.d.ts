/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class FitOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Applies the current frame fitting options to the frame and 
			 * content.
			 */
			public static readonly APPLY_FRAME_FITTING_OPTIONS: Adobe.Indesign.FitOptions;
			/**
			 * Alias for APPLY_FRAME_FITTING_OPTIONS. Applies the current 
			 * frame fitting options to the frame and content.
			 */
			public static readonly applyFrameFittingOptions: Adobe.Indesign.FitOptions;
			/**
			 * Centers content in the frame; preserves the frame size as 
			 * well as content size and proportions. Note: If the content 
			 * is larger than the frame, content around the edges is 
			 * obscured.
			 */
			public static readonly CENTER_CONTENT: Adobe.Indesign.FitOptions;
			/**
			 * Alias for CENTER_CONTENT. Centers content in the frame; 
			 * preserves the frame size as well as content size and 
			 * proportions. Note: If the content is larger than the frame, 
			 * content around the edges is obscured.
			 */
			public static readonly centerContent: Adobe.Indesign.FitOptions;
			/**
			 * Resizes content to fit the frame. Note: Content that is a 
			 * different size than the frame appears stretched or squeezed.
			 */
			public static readonly CONTENT_TO_FRAME: Adobe.Indesign.FitOptions;
			/**
			 * Alias for CONTENT_TO_FRAME. Resizes content to fit the 
			 * frame. Note: Content that is a different size than the frame 
			 * appears stretched or squeezed.
			 */
			public static readonly contentToFrame: Adobe.Indesign.FitOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Resizes content to fill the frame while perserving the 
			 * proportions of the content. If the content and frame have 
			 * different proportions, some of the content is obscured by 
			 * the bounding box of the frame.
			 */
			public static readonly FILL_PROPORTIONALLY: Adobe.Indesign.FitOptions;
			/**
			 * Alias for FILL_PROPORTIONALLY. Resizes content to fill the 
			 * frame while perserving the proportions of the content. If 
			 * the content and frame have different proportions, some of 
			 * the content is obscured by the bounding box of the frame.
			 */
			public static readonly fillProportionally: Adobe.Indesign.FitOptions;
			/** Resizes the frame so it fits the content. */
			public static readonly FRAME_TO_CONTENT: Adobe.Indesign.FitOptions;
			/**
			 * Alias for FRAME_TO_CONTENT. Resizes the frame so it fits the 
			 * content.
			 */
			public static readonly frameToContent: Adobe.Indesign.FitOptions;
			/**
			 * Alias for PROPORTIONALLY. Resizes content to fit the frame 
			 * while preserving content proportions. If the content and 
			 * frame have different proportions, some empty space appears 
			 * in the frame.
			 */
			public static readonly proportionally: Adobe.Indesign.FitOptions;
			/**
			 * Resizes content to fit the frame while preserving content 
			 * proportions. If the content and frame have different 
			 * proportions, some empty space appears in the frame.
			 */
			public static readonly PROPORTIONALLY: Adobe.Indesign.FitOptions;
			/** Constructor */
			public constructor();
		}
	}
}