/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class PlayOperations extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for PAUSE. Pauses playback.
			 * @type {Adobe.Incopy.PlayOperations}
			 * @readonly
			 */
			public static readonly pause: Adobe.Incopy.PlayOperations;
			/**
			 * Pauses playback.
			 * @type {Adobe.Incopy.PlayOperations}
			 * @readonly
			 */
			public static readonly PAUSE: Adobe.Incopy.PlayOperations;
			/**
			 * Alias for PLAY. Starts playback.
			 * @type {Adobe.Incopy.PlayOperations}
			 * @readonly
			 */
			public static readonly play: Adobe.Incopy.PlayOperations;
			/**
			 * Starts playback.
			 * @type {Adobe.Incopy.PlayOperations}
			 * @readonly
			 */
			public static readonly PLAY: Adobe.Incopy.PlayOperations;
			/**
			 * Alias for RESUME. Resumes playback.
			 * @type {Adobe.Incopy.PlayOperations}
			 * @readonly
			 */
			public static readonly resume: Adobe.Incopy.PlayOperations;
			/**
			 * Resumes playback.
			 * @type {Adobe.Incopy.PlayOperations}
			 * @readonly
			 */
			public static readonly RESUME: Adobe.Incopy.PlayOperations;
			/**
			 * Alias for STOP. Stops playback.
			 * @type {Adobe.Incopy.PlayOperations}
			 * @readonly
			 */
			public static readonly stop: Adobe.Incopy.PlayOperations;
			/**
			 * Stops playback.
			 * @type {Adobe.Incopy.PlayOperations}
			 * @readonly
			 */
			public static readonly STOP: Adobe.Incopy.PlayOperations;
			/**
			 * Stops all playback (SWF only).
			 * @type {Adobe.Incopy.PlayOperations}
			 * @readonly
			 */
			public static readonly STOP_ALL: Adobe.Incopy.PlayOperations;
			/**
			 * Alias for STOP_ALL. Stops all playback (SWF only).
			 * @type {Adobe.Incopy.PlayOperations}
			 * @readonly
			 */
			public static readonly stopAll: Adobe.Incopy.PlayOperations;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}