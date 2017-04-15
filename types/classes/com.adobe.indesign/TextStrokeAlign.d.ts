/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class TextStrokeAlign extends Adobe.Csawlib.CSEnumBase {
			/** The stroke straddles the path. */
			public static readonly CENTER_ALIGNMENT: Adobe.Indesign.TextStrokeAlign;
			/** Alias for CENTER_ALIGNMENT. The stroke straddles the path. */
			public static readonly centerAlignment: Adobe.Indesign.TextStrokeAlign;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The stroke is outside the path, like a picture frame. */
			public static readonly OUTSIDE_ALIGNMENT: Adobe.Indesign.TextStrokeAlign;
			/**
			 * Alias for OUTSIDE_ALIGNMENT. The stroke is outside the path, 
			 * like a picture frame.
			 */
			public static readonly outsideAlignment: Adobe.Indesign.TextStrokeAlign;
			/** Constructor */
			public constructor();
		}
	}
}