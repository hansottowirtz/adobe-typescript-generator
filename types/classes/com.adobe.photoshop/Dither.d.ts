/// <reference path="../../packages/com.adobe.photoshop/references.d.ts"/>

declare namespace Adobe {
	namespace Photoshop {
		class Dither extends Adobe.CsawlibPhotoshop.PhotoshopEnumBase {
			/**
			 * @type {Adobe.Photoshop.Dither}
			 * @readonly
			 */
			public static readonly DIFFUSION: Adobe.Photoshop.Dither;
			/**
			 * @type {Adobe.Csawlib.CSEnumSharedCache}
			 * @readonly
			 */
			public static readonly enumCache: Adobe.Csawlib.CSEnumSharedCache;
			/**
			 * @type {Adobe.Photoshop.Dither}
			 * @readonly
			 */
			public static readonly NOISE: Adobe.Photoshop.Dither;
			/**
			 * @type {Adobe.Photoshop.Dither}
			 * @readonly
			 */
			public static readonly NONE: Adobe.Photoshop.Dither;
			/**
			 * @type {Adobe.Photoshop.Dither}
			 * @readonly
			 */
			public static readonly PATTERN: Adobe.Photoshop.Dither;
			/**
			 * Constructor
			 * @returns {void}
			 */
			public constructor();
		}
	}
}