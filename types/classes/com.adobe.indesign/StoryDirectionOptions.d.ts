/// <reference path="../../packages/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class StoryDirectionOptions extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Left to right direction. */
			public static readonly LEFT_TO_RIGHT_DIRECTION: Adobe.Indesign.StoryDirectionOptions;
			/** Alias for LEFT_TO_RIGHT_DIRECTION. Left to right direction. */
			public static readonly leftToRightDirection: Adobe.Indesign.StoryDirectionOptions;
			/** Right to left direction. */
			public static readonly RIGHT_TO_LEFT_DIRECTION: Adobe.Indesign.StoryDirectionOptions;
			/** Alias for RIGHT_TO_LEFT_DIRECTION. Right to left direction. */
			public static readonly rightToLeftDirection: Adobe.Indesign.StoryDirectionOptions;
			/** Unknown direction. */
			public static readonly UNKNOWN_DIRECTION: Adobe.Indesign.StoryDirectionOptions;
			/** Alias for UNKNOWN_DIRECTION. Unknown direction. */
			public static readonly unknownDirection: Adobe.Indesign.StoryDirectionOptions;
			/** Constructor */
			public constructor();
		}
	}
}