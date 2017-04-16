/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class MoviePlayOperations extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for PAUSE. Pauses playback.
			 * @type {Adobe.Indesign.MoviePlayOperations}
			 * @readonly
			 */
			public static readonly pause: Adobe.Indesign.MoviePlayOperations;
			/**
			 * Pauses playback.
			 * @type {Adobe.Indesign.MoviePlayOperations}
			 * @readonly
			 */
			public static readonly PAUSE: Adobe.Indesign.MoviePlayOperations;
			/**
			 * Alias for PLAY. Starts playback.
			 * @type {Adobe.Indesign.MoviePlayOperations}
			 * @readonly
			 */
			public static readonly play: Adobe.Indesign.MoviePlayOperations;
			/**
			 * Starts playback.
			 * @type {Adobe.Indesign.MoviePlayOperations}
			 * @readonly
			 */
			public static readonly PLAY: Adobe.Indesign.MoviePlayOperations;
			/**
			 * Starts playback from the specified navigation point.
			 * @type {Adobe.Indesign.MoviePlayOperations}
			 * @readonly
			 */
			public static readonly PLAY_FROM_NAVIGATION_POINT: Adobe.Indesign.MoviePlayOperations;
			/**
			 * Alias for PLAY_FROM_NAVIGATION_POINT. Starts playback from 
			 * the specified navigation point.
			 * @type {Adobe.Indesign.MoviePlayOperations}
			 * @readonly
			 */
			public static readonly playFromNavigationPoint: Adobe.Indesign.MoviePlayOperations;
			/**
			 * Alias for RESUME. Resumes playback.
			 * @type {Adobe.Indesign.MoviePlayOperations}
			 * @readonly
			 */
			public static readonly resume: Adobe.Indesign.MoviePlayOperations;
			/**
			 * Resumes playback.
			 * @type {Adobe.Indesign.MoviePlayOperations}
			 * @readonly
			 */
			public static readonly RESUME: Adobe.Indesign.MoviePlayOperations;
			/**
			 * Alias for STOP. Stops playback.
			 * @type {Adobe.Indesign.MoviePlayOperations}
			 * @readonly
			 */
			public static readonly stop: Adobe.Indesign.MoviePlayOperations;
			/**
			 * Stops playback.
			 * @type {Adobe.Indesign.MoviePlayOperations}
			 * @readonly
			 */
			public static readonly STOP: Adobe.Indesign.MoviePlayOperations;
			/**
			 * Stops all playback (SWF only).
			 * @type {Adobe.Indesign.MoviePlayOperations}
			 * @readonly
			 */
			public static readonly STOP_ALL: Adobe.Indesign.MoviePlayOperations;
			/**
			 * Alias for STOP_ALL. Stops all playback (SWF only).
			 * @type {Adobe.Indesign.MoviePlayOperations}
			 * @readonly
			 */
			public static readonly stopAll: Adobe.Indesign.MoviePlayOperations;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}