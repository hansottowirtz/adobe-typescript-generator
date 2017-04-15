/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class EmptyFrameFittingOptions extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Resizes content to fit the frame. Note: Content that has 
			 * different proportions than the frame appears stretched or 
			 * squeezed.
			 */
			public static readonly CONTENT_TO_FRAME: Adobe.Indesign.EmptyFrameFittingOptions;
			/**
			 * Alias for CONTENT_TO_FRAME. Resizes content to fit the 
			 * frame. Note: Content that has different proportions than the 
			 * frame appears stretched or squeezed.
			 */
			public static readonly contentToFrame: Adobe.Indesign.EmptyFrameFittingOptions;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Resizes content to fill the frame while perserving the 
			 * content's proportions. If the content and frame have 
			 * different proportions, some of the content is obscured by 
			 * the frame.
			 */
			public static readonly FILL_PROPORTIONALLY: Adobe.Indesign.EmptyFrameFittingOptions;
			/**
			 * Alias for FILL_PROPORTIONALLY. Resizes content to fill the 
			 * frame while perserving the content's proportions. If the 
			 * content and frame have different proportions, some of the 
			 * content is obscured by the frame.
			 */
			public static readonly fillProportionally: Adobe.Indesign.EmptyFrameFittingOptions;
			/** Alias for NONE. Does not use a fitting option. */
			public static readonly none: Adobe.Indesign.EmptyFrameFittingOptions;
			/** Does not use a fitting option. */
			public static readonly NONE: Adobe.Indesign.EmptyFrameFittingOptions;
			/**
			 * Alias for PROPORTIONALLY. Resizes content to fit the frame 
			 * while preserving content proportions. If the content and 
			 * frame have different proportions, some empty space appears 
			 * in the frame.
			 */
			public static readonly proportionally: Adobe.Indesign.EmptyFrameFittingOptions;
			/**
			 * Resizes content to fit the frame while preserving content 
			 * proportions. If the content and frame have different 
			 * proportions, some empty space appears in the frame.
			 */
			public static readonly PROPORTIONALLY: Adobe.Indesign.EmptyFrameFittingOptions;
			/** Constructor */
			public constructor();
		}
	}
}