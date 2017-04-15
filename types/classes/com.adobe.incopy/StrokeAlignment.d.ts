/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class StrokeAlignment extends Adobe.Csawlib.CSEnumBase {
			/** The stroke straddles the path. */
			public static readonly CENTER_ALIGNMENT: Adobe.Incopy.StrokeAlignment;
			/** Alias for CENTER_ALIGNMENT. The stroke straddles the path. */
			public static readonly centerAlignment: Adobe.Incopy.StrokeAlignment;
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** The stroke is inside the path. */
			public static readonly INSIDE_ALIGNMENT: Adobe.Incopy.StrokeAlignment;
			/** Alias for INSIDE_ALIGNMENT. The stroke is inside the path. */
			public static readonly insideAlignment: Adobe.Incopy.StrokeAlignment;
			/** The stroke is outside the path, like a picture frame. */
			public static readonly OUTSIDE_ALIGNMENT: Adobe.Incopy.StrokeAlignment;
			/**
			 * Alias for OUTSIDE_ALIGNMENT. The stroke is outside the path, 
			 * like a picture frame.
			 */
			public static readonly outsideAlignment: Adobe.Incopy.StrokeAlignment;
			/** Constructor */
			public constructor();
		}
	}
}