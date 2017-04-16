/// <reference path="../../packages/com.adobe.illustrator/references.d.ts"/>

declare namespace Adobe {
	namespace Illustrator {
		class FlashPlaybackSecurity extends Adobe.CsawlibIllustrator.IllustratorEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Illustrator.FlashPlaybackSecurity}
			 * @readonly
			 */
			public static readonly PlaybackLocal: Adobe.Illustrator.FlashPlaybackSecurity;
			/**
			 * @type {Adobe.Illustrator.FlashPlaybackSecurity}
			 * @readonly
			 */
			public static readonly PlaybackNetwork: Adobe.Illustrator.FlashPlaybackSecurity;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}