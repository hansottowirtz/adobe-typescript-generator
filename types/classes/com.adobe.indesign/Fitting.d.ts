/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class Fitting extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Resizes content to fill the frame while preserving content 
			 * proportions. If the content and frame have different 
			 * proportions, some content is obscured by the bounding box of 
			 * the frame.
			 */
			public static readonly FILL_PROPORTIONAL: Adobe.Indesign.Fitting;
			/**
			 * Alias for FILL_PROPORTIONAL. Resizes content to fill the 
			 * frame while preserving content proportions. If the content 
			 * and frame have different proportions, some content is 
			 * obscured by the bounding box of the frame.
			 */
			public static readonly fillProportional: Adobe.Indesign.Fitting;
			/**
			 * Resizes content to fit the frame. Note: Content that is a 
			 * different size than the frame appears stretched or squeezed.
			 */
			public static readonly FIT_CONTENT_TO_FRAME: Adobe.Indesign.Fitting;
			/** Resizes the frame to fit the content. */
			public static readonly FIT_FRAME_TO_CONTENT: Adobe.Indesign.Fitting;
			/**
			 * Alias for FIT_CONTENT_TO_FRAME. Resizes content to fit the 
			 * frame. Note: Content that is a different size than the frame 
			 * appears stretched or squeezed.
			 */
			public static readonly fitContentToFrame: Adobe.Indesign.Fitting;
			/**
			 * Alias for FIT_FRAME_TO_CONTENT. Resizes the frame to fit the 
			 * content.
			 */
			public static readonly fitFrameToContent: Adobe.Indesign.Fitting;
			/**
			 * Preserves the original sizes of the frame and the content. 
			 * Note: Content that is larger than the frame is obscured 
			 * around the edges.
			 */
			public static readonly PRESERVE_SIZES: Adobe.Indesign.Fitting;
			/**
			 * Alias for PRESERVE_SIZES. Preserves the original sizes of 
			 * the frame and the content. Note: Content that is larger than 
			 * the frame is obscured around the edges.
			 */
			public static readonly preserveSizes: Adobe.Indesign.Fitting;
			/**
			 * Alias for PROPORTIONAL. Resizes content to fit the frame 
			 * while preserving content proportions. If the content and 
			 * frame have different proportions, some empty space occurs in 
			 * the frame.
			 */
			public static readonly proportional: Adobe.Indesign.Fitting;
			/**
			 * Resizes content to fit the frame while preserving content 
			 * proportions. If the content and frame have different 
			 * proportions, some empty space occurs in the frame.
			 */
			public static readonly PROPORTIONAL: Adobe.Indesign.Fitting;
			/** Constructor */
			public constructor();
		}
	}
}