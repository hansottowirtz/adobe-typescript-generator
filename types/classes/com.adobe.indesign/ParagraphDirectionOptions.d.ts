/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ParagraphDirectionOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Left to Right paragraph direction */
			public static readonly LEFT_TO_RIGHT_DIRECTION: Adobe.Indesign.ParagraphDirectionOptions;
			/**
			 * Alias for LEFT_TO_RIGHT_DIRECTION. Left to Right paragraph 
			 * direction
			 */
			public static readonly leftToRightDirection: Adobe.Indesign.ParagraphDirectionOptions;
			/** Right to Left paragraph direction */
			public static readonly RIGHT_TO_LEFT_DIRECTION: Adobe.Indesign.ParagraphDirectionOptions;
			/**
			 * Alias for RIGHT_TO_LEFT_DIRECTION. Right to Left paragraph 
			 * direction
			 */
			public static readonly rightToLeftDirection: Adobe.Indesign.ParagraphDirectionOptions;
			/** Constructor */
			public constructor();
		}
	}
}