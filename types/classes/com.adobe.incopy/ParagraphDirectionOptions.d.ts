/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class ParagraphDirectionOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Left to Right paragraph direction */
			public static readonly LEFT_TO_RIGHT_DIRECTION: Adobe.Incopy.ParagraphDirectionOptions;
			/**
			 * Alias for LEFT_TO_RIGHT_DIRECTION. Left to Right paragraph 
			 * direction
			 */
			public static readonly leftToRightDirection: Adobe.Incopy.ParagraphDirectionOptions;
			/** Right to Left paragraph direction */
			public static readonly RIGHT_TO_LEFT_DIRECTION: Adobe.Incopy.ParagraphDirectionOptions;
			/**
			 * Alias for RIGHT_TO_LEFT_DIRECTION. Right to Left paragraph 
			 * direction
			 */
			public static readonly rightToLeftDirection: Adobe.Incopy.ParagraphDirectionOptions;
			/** Constructor */
			public constructor();
		}
	}
}