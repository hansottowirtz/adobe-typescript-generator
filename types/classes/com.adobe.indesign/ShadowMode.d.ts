/// <reference path="../../packages/com.adobe.indesign/references.d.ts"/>

declare namespace Adobe {
	namespace Indesign {
		class ShadowMode extends Adobe.Csawlib.CSEnumBase {
			/**
			 * Alias for DROP. Uses a standard blurred drop shadow.
			 * @type {Adobe.Indesign.ShadowMode}
			 * @readonly
			 */
			public static readonly drop: Adobe.Indesign.ShadowMode;
			/**
			 * Uses a standard blurred drop shadow.
			 * @type {Adobe.Indesign.ShadowMode}
			 * @readonly
			 */
			public static readonly DROP: Adobe.Indesign.ShadowMode;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * Alias for NONE. Does not use a shadow.
			 * @type {Adobe.Indesign.ShadowMode}
			 * @readonly
			 */
			public static readonly none: Adobe.Indesign.ShadowMode;
			/**
			 * Does not use a shadow.
			 * @type {Adobe.Indesign.ShadowMode}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Indesign.ShadowMode;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}