/// <reference path="../../packages/com.adobe.incopy/references.d.ts"/>

declare namespace Adobe {
	namespace Incopy {
		class SoundPosterTypes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NONE. No sound poster.
			 * @type {Adobe.Incopy.SoundPosterTypes}
			 * @readonly
			 */
			public static readonly none: Adobe.Incopy.SoundPosterTypes;
			/**
			 * No sound poster.
			 * @type {Adobe.Incopy.SoundPosterTypes}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Incopy.SoundPosterTypes;
			/**
			 * Proxy image sound poster.
			 * @type {Adobe.Incopy.SoundPosterTypes}
			 * @readonly
			 */
			public static readonly PROXY_IMAGE: Adobe.Incopy.SoundPosterTypes;
			/**
			 * Alias for PROXY_IMAGE. Proxy image sound poster.
			 * @type {Adobe.Incopy.SoundPosterTypes}
			 * @readonly
			 */
			public static readonly proxyImage: Adobe.Incopy.SoundPosterTypes;
			/**
			 * Alias for STANDARD. Generic sound poster.
			 * @type {Adobe.Incopy.SoundPosterTypes}
			 * @readonly
			 */
			public static readonly standard: Adobe.Incopy.SoundPosterTypes;
			/**
			 * Generic sound poster.
			 * @type {Adobe.Incopy.SoundPosterTypes}
			 * @readonly
			 */
			public static readonly STANDARD: Adobe.Incopy.SoundPosterTypes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}