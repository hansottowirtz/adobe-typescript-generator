/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class MoviePlayOperations extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for PAUSE. Pauses playback. */
			public static readonly pause: Adobe.Incopy.MoviePlayOperations;
			/** Pauses playback. */
			public static readonly PAUSE: Adobe.Incopy.MoviePlayOperations;
			/** Alias for PLAY. Starts playback. */
			public static readonly play: Adobe.Incopy.MoviePlayOperations;
			/** Starts playback. */
			public static readonly PLAY: Adobe.Incopy.MoviePlayOperations;
			/** Starts playback from the specified navigation point. */
			public static readonly PLAY_FROM_NAVIGATION_POINT: Adobe.Incopy.MoviePlayOperations;
			/**
			 * Alias for PLAY_FROM_NAVIGATION_POINT. Starts playback from 
			 * the specified navigation point.
			 */
			public static readonly playFromNavigationPoint: Adobe.Incopy.MoviePlayOperations;
			/** Alias for RESUME. Resumes playback. */
			public static readonly resume: Adobe.Incopy.MoviePlayOperations;
			/** Resumes playback. */
			public static readonly RESUME: Adobe.Incopy.MoviePlayOperations;
			/** Alias for STOP. Stops playback. */
			public static readonly stop: Adobe.Incopy.MoviePlayOperations;
			/** Stops playback. */
			public static readonly STOP: Adobe.Incopy.MoviePlayOperations;
			/** Stops all playback (SWF only). */
			public static readonly STOP_ALL: Adobe.Incopy.MoviePlayOperations;
			/** Alias for STOP_ALL. Stops all playback (SWF only). */
			public static readonly stopAll: Adobe.Incopy.MoviePlayOperations;
			/** Constructor */
			public constructor();
		}
	}
}