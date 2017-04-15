/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class TextStrokeAlign extends Adobe.Csawlib.CSEnumBase {
			/** The stroke straddles the path. */
			public static readonly CENTER_ALIGNMENT: Adobe.Incopy.TextStrokeAlign;
			/** Alias for CENTER_ALIGNMENT. The stroke straddles the path. */
			public static readonly centerAlignment: Adobe.Incopy.TextStrokeAlign;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The stroke is outside the path, like a picture frame. */
			public static readonly OUTSIDE_ALIGNMENT: Adobe.Incopy.TextStrokeAlign;
			/**
			 * Alias for OUTSIDE_ALIGNMENT. The stroke is outside the path, 
			 * like a picture frame.
			 */
			public static readonly outsideAlignment: Adobe.Incopy.TextStrokeAlign;
			/** Constructor */
			public constructor();
		}
	}
}