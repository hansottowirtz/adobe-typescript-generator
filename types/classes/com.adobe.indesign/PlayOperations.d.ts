/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class PlayOperations extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for PAUSE. Pauses playback.
			 * @type {Adobe.Indesign.PlayOperations}
			 * @readonly
			 */
			public static readonly pause: Adobe.Indesign.PlayOperations;
			/**
			 * Pauses playback.
			 * @type {Adobe.Indesign.PlayOperations}
			 * @readonly
			 */
			public static readonly PAUSE: Adobe.Indesign.PlayOperations;
			/**
			 * Alias for PLAY. Starts playback.
			 * @type {Adobe.Indesign.PlayOperations}
			 * @readonly
			 */
			public static readonly play: Adobe.Indesign.PlayOperations;
			/**
			 * Starts playback.
			 * @type {Adobe.Indesign.PlayOperations}
			 * @readonly
			 */
			public static readonly PLAY: Adobe.Indesign.PlayOperations;
			/**
			 * Alias for RESUME. Resumes playback.
			 * @type {Adobe.Indesign.PlayOperations}
			 * @readonly
			 */
			public static readonly resume: Adobe.Indesign.PlayOperations;
			/**
			 * Resumes playback.
			 * @type {Adobe.Indesign.PlayOperations}
			 * @readonly
			 */
			public static readonly RESUME: Adobe.Indesign.PlayOperations;
			/**
			 * Alias for STOP. Stops playback.
			 * @type {Adobe.Indesign.PlayOperations}
			 * @readonly
			 */
			public static readonly stop: Adobe.Indesign.PlayOperations;
			/**
			 * Stops playback.
			 * @type {Adobe.Indesign.PlayOperations}
			 * @readonly
			 */
			public static readonly STOP: Adobe.Indesign.PlayOperations;
			/**
			 * Stops all playback (SWF only).
			 * @type {Adobe.Indesign.PlayOperations}
			 * @readonly
			 */
			public static readonly STOP_ALL: Adobe.Indesign.PlayOperations;
			/**
			 * Alias for STOP_ALL. Stops all playback (SWF only).
			 * @type {Adobe.Indesign.PlayOperations}
			 * @readonly
			 */
			public static readonly stopAll: Adobe.Indesign.PlayOperations;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}