/// <reference path="../../namespaces/com.adobe.indesign/index.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PlayOperations extends Adobe.Csawlib.CSEnumBase {
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/** Alias for PAUSE. Pauses playback. */
			public static readonly pause: Adobe.Indesign.PlayOperations;
			/** Pauses playback. */
			public static readonly PAUSE: Adobe.Indesign.PlayOperations;
			/** Alias for PLAY. Starts playback. */
			public static readonly play: Adobe.Indesign.PlayOperations;
			/** Starts playback. */
			public static readonly PLAY: Adobe.Indesign.PlayOperations;
			/** Alias for RESUME. Resumes playback. */
			public static readonly resume: Adobe.Indesign.PlayOperations;
			/** Resumes playback. */
			public static readonly RESUME: Adobe.Indesign.PlayOperations;
			/** Alias for STOP. Stops playback. */
			public static readonly stop: Adobe.Indesign.PlayOperations;
			/** Stops playback. */
			public static readonly STOP: Adobe.Indesign.PlayOperations;
			/** Stops all playback (SWF only). */
			public static readonly STOP_ALL: Adobe.Indesign.PlayOperations;
			/** Alias for STOP_ALL. Stops all playback (SWF only). */
			public static readonly stopAll: Adobe.Indesign.PlayOperations;
			/** Constructor */
			public constructor();
		}
	}
}