/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class SoundPosterTypes extends Adobe.Csawlib.CSEnumBase {
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NONE. No sound poster.
			 * @type {Adobe.Indesign.SoundPosterTypes}
			 * @readonly
			 */
			public static readonly none: Adobe.Indesign.SoundPosterTypes;
			/**
			 * No sound poster.
			 * @type {Adobe.Indesign.SoundPosterTypes}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Indesign.SoundPosterTypes;
			/**
			 * Proxy image sound poster.
			 * @type {Adobe.Indesign.SoundPosterTypes}
			 * @readonly
			 */
			public static readonly PROXY_IMAGE: Adobe.Indesign.SoundPosterTypes;
			/**
			 * Alias for PROXY_IMAGE. Proxy image sound poster.
			 * @type {Adobe.Indesign.SoundPosterTypes}
			 * @readonly
			 */
			public static readonly proxyImage: Adobe.Indesign.SoundPosterTypes;
			/**
			 * Alias for STANDARD. Generic sound poster.
			 * @type {Adobe.Indesign.SoundPosterTypes}
			 * @readonly
			 */
			public static readonly standard: Adobe.Indesign.SoundPosterTypes;
			/**
			 * Generic sound poster.
			 * @type {Adobe.Indesign.SoundPosterTypes}
			 * @readonly
			 */
			public static readonly STANDARD: Adobe.Indesign.SoundPosterTypes;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}