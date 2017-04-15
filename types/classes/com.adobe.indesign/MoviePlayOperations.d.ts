/// <reference path="/Users/otto/Code/projects/adobe-cssdk-to-dts/types/namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class MoviePlayOperations extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for PAUSE. Pauses playback. */
			public static readonly pause: Adobe.Indesign.MoviePlayOperations;
			/** Pauses playback. */
			public static readonly PAUSE: Adobe.Indesign.MoviePlayOperations;
			/** Alias for PLAY. Starts playback. */
			public static readonly play: Adobe.Indesign.MoviePlayOperations;
			/** Starts playback. */
			public static readonly PLAY: Adobe.Indesign.MoviePlayOperations;
			/** Starts playback from the specified navigation point. */
			public static readonly PLAY_FROM_NAVIGATION_POINT: Adobe.Indesign.MoviePlayOperations;
			/**
			 * Alias for PLAY_FROM_NAVIGATION_POINT. Starts playback from 
			 * the specified navigation point.
			 */
			public static readonly playFromNavigationPoint: Adobe.Indesign.MoviePlayOperations;
			/** Alias for RESUME. Resumes playback. */
			public static readonly resume: Adobe.Indesign.MoviePlayOperations;
			/** Resumes playback. */
			public static readonly RESUME: Adobe.Indesign.MoviePlayOperations;
			/** Alias for STOP. Stops playback. */
			public static readonly stop: Adobe.Indesign.MoviePlayOperations;
			/** Stops playback. */
			public static readonly STOP: Adobe.Indesign.MoviePlayOperations;
			/** Stops all playback (SWF only). */
			public static readonly STOP_ALL: Adobe.Indesign.MoviePlayOperations;
			/** Alias for STOP_ALL. Stops all playback (SWF only). */
			public static readonly stopAll: Adobe.Indesign.MoviePlayOperations;
			/** Constructor */
			public constructor();
		}
	}
}