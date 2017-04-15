/// <reference path="../../namespaces/com.adobe.incopy/index.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class PlayOperations extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for PAUSE. Pauses playback. */
			public static readonly pause: Adobe.Incopy.PlayOperations;
			/** Pauses playback. */
			public static readonly PAUSE: Adobe.Incopy.PlayOperations;
			/** Alias for PLAY. Starts playback. */
			public static readonly play: Adobe.Incopy.PlayOperations;
			/** Starts playback. */
			public static readonly PLAY: Adobe.Incopy.PlayOperations;
			/** Alias for RESUME. Resumes playback. */
			public static readonly resume: Adobe.Incopy.PlayOperations;
			/** Resumes playback. */
			public static readonly RESUME: Adobe.Incopy.PlayOperations;
			/** Alias for STOP. Stops playback. */
			public static readonly stop: Adobe.Incopy.PlayOperations;
			/** Stops playback. */
			public static readonly STOP: Adobe.Incopy.PlayOperations;
			/** Stops all playback (SWF only). */
			public static readonly STOP_ALL: Adobe.Incopy.PlayOperations;
			/** Alias for STOP_ALL. Stops all playback (SWF only). */
			public static readonly stopAll: Adobe.Incopy.PlayOperations;
			/** Constructor */
			public constructor();
		}
	}
}